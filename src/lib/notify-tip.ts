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

function bodyLooksSuccessful(body: string) {
  if (!body) return false;
  try {
    const json = JSON.parse(body) as { ok?: boolean };
    return json.ok === true;
  } catch {
    // Some deployments return empty bodies after a real append.
    return false;
  }
}

/**
 * Append tip via Apps Script web app.
 * Google often responds to doPost with a 302 to a one-time content URL.
 * We follow that redirect and require an ok payload (or a non-login redirect
 * plus empty body only when explicitly allowed).
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
    const first = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      redirect: "manual",
      body: payload,
    });

    // Direct 200 with JSON
    if (first.status >= 200 && first.status < 300) {
      const body = await readBody(first);
      if (bodyLooksSuccessful(body) || body.includes('"ok":true')) {
        return { sheet: "appended" };
      }
      return {
        sheet: "failed",
        error: `Sheet webhook returned ${first.status} without ok: ${body.slice(0, 200)}`,
      };
    }

    // Apps Script success path: 302 to script.googleusercontent.com
    if (first.status === 302 || first.status === 303 || first.status === 301) {
      const location = first.headers.get("location");
      if (!location || looksLikeGoogleLogin(location)) {
        return {
          sheet: "failed",
          error:
            "Sheet webhook redirected to Google login — redeploy the Apps Script web app with access Anyone and use the /exec URL.",
        };
      }

      const second = await fetch(location, { method: "GET", redirect: "follow" });
      const body = await readBody(second);
      if (bodyLooksSuccessful(body) || body.includes('"ok":true')) {
        return { sheet: "appended" };
      }

      // If redirect host is googleusercontent and body empty, doPost may have run;
      // still fail closed so we do not report false success.
      return {
        sheet: "failed",
        error: `Sheet webhook redirect did not confirm ok (${second.status}): ${body.slice(0, 200)}`,
      };
    }

    const body = await readBody(first);
    return {
      sheet: "failed",
      error: `Sheet webhook failed (${first.status}): ${body.slice(0, 200)}`,
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
