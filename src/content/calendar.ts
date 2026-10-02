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
    id: "el-cajon-oktoberfest-2026",
    title: "El Cajon Oktoberfest",
    summary:
      "Two weekends of German food, bier, music, and Kid Zone fun hosted by the German American Societies of San Diego. Fri 4–10pm, Sat 12–10pm, Sun 12–9pm.",
    where: "1017 S. Mollison Ave, El Cajon",
    start: "2026-09-25T16:00:00",
    end: "2026-10-04T21:00:00",
    href: "https://www.falkorevents.com/eventcal/event/6829/details/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "la-mesa-oktoberfest-2026",
    title: "La Mesa Oktoberfest",
    summary:
      "Free all-ages festival on La Mesa Blvd. Biergarten entry ~$8 at the door; VIP packages available. Fri 4–10pm, Sat 10am–10pm, Sun 12–8pm.",
    where: "La Mesa Blvd, La Mesa, CA 91942",
    start: "2026-10-02T16:00:00",
    end: "2026-10-04T20:00:00",
    href: "https://www.lamesaoktoberfest.org/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "bulls-only-rodeo-2026",
    title: "Bulls Only Rodeo",
    summary:
      "Two nights of bull riding, Jr. Bull Riding, and Mutton Bustin’ at the Lakeside Rodeo Arena. Shows at 7:30pm; gates open 5:30pm. Tickets at Boot Barn and the arena box office.",
    where: "Lakeside Rodeo Arena, 12584 Mapleview St, Lakeside",
    start: "2026-10-09T17:30:00",
    end: "2026-10-10T22:30:00",
    href: "https://bullsonlyrodeo.com/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "santee-spooktacular-2026",
    title: "Santee Lakes Spooktacular",
    summary:
      "Free family Halloween day with trunk-or-treat, games, inflatables, face painting, and food trucks at Lakes 1 & 2. Parking ~$10.",
    where: "Santee Lakes, 9310 Fanita Pkwy, Santee",
    start: "2026-10-24T10:00:00",
    end: "2026-10-24T14:00:00",
    href: "https://www.santeelakes.com/event/spooktacular-3/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "la-mesa-halloween-2026",
    title: "Halloween in La Mesa Village",
    summary:
      "Free trick-or-treating at participating Village businesses along La Mesa Blvd between Grant and Acacia (and Spring St). Bring your own bag and costume.",
    where: "La Mesa Blvd, La Mesa Village",
    start: "2026-10-31T16:00:00",
    end: "2026-10-31T18:00:00",
    href: "https://www.lamesavillageassociation.org/trick-or-treating-in-la-mesa-village",
    status: "upcoming",
    category: "holiday",
    ics: true,
  },
  {
    id: "mtrp-holiday-marketplace-2026",
    title: "Mission Trails Holiday Marketplace",
    summary:
      "Handmade goods from local artisans at the Mission Trails Visitor Center. 30% of each vendor’s sales supports the MTRP Foundation.",
    where: "Mission Trails Regional Park Visitor Center, One Father Junipero Serra Trail",
    start: "2026-11-14T09:00:00",
    end: "2026-11-15T15:00:00",
    href: "https://mtrp.org/marketplace/",
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
  {
    id: "turkey-trot-2026",
    title: "San Cerro Turkey Trot",
    summary:
      "Neighborhood 5K — run, walk, bike, or scoot. Arrive by 8:00; race at 8:30. Bring canned goods (human or pet) for the San Diego Food Bank via Pershing Middle School. Prizes for fastest man, woman, stroller, kids under 12, and best dressed.",
    where: "Wandermere Dr & Belle Glade Ave, San Diego",
    start: "2026-11-26T08:00:00",
    end: "2026-11-26T10:30:00",
    href: "/blog/2025-san-cerro-turkey-trot",
    status: "annual",
    category: "race",
    ics: true,
  },
  {
    id: "green-jogathon-2026",
    title: "Green Elementary Jog-a-Thon",
    summary:
      "Annual PTA fundraiser at Myron B. Green Elementary. Exact fall date is set by the school — this placeholder keeps it on the community calendar until confirmed.",
    where: "Green Elementary, 7030 Wandermere Dr",
    start: "2026-10-17T08:00:00",
    end: "2026-10-17T12:00:00",
    href: "https://green.sandiegounified.org/",
    status: "tentative",
    category: "school",
    ics: true,
  },
  {
    id: "lake-murray-july4-2026",
    title: "Lake Murray Music Fest & Fireworks",
    summary:
      "Traditional July 4th gathering for San Carlos / Del Cerro / Navajo. 2025 was canceled over permits and funding; 2026 also stayed dark after organizing challenges. Listed so neighbors remember to volunteer and donate if a return is attempted.",
    where: "Lake Murray Community Park",
    start: "2026-07-04T17:00:00",
    end: "2026-07-04T22:00:00",
    href: "/blog/lake-murray-fireworks-future",
    status: "needs-support",
    category: "holiday",
    ics: false,
  },
  {
    id: "navajo-planners-2026-10",
    title: "Navajo Community Planners meeting",
    summary:
      "Land-use advisory meeting for Del Cerro, San Carlos, Allied Gardens, and Grantville. Confirm agenda and room on the City of San Diego planning calendar.",
    where: "Navajo community planning area (see city notice)",
    start: "2026-10-19T18:00:00",
    end: "2026-10-19T20:00:00",
    href: "https://www.sandiego.gov/planning/community/profiles/navajo",
    status: "upcoming",
    category: "civic",
    ics: true,
  },
  {
    id: "navajo-planners-2026-11",
    title: "Navajo Community Planners meeting",
    summary:
      "Monthly civic meeting covering neighborhood land-use items. Verify time/location with the city before attending.",
    where: "Navajo community planning area (see city notice)",
    start: "2026-11-16T18:00:00",
    end: "2026-11-16T20:00:00",
    href: "https://www.sandiego.gov/planning/community/profiles/navajo",
    status: "upcoming",
    category: "civic",
    ics: true,
  },
  {
    id: "navajo-planners-2026-12",
    title: "Navajo Community Planners meeting",
    summary:
      "End-of-year planners session for the Navajo communities. Confirm details on sandiego.gov.",
    where: "Navajo community planning area (see city notice)",
    start: "2026-12-21T18:00:00",
    end: "2026-12-21T20:00:00",
    href: "https://www.sandiego.gov/planning/community/profiles/navajo",
    status: "upcoming",
    category: "civic",
    ics: true,
  },
  {
    id: "park-cleanup-fall-2026",
    title: "Princess Del Cerro Park tidy-up",
    summary:
      "Neighbor-led litter pickup and playground wipe-down. Bring gloves; kids welcome with a parent.",
    where: "Princess Del Cerro Park",
    start: "2026-10-11T09:00:00",
    end: "2026-10-11T11:00:00",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "pizza-opening",
    title: "Del Cerro Pizza & Beer opened",
    summary:
      "NY-style pizzeria opened December 2, 2024 in the Windmill Farms plaza (former El Torry space).",
    where: "6358 Del Cerro Blvd",
    start: "2024-12-02T11:00:00",
    end: "2024-12-02T20:00:00",
    href: "/blog/del-cerro-pizza-and-beer-opens",
    status: "past",
    category: "opening",
    ics: false,
  },
  {
    id: "turkey-trot-2025",
    title: "2025 San Cerro Turkey Trot",
    summary:
      "Thanksgiving morning 5K with food drive for the San Diego Food Bank via Pershing Middle School.",
    where: "Wandermere Dr & Belle Glade Ave",
    start: "2025-11-27T08:00:00",
    end: "2025-11-27T10:30:00",
    href: "/blog/2025-san-cerro-turkey-trot",
    status: "past",
    category: "race",
    ics: false,
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
