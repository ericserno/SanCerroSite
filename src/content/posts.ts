export type Category =
  | "events"
  | "food-and-drink"
  | "local-business"
  | "school"
  | "community"
  | "recreation"
  | "random";

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: Category;
  categoryLabel: string;
  excerpt: string;
  image: string;
  featured?: boolean;
  /** Lower numbers appear first in “What neighbors are talking about.” */
  featuredOrder?: number;
  archived?: boolean;
  body: string[];
};

export const categoryMeta: Record<
  Category,
  { label: string; href: string; description: string; color: string }
> = {
  events: {
    label: "Events",
    href: "/categories/events",
    description: "Neighborhood gatherings, races, and community calendars.",
    color: "#2f6b5a",
  },
  "food-and-drink": {
    label: "Food & Drink",
    href: "/categories/food-and-drink",
    description: "Openings, staples, and the San Cerro Spritz.",
    color: "#c46b2d",
  },
  "local-business": {
    label: "Local Business",
    href: "/categories/local-business",
    description: "Neighbors who keep Del Cerro Boulevard humming.",
    color: "#3d5a80",
  },
  school: {
    label: "School",
    href: "/categories/school",
    description: "Green Elementary and nearby campus fundraisers.",
    color: "#3f8f4c",
  },
  community: {
    label: "Community",
    href: "/categories/community",
    description: "San Carlos + Del Cerro life, planning, and civic news.",
    color: "#4a6fa5",
  },
  recreation: {
    label: "Recreation",
    href: "/categories/recreation",
    description: "Trails, parks, Lake Murray, and outdoor weekends.",
    color: "#5a7d4a",
  },
  random: {
    label: "Random",
    href: "/categories/random",
    description: "Oddities, lottery tickets, and neighborhood lore.",
    color: "#7a5c8a",
  },
};

