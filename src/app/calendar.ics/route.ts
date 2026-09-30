import { getIcsEvents } from "@/content/calendar";
import { buildCalendarIcs } from "@/lib/ics";

export const dynamic = "force-static";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const siteUrl = `${url.protocol}//${url.host}`;
  const body = buildCalendarIcs(getIcsEvents(), {
    calName: "San Cerro Community Calendar",
    siteUrl,
  });

  return new Response(body, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="san-cerro.ics"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
