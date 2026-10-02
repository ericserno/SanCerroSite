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

function looksLikeGoogleLogin(url: string | null) {
  if (!url) return false;
  return /accounts\.google\.com|ServiceLogin|signin/i.test(url);
}

async function readBody(res: Response) {
  try {
    return await res.text();
  } catch {
    return "";
  }
}

function bodyConfirmsOk(body: string) {
  if (!body) return false;
  try {
    const json = JSON.parse(body) as { ok?: boolean };
    if (json.ok === true) return true;
  } catch {
    // fall through
  }
  return /"ok"\s*:\s*true/.test(body);
}

function tipPayload(tip: Tip, secret?: string) {
  return JSON.stringify({
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
}

async function postToWebhook(url: string, body: string, redirect: RequestRedirect) {
  return fetch(url, {
    method: "POST",
    headers: {
      // text/plain avoids CORS preflight and is accepted by Apps Script
      "Content-Type": "text/plain;charset=utf-8",
    },
    redirect,
    body,
  });
}

/**
 * Append tip via Apps Script web app.
 * Google often answers doPost with 302 → googleusercontent echo URL containing JSON.
 */
export async function notifyTip(tip: Tip): Promise<NotifyResult> {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!url) return { sheet: "skipped" };

  const secret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;
  const payload = tipPayload(tip, secret);

  try {
    // Strategy A: manual redirect, then GET the echo URL
    const first = await postToWebhook(url, payload, "manual");
    const location = first.headers.get("location");

    if (first.status >= 200 && first.status < 300) {
      const body = await readBody(first);
      if (bodyConfirmsOk(body)) return { sheet: "appended" };
      return {
        sheet: "failed",
        error: `Webhook ${first.status} without ok body: ${body.slice(0, 160)}`,
      };
    }

    if (first.status === 302 || first.status === 303 || first.status === 301) {
      if (!location) {
        return {
          sheet: "failed",
          error: `Webhook ${first.status} with no Location header. Use the /exec deployment URL.`,
        };
      }
      if (looksLikeGoogleLogin(location)) {
        return {
          sheet: "failed",
          error:
            "Webhook redirected to Google login. Redeploy Apps Script with Who has access = Anyone.",
        };
      }

      const second = await fetch(location, { method: "GET", redirect: "follow" });
      const body = await readBody(second);
      if (bodyConfirmsOk(body)) return { sheet: "appended" };

      // Strategy B: follow redirects automatically
      const followed = await postToWebhook(url, payload, "follow");
      const followedBody = await readBody(followed);
      if (bodyConfirmsOk(followedBody)) return { sheet: "appended" };

      return {
        sheet: "failed",
        error: `Webhook redirect ${first.status} → ${second.status}, follow ${followed.status}. Body: ${body.slice(0, 120) || followedBody.slice(0, 120) || "(empty)"}`,
      };
    }

    const body = await readBody(first);
    return {
      sheet: "failed",
      error: `Webhook failed (${first.status}): ${body.slice(0, 160)}`,
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
