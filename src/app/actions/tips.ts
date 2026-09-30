"use server";

import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";
import type { Tip, TipCategory } from "@/lib/tips";
import { tipCategories } from "@/lib/tips";
import { hasTipDeliveryConfigured, notifyTip } from "@/lib/notify-tip";

const DATA_DIR = path.join(process.cwd(), "data");
const TIPS_FILE = path.join(DATA_DIR, "tips.json");

const categoryValues = new Set(tipCategories.map((c) => c.value));

export type TipFormState = {
  ok: boolean;
  message: string;
  fieldErrors?: Partial<Record<string, string>>;
};

async function persistTipLocally(tip: Tip) {
  // Best-effort local archive for `next dev`. On Vercel the filesystem is
  // ephemeral — the Google Sheet is the source of truth.
  try {
    let tips: Tip[] = [];
    try {
      const raw = await fs.readFile(TIPS_FILE, "utf8");
      const parsed = JSON.parse(raw) as Tip[];
      if (Array.isArray(parsed)) tips = parsed;
    } catch {
      // first tip
    }
    tips.unshift(tip);
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.writeFile(TIPS_FILE, JSON.stringify(tips, null, 2), "utf8");
  } catch {
    // Ignore local write failures on serverless.
  }
}

function clean(value: FormDataEntryValue | null, max = 500) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function submitTip(
  _prev: TipFormState,
  formData: FormData
): Promise<TipFormState> {
  const name = clean(formData.get("name"), 80);
  const email = clean(formData.get("email"), 120).toLowerCase();
  const category = clean(formData.get("category"), 40) as TipCategory;
  const title = clean(formData.get("title"), 120);
  const details = clean(formData.get("details"), 2000);
  const location = clean(formData.get("location"), 160);
  const whenText = clean(formData.get("whenText"), 120);
  const honey = clean(formData.get("website"), 40);

  if (honey) {
    return { ok: true, message: "Thanks — your tip is in the moderation queue." };
  }

  const fieldErrors: TipFormState["fieldErrors"] = {};
  if (name.length < 2) fieldErrors.name = "Please add your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "Please use a valid email.";
  }
  if (!categoryValues.has(category)) {
    fieldErrors.category = "Pick a tip type.";
  }
  if (title.length < 4) fieldErrors.title = "Give the tip a short headline.";
  if (details.length < 12) {
    fieldErrors.details = "Add a bit more detail for moderators.";
  }

  if (Object.keys(fieldErrors).length) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      fieldErrors,
    };
  }

  const tip: Tip = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    name,
    email,
    category,
    title,
    details,
    location: location || undefined,
    whenText: whenText || undefined,
    status: "pending",
  };

  if (hasTipDeliveryConfigured()) {
    const delivery = await notifyTip(tip);
    if (delivery.sheet !== "appended") {
      console.error("[tips] sheet delivery failed", delivery.error);
      return {
        ok: false,
        message:
          "We couldn’t save that tip right now. Please try again in a minute.",
      };
    }
  }

  await persistTipLocally(tip);

  return {
    ok: true,
    message: hasTipDeliveryConfigured()
      ? "Thanks — your tip was sent for moderation. It won’t publish until it’s reviewed."
      : "Thanks — your tip is held for moderation. Set GOOGLE_SHEETS_WEBHOOK_URL before deploying to Vercel.",
  };
}
