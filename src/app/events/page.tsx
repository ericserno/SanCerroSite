import type { Metadata } from "next";
import Link from "next/link";
import {
  formatEventWhen,
  getPastEvents,
  getUpcomingEvents,
  type CalendarStatus,
} from "@/content/calendar";
import { JsonLd } from "@/components/JsonLd";
import { eventListJsonLd, webPageJsonLd } from "@/lib/structured-data";

const eventsDescription =
  "Living San Cerro community calendar for San Carlos and Del Cerro — Halloween carnivals, Mission Trails programs, Navajo planning meetings, Turkey Trot, and ICS subscribe.";

export const metadata: Metadata = {
  title: "Events",
  description: eventsDescription,
  alternates: { canonical: "/events" },
  openGraph: {
    title: "Neighborhood events · San Cerro",
    description: eventsDescription,
    url: "/events",
  },
};

export default function EventsPage() {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            title: "Neighborhood events",
            description: eventsDescription,
            path: "/events",
          }),
          ...eventListJsonLd(upcoming.filter((e) => e.status !== "needs-support")),
        ]}
      />
      <section className="page-hero">
        <div className="shell">
          <span className="eyebrow" style={{ color: "#c9dce6" }}>
            Living calendar
          </span>
          <h1>Neighborhood events</h1>
          <p>
            Maintained dates for races, school fundraisers, civic meetings, and
            park cleanups — subscribe once and keep San Cerro on your phone.
          </p>
          <div className="cta-row" style={{ marginTop: "1.25rem" }}>
            <a href="/calendar.ics" className="button button-primary">
              Subscribe · ICS
            </a>
            <Link href="/contact" className="button button-ghost">
              Suggest an event
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: "1rem" }}>
        <div className="shell calendar-subscribe">
          <div>
            <h2>Add to your calendar</h2>
            <p>
              Download <code>san-cerro.ics</code> or subscribe in Google Calendar /
              Apple Calendar with this feed URL. Tentative and needs-support items
              stay visible on the site even when they are not in the feed.
            </p>
          </div>
          <div className="subscribe-actions">
            <a href="/calendar.ics" className="button button-primary">
              Download ICS
            </a>
            <p className="feed-url">
              Feed: <code>/calendar.ics</code>
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="shell">
          <div className="section-head">
            <h2>Coming up</h2>
            <p>Sorted by date. Marker colors show status at a glance.</p>
          </div>
          <div className="event-list">
            {upcoming.map((event) => (
              <article key={event.id} className="event-row">
                <div className="event-date-rail">
                  <span className="event-month">
                    {new Date(event.start).toLocaleDateString("en-US", {
                      month: "short",
                    })}
                  </span>
                  <span className="event-day">
                    {new Date(event.start).getDate()}
                  </span>
                </div>
                <div className="event-row-body">
                  <span className={`status-inline ${statusClass(event.status)}`}>
                    {statusLabel(event.status)}
                  </span>
                  <h3>{event.title}</h3>
                  <div className="meta-row">
                    <span>{formatEventWhen(event)}</span>
                    <span>{event.where}</span>
                  </div>
                  <p>{event.summary}</p>
                  {event.href ? (
                    <p style={{ marginTop: "0.75rem" }}>
                      <Link
                        href={event.href}
                        {...(event.href.startsWith("http")
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                      >
                        Details →
                      </Link>
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {past.length ? (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="shell">
            <div className="section-head">
              <h2>Recently passed</h2>
              <p>Kept for neighborhood memory — not included in the ICS feed.</p>
            </div>
            <div className="event-grid">
              {past.map((event) => (
                <article key={event.id} className="event-block">
                  <span className="status-inline">{statusLabel(event.status)}</span>
                  <h3>{event.title}</h3>
                  <div className="meta-row">
                    <span>{formatEventWhen(event)}</span>
                    <span>{event.where}</span>
                  </div>
                  <p>{event.summary}</p>
                  {event.href ? (
                    <p style={{ marginTop: "0.9rem" }}>
                      <Link href={event.href}>Details →</Link>
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

function statusLabel(status: CalendarStatus) {
  switch (status) {
    case "needs-support":
      return "Needs support";
    case "annual":
      return "Annual";
    case "tentative":
      return "Date TBD";
    case "past":
      return "Past";
    default:
      return "Upcoming";
  }
}

function statusClass(status: CalendarStatus) {
  if (status === "needs-support") return "needs-support";
  if (status === "tentative") return "tentative";
  if (status === "annual") return "annual";
  return "";
}
