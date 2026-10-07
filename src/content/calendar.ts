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
    id: "ncpg-2026-10",
    title: "Navajo Community Planning Group",
    summary:
      "Land-use meeting for Allied Gardens, Del Cerro, Grantville, and San Carlos. Public welcome; no RSVP. Agenda at navajoplanners.wordpress.com. The group meets the second Thursday, 6:30–8:30 p.m.",
    where: "Flood Church Community Room, 4772 Alvarado Canyon Rd, San Diego 92120",
    start: "2026-10-08T18:30:00",
    end: "2026-10-08T20:30:00",
    href: "https://navajoplanners.wordpress.com/",
    status: "upcoming",
    category: "civic",
    ics: true,
  },
  {
    id: "ncpg-2026-11",
    title: "Navajo Community Planning Group",
    summary:
      "November board meeting for the Navajo communities. Public welcome. December 2026 is dark unless a special meeting is called.",
    where: "Flood Church Community Room, 4772 Alvarado Canyon Rd, San Diego 92120",
    start: "2026-11-12T18:30:00",
    end: "2026-11-12T20:30:00",
    href: "https://navajoplanners.wordpress.com/",
    status: "upcoming",
    category: "civic",
    ics: true,
  },
  {
    id: "mtrp-habitat-2026-10",
    title: "Mission Trails habitat restoration",
    summary:
      "Second-Saturday crew with Ranger Steven: pull invasive plants, water natives, and mulch. Ages 8+ (adult required under 13). Long pants, closed-toe shoes, sun protection, and water. Rain cancels. RSVP for the meeting spot: sblankenship@sandiego.gov or (619) 846-8323.",
    where: "Mission Trails Regional Park (meeting spot by RSVP)",
    start: "2026-10-10T08:00:00",
    end: "2026-10-10T12:00:00",
    href: "https://www.sandiego.gov/event/habitat-restoration-crew",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-discovery-tables-2026-10",
    title: "Mission Trails Discovery Tables",
    summary:
      "Drop-in nature tables at the Visitor Center. Free, no reservation. The park also lists this on the second Saturday of most months.",
    where: "Mission Trails Visitor Center, 1 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-10-10T10:00:00",
    end: "2026-10-10T12:30:00",
    href: "https://www.sandiego.gov/event/discovery-tables-1-father-junipero-serra-trail",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-creepy-critters-2026",
    title: "Creepy Critters campfire",
    summary:
      "Free evening program on the misunderstood animals of Mission Trails. Park in the Bushy Hill lot across from the campground and walk in.",
    where: "Kumeyaay Lake Campground Amphitheater, 2 Father Junipero Serra Trail, San Diego 92119",
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
      "Free carnival with a live DJ, prizes, and costume contest at the rec center. Contest times: ages 0–2 at 5:20, 3–5 at 5:40, 6–9 at 6:00, and 10+ at 6:20.",
    where: "Allied Gardens Recreation Center, 5155 Greenbrier Ave, San Diego 92120",
    start: "2026-10-16T17:00:00",
    end: "2026-10-16T19:00:00",
    href: "https://www.sandiego.gov/park-and-recreation/centers/recctr/allied",
    status: "upcoming",
    category: "holiday",
    ics: true,
  },
  {
    id: "paws-and-tales-2026-10",
    title: "Paws and Tales at Benjamin Library",
    summary:
      "Kids read aloud to San Diego Humane Society Canine Ambassadors. Free, all ages. The series is the third Saturday of the month, 11 a.m.–noon.",
    where: "Allied Gardens/Benjamin Branch Library, 5188 Zion Ave, San Diego 92120",
    start: "2026-10-17T11:00:00",
    end: "2026-10-17T12:00:00",
    href: "https://sdhumane.org/event/paws-and-tales-at-allied-gardens-benjamin-branch-library/2026-10-17/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-family-walk-2026-10",
    title: "Family Discovery Walk",
    summary:
      "Free walk on how Kumeyaay children lived and played in Mission Trails. Best for ages 5–12; all ages welcome. Meet at the shade structure near the east restrooms. Closed-toe shoes and water. Canceled if it rains. Third Saturday, October through June.",
    where: "Kumeyaay Lake Campground, 2 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-10-17T13:00:00",
    end: "2026-10-17T14:30:00",
    href: "https://mtrp.org/nature-study/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-concert-2026-10",
    title: "Concerts in the Park: Left Coast Woodwind Quintet",
    summary:
      "Free outdoor concert at the Visitor Center amphitheatre. Autumnal melodies and contemporary works.",
    where: "Mission Trails Visitor Center, 1 Father Junipero Serra Trail, San Diego 92119",
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
      "Free carnival with games, jumpers, music, trunk-or-treating, and a costume contest. Contest starts at 5:30: ages 0–3 at 5:30, 4–6 at 5:45, 7–9 at 6:00, and 10–12 at 6:15.",
    where: "San Carlos Community Park, 6445 Lake Badin Ave, San Diego 92119",
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
      "Drop-in yoga for ages 18+. Register at sdrecconnect.com, code 136375. The rec center is closed Thanksgiving week, so the Nov. 27 date on the fall flyer will not be held.",
    where: "Allied Gardens Recreation Center, 5155 Greenbrier Ave, San Diego 92120",
    start: "2026-10-30T10:30:00",
    end: "2026-10-30T11:30:00",
    href: "https://www.sandiego.gov/sites/default/files/alliedgardens.pdf",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-invasive-2026-11",
    title: "Mission Trails invasive species crew",
    summary:
      "First-Saturday volunteer crew with Ranger Dustin, removing mustard, thistle, and other invasive plants. Ages 8+ (adult required under 13). Long pants and closed-toe shoes. Water, gloves, and snacks provided. RSVP for the meeting spot: dfurlong@sandiego.gov or (619) 836-9804.",
    where: "Mission Trails Regional Park (meeting spot by RSVP)",
    start: "2026-11-07T08:00:00",
    end: "2026-11-07T12:00:00",
    href: "https://www.sandiego.gov/event/invasive-species-crew",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "la-mesa-home-tour-2026",
    title: "La Mesa Historic Home Tour",
    summary:
      "La Mesa History Center’s 20th tour, “Artists & Officers,” in Grossmont Colony and Mt. Helix. Ticket holders get the addresses. A limited Friday, Nov. 6 pre-tour and reception runs 5:30–9 p.m.",
    where: "Grossmont Colony & Mt. Helix, La Mesa",
    start: "2026-11-07T09:00:00",
    end: "2026-11-07T15:00:00",
    href: "https://www.lamesahistory.com/annual-historic-home-tour-in-la-mesa/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-habitat-2026-11",
    title: "Mission Trails habitat restoration",
    summary:
      "November second-Saturday crew. Same plan as October: invasive removal, native plant care, and mulch. RSVP with Ranger Steven for the meeting spot. Rain cancels.",
    where: "Mission Trails Regional Park (meeting spot by RSVP)",
    start: "2026-11-14T08:00:00",
    end: "2026-11-14T12:00:00",
    href: "https://www.sandiego.gov/event/habitat-restoration-crew",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-discovery-tables-2026-11",
    title: "Mission Trails Discovery Tables",
    summary:
      "Free drop-in nature tables at the Visitor Center, the same morning the Holiday Marketplace opens there.",
    where: "Mission Trails Visitor Center, 1 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-11-14T10:00:00",
    end: "2026-11-14T12:30:00",
    href: "https://www.sandiego.gov/event/discovery-tables-1-father-junipero-serra-trail",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "san-carlos-advisory-2026-11",
    title: "San Carlos Recreation Advisory Group",
    summary:
      "San Carlos / Lake Murray advisory group for park programs and community events. Meets at 6:30 p.m. on the third Wednesday of odd-numbered months. The fall guide does not list an end time.",
    where: "San Carlos Recreation Center, 6445 Lake Badin Ave, San Diego 92119",
    start: "2026-11-18T18:30:00",
    end: "2026-11-18T20:00:00",
    href: "https://www.sandiego.gov/sites/default/files/sancarlos.pdf",
    status: "upcoming",
    category: "civic",
    ics: true,
  },
  {
    id: "paws-and-tales-2026-11",
    title: "Paws and Tales at Benjamin Library",
    summary:
      "Monthly reading-to-dogs hour with San Diego Humane Society Canine Ambassadors. Free, all ages.",
    where: "Allied Gardens/Benjamin Branch Library, 5188 Zion Ave, San Diego 92120",
    start: "2026-11-21T11:00:00",
    end: "2026-11-21T12:00:00",
    href: "https://sdhumane.org/event/paws-and-tales-at-allied-gardens-benjamin-branch-library/2026-10-17/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-family-walk-2026-11",
    title: "Family Discovery Walk",
    summary:
      "Third-Saturday family walk at the Kumeyaay Lake shade structure, 1–2:30 p.m., October through June. The monthly theme is posted by the park. Canceled if it rains. Closed-toe shoes and water.",
    where: "Kumeyaay Lake Campground, 2 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-11-21T13:00:00",
    end: "2026-11-21T14:30:00",
    href: "https://mtrp.org/nature-study/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-concert-2026-12",
    title: "Concerts in the Park: Westwind Brass",
    summary:
      "Free series finale with Westwind Brass and brass musicians from Patrick Henry High School, at the Visitor Center outdoor amphitheatre.",
    where: "Mission Trails Visitor Center, 1 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-12-05T14:00:00",
    end: "2026-12-05T15:30:00",
    href: "https://www.westwindbrass.org/events/mission-trails-series-finale-westwind-brass-patrick-henry-high-school/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-discovery-tables-2026-12",
    title: "Mission Trails Discovery Tables",
    summary:
      "Free drop-in nature tables at the Visitor Center.",
    where: "Mission Trails Visitor Center, 1 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-12-12T10:00:00",
    end: "2026-12-12T12:30:00",
    href: "https://www.sandiego.gov/event/discovery-tables-1-father-junipero-serra-trail",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "paws-and-tales-2026-12",
    title: "Paws and Tales at Benjamin Library",
    summary:
      "December reading-to-dogs hour. Free, all ages, third Saturday of the month.",
    where: "Allied Gardens/Benjamin Branch Library, 5188 Zion Ave, San Diego 92120",
    start: "2026-12-19T11:00:00",
    end: "2026-12-19T12:00:00",
    href: "https://sdhumane.org/event/paws-and-tales-at-allied-gardens-benjamin-branch-library/2026-10-17/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-family-walk-2026-12",
    title: "Family Discovery Walk",
    summary:
      "December third-Saturday family walk at the Kumeyaay Lake shade structure. Theme posted by the park. Canceled if it rains.",
    where: "Kumeyaay Lake Campground, 2 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-12-19T13:00:00",
    end: "2026-12-19T14:30:00",
    href: "https://mtrp.org/nature-study/",
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
