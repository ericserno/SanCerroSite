# San Cerro

Local rebuild of [san-cerro.webflow.io](https://san-cerro.webflow.io/) — the San Carlos + Del Cerro neighborhood site.

## What’s included

- All original blog posts and category content
- Graphics downloaded into `public/images/` (no CDN dependency for site media)
- New posts: **Del Cerro Pizza & Beer** opening, **Lake Murray fireworks** status
- New sections: **Events**, **Directory**, working **Contact**, **Site ideas**
- Archived AmazonSmile post marked as historical

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Community features

- **Calendar:** `/events` living list + ICS feed at `/calendar.ics` (subscribe in Google/Apple Calendar).
- **Tips:** `/contact` moderated tip form. On Vercel, tips append to a Google Sheet — see [docs/tips-delivery.md](docs/tips-delivery.md). Locally they also archive to `data/tips.json`.

## Tip delivery env vars

| Variable | Purpose |
| --- | --- |
| `GOOGLE_SHEETS_WEBHOOK_URL` | Apps Script web app URL |
| `GOOGLE_SHEETS_WEBHOOK_SECRET` | Optional shared secret |

Copy `.env.example` → `.env.local` for local tests, or set the same keys in the Vercel project.

## Notes

- Scraped Webflow HTML/CSS live under `scraped/` for reference (gitignored).
- Newsletter signup is still a placeholder — connect a real list provider before production.
- One CMS image (`photo_-3`) returned 403 from Webflow CDN and was skipped.
