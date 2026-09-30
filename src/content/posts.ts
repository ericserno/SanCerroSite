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
    slug: "del-cerro-pizza-and-beer-opens",
    title: "Del Cerro Pizza & Beer opens on the boulevard",
    date: "2024-12-02",
    category: "food-and-drink",
    categoryLabel: "Food & Drink",
    excerpt:
      "NY-style pies and beer on tap land in the old El Torry space at Windmill Farms plaza.",
    image: "/images/del-cerro-pizza-storefront.webp",
    featured: true,
    body: [
      "Del Cerro Pizza & Beer opened December 2, 2024 at 6358 Del Cerro Boulevard — the Windmill Farms plaza space that previously housed El Torry.",
      "Co-owners Zee and Sadeer bring New York-style pies meant to fold, plus wings, garlic knots, salads, and beer on tap. The dining room and patio make it an easy walk-over for neighbors who already treat Del Cerro Boulevard as the neighborhood living room.",
      "Hours typically run Monday–Thursday 11am–8:30pm, Friday–Saturday 11am–9:30pm, and Sunday 11am–8pm. Delivery covers Del Cerro, San Carlos, Allied Gardens, Grantville, the College Area, and nearby La Mesa. More at delcerropizzas.com or (619) 287-8541.",
    ],
  },
  {
    slug: "2025-san-cerro-turkey-trot",
    title: "2025 San Cerro Turkey Trot",
    date: "2025-11-19",
    category: "events",
    categoryLabel: "Events",
    excerpt:
      "Thanksgiving morning 5K — run, walk, bike, or scoot. Bring a canned good for the Food Bank.",
    image: "/images/turkey-trot-2025.png",
    featured: true,
    body: [
      "Join us Thanksgiving morning for the San Cerro Turkey Trot — a neighborhood 5K you can run, walk, bike, or scoot.",
      "The course starts and ends at the corner of Wandermere Drive and Belle Glade Avenue. Arrive by 8:00; the race begins at 8:30.",
      "Prizes go to the fastest man, woman, stroller, girl (under 12), boy (under 12), and best dressed.",
      "Bring canned goods to donate — human or pet food. The food drive benefits the San Diego Food Bank via Pershing Middle School.",
    ],
  },
  {
    slug: "lake-murray-fireworks-future",
    title: "Lake Murray July 4th: cancelations and the path back",
    date: "2025-07-03",
    category: "events",
    categoryLabel: "Events",
    excerpt:
      "The beloved lakeside show stayed dark in 2025. Neighbors are still the only path to a return.",
    image: "/images/bridges.jpg",
    featured: true,
    body: [
      "The Lake Murray Fireworks and Music Festival — long a July 4th anchor for San Carlos, Del Cerro, and the wider Navajo community — was canceled in 2025 after permit costs spiked and fireworks restrictions tightened.",
      "Organizers described a volunteer-run nonprofit stretched thin: higher city fees, retiring long-time board members, and pressure to shift toward a drone show that would cost even more.",
      "Turkey Trot fundraisers in past years helped keep Eagles n’ Freedom / Lake Murray fireworks afloat. If you want lights back over the water, the practical moves are the same as always: donate, volunteer for the board, and watch for updates from Lake Murray Fireworks and Events.",
      "Until then, Lake Murray Community Park remains a gathering spot for parade energy and neighbor hangouts — just without the night sky show.",
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
    slug: "2022-san-cerro-turkey-trot",
    title: "2022 San Cerro Turkey Trot",
    date: "2022-11-19",
    category: "events",
    categoryLabel: "Events",
    excerpt: "Community Thanksgiving morning — prizes, swag, and fireworks fundraising.",
    image: "/images/turkey-trot-2022.jpg",
    body: [
      "Join your community on Thanksgiving morning.",
      "Prizes for winners, opportunities to donate to Lake Murray Fireworks, and swag at redbubble.com/shop/ap/130770526.",
    ],
  },
  {
    slug: "turkey-trot-for-eagles-n-freedom",
    title: "Turkey Trot for Eagles n’ Freedom",
    date: "2021-11-08",
    category: "events",
    categoryLabel: "Events",
    excerpt: "Thanksgiving morning race supporting Lake Murray fireworks.",
    image: "/images/turkey-trot-eagles.jpg",
    body: [
      "There will be a Turkey Trot race on Thanksgiving morning to help fund the 4th of July fireworks at Lake Murray.",
    ],
  },
  {
    slug: "green-jog-a-thon-2021",
    title: "Green Jog-A-Thon 2021",
    date: "2021-11-08",
    category: "school",
    categoryLabel: "School",
    excerpt: "Support Green Elementary — relationships, learning, and neighborhood kids.",
    image: "/images/green-jogathon-2021.png",
    body: [
      "Green Elementary is where student learning thrives and children feel good about the place they call their school.",
      "We believe that is because of the incredible students, the staff who know relationships matter, and the support of our families. No amount is too small — your ongoing backing is truly appreciated.",
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
  {
    slug: "green-jog-a-thon",
    title: "Green Jog-a-Thon",
    date: "2018-10-30",
    category: "school",
    categoryLabel: "School",
    excerpt: "Annual Green Elementary Jog-a-Thon — learn more or donate.",
    image: "/images/green-gecko.png",
    body: [
      "Green Elementary will be hosting its annual Jog-a-Thon soon. Learn more or donate through the school’s PTA channels.",
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
  return posts.filter((p) => p.featured).sort((a, b) => b.date.localeCompare(a.date));
}

export function getRecentPosts(limit = 9) {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit);
}
