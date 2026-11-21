export type CalendarStatus =
  | "upcoming"
  | "annual"
  | "needs-support"
  | "past"
  | "tentative";

export type CalendarEvent = {
  id: string;
  title: string;
  summary: string;
  where: string;
  /** Inclusive start in America/Los_Angeles local wall time */
  start: string; // ISO local: 2026-11-26T08:00:00
  end: string;
  allDay?: boolean;
  href?: string;
  status: CalendarStatus;
  category: "race" | "school" | "civic" | "holiday" | "community" | "opening";
  /** Show in ICS feed */
  ics?: boolean;
};

/**
 * Living neighborhood calendar for San Cerro (San Carlos + Del Cerro).
 * Keep dates concrete so ICS subscribe stays useful.
 */
export const calendarEvents: CalendarEvent[] = [
  {
    id: "kumeyaay-campground-crew-2026-11",
    title: "Kumeyaay Lake Campground Crew",
    summary:
      "Third-Saturday volunteer morning with Ranger Brandon. Meet in the day-use lot. The city listing stops at November; a December date is not posted. Rain cancels. Ages 8+; under 14 with an adult.",
    where: "Kumeyaay Lake Campground day-use lot, 2 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-11-21T08:00:00",
    end: "2026-11-21T12:00:00",
    href: "https://www.sandiego.gov/event/kumeyaay-lake-campground-crew",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "paws-and-tales-2026-11",
    title: "Paws and Tales at Benjamin Library",
    summary:
      "Kids of all ages can read aloud to San Diego Humane Society canine ambassadors. No registration. Third Saturday of the month.",
    where: "Allied Gardens/Benjamin Library, 5188 Zion Ave, San Diego 92120",
    start: "2026-11-21T11:00:00",
    end: "2026-11-21T12:00:00",
    href: "https://sdhumane.org/event/paws-and-tales-at-allied-gardens-benjamin-branch-library/2026-11-21/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "family-discovery-walk-2026-11",
    title: "Family Discovery Walk",
    summary:
      "Free third-Saturday Mission Trails walk, October through June, for families with kids about 5–12. Meet at the Kumeyaay Lake shade structure. This month’s theme is not posted yet. Rain cancels.",
    where: "Kumeyaay Lake Campground shade structure, 2 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-11-21T13:00:00",
    end: "2026-11-21T14:30:00",
    href: "https://mtrp.org/nature-study/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "turkey-trot-2026",
    title: "San Cerro Turkey Trot 2026",
    summary:
      "Thanksgiving morning 5K — run, walk, bike, or scoot. Arrive by 8:00; race begins at 8:30. Prizes for fastest man, woman, stroller, girl/boy under 12, and best dressed. Bring canned goods (human or pet) for the San Diego Food Bank.",
    where: "Wandermere Dr & Belle Glade Ave, San Diego",
    start: "2026-11-26T08:00:00",
    end: "2026-11-26T10:30:00",
    href: "/blog/san-cerro-turkey-trot-2026",
    status: "annual",
    category: "race",
    ics: true,
  },
  {
    id: "trattoria-ciccio-opening",
    title: "Trattoria Ciccio opens",
    summary:
      "Sicilian trattoria from the Aromi / Trattoria da Sofia team opens in the former Sobremesa space. Pastas, pinsas, kids’ play area. Initial hours 3–9:30pm daily; happy hour 3–5pm Sun–Thu.",
    where: "8622 Lake Murray Blvd, San Diego",
    start: "2026-11-27T15:00:00",
    end: "2026-11-27T21:30:00",
    href: "/blog/trattoria-ciccio-opens",
    status: "upcoming",
    category: "opening",
    ics: true,
  },
  {
    id: "mtrp-concert-westwind-2026",
    title: "Concerts in the Park: Westwind Brass",
    summary:
      "Free series finale with Westwind Brass and the Patrick Henry High School band. The organizer, KPBS, and Eventbrite place it at the Visitor Center.",
    where: "Mission Trails Visitor Center, 1 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-12-05T14:00:00",
    end: "2026-12-05T15:30:00",
    href: "https://www.eventbrite.com/e/westwind-brass-series-finale-tickets-1990985759001",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "christmas-on-mt-helix-2026",
    title: "Christmas on Mt. Helix",
    summary:
      "Free holiday afternoon at Mt. Helix Park: Christmas market, food, hot chocolate, kids’ crafts, Santa photos, and caroling. General parking is at Grossmont High School’s lower lot, 1100 Murray Dr, with shuttles to the peak.",
    where: "Mt. Helix Park, 4901 Mt. Helix Dr, La Mesa",
    start: "2026-12-05T15:00:00",
    end: "2026-12-05T20:00:00",
    href: "https://www.mthelixpark.org/christmas",
    status: "upcoming",
    category: "holiday",
    ics: true,
  },
  {
    id: "mtrp-discovery-tables-2026-12",
    title: "Mission Trails Discovery Table",
    summary:
      "Hands-on nature table in the Visitor Center lobby, 10:00am–12:30pm on the city’s event listing. Second Saturday of the month.",
    where: "Mission Trails Visitor Center, 1 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-12-12T10:00:00",
    end: "2026-12-12T12:30:00",
    href: "https://www.sandiego.gov/event/discovery-tables-1-father-junipero-serra-trail",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "la-mesa-holiday-village-2026",
    title: "Holiday in the Village",
    summary:
      "La Mesa Village Association’s annual holiday tradition — shopping, dining, vendors, and elf hunt along La Mesa Blvd between Spring and 4th.",
    where: "La Mesa Blvd, La Mesa Village",
    start: "2026-12-12T12:00:00",
    end: "2026-12-12T21:00:00",
    href: "https://www.lamesavillageassociation.org/holiday-in-the-village-a-la-mesa-tradition",
    status: "upcoming",
    category: "holiday",
    ics: true,
  },
  {
    id: "paws-and-tales-2026-12",
    title: "Paws and Tales at Benjamin Library",
    summary:
      "Kids of all ages can read aloud to San Diego Humane Society canine ambassadors. No registration. The library calendar lists this third-Saturday session at 11am.",
    where: "Allied Gardens/Benjamin Library, 5188 Zion Ave, San Diego 92120",
    start: "2026-12-19T11:00:00",
    end: "2026-12-19T12:00:00",
    href: "https://sdhumane.org/event/paws-and-tales-at-allied-gardens-benjamin-branch-library/2026-12-19/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "family-discovery-walk-2026-12",
    title: "Family Discovery Walk",
    summary:
      "Free third-Saturday Mission Trails walk, October through June. Meet at the Kumeyaay Lake shade structure. This month’s theme is not posted yet. Rain cancels.",
    where: "Kumeyaay Lake Campground shade structure, 2 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-12-19T13:00:00",
    end: "2026-12-19T14:30:00",
    href: "https://mtrp.org/nature-study/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "lakeside-rodeo-2027",
    title: "Lakeside Rodeo",
    summary:
      "PRCA-sanctioned four-day rodeo at the Lakeside Rodeo Arena — East County’s big spring family event. Exact 2027 dates are typically late April; confirm on lakesiderodeo.com when tickets open.",
    where: "Lakeside Rodeo Arena, 12584 Mapleview St, Lakeside",
    start: "2027-04-22T18:30:00",
    end: "2027-04-25T21:00:00",
    href: "https://www.lakesiderodeo.com/",
    status: "annual",
    category: "community",
    ics: true,
  },
];

export function getUpcomingEvents(now = new Date()) {
  return [...calendarEvents]
    .filter((e) => new Date(e.end) >= now || e.status === "needs-support")
    .filter((e) => e.status !== "past")
    .sort((a, b) => a.start.localeCompare(b.start));
}

export function getPastEvents(now = new Date()) {
  return [...calendarEvents]
    .filter((e) => new Date(e.end) < now && e.status === "past")
    .sort((a, b) => b.start.localeCompare(a.start));
}

export function getIcsEvents() {
  return calendarEvents.filter((e) => e.ics !== false && e.status !== "past");
}

export function formatEventWhen(event: CalendarEvent) {
  const start = new Date(event.start);
  const end = new Date(event.end);
  const date = start.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  if (event.allDay) return date;
  const startTime = start.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  const endTime = end.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  return `${date} · ${startTime}–${endTime}`;
}
