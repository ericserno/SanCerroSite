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
    id: "allied-gardens-halloween-2026",
    title: "Allied Gardens Halloween Carnival",
    summary:
      "Free carnival with a live DJ, prizes, and a costume contest at the recreation center. Contest times: ages 0–2 at 5:20pm, 3–5 at 5:40pm, 6–9 at 6:00pm, and 10+ at 6:20pm.",
    where: "Allied Gardens Recreation Center, 5155 Greenbrier Ave, San Diego 92120",
    start: "2026-10-16T17:00:00",
    end: "2026-10-16T19:00:00",
    href: "https://www.sandiego.gov/sites/default/files/alliedgardens.pdf",
    status: "past",
    category: "holiday",
    ics: false,
  },
  {
    id: "kumeyaay-campground-crew-2026-10",
    title: "Kumeyaay Lake Campground Crew",
    summary:
      "Third-Saturday volunteer morning with Ranger Brandon. Meet in the day-use lot. Wear long pants, closed-toe shoes, and sun protection; bring gloves and water if you have them. Rain cancels. Ages 8+; under 14 with an adult.",
    where: "Kumeyaay Lake Campground day-use lot, 2 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-10-17T08:00:00",
    end: "2026-10-17T12:00:00",
    href: "https://www.sandiego.gov/event/kumeyaay-lake-campground-crew",
    status: "past",
    category: "community",
    ics: false,
  },
  {
    id: "paws-and-tales-2026-10",
    title: "Paws and Tales at Benjamin Library",
    summary:
      "Kids of all ages can read aloud to San Diego Humane Society canine ambassadors. No registration. The library hosts this on the third Saturday of the month.",
    where: "Allied Gardens/Benjamin Library, 5188 Zion Ave, San Diego 92120",
    start: "2026-10-17T11:00:00",
    end: "2026-10-17T12:00:00",
    href: "https://sdhumane.org/event/paws-and-tales-at-allied-gardens-benjamin-branch-library/2026-10-17/",
    status: "past",
    category: "community",
    ics: false,
  },
  {
    id: "family-discovery-walk-2026-10",
    title: "Family Discovery Walk",
    summary:
      "Free Mission Trails walk for families, aimed at ages 5–12 and open to everyone. Meet at the Kumeyaay Lake shade structure. Kids get a nature journal and sticker. This month’s theme is not posted yet. Closed-toe shoes, water, hat, and sunscreen. Rain cancels.",
    where: "Kumeyaay Lake Campground shade structure, 2 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-10-17T13:00:00",
    end: "2026-10-17T14:30:00",
    href: "https://mtrp.org/nature-study/",
    status: "past",
    category: "community",
    ics: false,
  },
  {
    id: "mtrp-concert-left-coast-2026",
    title: "Concerts in the Park: Left Coast Woodwind Quintet",
    summary:
      "Free outdoor concert of autumnal and contemporary woodwind music at the Visitor Center amphitheater.",
    where: "Mission Trails Visitor Center, 1 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-10-17T14:00:00",
    end: "2026-10-17T15:30:00",
    href: "https://www.sandiego.gov/event/concerts-park-mission-trails-regional-park-0",
    status: "past",
    category: "community",
    ics: false,
  },
  {
    id: "san-carlos-halloween-2026",
    title: "San Carlos Halloween Carnival",
    summary:
      "Free carnival with games, prizes, jumpers, music, trunk-or-treating, and a costume contest. Contest starts at 5:30pm: ages 0–3, then 4–6, 7–9, and 10–12.",
    where: "San Carlos Community Park, 6445 Lake Badin Ave, San Diego 92119",
    start: "2026-10-23T17:00:00",
    end: "2026-10-23T19:00:00",
    href: "https://www.sandiego.gov/event/halloween-carnival-costume-contest-san-carlos-community-park",
    status: "past",
    category: "holiday",
    ics: false,
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
    status: "past",
    category: "community",
    ics: false,
  },
  {
    id: "allied-gardens-yoga-2026-10",
    title: "Free yoga at Allied Gardens",
    summary:
      "Free drop-in yoga for ages 18+ in the recreation center. Register on SDRecConnect with code 136375.",
    where: "Allied Gardens Recreation Center, 5155 Greenbrier Ave, San Diego 92120",
    start: "2026-10-30T10:30:00",
    end: "2026-10-30T11:30:00",
    href: "https://www.sandiego.gov/park-and-recreation/centers/recctr/allied",
    status: "past",
    category: "community",
    ics: false,
  },
  {
    id: "la-mesa-halloween-2026",
    title: "Halloween in La Mesa Village",
    summary:
      "Free trick-or-treating at participating Village businesses along La Mesa Blvd between Grant and Acacia (and Spring St). Bring your own bag and costume. Pet costume contest check-in starts at 3:30pm at the Fountain Courtyard by the trolley station.",
    where: "La Mesa Blvd, La Mesa Village",
    start: "2026-10-31T16:00:00",
    end: "2026-10-31T18:00:00",
    href: "https://www.lamesavillageassociation.org/trick-or-treating-in-la-mesa-village",
    status: "past",
    category: "holiday",
    ics: false,
  },
  {
    id: "mtrp-invasive-species-2026-11",
    title: "Mission Trails Invasive Species Crew",
    summary:
      "First-Saturday volunteer crew with Ranger Dustin, pulling mustards, thistles, and other invasive plants. Gloves, water, and snacks are provided. Wear long pants, closed-toe shoes, and sun protection, and RSVP for the meeting spot. Ages 8+; under 13 with an adult.",
    where: "Mission Trails Regional Park (meeting spot by RSVP), San Diego 92119",
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
      "20th annual tour, “Artists & Officers,” through historic homes in Grossmont Colony and Mt. Helix. Tickets are sold online. Shuttles leave from the Grossmont High School parking lot. Plan on about three hours; the History Center suggests starting by noon.",
    where: "Grossmont Colony & Mt. Helix; shuttle from 1100 Murray Dr, El Cajon",
    start: "2026-11-07T09:00:00",
    end: "2026-11-07T15:00:00",
    href: "https://www.lamesahistory.com/annual-historic-home-tour-in-la-mesa/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
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
      "Free handmade-goods market at the Visitor Center, 9am–3pm both days. 30% of each vendor’s sales supports the MTRP Foundation. Visitor Center parking fills up; the park asks shoppers to use the free shuttle from the south end of the Keil’s lot at Jackson Drive and Navajo Road, between Ace Hardware and Primos.",
    where: "Mission Trails Regional Park Visitor Center, One Father Junipero Serra Trail",
    start: "2026-11-14T09:00:00",
    end: "2026-11-15T15:00:00",
    href: "https://mtrp.org/marketplace/",
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
      "Free third-Saturday Mission Trails walk for families, aimed at ages 5–12 and open to everyone. This month’s theme is trees and shrubs. Meet at the Kumeyaay Lake shade structure near the east restrooms. Kids get a nature journal and sticker. Closed-toe shoes and water. Rain cancels.",
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
    id: "mtrp-concert-westwind-2026",
    title: "Concerts in the Park: Westwind Brass",
    summary:
      "Free season finale in the Visitor Center amphitheater. Westwind Brass plays holiday and seasonal favorites with the Patrick Henry High School band. The concert begins at 2:00pm.",
    where: "Mission Trails Visitor Center amphitheater, 1 Father Junipero Serra Trail, San Diego 92119",
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
    title: "Discovery Table: Animal Tracks",
    summary:
      "Hands-on animal-tracks table in the Visitor Center lobby. Match animals to their tracks. The park calendar lists 10:00am–1:00pm; the city’s standing listing still says 10:00am–12:30pm.",
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
      "Free third-Saturday Mission Trails walk for families, aimed at ages 5–12 and open to everyone. This month’s theme is wildlife habitats and why water matters. Meet at the Kumeyaay Lake shade structure near the east restrooms. Kids get a nature journal and sticker. Rain cancels.",
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
  {
    id: "scfol-presale-2026-11",
    title: "San Carlos Library members’ book pre-sale",
    summary:
      "San Carlos Friends of the Library members’ preview of the monthly used-book sale. Join or renew on the spot and shop the same afternoon. The public sale is the next morning.",
    where: "San Carlos Library, Winer Family Community Room, 7265 Jackson Dr, San Diego 92119",
    start: "2026-11-06T13:00:00",
    end: "2026-11-06T15:00:00",
    href: "https://sandiego.events.mylibrary.digital/event?id=321086",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-tracking-walk-2026-11",
    title: "Mission Trails wildlife tracking walk",
    summary:
      "Free family-friendly walk with the San Diego Tracking Team. Two hours of looking for tracks and other sign. Meet in front of the East Fortuna Ranger Field Station. Long pants and trail shoes. Rain cancels.",
    where: "East Fortuna Ranger Field Station, 14450 Equestrian Circle, Mission Trails",
    start: "2026-11-07T08:00:00",
    end: "2026-11-07T10:00:00",
    href: "https://www.sdtt.org/upcoming-events",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "scfol-booksale-2026-11",
    title: "San Carlos Friends of the Library book sale",
    summary:
      "Monthly used-book sale: hardbacks, paperbacks, books on CD, and children’s books. Proceeds buy books, programs, and equipment for the San Carlos branch. No registration.",
    where: "San Carlos Library, Winer Family Community Room, 7265 Jackson Dr, San Diego 92119",
    start: "2026-11-07T09:30:00",
    end: "2026-11-07T15:00:00",
    href: "https://sandiego.events.mylibrary.digital/event?id=321128",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-discovery-mountain-lions-2026-11",
    title: "Discovery Table: Mountain Lions",
    summary:
      "Drop-in table in the Visitor Center lobby. Trail guides cover mountain lion size, range, and local sightings, and kids can stamp a full-size track to take home.",
    where: "Mission Trails Visitor Center, 1 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-11-07T10:00:00",
    end: "2026-11-07T13:00:00",
    href: "https://mtrp.org/events/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-inaturalist-2026-11",
    title: "iNaturalist walk at Kumeyaay Lake",
    summary:
      "Free guided walk to photograph plants and animals for iNaturalist. App help starts at 2:00pm; the walk runs 2:30–4:30pm from the Kumeyaay Lake shade structure. No registration. These walks are the first Saturday of March, April, May, and November. Rain cancels.",
    where: "Kumeyaay Lake Campground shade structure, 2 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-11-07T14:30:00",
    end: "2026-11-07T16:30:00",
    href: "https://mtrp.org/events/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-salsa-night-2026",
    title: "Salsa Night at Mission Trails",
    summary:
      "Free evening at the Visitor Center with Westwind Brass and Latin percussionist Manny Cepeda. Salsa dance lessons are included.",
    where: "Mission Trails Visitor Center, 1 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-11-07T17:00:00",
    end: "2026-11-07T18:30:00",
    href: "https://mtrp.org/events/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "allied-gardens-crg-2026-11",
    title: "Allied Gardens Community Recreation Group",
    summary:
      "Public advisory meeting on parks and recreation in the Navajo area. The posted agenda includes a Foster Elementary joint-use update. The notice lists a 6:30pm start and does not publish an end time; this block runs to 8:00pm. The same notice sets the next meeting for January 4, 2027.",
    where: "Gardens Room, Allied Gardens Recreation Center, 5155 Greenbrier Ave, San Diego 92120",
    start: "2026-11-09T18:30:00",
    end: "2026-11-09T20:00:00",
    href: "https://www.sandiego.gov/sites/default/files/2026-09/alliedgardenscrga20261109.pdf",
    status: "upcoming",
    category: "civic",
    ics: true,
  },
  {
    id: "mtrp-discovery-kumeyaay-games-2026-11",
    title: "Discovery Table: Kumeyaay Children’s Games",
    summary:
      "Drop-in Veterans Day table in the Visitor Center lobby. Trail guides share Kumeyaay games, and kids can make a stick-dice game to take home.",
    where: "Mission Trails Visitor Center, 1 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-11-11T10:00:00",
    end: "2026-11-11T13:00:00",
    href: "https://mtrp.org/events/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "scfol-annual-meeting-2026",
    title: "San Carlos Friends of the Library annual meeting",
    summary:
      "Annual membership meeting, open to the public. Board reports, 2027 officer approval, new Life Members, and a talk by Lt. Cmdr. Bill Grella on life aboard a submarine. Refreshments. No registration. The library calendar lists Tuesday; the Friends homepage still shows an older Wednesday line.",
    where: "San Carlos Library, Winer Family Community Room, 7265 Jackson Dr, San Diego 92119",
    start: "2026-11-17T15:00:00",
    end: "2026-11-17T16:30:00",
    href: "https://sandiego.events.mylibrary.digital/event?id=326694",
    status: "upcoming",
    category: "civic",
    ics: true,
  },
  {
    id: "mtrp-bird-walk-2026-11-20",
    title: "Guided bird walk: Oak Grove Loop",
    summary:
      "Free bird walk on the Oak Grove Loop, watching for resident birds, migrants, and hawks. Meet in front of the Visitor Center. Bring binoculars if you have them. Rain or an extreme-heat warning cancels.",
    where: "Mission Trails Visitor Center, 1 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-11-20T08:00:00",
    end: "2026-11-20T10:30:00",
    href: "https://mtrp.org/events/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-bird-walk-2026-11-21",
    title: "Guided bird walk: Oak Grove Loop",
    summary:
      "Saturday Oak Grove Loop walk, pitched for beginning birders and open to everyone. Meet in front of the Visitor Center. Bring binoculars if you have them. Rain or an extreme-heat warning cancels.",
    where: "Mission Trails Visitor Center, 1 Father Junipero Serra Trail, San Diego 92119",
    start: "2026-11-21T08:00:00",
    end: "2026-11-21T10:30:00",
    href: "https://mtrp.org/events/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "scfol-presale-2026-12",
    title: "San Carlos Library members’ book pre-sale",
    summary:
      "Friends of the Library members’ preview ahead of the December book sale. Join or renew on the spot and shop the same afternoon.",
    where: "San Carlos Library, Winer Family Community Room, 7265 Jackson Dr, San Diego 92119",
    start: "2026-12-04T13:00:00",
    end: "2026-12-04T15:00:00",
    href: "https://sandiego.events.mylibrary.digital/event?id=321087",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-tracking-walk-2026-12",
    title: "Mission Trails wildlife tracking walk",
    summary:
      "Free family-friendly San Diego Tracking Team walk at East Fortuna. Meet in front of the Ranger Field Station. Long pants and trail shoes. Rain cancels.",
    where: "East Fortuna Ranger Field Station, 14450 Equestrian Circle, Mission Trails",
    start: "2026-12-05T08:00:00",
    end: "2026-12-05T10:00:00",
    href: "https://www.sdtt.org/upcoming-events",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "scfol-booksale-2026-12",
    title: "San Carlos Friends of the Library book sale",
    summary:
      "First-Saturday used-book sale. Hardbacks, paperbacks, books on CD, and children’s books. Proceeds support the San Carlos branch. No registration.",
    where: "San Carlos Library, Winer Family Community Room, 7265 Jackson Dr, San Diego 92119",
    start: "2026-12-05T09:30:00",
    end: "2026-12-05T15:00:00",
    href: "https://sandiego.events.mylibrary.digital/event?id=321128",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "sdnhm-kumeyaay-lake-2026-12",
    title: "Canyoneer hike at Kumeyaay Lake",
    summary:
      "Free, easy San Diego Natural History Museum hike along the lakeshore, about 2 miles with 100 feet of elevation change. Capacity is 25 and advance registration is required. Public signup opens November 12 at 9:00am. Meet in the parking lot at Bushy Hill Drive and Father Junipero Serra Trail.",
    where: "Kumeyaay Lake parking lot, Bushy Hill Dr and Father Junipero Serra Trail, San Diego 92119",
    start: "2026-12-12T09:00:00",
    end: "2026-12-12T10:30:00",
    href: "https://www.sdnhm.org/education/canyoneer-hikes/canyoneer-hike-list/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-bird-walk-2026-12-18",
    title: "Guided bird walk: Lake Murray",
    summary:
      "Free winter bird walk on the northwest shore, looking for waterfowl and tricolored blackbirds. Enter at Murray Park Drive and Belle Glade Avenue, pass the ballfields, and turn into the paved lot on the right. Rain or an extreme-heat warning cancels.",
    where: "Lake Murray northwest lot, Murray Park Dr and Belle Glade Ave, San Diego 92119",
    start: "2026-12-18T08:00:00",
    end: "2026-12-18T10:30:00",
    href: "https://mtrp.org/events/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-bird-walk-2026-12-19",
    title: "Guided bird walk: Lake Murray",
    summary:
      "Saturday Lake Murray walk, pitched for beginning birders and open to everyone. Same northwest-shore lot: enter at Murray Park Drive and Belle Glade Avenue, pass the ballfields, and turn right into the paved lot. Rain or an extreme-heat warning cancels.",
    where: "Lake Murray northwest lot, Murray Park Dr and Belle Glade Ave, San Diego 92119",
    start: "2026-12-19T08:00:00",
    end: "2026-12-19T10:30:00",
    href: "https://mtrp.org/events/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-tracking-walk-2027-01",
    title: "Mission Trails wildlife tracking walk",
    summary:
      "Free family-friendly San Diego Tracking Team walk at East Fortuna. The team has this January date posted. Meet in front of the Ranger Field Station. Rain cancels.",
    where: "East Fortuna Ranger Field Station, 14450 Equestrian Circle, Mission Trails",
    start: "2027-01-02T08:00:00",
    end: "2027-01-02T10:00:00",
    href: "https://www.sdtt.org/upcoming-events",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "allied-gardens-crg-2027-01",
    title: "Allied Gardens Community Recreation Group",
    summary:
      "Next posted meeting after November 9. The November notice lists January 4 at 6:30pm and does not include a January agenda. This block runs to 8:00pm.",
    where: "Gardens Room, Allied Gardens Recreation Center, 5155 Greenbrier Ave, San Diego 92120",
    start: "2027-01-04T18:30:00",
    end: "2027-01-04T20:00:00",
    href: "https://www.sandiego.gov/sites/default/files/2026-09/alliedgardenscrga20261109.pdf",
    status: "upcoming",
    category: "civic",
    ics: true,
  },
  {
    id: "mtrp-discovery-tables-2027-01",
    title: "Mission Trails Discovery Table",
    summary:
      "Second-Saturday hands-on table in the Visitor Center lobby. The city lists January 9, 10:00am–12:30pm. The park calendar names the date and still has the topic as TBD.",
    where: "Mission Trails Visitor Center, 1 Father Junipero Serra Trail, San Diego 92119",
    start: "2027-01-09T10:00:00",
    end: "2027-01-09T12:30:00",
    href: "https://www.sandiego.gov/event/discovery-tables-1-father-junipero-serra-trail",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-bird-walk-2027-01-15",
    title: "Guided bird walk: Grasslands and Spring Canyon",
    summary:
      "Friday bird walk at East Fortuna. The park lists this date and meeting place in the current walk notes; hours follow the standing 8:00–10:30am Friday and Saturday block. Meet in front of the Ranger Field Station off Highway 52 and Mast Boulevard. Rain or an extreme-heat warning cancels.",
    where: "East Fortuna Ranger Field Station, Highway 52 and Mast Blvd, Santee",
    start: "2027-01-15T08:00:00",
    end: "2027-01-15T10:30:00",
    href: "https://mtrp.org/events/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "mtrp-bird-walk-2027-01-16",
    title: "Guided bird walk: Grasslands and Spring Canyon",
    summary:
      "Saturday bird walk at East Fortuna, pitched for beginning birders and open to everyone. Meet in front of the Ranger Field Station off Highway 52 and Mast Boulevard. Rain or an extreme-heat warning cancels.",
    where: "East Fortuna Ranger Field Station, Highway 52 and Mast Blvd, Santee",
    start: "2027-01-16T08:00:00",
    end: "2027-01-16T10:30:00",
    href: "https://mtrp.org/events/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "paws-and-tales-2027-01",
    title: "Paws and Tales at Benjamin Library",
    summary:
      "Kids of all ages can read aloud to San Diego Humane Society canine ambassadors. The library lists this third-Saturday session at 11am. No registration.",
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
      "Free third-Saturday Mission Trails walk for families, aimed at ages 5–12 and open to everyone. The park lists January’s theme as Sensing Nature. Meet at the Kumeyaay Lake shade structure. Rain cancels.",
    where: "Kumeyaay Lake Campground shade structure, 2 Father Junipero Serra Trail, San Diego 92119",
    start: "2027-01-16T13:00:00",
    end: "2027-01-16T14:30:00",
    href: "https://mtrp.org/nature-study/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "family-discovery-walk-2027-02",
    title: "Family Discovery Walk: Animals and Tracks",
    summary:
      "Free third-Saturday Mission Trails walk for families. The park lists February’s theme as animals and tracks. Meet at the Kumeyaay Lake shade structure. Rain cancels.",
    where: "Kumeyaay Lake Campground shade structure, 2 Father Junipero Serra Trail, San Diego 92119",
    start: "2027-02-20T13:00:00",
    end: "2027-02-20T14:30:00",
    href: "https://mtrp.org/nature-study/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
  {
    id: "family-discovery-walk-2027-03",
    title: "Family Discovery Walk: Birds and Nests",
    summary:
      "Free third-Saturday Mission Trails walk for families. The park lists March’s theme as birds and nests. Meet at the Kumeyaay Lake shade structure. Rain cancels.",
    where: "Kumeyaay Lake Campground shade structure, 2 Father Junipero Serra Trail, San Diego 92119",
    start: "2027-03-20T13:00:00",
    end: "2027-03-20T14:30:00",
    href: "https://mtrp.org/nature-study/",
    status: "upcoming",
    category: "community",
    ics: true,
  },
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
    href: "/blog/bulls-only-rodeo-2026",
    status: "past",
    category: "community",
    ics: false,
  },
  {
    id: "park-cleanup-fall-2026",
    title: "Princess Del Cerro Park tidy-up",
    summary:
      "Neighbor-led litter pickup and playground wipe-down. Bring gloves; kids welcome with a parent.",
    where: "Princess Del Cerro Park",
    start: "2026-10-11T09:00:00",
    end: "2026-10-11T11:00:00",
    status: "past",
    category: "community",
    ics: false,
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
