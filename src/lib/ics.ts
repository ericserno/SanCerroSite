import type { CalendarEvent } from "@/content/calendar";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/** Format a local wall-time ISO string as floating ICS local datetime. */
export function toIcsLocal(isoLocal: string) {
  const d = new Date(isoLocal);
  return (
    `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}` +
    `T${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`
  );
}

function escapeText(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function foldLine(line: string) {
  const max = 75;
  if (line.length <= max) return line;
  const parts: string[] = [];
  let remaining = line;
  parts.push(remaining.slice(0, max));
  remaining = remaining.slice(max);
  while (remaining.length) {
    parts.push(" " + remaining.slice(0, max - 1));
    remaining = remaining.slice(max - 1);
  }
  return parts.join("\r\n");
}

function absoluteUrl(siteUrl: string, href?: string) {
  if (!href) return undefined;
  if (href.startsWith("http")) return href;
  return `${siteUrl}${href}`;
}

export function buildCalendarIcs(
  events: CalendarEvent[],
  opts: { calName: string; siteUrl: string }
) {
  const stamp = new Date()
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}Z$/, "Z");

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//San Cerro//Community Calendar//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    `X-WR-CALNAME:${escapeText(opts.calName)}`,
    "X-WR-TIMEZONE:America/Los_Angeles",
  ];

  for (const event of events) {
    const uid = `${event.id}@sancerro.local`;
    const url = absoluteUrl(opts.siteUrl, event.href);
    const description = [event.summary, url].filter(Boolean).join("\n\n");

    lines.push("BEGIN:VEVENT");
    lines.push(`UID:${uid}`);
    lines.push(`DTSTAMP:${stamp}`);
    lines.push(`DTSTART:${toIcsLocal(event.start)}`);
    lines.push(`DTEND:${toIcsLocal(event.end)}`);
    lines.push(`SUMMARY:${escapeText(event.title)}`);
    lines.push(`DESCRIPTION:${escapeText(description)}`);
    lines.push(`LOCATION:${escapeText(event.where)}`);
    if (url) lines.push(`URL:${url}`);
    lines.push("END:VEVENT");
  }

  lines.push("END:VCALENDAR");
  return lines.map(foldLine).join("\r\n") + "\r\n";
}
