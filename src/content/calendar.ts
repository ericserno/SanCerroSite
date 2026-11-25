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
    id: "sancarlos-kids-night-out-2026",
    title: "Kids Night Out at San Carlos",
    summary:
      "Holiday games, crafts, prizes, dinner, and a movie for ages 5–12. This year’s theme is the North Pole. Tell staff about dietary restrictions. The city’s activity listing is 4:00–7:30pm; register on SDRecConnect. Online registration may not be open yet.",
    where: "San Carlos Recreation Center gym, 6445 Lake Badin Ave, San Diego 92119",
    start: "2026-12-04T16:00:00",
    end: "2026-12-04T19:30:00",
    href: "https://www.sandiego.gov/park-and-recreation/centers/recctr/sancarlos",
    status: "upcoming",
    category: "holiday",
    ics: true,
  },
  {
    id: "invasive-species-crew-2026-12",
    title: "Mission Trails Invasive Species Crew",
    summary:
      "First-Saturday volunteer morning with Ranger Dustin, removing mustards, thistles, and other invasive plants. Rain cancels. Ages 8+; under 13 with an adult. The meeting spot is sent when you RSVP.",
    where: "Mission Trails Regional Park (meeting spot sent when you RSVP)",
    start: "2026-12-05T08:00:00",
    end: "2026-12-05T12:00:00",
    href: "https://app.betterimpact.com/PublicOrganization/032e2c41-70cc-4ba9-bfc7-74e92ed28d5b/Activity/a0519cbd-f29e-4204-9b08-3aadf058e5d6/1",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-concert-westwind-2026",
    title: "Concerts in the Park: Westwind Brass",
    summary:
      "Free season finale in the Visitor Center outdoor amphitheater. Westwind Brass plays holiday and seasonal favorites with brass musicians from Patrick Henry High School. Concert begins at 2:00pm.",
    where: "Mission Trails Visitor Center, 1 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-12-05T14:00:00",
    end: "2026-12-05T15:30:00",
    href: "https://www.sandiego.gov/event/concerts-park-mission-trails-regional-park-1",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "christmas-on-mt-helix-2026",
    title: "Christmas on Mt. Helix",
    summary:
      "Free holiday afternoon at Mt. Helix Park: Christmas market, food, hot chocolate, kids’ crafts, Santa photos, and caroling. General parking is at Grossmont High School’s lower lot, 1100 Murray Dr, El Cajon, with shuttles to the peak.",
    where: "Mt. Helix Park, 4901 Mt. Helix Dr, La Mesa",
    start: "2026-12-05T15:00:00",
    end: "2026-12-05T20:00:00",
    href: "https://www.mthelixpark.org/christmas",
    status: "upcoming",
    category: "holiday",
    ics: true,
  },
  {
    id: "habitat-restoration-2026-12",
    title: "Mission Trails Habitat Restoration Crew",
    summary:
      "Second-Saturday volunteer morning with Ranger Steven: pull invasive plants, add natives, and mulch. Rain cancels. Ages 8+; under 13 with an adult. The meeting spot is sent when you RSVP.",
    where: "Mission Trails Regional Park (meeting spot sent when you RSVP)",
    start: "2026-12-12T08:00:00",
    end: "2026-12-12T12:00:00",
    href: "https://app.betterimpact.com/PublicOrganization/032e2c41-70cc-4ba9-bfc7-74e92ed28d5b/Activity/7cef38a1-eb14-48bf-bd5b-c34053f0ff98/1",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-discovery-tables-2026-12",
    title: "Mission Trails Discovery Table: Animal Tracks",
    summary:
      "Hands-on Animal Tracks table in the Visitor Center lobby. Match each animal with its track. The park calendar runs 10:00am–1:00pm; the city event page lists 10:00am–12:30pm. Second Saturday of the month.",
    where: "Mission Trails Visitor Center, 1 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-12-12T10:00:00",
    end: "2026-12-12T13:00:00",
    href: "https://www.sandiego.gov/event/discovery-tables-1-father-junipero-serra-trail",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "la-mesa-holiday-village-2026",
    title: "Holiday in the Village",
    summary:
      "La Mesa Village Association’s free holiday tradition along La Mesa Blvd between Spring and 4th: vendors, dining, ice skating, mini golf, Santa, and an elf hunt. No tickets required.",
    where: "La Mesa Blvd, La Mesa Village",
    start: "2026-12-12T12:00:00",
    end: "2026-12-12T21:00:00",
    href: "https://www.lamesavillageassociation.org/holiday-in-the-village-a-la-mesa-tradition",
    status: "upcoming",
    category: "holiday",
    ics: true,
  },
  {
    id: "bird-walk-lake-murray-2026-12-18",
    title: "Guided Bird Walk at Lake Murray",
    summary:
      "Free Mission Trails bird walk on the northwest shore. Winter waterfowl, land birds, and a look for tri-colored blackbirds. Bring binoculars if you have them. Rain cancels.",
    where:
      "Lake Murray northwest shore. Enter at Murray Park Dr and Belle Glade Ave, past the ballfields, paved lot on the right, San Diego 92119",
    start: "2026-12-18T08:00:00",
    end: "2026-12-18T10:30:00",
    href: "https://mtrp.org/events/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "bird-walk-lake-murray-2026-12-19",
    title: "Guided Bird Walk at Lake Murray",
    summary:
      "Same northwest-shore walk as Friday, pitched for beginning birdwatchers. All skill levels are welcome. Bring binoculars if you have them. Rain cancels.",
    where:
      "Lake Murray northwest shore. Enter at Murray Park Dr and Belle Glade Ave, past the ballfields, paved lot on the right, San Diego 92119",
    start: "2026-12-19T08:00:00",
    end: "2026-12-19T10:30:00",
    href: "https://mtrp.org/events/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "kumeyaay-campground-crew-2026-12",
    title: "Kumeyaay Lake Campground Crew",
    summary:
      "Third-Saturday volunteer morning with Ranger Brandon. Meet in the day-use lot. The city event page still stops at November; the volunteer schedule lists December 19. Rain cancels. Ages 8+; under 14 with an adult.",
    where: "Kumeyaay Lake Campground day-use lot, 2 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-12-19T08:00:00",
    end: "2026-12-19T12:00:00",
    href: "https://app.betterimpact.com/PublicOrganization/032e2c41-70cc-4ba9-bfc7-74e92ed28d5b/Activity/5fa1ec2a-fa74-42cf-b7cd-af3c9c72f1d4/1",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "allied-gardens-cookie-party-2026",
    title: "Cookie Decorating Party",
    summary:
      "Allied Gardens Recreation Center’s holiday morning: cookie decorating, jumpers, face painters, a DJ, and a photobooth.",
    where: "Allied Gardens Recreation Center, 5155 Greenbrier Ave, San Diego 92120",
    start: "2026-12-19T10:00:00",
    end: "2026-12-19T12:00:00",
    href: "https://www.sandiego.gov/park-and-recreation/centers/recctr/allied",
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
    title: "Family Discovery Walk: Wildlife Habitats",
    summary:
      "Free third-Saturday Mission Trails walk for families with kids about 5–12. This month is Wildlife Habitats, including why water matters. Meet at the Kumeyaay Lake shade structure near the east restrooms. Rain cancels. The same listing names January 16 as Sensing Nature.",
    where: "Kumeyaay Lake Campground shade structure, 2 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-12-19T13:00:00",
    end: "2026-12-19T14:30:00",
    href: "https://mtrp.org/nature-study/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "trail-improvement-2027-01",
    title: "Mission Trails Trail Improvement Crew",
    summary:
      "First-Sunday trail crew. The shift table lists 8:30am–12:00pm (the intro line says until 12:30). The meeting spot is emailed before the work day. No December shift is posted.",
    where: "Mission Trails Regional Park (meeting spot emailed before the crew)",
    start: "2027-01-03T08:30:00",
    end: "2027-01-03T12:00:00",
    href: "https://app.betterimpact.com/PublicOrganization/032e2c41-70cc-4ba9-bfc7-74e92ed28d5b/Activity/3891d210-455c-4936-a281-fbbc2de3b5d2/1",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "allied-gardens-crg-2027-01",
    title: "Allied Gardens Community Recreation Group",
    summary:
      "Advisory group for recreation in the Navajo area. The winter guide lists 6:30pm in the Gardens room on the first Monday of January, March, May, July, September, and November. No end time is published; this block runs to 8:00pm.",
    where: "Allied Gardens Recreation Center, Gardens room, 5155 Greenbrier Ave, San Diego 92120",
    start: "2027-01-04T18:30:00",
    end: "2027-01-04T20:00:00",
    href: "https://www.sandiego.gov/park-and-recreation/centers/recctr/allied",
    status: "upcoming",
    category: "civic",
    ics: true,
  },
  {
    id: "mtrp-discovery-tables-2027-01",
    title: "Mission Trails Discovery Table",
    summary:
      "Hands-on nature table in the Visitor Center lobby. The city listing is 10:00am–12:30pm on January 9. The park calendar’s upcoming-topics line says the January topic is still TBD.",
    where: "Mission Trails Visitor Center, 1 Father Junipero Serra Trail, San Diego 92119",
    start: "2027-01-09T10:00:00",
    end: "2027-01-09T12:30:00",
    href: "https://www.sandiego.gov/event/discovery-tables-1-father-junipero-serra-trail",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "navajo-cpg-2027-01",
    title: "Navajo Community Planning Group",
    summary:
      "Land-use meeting for Allied Gardens, Del Cerro, Grantville, and San Carlos. Second Thursday, 6:30–8:30pm, at Flood Church. August and December are dark unless a special meeting is called. No December 2026 agenda is posted.",
    where: "Flood Church Community Room, 4772 Alvarado Canyon Rd, San Diego 92120",
    start: "2027-01-14T18:30:00",
    end: "2027-01-14T20:30:00",
    href: "https://www.sandiego.gov/planning/community-plans/navajo/planning-group",
    status: "upcoming",
    category: "civic",
    ics: true,
  },
  {
    id: "paws-and-tales-2027-01",
    title: "Paws and Tales at Benjamin Library",
    summary:
      "Kids of all ages can read aloud to San Diego Humane Society canine ambassadors. No registration. Third Saturday of the month.",
    where: "Allied Gardens/Benjamin Library, 5188 Zion Ave, San Diego 92120",
    start: "2027-01-16T11:00:00",
    end: "2027-01-16T12:00:00",
    href: "https://sdhumane.org/event/paws-and-tales-at-allied-gardens-benjamin-branch-library/2027-01-16/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "family-discovery-walk-2027-01",
    title: "Family Discovery Walk: Sensing Nature",
    summary:
      "Free third-Saturday Mission Trails walk, October through June. The December walk listing names January 16 as Sensing Nature. Meet at the Kumeyaay Lake shade structure near the east restrooms. Rain cancels.",
    where: "Kumeyaay Lake Campground shade structure, 2 Father Junipero Serra Trail, San Diego 92119",
    start: "2027-01-16T13:00:00",
    end: "2027-01-16T14:30:00",
    href: "https://mtrp.org/nature-study/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "sancarlos-rag-2027-01",
    title: "San Carlos/Lake Murray Recreation Advisory Group",
    summary:
      "Neighbors advise Parks and Recreation on programs, events, and park improvements. The city lists 6:30pm on the third Wednesday of odd-numbered months and does not publish an end time; this block runs to 8:00pm.",
    where: "San Carlos Recreation Center, 6445 Lake Badin Ave, San Diego 92119",
    start: "2027-01-20T18:30:00",
    end: "2027-01-20T20:00:00",
    href: "https://www.sandiego.gov/park-and-recreation/centers/recctr/sancarlos",
    status: "upcoming",
    category: "civic",
    ics: true,
  },
  {
    id: "park-beautification-2027-01",
    title: "Mission Trails Park Beautification Crew",
    summary:
      "Fourth-Saturday morning with Ranger Elizabeth. Projects vary: pruning, mulch, sweeping, litter, and fence repair. The project site is confirmed when you RSVP. Under 13 with a parent. No November or December shift is posted.",
    where: "Mission Trails Regional Park (project site confirmed when you RSVP)",
    start: "2027-01-23T08:00:00",
    end: "2027-01-23T12:00:00",
    href: "https://app.betterimpact.com/PublicOrganization/032e2c41-70cc-4ba9-bfc7-74e92ed28d5b/Activity/9406d3f7-b6ec-4268-b693-ddd477ba947a/1",
    status: "upcoming",
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
