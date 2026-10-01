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

/** Append tip to the San Cerro Google Sheet via Apps Script webhook. */
export async function notifyTip(tip: Tip): Promise<NotifyResult> {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!url) return { sheet: "skipped" };

  const secret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // Apps Script web apps often need follow redirects for POST→GET
      redirect: "follow",
      body: JSON.stringify({
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
