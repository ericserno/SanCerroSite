import type { Tip } from "@/lib/tips";
import { tipCategories } from "@/lib/tips";

function categoryLabel(value: Tip["category"]) {
  return tipCategories.find((c) => c.value === value)?.label ?? value;
}

export type NotifyResult = {
  sheet: "appended" | "skipped" | "failed";
  error?: string;
};

/** Append tip to a Google Sheet via Apps Script webhook. */
export async function notifyTip(tip: Tip): Promise<NotifyResult> {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!url) return { sheet: "skipped" };

  const secret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: secret || undefined,
        tip: {
          id: tip.id,
          createdAt: tip.createdAt,
          name: tip.name,
          email: tip.email,
          category: tip.category,
          categoryLabel: categoryLabel(tip.category),
          title: tip.title,
          details: tip.details,
          location: tip.location || "",
          whenText: tip.whenText || "",
          status: tip.status,
        },
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      return {
        sheet: "failed",
        error: `Sheet webhook failed (${res.status}): ${body.slice(0, 200)}`,
      };
    }
    return { sheet: "appended" };
  } catch (err) {
    return {
      sheet: "failed",
      error: `Sheet error: ${err instanceof Error ? err.message : "unknown"}`,
    };
  }
}

export function hasTipDeliveryConfigured() {
  return Boolean(process.env.GOOGLE_SHEETS_WEBHOOK_URL);
}