export const posts: Post[] = [
  {
    slug: "san-cerro-turkey-trot-2026",
    title: "San Cerro Turkey Trot 2026",
    date: "2026-11-26",
    category: "events",
    categoryLabel: "Events",
    excerpt:
      "Thanksgiving morning 5K — run, walk, bike, or scoot. Arrive by 8:00; race at 8:30. Bring a canned good for the Food Bank.",
    image: "/images/turkey-trot-2026.jpg",
    featured: true,
    featuredOrder: 1,
    body: [
      "Come join us for the 2026 San Cerro Turkey Trot — a neighborhood 5K run, walk, bike, or scoot on Thanksgiving morning.",
      "The course starts and ends on the corner of Wandermere Drive and Belle Glade Avenue. Arrive by 8:00; the race begins at 8:30.",
      "Prizes for fastest man, woman, stroller, girl, boy (under 12), and best dressed.",
      "Bring a canned good to donate — human or pet food. The food drive benefits the San Diego Food Bank. Run now, gobble later.",
    ],
  },
  {
    slug: "christmas-on-mt-helix-2026",
    title: "Christmas on Mt. Helix",
    date: "2026-12-05",
    category: "events",
    categoryLabel: "Events",
    excerpt:
      "Free Dec 5 holiday afternoon at Mt. Helix Park — market, crafts, Santa photos, and caroling.",
    image: "/images/hills.jpg",
    featured: true,
    featuredOrder: 2,
    body: [
      "Christmas on Mt. Helix returns Saturday, December 5, 2026, from 3–8pm at Mt. Helix Park (4901 Mt. Helix Dr, La Mesa).",
      "Expect a Christmas market, food, hot chocolate, kids’ crafts, Santa photos, and caroling. General parking is at Grossmont High School’s lower lot, 1100 Murray Dr, with shuttles to the peak.",
      "More info: https://www.mthelixpark.org/christmas",
    ],
  },
  {
    slug: "trattoria-ciccio-opens",
    title: "Trattoria Ciccio opens on Lake Murray Blvd",
    date: "2026-11-27",
    category: "food-and-drink",
    categoryLabel: "Food & Drink",
    excerpt:
      "The Aromi team turns the former Sobremesa space into a Sicilian trattoria — pastas, pinsas, and a kids’ play room. Opens Nov 27.",
    image: "/images/trattoria-ciccio.jpg",
    featured: true,
    featuredOrder: 3,
    body: [
      "Trattoria Ciccio opens Friday, November 27, 2026 at 8622 Lake Murray Boulevard in San Carlos — the 5,000-square-foot space that previously housed Sobremesa.",
      "Andrea Carbonaro and family partners (including co-owner/chef Francesco “Ciccio” Mancino) are the team behind Aromi Italian Cuisine and Trattoria da Sofia. The remodel leans classic trattoria: red-and-white striped awnings, olive accents, and a fountain in the dining room.",
      "Expect comforting pastas (spicy vodka, gnocchi cacio e pepe, braised beef ragù lasagna), shareables like stuffed zucchini blossoms, Roman-style pinsa flatbreads, and heartier plates such as brasato. There’s a dedicated kids’ play area so families can settle in.",
      "Initial hours: 3–9:30pm daily, with happy hour 3–5pm Sunday–Thursday (subject to change). Coverage: https://sandiegomagazine.com/food-drink/sobremesa-closes-making-way-for-a-new-italian-restaurant-in-san-diego/",
    ],
  },
  {
    slug: "del-cerro-pizza-and-beer-opens",
    title: "Del Cerro Pizza & Beer opens on the boulevard",
    date: "2024-12-02",
    category: "food-and-drink",
    categoryLabel: "Food & Drink",
    excerpt:
      "NY-style pies and beer on tap land in the old El Torry space at Windmill Farms plaza.",
    image: "/images/del-cerro-pizza-storefront.webp",
    body: [
      "Del Cerro Pizza & Beer opened December 2, 2024 at 6358 Del Cerro Boulevard — the Windmill Farms plaza space that previously housed El Torry.",
      "Co-owners Zee and Sadeer bring New York-style pies meant to fold, plus wings, garlic knots, salads, and beer on tap. The dining room and patio make it an easy walk-over for neighbors who already treat Del Cerro Boulevard as the neighborhood living room.",
      "Hours typically run Monday–Thursday 11am–8:30pm, Friday–Saturday 11am–9:30pm, and Sunday 11am–8pm. Delivery covers Del Cerro, San Carlos, Allied Gardens, Grantville, the College Area, and nearby La Mesa. More at delcerropizzas.com or (619) 287-8541.",
    ],
  },
  {
    slug: "navajo-community-planners-meeting",
    title: "Navajo Community Planning Group",
    date: "2026-11-12",
    category: "community",
    categoryLabel: "Community",
    excerpt:
      "Land-use meetings for Allied Gardens, Del Cerro, Grantville, and San Carlos — second Thursday at Flood Church.",
    image: "/images/navajo-planners-meeting.jpg",
    body: [
      "The Navajo Community Planning Group advises the City of San Diego on land-use items for Allied Gardens, Del Cerro, Grantville, and San Carlos.",
      "Meetings are the second Thursday of the month, 6:30–8:30pm, in the Flood Church Community Room at 4772 Alvarado Canyon Road, San Diego 92120. August and December are dark unless a special meeting is called.",
      "The November 12, 2026 meeting has already been held. Check navajoplanners.org or the city planning page for the next agenda: https://www.sandiego.gov/planning/community-plans/navajo/planning-group",
    ],
  },
  {
    slug: "local-san-cerro-real-estate-agent",
    title: "Local San Cerro Real Estate Agent — Paula Serno",
    date: "2025-11-19",
    category: "local-business",
    categoryLabel: "Local Business",
    excerpt:
      "Deep roots in Del Cerro, San Carlos, and Allied Gardens — a go-to neighbor for selling close to home.",
    image: "/images/paula-serno.png",
    body: [
      "Paula Serno is an expert on the real estate market in San Cerro (Del Cerro, San Carlos, and Allied Gardens). Call her if you need to sell a home here.",
      "With deep roots in the community and a vested interest in helping you maximize your investment, she is the go-to agent in the neighborhood.",
      "Visit paulaserno.com for more info.",
    ],
  },
  {
    slug: "the-san-cerro-spritz",
    title: "THE San Cerro Spritz",
    date: "2025-11-19",
    category: "food-and-drink",
    categoryLabel: "Food & Drink",
    excerpt: "Because it’s Tuesday. The unofficial official drink of the hill.",
    image: "/images/san-cerro-spritz.png",
    body: [
      "Here is an official drink of the San Cerro wives (and husbands).",
      "Ingredients: stemmed glass half filled with ice; 3 parts prosecco; 2 parts sparkling water; 1 part Aperol; orange slice (optional).",
      "Technique: add ice; add prosecco; add water and Aperol; stir clockwise 5 times; garnish with orange; serve; enjoy.",
    ],
  },
  {
    slug: "neighborhood-directory-highlights",
    title: "Boulevard staples worth knowing",
    date: "2025-06-01",
    category: "local-business",
    categoryLabel: "Local Business",
    excerpt:
      "Windmill Farms, KnB Bistro, Del’s Hideout, and the gallery that doubles as a clinic — San Cerro’s short commercial spine.",
    image: "/images/knb-wall.jpg",
    body: [
      "San Cerro’s commercial life is concentrated — and that’s part of the charm. Start at Windmill Farms (6386 Del Cerro Blvd), the independent market and deli locals actually use.",
      "Next door, KnB Bistro & Bottle Shop (6380 Del Cerro Blvd) runs lunch through late with a towering retail wall, patio seating, trivia nights, and no-corkage evenings on select nights.",
      "Del Cerro Pizza & Beer fills the plaza’s pizza niche. A few doors down, Del Cerro Gallery (6398 Del Cerro Blvd) has spent decades mixing healthcare and rotating local art every few months.",
      "For Texas-style BBQ and a family hangout with arcade games, Del’s Hideout sits nearby at 5351 Adobe Falls Rd. On Waring Road, Heavenly Donuts covers the Allied Gardens / San Cerro morning run.",
    ],
  },
  {
    slug: "amazon-smile-is-donating-5",
    title: "Amazon Smile is donating 5%",
    date: "2018-10-31",
    category: "school",
    categoryLabel: "School",
    excerpt:
      "Historical post — AmazonSmile later shut down. Kept here for neighborhood archive.",
    image: "/images/amazon-smile.jpg",
    archived: true,
    body: [
      "Until Friday Amazon will donate 5% of whatever you spend to a charity of your choice. Feel free to select “Myron B Green Elementary PTA.”",
      "Note: AmazonSmile was discontinued in 2023. This post remains as an archive of how neighbors used to rally for Green Elementary.",
    ],
  },
  {
    slug: "winner-winner-gas-station-dinner",
    title: "Winner Winner, Gas Station Dinner",
    date: "2018-10-30",
    category: "random",
    categoryLabel: "Random",
    excerpt: "Cool — someone in San Cerro won the lottery.",
    image: "/images/lottery-ticket.jpg",
    body: [
      "Cool, someone in San Cerro won the lottery — coverage ran on NBC 7 at the time. Neighborhood lore lives forever.",
    ],
  },
  {
    slug: "eureka-theres-a-new-place",
    title: "Eureka! there’s a new place",
    date: "2018-10-30",
    category: "food-and-drink",
    categoryLabel: "Food & Drink",
    excerpt: "A then-new restaurant south of the 8 — patio, bar, and daily happy hour.",
    image: "/images/eureka-restaurant.jpg",
    body: [
      "If you haven’t already been there, a new restaurant opened recently south of the 8. It has an indoor/outdoor bar and a great patio. Happy hour runs from 3–6 and 9–close, every day.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: Category) {
  return posts
    .filter((p) => p.category === category)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getFeaturedPosts() {
  return posts
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
}

export function getRecentPosts(limit = 9) {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit);
}
