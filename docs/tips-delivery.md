# Tip delivery — Google Sheet

Tips from `/contact` append a row to this spreadsheet:

https://docs.google.com/spreadsheets/d/1Aw_I7okts_kHt_KLqjp-fKzdlVVpU0mZIwXXu-3sJgY/edit

Google does not allow a Vercel app to write that sheet directly without a bridge. Use the Apps Script web app below (one-time setup).

## One-time setup (do this on the tips sheet)

1. Open the sheet above.
2. Put headers in row 1 if they are missing:

   `Submitted At | Tip ID | Status | Category | Headline | Name | Email | Location | When | Details`

3. **Extensions → Apps Script**. Replace everything with:

```javascript
const SHEET_ID = "1Aw_I7okts_kHt_KLqjp-fKzdlVVpU0mZIwXXu-3sJgY";
const EXPECTED_SECRET = ""; // optional: match GOOGLE_SHEETS_WEBHOOK_SECRET in Vercel

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (EXPECTED_SECRET && data.secret !== EXPECTED_SECRET) {
      return json_({ ok: false, error: "unauthorized" });
    }

    const tip = data.tip || {};
    const id = data.spreadsheetId || SHEET_ID;
    const sheet = SpreadsheetApp.openById(id).getSheets()[0];
    sheet.appendRow([
      tip.createdAt || new Date().toISOString(),
      tip.id || "",
      tip.status || "pending",
      tip.categoryLabel || tip.category || "",
      tip.title || "",
      tip.name || "",
      tip.email || "",
      tip.location || "",
      tip.whenText || "",
      tip.details || "",
    ]);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Authorize when prompted, then copy the web app URL.
6. In Vercel → Project → Settings → Environment Variables, set:
   - `GOOGLE_SHEETS_WEBHOOK_URL` = that web app URL (**mark as Sensitive**)
   - `GOOGLE_SHEET_ID` = `1Aw_I7okts_kHt_KLqjp-fKzdlVVpU0mZIwXXu-3sJgY` (optional; already the code default)
7. Redeploy.

The site posts tips to `/api/tips`, which calls your Apps Script URL. A `302` redirect from Apps Script after `doPost` is treated as success.

## Local testing

```bash
cp .env.example .env.local
# paste GOOGLE_SHEETS_WEBHOOK_URL=
npm run dev
```

Submit a tip at `/contact` and confirm a new row on the sheet.
