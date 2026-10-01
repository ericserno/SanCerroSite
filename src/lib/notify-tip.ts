import type { Tip } from "@/lib/tips";
import { tipCategories } from "@/lib/tips";

/** San Cerro tips spreadsheet */
export const TIPS_SHEET_ID =
  process.env.GOOGLE_SHEET_ID ||
  "1Aw_I7okts_kHt_KLqjp-fKzdlVVpU0mZIwXXu-3sJgY";

function categoryLabel(value: Tip["category"]) {
  return tipCategories.find((c) => c.value === value)?.label ?? value;
}

export type NotifyResult = {
  sheet: "appended" | "skipped" | "failed";
  error?: string;
};

/**
 * Append tip via Apps Script web app.
 * Apps Script often responds with 302 after a successful doPost; treat that as success.
 */
export async function notifyTip(tip: Tip): Promise<NotifyResult> {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!url) return { sheet: "skipped" };

  const secret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;
  const payload = JSON.stringify({
    secret: secret || undefined,
    spreadsheetId: TIPS_SHEET_ID,
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
  });

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      redirect: "manual",
      body: payload,
    });

    // 200–299 success, or 302/303 from Apps Script after doPost runs
    if (
      res.ok ||
      res.status === 302 ||
      res.status === 303 ||
      res.status === 301
    ) {
      return { sheet: "appended" };
    }

    const body = await res.text().catch(() => "");
    return {
      sheet: "failed",
      error: `Sheet webhook failed (${res.status}): ${body.slice(0, 200)}`,
    };
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
