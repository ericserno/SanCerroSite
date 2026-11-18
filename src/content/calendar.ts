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
    id: "san-carlos-recreation-group-2026-11",
    title: "San Carlos/Lake Murray Recreation Advisory Group",
    summary:
      "Neighbors advise Parks and Recreation on programs, events, and park improvements. The city lists a 6:30pm start on the third Wednesday of odd-numbered months and does not publish an end time; this block runs to 8:00pm.",
    where: "San Carlos Recreation Center, 6445 Lake Badin Ave, San Diego 92119",
    start: "2026-11-18T18:30:00",
    end: "2026-11-18T20:00:00",
    href: "https://www.sandiego.gov/park-and-recreation/centers/recctr/sancarlos",
    status: "upcoming",
    category: "civic",
    ics: true,
  },
  {
    id: "bird-walk-oak-grove-2026-11-20",
    title: "Guided bird walk: Oak Grove Loop",
    summary:
      "Free Mission Trails bird walk on the Oak Grove Loop, looking for resident and migratory birds and the hawks that use this area. Meet in front of the Visitor Center. Bring binoculars if you have them, plus closed-toe shoes and water. Rain or an extreme-heat warning cancels. The same walk repeats Saturday morning.",
    where: "Mission Trails Visitor Center, 1 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-11-20T08:00:00",
    end: "2026-11-20T10:30:00",
    href: "https://mtrp.org/events/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "bird-walk-oak-grove-2026-11-21",
    title: "Guided bird walk: Oak Grove Loop",
    summary:
      "Saturday repeat of the Oak Grove Loop bird walk, aimed at beginning birdwatchers and open to everyone. Meet in front of the Visitor Center. Bring binoculars if you have them, plus closed-toe shoes and water. Rain or an extreme-heat warning cancels.",
    where: "Mission Trails Visitor Center, 1 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-11-21T08:00:00",
    end: "2026-11-21T10:30:00",
    href: "https://mtrp.org/events/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "kumeyaay-campground-crew-2026-11",
    title: "Kumeyaay Lake Campground Crew",
    summary:
      "Third-Saturday volunteer morning with Ranger Brandon. Meet in the day-use lot. Wear long pants, closed-toe shoes, and sun protection; bring gloves and a water bottle if you have them. Rain cancels. Ages 8+; under 14 with an adult. The December crew is posted for the 19th.",
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
    title: "Family Discovery Walk: Trees & Shrubs",
    summary:
      "Free Mission Trails walk on how to identify trees and shrubs by their leaves. Kids get a nature journal and sticker. Aimed at ages 5–12 and open to everyone. Meet at the Kumeyaay Lake shade structure near the east restrooms. Closed-toe shoes, water, hat, and sunscreen. Rain or an extreme-heat warning cancels.",
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
      "Neighborhood 5K — run, walk, bike, or scoot. Arrive by 8:00; race at 8:30. Bring canned goods (human or pet) for the San Diego Food Bank via Pershing Middle School. Prizes for fastest man, woman, stroller, kids under 12, and best dressed.",
    where: "Wandermere Dr & Belle Glade Ave, San Diego",
    start: "2026-11-26T08:00:00",
    end: "2026-11-26T10:30:00",
    href: "/blog/san-cerro-turkey-trot-2026",
    status: "annual",
    category: "race",
    ics: true,
  },
  {
    id: "mtrp-invasive-species-2026-12",
    title: "Mission Trails Invasive Species Crew",
    summary:
      "First-Saturday volunteer crew with Ranger Dustin, pulling mustards, thistles, and other invasive plants. Gloves, water, and snacks are provided. Wear long pants, closed-toe shoes, and sun protection, and RSVP for the meeting spot. Ages 8+; under 13 with an adult.",
    where: "Mission Trails Regional Park (meeting spot by RSVP), San Diego 92119",
    start: "2026-12-05T08:00:00",
    end: "2026-12-05T12:00:00",
    href: "https://www.sandiego.gov/event/invasive-species-crew",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-tracking-walk-2026-12",
    title: "Mission Trails tracking walk",
    summary:
      "Free first-Saturday wildlife tracking walk with the San Diego Tracking Team. Two hours of looking for tracks and other signs, suitable for families. Wear long pants and trail shoes. Meet in front of the Ranger Field Station. Rain cancels.",
    where:
      "East Fortuna Staging Area, Ranger Field Station, 14450 Equestrian Circle, San Diego 92124",
    start: "2026-12-05T08:00:00",
    end: "2026-12-05T10:00:00",
    href: "https://www.sdtt.org/upcoming-events/tracking-walk-jan26-4lkwm-jmk86-sf98t-bkc5e-ae2d7-ztyzm-bycl3-3jtnb-henab-xgzdz-e36e5",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-concert-westwind-2026",
    title: "Concerts in the Park: Westwind Brass",
    summary:
      "Free series finale in the Visitor Center amphitheater: holiday and seasonal brass, with musicians from Patrick Henry High School. The city, KPBS, and Westwind Brass all place it here at 2:00pm.",
    where: "Mission Trails Visitor Center, 1 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-12-05T14:00:00",
    end: "2026-12-05T15:30:00",
    href: "/blog/westwind-brass-mission-trails-2026",
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
    id: "mtrp-trail-crew-2026-12",
    title: "Mission Trails Trail Improvement Crew",
    summary:
      "First-Sunday volunteer crew with Ranger Cristian Navarro: trail repair, erosion control, invasive plants, native planting, and litter. Wear long pants, closed-toe shoes, and sun protection, and bring water. The meeting spot is emailed after you RSVP. Ages 18+.",
    where: "Mission Trails Regional Park (meeting spot by RSVP), San Diego 92119",
    start: "2026-12-06T08:30:00",
    end: "2026-12-06T12:00:00",
    href: "https://www.sandiego.gov/event/trail-maintenance-crew",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-habitat-restoration-2026-12",
    title: "Mission Trails Habitat Restoration Crew",
    summary:
      "Second-Saturday volunteer morning with Ranger Steven: pull invasive plants, water natives, and mulch. Bring gloves, sun protection, and a water bottle if you have them. Ice water and snacks are provided. Rain cancels. Ages 8+; under 13 with an adult. RSVP for the meeting spot.",
    where: "Mission Trails Regional Park (meeting spot by RSVP), San Diego 92119",
    start: "2026-12-12T08:00:00",
    end: "2026-12-12T12:00:00",
    href: "https://www.sandiego.gov/event/habitat-restoration-crew",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-discovery-tables-2026-12",
    title: "Mission Trails Discovery Table: Animal Tracks",
    summary:
      "Drop-in table in the Visitor Center lobby on matching animals to their tracks. Mission Trails says stop by anytime from 10:00am to 1:00pm. The city event page lists the same date as 10:00am–12:30pm.",
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
      "La Mesa Village Association’s 11th annual holiday day on La Mesa Blvd between Spring and 4th: vendors, dining, an elf hunt, a kids’ shopping program, Santa, and a Mrs. Claus reading nook. Free to attend.",
    where: "La Mesa Blvd between Spring St and 4th St, La Mesa",
    start: "2026-12-12T12:00:00",
    end: "2026-12-12T21:00:00",
    href: "https://www.lamesavillageassociation.org/holiday-in-the-village-a-la-mesa-tradition",
    status: "upcoming",
    category: "holiday",
    ics: true,
  },
  {
    id: "bird-walk-lake-murray-2026-12-18",
    title: "Guided bird walk: Lake Murray",
    summary:
      "Free winter bird walk on the northwest shore, looking for waterfowl and California’s tri-colored blackbirds. Enter at Murray Park Drive and Belle Glade Avenue, go past the ballfields, and turn into the paved lot on the right. Bring binoculars if you have them. Rain or an extreme-heat warning cancels. The same walk repeats Saturday.",
    where: "Lake Murray northwest shore lot, Murray Park Dr & Belle Glade Ave, San Diego 92119",
    start: "2026-12-18T08:00:00",
    end: "2026-12-18T10:30:00",
    href: "https://mtrp.org/events/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "bird-walk-lake-murray-2026-12-19",
    title: "Guided bird walk: Lake Murray",
    summary:
      "Saturday repeat of the Lake Murray shore walk, aimed at beginning birdwatchers and open to everyone. Same meeting lot: enter at Murray Park Drive and Belle Glade Avenue, pass the ballfields, and turn right into the paved lot. Rain or an extreme-heat warning cancels.",
    where: "Lake Murray northwest shore lot, Murray Park Dr & Belle Glade Ave, San Diego 92119",
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
      "Third-Saturday volunteer morning with Ranger Brandon. Meet in the day-use lot. Wear long pants, closed-toe shoes, and sun protection; bring gloves and a water bottle if you have them. Rain cancels. Ages 8+; under 14 with an adult.",
    where: "Kumeyaay Lake Campground day-use lot, 2 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-12-19T08:00:00",
    end: "2026-12-19T12:00:00",
    href: "https://www.sandiego.gov/event/kumeyaay-lake-campground-crew",
    status: "upcoming",
    category: "community",
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
      "Free Mission Trails walk on how park habitats, especially water, support wildlife. Kids get a nature journal and sticker. Aimed at ages 5–12 and open to everyone. Meet at the Kumeyaay Lake shade structure near the east restrooms. Rain or an extreme-heat warning cancels.",
    where: "Kumeyaay Lake Campground shade structure, 2 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-12-19T13:00:00",
    end: "2026-12-19T14:30:00",
    href: "https://mtrp.org/nature-study/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-invasive-species-2027-01",
    title: "Mission Trails Invasive Species Crew",
    summary:
      "First-Saturday volunteer crew with Ranger Dustin. Gloves, water, and snacks are provided. Wear long pants, closed-toe shoes, and sun protection, and RSVP for the meeting spot. Ages 8+; under 13 with an adult. The crew does not meet in July or August.",
    where: "Mission Trails Regional Park (meeting spot by RSVP), San Diego 92119",
    start: "2027-01-02T08:00:00",
    end: "2027-01-02T12:00:00",
    href: "https://www.sandiego.gov/event/invasive-species-crew",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-tracking-walk-2027-01",
    title: "Mission Trails tracking walk",
    summary:
      "Free first-Saturday wildlife tracking walk with the San Diego Tracking Team. Wear long pants and trail shoes. Meet in front of the Ranger Field Station. Rain cancels.",
    where:
      "East Fortuna Staging Area, Ranger Field Station, 14450 Equestrian Circle, San Diego 92124",
    start: "2027-01-02T08:00:00",
    end: "2027-01-02T10:00:00",
    href: "https://www.sdtt.org/upcoming-events/tracking-walk-jan26-4lkwm-jmk86-sf98t-bkc5e-ae2d7-ztyzm-bycl3-3jtnb-henab-2jy7j-6rlge-93lfl",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-trail-crew-2027-01",
    title: "Mission Trails Trail Improvement Crew",
    summary:
      "First-Sunday volunteer crew with Ranger Cristian Navarro. Wear long pants, closed-toe shoes, and sun protection, and bring water. The meeting spot is emailed after you RSVP. Ages 18+. The crew pauses in July, August, and September.",
    where: "Mission Trails Regional Park (meeting spot by RSVP), San Diego 92119",
    start: "2027-01-03T08:30:00",
    end: "2027-01-03T12:00:00",
    href: "https://www.sandiego.gov/event/trail-maintenance-crew",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-habitat-restoration-2027-01",
    title: "Mission Trails Habitat Restoration Crew",
    summary:
      "Second-Saturday volunteer morning with Ranger Steven. Bring gloves, sun protection, and a water bottle if you have them. Ice water and snacks are provided. Rain cancels. Ages 8+; under 13 with an adult. RSVP for the meeting spot. No crew in July or August.",
    where: "Mission Trails Regional Park (meeting spot by RSVP), San Diego 92119",
    start: "2027-01-09T08:00:00",
    end: "2027-01-09T12:00:00",
    href: "https://www.sandiego.gov/event/habitat-restoration-crew",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-discovery-tables-2027-01",
    title: "Mission Trails Discovery Table",
    summary:
      "Hands-on nature table in the Visitor Center lobby. The city lists 10:00am–12:30pm. Mission Trails has this date on the schedule and has not posted January’s topic yet.",
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
      "Land-use advisory meeting for Allied Gardens, Del Cerro, Grantville, and San Carlos. Public welcome. The board meets the second Thursday at Flood Church; August and December are dark unless a special meeting is called. The November 12 meeting has passed. Agenda: sandiego.gov/planning.",
    where: "Flood Church Community Room, 4772 Alvarado Canyon Rd, San Diego 92120",
    start: "2027-01-14T18:30:00",
    end: "2027-01-14T20:30:00",
    href: "https://www.sandiego.gov/planning/community-plans/navajo/planning-group",
    status: "upcoming",
    category: "civic",
    ics: true,
  },
  {
    id: "san-carlos-recreation-group-2027-01",
    title: "San Carlos/Lake Murray Recreation Advisory Group",
    summary:
      "Neighbors advise Parks and Recreation on programs, events, and park improvements. The city lists a 6:30pm start on the third Wednesday of odd-numbered months and does not publish an end time; this block runs to 8:00pm.",
    where: "San Carlos Recreation Center, 6445 Lake Badin Ave, San Diego 92119",
    start: "2027-01-20T18:30:00",
    end: "2027-01-20T20:00:00",
    href: "https://www.sandiego.gov/park-and-recreation/centers/recctr/sancarlos",
    status: "upcoming",
    category: "civic",
    ics: true,
  },
  {
    id: "mtrp-beautification-2027-01",
    title: "Mission Trails Park Beautification Crew",
    summary:
      "Fourth-Saturday volunteer morning with Ranger Elizabeth Delgado. Projects vary: brush, mulch, walkways, litter, and fence repair. Wear long pants, closed-toe shoes, and sun protection, and email the ranger for the project site. Under 13 with an adult. No crew in July or August. Nothing is posted for November or December.",
    where: "Mission Trails Regional Park (meeting spot by RSVP), San Diego 92119",
    start: "2027-01-23T08:00:00",
    end: "2027-01-23T12:00:00",
    href: "https://mtrp.org/volunteer/",
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
