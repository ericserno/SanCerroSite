# Tip delivery — Google Sheet

On Vercel, each tip from `/contact` is appended to a Google Sheet via an Apps Script web app.

## Setup

1. Create a Google Sheet. Put headers in row 1:

   `Submitted At | Tip ID | Status | Category | Headline | Name | Email | Location | When | Details`

2. **Extensions → Apps Script**. Delete the stub and paste:

```javascript
const EXPECTED_SECRET = ""; // optional: same value as GOOGLE_SHEETS_WEBHOOK_SECRET

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (EXPECTED_SECRET && data.secret !== EXPECTED_SECRET) {
      return ContentService
        .createTextOutput(JSON.stringify({ ok: false, error: "unauthorized" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const tip = data.tip || {};
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
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

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Copy the web app URL into Vercel as `GOOGLE_SHEETS_WEBHOOK_URL`.
5. (Optional) Set the same string in the script’s `EXPECTED_SECRET` and in Vercel as `GOOGLE_SHEETS_WEBHOOK_SECRET`.
6. Redeploy the site.

## Local testing

```bash
cp .env.example .env.local
# paste the web app URL
npm run dev
```

Submit a tip at `/contact` and confirm a new row appears in the sheet.
