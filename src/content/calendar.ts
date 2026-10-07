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
    status: "past",
    category: "community",
    ics: false,
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
    status: "past",
    category: "community",
    ics: false,
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
    title: "Navajo Community Planning Group",
    summary:
      "Land-use meeting for Allied Gardens, Del Cerro, Grantville, and San Carlos. Public welcome; no RSVP. Agenda posts on the group site at least 72 hours ahead. In person in the Community Room, with a virtual option. The group meets the second Thursday at 6:30pm.",
    where: "Flood Church Community Room, 4772 Alvarado Canyon Rd, 92120",
    start: "2026-10-08T18:30:00",
    end: "2026-10-08T20:30:00",
    href: "https://navajoplanners.wordpress.com/",
    status: "upcoming",
    category: "civic",
    ics: true,
  },
  {
    id: "mtrp-habitat-crew-2026-10",
    title: "Mission Trails habitat restoration",
    summary:
      "Ranger Steven’s volunteer crew pulls invasive plants and waters natives. Wear long pants and closed-toe shoes; bring gloves, sun protection, and a water bottle. Ages 8 and up (under 13 with an adult). Rain cancels — RSVP on the city page for the meet point.",
    where: "Mission Trails Regional Park, 92119",
    start: "2026-10-10T08:00:00",
    end: "2026-10-10T12:00:00",
    href: "https://www.sandiego.gov/event/habitat-restoration-crew",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "kumeyaay-creepy-critters-2026",
    title: "Creepy Critters campfire",
    summary:
      "Free evening program on the misunderstood animals you might meet in Mission Trails after dark. Park in the Bushy Hill lot across from the campground and walk in.",
    where: "Kumeyaay Lake Campground Amphitheater, 2 Father Junipero Serra Trail, 92119",
    start: "2026-10-10T18:00:00",
    end: "2026-10-10T19:00:00",
    href: "https://www.sandiego.gov/event/creepy-critters-campfire-program-kumeyaay-lake-campground-amphitheater",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "allied-gardens-halloween-2026",
    title: "Allied Gardens Halloween Carnival",
    summary:
      "Free carnival with a live DJ, prizes, and a costume contest. Contest times: ages 0–2 at 5:20, 3–5 at 5:40, 6–9 at 6:00, and 10+ at 6:20.",
    where: "Allied Gardens Recreation Center, 5155 Greenbrier Ave, 92120",
    start: "2026-10-16T17:00:00",
    end: "2026-10-16T19:00:00",
    href: "https://www.sandiego.gov/sites/default/files/alliedgardens.pdf",
    status: "upcoming",
    category: "holiday",
    ics: true,
  },
  {
    id: "paws-and-tales-2026-10",
    title: "Paws and Tales at Benjamin Library",
    summary:
      "Kids can practice reading aloud to San Diego Humane Society canine ambassadors. Drop-in on the third Saturday; all ages.",
    where: "Allied Gardens/Benjamin Branch Library, 5188 Zion Ave, 92120",
    start: "2026-10-17T11:00:00",
    end: "2026-10-17T12:00:00",
    href: "https://sdhumane.org/event/paws-and-tales-at-allied-gardens-benjamin-branch-library/2026-10-17/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-family-walk-2026-10",
    title: "Family Discovery Walk: Kumeyaay kids",
    summary:
      "Free walk on how Kumeyaay children lived and played in Mission Trails. Best for ages 5–12; all ages welcome. Kids get a nature journal and sticker. Meet at the campground shade structure near the east restrooms. Closed-toe shoes and water; rain cancels.",
    where: "Kumeyaay Lake Campground, 2 Father Junipero Serra Trail, 92119",
    start: "2026-10-17T13:00:00",
    end: "2026-10-17T14:30:00",
    href: "https://mtrp.org/nature-study/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-concert-2026-10",
    title: "Concerts in the Park: woodwind quintet",
    summary:
      "Free outdoor concert by the Left Coast Woodwind Quintet at the Mission Trails amphitheater — fall melodies and contemporary works.",
    where: "Mission Trails Visitor Center, 1 Father Junipero Serra Trail, 92119",
    start: "2026-10-17T14:00:00",
    end: "2026-10-17T15:30:00",
    href: "https://www.sandiego.gov/event/concerts-park-mission-trails-regional-park-0",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "san-carlos-halloween-2026",
    title: "San Carlos Halloween Carnival",
    summary:
      "Free carnival with games, prizes, jumpers, music, and trunk-or-treating. Costume contest starts at 5:30: ages 0–3 at 5:30, 4–6 at 5:45, 7–9 at 6:00, and 10–12 at 6:15.",
    where: "San Carlos Community Park, 6445 Lake Badin Ave, 92119",
    start: "2026-10-23T17:00:00",
    end: "2026-10-23T19:00:00",
    href: "https://www.sandiego.gov/event/halloween-carnival-costume-contest-san-carlos-community-park",
    status: "upcoming",
    category: "holiday",
    ics: true,
  },
  {
    id: "allied-gardens-yoga-2026-10",
    title: "Free yoga at Allied Gardens",
    summary:
      "Free one-hour yoga for ages 18 and up. Register on SDRecConnect (activity 136375) before you go.",
    where: "Allied Gardens Recreation Center, 5155 Greenbrier Ave, 92120",
    start: "2026-10-30T10:30:00",
    end: "2026-10-30T11:30:00",
    href: "https://www.sandiego.gov/sites/default/files/alliedgardens.pdf",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "navajo-planners-2026-11",
    title: "Navajo Community Planning Group",
    summary:
      "Second-Thursday land-use meeting for the Navajo communities, 6:30–8:30pm at Flood Church. The board’s 2026 calendar has no December meeting unless a special session is called. Confirm the agenda on the group site.",
    where: "Flood Church Community Room, 4772 Alvarado Canyon Rd, 92120",
    start: "2026-11-12T18:30:00",
    end: "2026-11-12T20:30:00",
    href: "https://navajoplanners.wordpress.com/",
    status: "upcoming",
    category: "civic",
    ics: true,
  },
  {
    id: "allied-gardens-food-drive-2026",
    title: "Canned food drive at Allied Gardens Pool",
    summary:
      "Parks & Recreation fall canned-food drive at the neighborhood pool. Some city fall events ask for registration — check the parks event calendar before you go.",
    where: "Allied Gardens Pool, 6707 Glenroy St, 92120",
    start: "2026-11-14T11:00:00",
    end: "2026-11-14T13:00:00",
    href: "https://www.sandiego.gov/sites/default/files/2026-09/2026-fall-events-list-flyer-8-27-2026.pdf",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-habitat-crew-2026-11",
    title: "Mission Trails habitat restoration",
    summary:
      "Second-Saturday volunteer crew with Ranger Steven: invasive-plant removal, native planting, and mulch. Long pants, closed-toe shoes, gloves, and water. Ages 8 and up (under 13 with an adult). Rain cancels — RSVP on the city page for the meet point.",
    where: "Mission Trails Regional Park, 92119",
    start: "2026-11-14T08:00:00",
    end: "2026-11-14T12:00:00",
    href: "https://www.sandiego.gov/event/habitat-restoration-crew",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "paws-and-tales-2026-11",
    title: "Paws and Tales at Benjamin Library",
    summary:
      "Monthly reading hour with San Diego Humane Society canine ambassadors. Drop-in for kids of all ages.",
    where: "Allied Gardens/Benjamin Branch Library, 5188 Zion Ave, 92120",
    start: "2026-11-21T11:00:00",
    end: "2026-11-21T12:00:00",
    href: "https://sdhumane.org/event/paws-and-tales-at-allied-gardens-benjamin-branch-library/2026-11-21/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-family-walk-2026-11",
    title: "Family Discovery Walk",
    summary:
      "Free third-Saturday family walk at Kumeyaay Lake (October through June; July–September off). Each month has its own theme, plus a nature journal and sticker. Meet at the campground shade structure. Rain cancels.",
    where: "Kumeyaay Lake Campground, 2 Father Junipero Serra Trail, 92119",
    start: "2026-11-21T13:00:00",
    end: "2026-11-21T14:30:00",
    href: "https://mtrp.org/nature-study/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-family-walk-2026-12",
    title: "Family Discovery Walk",
    summary:
      "Free third-Saturday family walk at Kumeyaay Lake. Theme changes each month; kids get a nature journal and sticker. Meet at the campground shade structure. Rain cancels.",
    where: "Kumeyaay Lake Campground, 2 Father Junipero Serra Trail, 92119",
    start: "2026-12-19T13:00:00",
    end: "2026-12-19T14:30:00",
    href: "https://mtrp.org/nature-study/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "paws-and-tales-2026-12",
    title: "Paws and Tales at Benjamin Library",
    summary:
      "Read aloud to San Diego Humane Society canine ambassadors. Third Saturday drop-in for kids of all ages.",
    where: "Allied Gardens/Benjamin Branch Library, 5188 Zion Ave, 92120",
    start: "2026-12-19T11:00:00",
    end: "2026-12-19T12:00:00",
    href: "https://sdhumane.org/event/paws-and-tales-at-allied-gardens-benjamin-branch-library/2026-12-19/",
    status: "upcoming",
    category: "community",
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
