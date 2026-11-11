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
 * Drop an event once its end time has passed instead of leaving it on the list.
 */
export const calendarEvents: CalendarEvent[] = [
  {
    id: "navajo-cpg-2026-11",
    title: "Navajo Community Planning Group",
    summary:
      "Land-use advisory meeting for Allied Gardens, Del Cerro, Grantville, and San Carlos. Public welcome. The board meets the second Thursday at Flood Church; August and December are dark unless a special meeting is called. Agenda: navajoplanners.org.",
    where: "Flood Church Community Room, 4772 Alvarado Canyon Rd, San Diego 92120",
    start: "2026-11-12T18:30:00",
    end: "2026-11-12T20:30:00",
    href: "/blog/navajo-community-planners-meeting",
    status: "upcoming",
    category: "civic",
    ics: true,
  },
  {
    id: "allied-gardens-food-drive-2026-11",
    title: "Canned food drive at Allied Gardens Pool",
    summary:
      "Special recreational and lap-swim hours. Bring unexpired canned food for Feeding San Diego.",
    where: "Allied Gardens Swimming Pool, 6707 Glenroy St, San Diego 92120",
    start: "2026-11-14T11:00:00",
    end: "2026-11-14T13:00:00",
    href: "https://www.sandiego.gov/event/canned-food-drive-allied-gardens-swimming-pool",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-habitat-restoration-2026-11",
    title: "Mission Trails Habitat Restoration Crew",
    summary:
      "Second-Saturday volunteer morning with Ranger Steven: pull invasive plants, water natives, and mulch. Bring gloves, sun protection, and a water bottle if you have them. Ice water and snacks are provided. Rain cancels. Ages 8+; under 13 with an adult. RSVP for the meeting spot. Same morning as the Holiday Marketplace at the Visitor Center.",
    where: "Mission Trails Regional Park (meeting spot by RSVP), San Diego 92119",
    start: "2026-11-14T08:00:00",
    end: "2026-11-14T12:00:00",
    href: "https://www.sandiego.gov/event/habitat-restoration-crew",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-discovery-tables-2026-11",
    title: "Mission Trails Discovery Table",
    summary:
      "Hands-on nature table in the Visitor Center lobby. The city event listing is 10:00am–12:30pm. This date overlaps the Holiday Marketplace in the same building.",
    where: "Mission Trails Visitor Center, 1 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-11-14T10:00:00",
    end: "2026-11-14T12:30:00",
    href: "https://www.sandiego.gov/event/discovery-tables-1-father-junipero-serra-trail",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-holiday-marketplace-2026",
    title: "Mission Trails Holiday Marketplace",
    summary:
      "Handmade goods from local artisans, 9am–3pm both days. Admission is free; register ahead on the park site. A portion of vendor sales supports the MTRP Foundation. The city listing says the sale is cashless (cards and Apple Pay). Visitor Center parking fills quickly — a free shuttle runs from the south end of the Keil's lot in San Carlos, between Ace Hardware and Primos, near Jackson Drive and Navajo Road.",
    where: "Mission Trails Regional Park Visitor Center, One Father Junipero Serra Trail, San Diego 92119",
    start: "2026-11-14T09:00:00",
    end: "2026-11-15T15:00:00",
    href: "https://mtrp.org/marketplace/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "benjamin-book-club-2026-11",
    title: "Benjamin Library book club",
    summary:
      "Monthly book club in the community room, third Tuesday. Copies of the book are at the front desk. No registration.",
    where: "Allied Gardens/Benjamin Library, 5188 Zion Ave, San Diego 92120",
    start: "2026-11-17T13:00:00",
    end: "2026-11-17T14:00:00",
    href: "https://sandiego.events.mylibrary.digital/event?id=320155",
    status: "upcoming",
    category: "community",
    ics: true,
  },
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
    id: "san-carlos-oasis-2026-11",
    title: "San Diego Oasis: singer-songwriter hits",
    summary:
      "Doug Beaupré plays well-known songs by James Taylor, John Denver, Billy Joel, Elton John, and others. Walk-ins welcome. The library's Oasis series continues December 18 with Legends and Lore of Chocolate.",
    where: "San Carlos Library, 7265 Jackson Dr, San Diego 92119",
    start: "2026-11-20T14:00:00",
    end: "2026-11-20T15:30:00",
    href: "https://sandiego.events.mylibrary.digital/event?id=326739",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "kumeyaay-campground-crew-2026-11",
    title: "Kumeyaay Lake Campground Crew",
    summary:
      "Third-Saturday volunteer morning with Ranger Brandon. Meet in the day-use lot. Wear long pants, closed-toe shoes, and sun protection; gloves and water if you have them. Rain cancels. Ages 8+; under 14 with an adult. The volunteer schedule also lists December 19.",
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
      "Free third-Saturday Mission Trails walk for families with kids about 5–12, and open to everyone. This month is trees and shrubs, including how to identify some trees by their leaves. Meet at the Kumeyaay Lake shade structure near the east restrooms. Kids get a nature journal and sticker. Closed-toe shoes and water. Rain or an extreme-heat warning cancels.",
    where: "Kumeyaay Lake Campground shade structure, 2 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-11-21T13:00:00",
    end: "2026-11-21T14:30:00",
    href: "https://mtrp.org/nature-study/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "benjamin-chess-2026-11",
    title: "Chess club at Benjamin Library",
    summary:
      "Patrick Henry High School chess players lead a short lesson, then matches, for beginners and returning players. Third Saturday, 2:00–4:00pm. No registration.",
    where: "Allied Gardens/Benjamin Library, 5188 Zion Ave, San Diego 92120",
    start: "2026-11-21T14:00:00",
    end: "2026-11-21T16:00:00",
    href: "https://sandiego.events.mylibrary.digital/event?id=366164",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "benjamin-short-classic-2026-11",
    title: "Benjamin Library short-classic book club",
    summary:
      "Discussion of a short classic, fourth Tuesday at 6:30pm. Copies are at the desk. No registration.",
    where: "Allied Gardens/Benjamin Library, 5188 Zion Ave, San Diego 92120",
    start: "2026-11-24T18:30:00",
    end: "2026-11-24T19:30:00",
    href: "https://sandiego.events.mylibrary.digital/event?id=318137",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "san-carlos-youth-chess-2026-11",
    title: "San Carlos youth chess",
    summary:
      "Drop-in chess at the San Carlos branch, second and fourth Tuesdays. All levels, from first game to tournament dreams.",
    where: "San Carlos Library, 7265 Jackson Dr, San Diego 92119",
    start: "2026-11-24T17:00:00",
    end: "2026-11-24T19:00:00",
    href: "https://sandiego.librarymarket.com/event/san-carlos-youth-chess-474657",
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
    id: "scfol-presale-2026-12",
    title: "San Carlos Friends book-sale preview",
    summary:
      "Members-only preview of the monthly used-book sale. You can sign up for a Friends membership that afternoon and shop the preview. Hardbacks, paperbacks, kids' books, and books on CD. Proceeds buy books, programs, and equipment for the branch.",
    where: "San Carlos Library, 7265 Jackson Dr, San Diego 92119",
    start: "2026-12-04T13:00:00",
    end: "2026-12-04T15:00:00",
    href: "https://sandiego.events.mylibrary.digital/event?id=321087",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-invasive-species-2026-12",
    title: "Mission Trails Invasive Species Crew",
    summary:
      "First-Saturday volunteer crew with Ranger Dustin, pulling mustards, thistles, and other invasive plants. Gloves, water, and snacks are provided. Wear long pants, closed-toe shoes, and sun protection, and RSVP for the meeting spot. Ages 8+; under 13 with an adult. Same morning as the wildlife tracking walk at East Fortuna.",
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
    title: "Mission Trails wildlife tracking walk",
    summary:
      "Free family walk with the San Diego Tracking Team. Two hours of looking for tracks and other signs. Meet in front of the Ranger Field Station at the East Fortuna Staging Area. Long pants and trail shoes. Rain cancels.",
    where: "East Fortuna Staging Area, Ranger Field Station, Mission Trails, San Diego 92119",
    start: "2026-12-05T08:00:00",
    end: "2026-12-05T10:00:00",
    href: "https://www.sdtt.org/upcoming-events",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "scfol-booksale-2026-12",
    title: "San Carlos Friends book sale",
    summary:
      "Monthly used-book sale, first Saturday, 9:30am–3:00pm. Hardbacks, paperbacks, children's books, and books on CD. Funds help the San Carlos branch buy books, programs, and equipment. No registration.",
    where: "San Carlos Library, 7265 Jackson Dr, San Diego 92119",
    start: "2026-12-05T09:30:00",
    end: "2026-12-05T15:00:00",
    href: "https://sandiego.events.mylibrary.digital/event?id=321129",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-concert-westwind-2026",
    title: "Concerts in the Park: Westwind Brass",
    summary:
      "Free series finale with Westwind Brass and musicians from Patrick Henry High School. The city, KPBS, and Eventbrite place it at the Visitor Center.",
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
      "Free holiday afternoon at Mt. Helix Park: Christmas market, food, hot chocolate, kids' crafts, Santa photos, and caroling. General parking is at Grossmont High School's lower lot, 1100 Murray Dr, with shuttles to the peak.",
    where: "Mt. Helix Park, 4901 Mt. Helix Dr, La Mesa",
    start: "2026-12-05T15:00:00",
    end: "2026-12-05T20:00:00",
    href: "https://www.mthelixpark.org/christmas",
    status: "upcoming",
    category: "holiday",
    ics: true,
  },
  {
    id: "san-carlos-youth-chess-2026-12",
    title: "San Carlos youth chess",
    summary:
      "Drop-in chess at the San Carlos branch, second and fourth Tuesdays. All levels.",
    where: "San Carlos Library, 7265 Jackson Dr, San Diego 92119",
    start: "2026-12-08T17:00:00",
    end: "2026-12-08T19:00:00",
    href: "https://sandiego.librarymarket.com/event/san-carlos-youth-chess-474657",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-habitat-restoration-2026-12",
    title: "Mission Trails Habitat Restoration Crew",
    summary:
      "Second-Saturday volunteer morning with Ranger Steven: pull invasive plants, water natives, and mulch. Bring gloves, sun protection, and a water bottle if you have them. Ice water and snacks are provided. Rain cancels. Ages 8+; under 13 with an adult. RSVP for the meeting spot. Same morning as the Discovery Table at the Visitor Center.",
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
    title: "Mission Trails Discovery Table",
    summary:
      "Hands-on nature table in the Visitor Center lobby, 10:00am–12:30pm on the city's event listing. The next listed date after this one is March 13, 2027.",
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
      "La Mesa Village Association's annual holiday tradition — shopping, dining, vendors, and elf hunt along La Mesa Blvd between Spring and 4th.",
    where: "La Mesa Blvd, La Mesa Village",
    start: "2026-12-12T12:00:00",
    end: "2026-12-12T21:00:00",
    href: "https://www.lamesavillageassociation.org/holiday-in-the-village-a-la-mesa-tradition",
    status: "upcoming",
    category: "holiday",
    ics: true,
  },
  {
    id: "benjamin-book-club-2026-12",
    title: "Benjamin Library book club",
    summary:
      "Monthly book club in the community room, third Tuesday. Copies of the book are at the front desk. No registration.",
    where: "Allied Gardens/Benjamin Library, 5188 Zion Ave, San Diego 92120",
    start: "2026-12-15T13:00:00",
    end: "2026-12-15T14:00:00",
    href: "https://sandiego.events.mylibrary.digital/event?id=320156",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "san-carlos-oasis-2026-12",
    title: "San Diego Oasis: Legends and Lore of Chocolate",
    summary:
      "Friday Oasis program at the San Carlos branch. The library lists a 2:00pm start; this block uses the same 90 minutes as the November singer-songwriter session.",
    where: "San Carlos Library, 7265 Jackson Dr, San Diego 92119",
    start: "2026-12-18T14:00:00",
    end: "2026-12-18T15:30:00",
    href: "https://sandiego.events.mylibrary.digital/event?id=326739",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "kumeyaay-campground-crew-2026-12",
    title: "Kumeyaay Lake Campground Crew",
    summary:
      "Third-Saturday volunteer morning with Ranger Brandon. Meet in the day-use lot. Wear long pants, closed-toe shoes, and sun protection. Rain cancels. Ages 8+; under 14 with an adult. RSVP with Ranger Brandon.",
    where: "Kumeyaay Lake Campground day-use lot, 2 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-12-19T08:00:00",
    end: "2026-12-19T12:00:00",
    href: "https://app.betterimpact.com/PublicOrganization/032e2c41-70cc-4ba9-bfc7-74e92ed28d5b/Activity/5fa1ec2a-fa74-42cf-b7cd-af3c9c72f1d4/1",
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
      "Free third-Saturday Mission Trails walk. This month is how the park's habitats, especially water, support wildlife. Meet at the Kumeyaay Lake shade structure near the east restrooms. Kids get a nature journal and sticker. Closed-toe shoes and water. Rain or an extreme-heat warning cancels.",
    where: "Kumeyaay Lake Campground shade structure, 2 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-12-19T13:00:00",
    end: "2026-12-19T14:30:00",
    href: "https://mtrp.org/nature-study/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "benjamin-chess-2026-12",
    title: "Chess club at Benjamin Library",
    summary:
      "Patrick Henry High School chess players lead a short lesson, then matches. The library describes the club as the third Saturday of every month, 2:00–4:00pm. No registration.",
    where: "Allied Gardens/Benjamin Library, 5188 Zion Ave, San Diego 92120",
    start: "2026-12-19T14:00:00",
    end: "2026-12-19T16:00:00",
    href: "https://sandiego.events.mylibrary.digital/event?id=366164",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-invasive-species-2027-01",
    title: "Mission Trails Invasive Species Crew",
    summary:
      "First-Saturday volunteer crew with Ranger Dustin, pulling mustards, thistles, and other invasive plants. Gloves, water, and snacks are provided. Wear long pants, closed-toe shoes, and sun protection, and RSVP for the meeting spot. Ages 8+; under 13 with an adult.",
    where: "Mission Trails Regional Park (meeting spot by RSVP), San Diego 92119",
    start: "2027-01-02T08:00:00",
    end: "2027-01-02T12:00:00",
    href: "https://app.betterimpact.com/PublicOrganization/032e2c41-70cc-4ba9-bfc7-74e92ed28d5b/Activity/a0519cbd-f29e-4204-9b08-3aadf058e5d6/1",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-tracking-walk-2027-01",
    title: "Mission Trails wildlife tracking walk",
    summary:
      "Free family walk with the San Diego Tracking Team. Meet in front of the Ranger Field Station at the East Fortuna Staging Area. Long pants and trail shoes. Rain cancels.",
    where: "East Fortuna Staging Area, Ranger Field Station, Mission Trails, San Diego 92119",
    start: "2027-01-02T08:00:00",
    end: "2027-01-02T10:00:00",
    href: "https://www.sdtt.org/upcoming-events",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-habitat-restoration-2027-01",
    title: "Mission Trails Habitat Restoration Crew",
    summary:
      "Second-Saturday volunteer morning with Ranger Steven: pull invasive plants, water natives, and mulch. Bring gloves, sun protection, and a water bottle if you have them. Rain cancels. Ages 8+; under 13 with an adult. RSVP for the meeting spot.",
    where: "Mission Trails Regional Park (meeting spot by RSVP), San Diego 92119",
    start: "2027-01-09T08:00:00",
    end: "2027-01-09T12:00:00",
    href: "https://app.betterimpact.com/PublicOrganization/032e2c41-70cc-4ba9-bfc7-74e92ed28d5b/Activity/7cef38a1-eb14-48bf-bd5b-c34053f0ff98/1",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "navajo-cpg-2027-01",
    title: "Navajo Community Planning Group",
    summary:
      "Regular second-Thursday land-use meeting for Allied Gardens, Del Cerro, Grantville, and San Carlos. December is dark, so this is the next session after November 12. The agenda is posted closer to the date.",
    where: "Flood Church Community Room, 4772 Alvarado Canyon Rd, San Diego 92120",
    start: "2027-01-14T18:30:00",
    end: "2027-01-14T20:30:00",
    href: "/blog/navajo-community-planners-meeting",
    status: "upcoming",
    category: "civic",
    ics: true,
  },
  {
    id: "kumeyaay-campground-crew-2027-01",
    title: "Kumeyaay Lake Campground Crew",
    summary:
      "Third-Saturday volunteer morning with Ranger Brandon. Meet in the day-use lot. Rain cancels. Ages 8+; under 14 with an adult.",
    where: "Kumeyaay Lake Campground day-use lot, 2 Father Junipero Serra Trail, San Diego 92119",
    start: "2027-01-16T08:00:00",
    end: "2027-01-16T12:00:00",
    href: "https://app.betterimpact.com/PublicOrganization/032e2c41-70cc-4ba9-bfc7-74e92ed28d5b/Activity/5fa1ec2a-fa74-42cf-b7cd-af3c9c72f1d4/1",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "paws-and-tales-2027-01",
    title: "Paws and Tales at Benjamin Library",
    summary:
      "Kids of all ages can read aloud to San Diego Humane Society canine ambassadors. No registration. The library series lists this third-Saturday session at 11am.",
    where: "Allied Gardens/Benjamin Library, 5188 Zion Ave, San Diego 92120",
    start: "2027-01-16T11:00:00",
    end: "2027-01-16T12:00:00",
    href: "https://sandiego.events.mylibrary.digital/event?id=379872",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "family-discovery-walk-2027-01",
    title: "Family Discovery Walk: Sensing Nature",
    summary:
      "Free third-Saturday Mission Trails walk, back after the July–September break. January's posted theme is Sensing Nature. Meet at the Kumeyaay Lake shade structure. Kids get a nature journal and sticker. Rain or an extreme-heat warning cancels.",
    where: "Kumeyaay Lake Campground shade structure, 2 Father Junipero Serra Trail, San Diego 92119",
    start: "2027-01-16T13:00:00",
    end: "2027-01-16T14:30:00",
    href: "https://mtrp.org/nature-study/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "san-carlos-recreation-group-2027-01",
    title: "San Carlos/Lake Murray Recreation Advisory Group",
    summary:
      "Neighbors advise Parks and Recreation on programs, events, and park improvements. Third Wednesday of odd-numbered months. The city lists a 6:30pm start and does not publish an end time; this block runs to 8:00pm.",
    where: "San Carlos Recreation Center, 6445 Lake Badin Ave, San Diego 92119",
    start: "2027-01-20T18:30:00",
    end: "2027-01-20T20:00:00",
    href: "https://www.sandiego.gov/park-and-recreation/centers/recctr/sancarlos",
    status: "upcoming",
    category: "civic",
    ics: true,
  },
  {
    id: "lakeside-rodeo-2027",
    title: "Lakeside Rodeo",
    summary:
      "PRCA-sanctioned four-day rodeo at the Lakeside Rodeo Arena — East County's big spring family event. Exact 2027 dates are typically late April; confirm on lakesiderodeo.com when tickets open.",
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
  const dateOpts: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const date = start.toLocaleDateString("en-US", dateOpts);
  const sameDay = start.toDateString() === end.toDateString();
  if (event.allDay) {
    if (sameDay) return date;
    return `${date} – ${end.toLocaleDateString("en-US", dateOpts)}`;
  }
  const startTime = start.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  const endTime = end.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  if (!sameDay) {
    return `${date} ${startTime} – ${end.toLocaleDateString("en-US", dateOpts)} ${endTime}`;
  }
  return `${date} · ${startTime}–${endTime}`;
}
