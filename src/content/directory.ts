export type Place = {
  name: string;
  kind: "restaurant" | "market" | "cafe" | "bar" | "shop" | "service" | "park" | "school";
  address: string;
  blurb: string;
  href?: string;
  phone?: string;
  opened?: string;
  status?: "open" | "new" | "staple";
};

export const places: Place[] = [
  {
    name: "Del Cerro Pizza & Beer",
    kind: "restaurant",
    address: "6358 Del Cerro Blvd, San Diego, CA 92120",
    blurb:
      "NY-style pizza, beer on tap, patio seating. Opened December 2024 in the former El Torry space.",
    href: "https://delcerropizzas.com/",
    phone: "(619) 287-8541",
    opened: "2024-12-02",
    status: "new",
  },
  {
    name: "KnB Bistro & Bottle Shop",
    kind: "restaurant",
    address: "6380 Del Cerro Blvd, San Diego, CA 92120",
    blurb:
      "Half bistro, half bottle wall — lunch, dinner, brunch, trivia, and no-corkage nights.",
    phone: "(619) 452-1777",
    status: "staple",
  },
  {
    name: "Windmill Farms Market",
    kind: "market",
    address: "6386 Del Cerro Blvd, San Diego, CA 92120",
    blurb: "Independent grocery, produce, and deli — the boulevard’s daily anchor.",
    status: "staple",
  },
  {
    name: "Del’s Hideout",
    kind: "restaurant",
    address: "5351 Adobe Falls Rd, San Diego, CA 92120",
    blurb:
      "Texas-style BBQ, sports bar energy, arcade games, and a kids’ play zone.",
    href: "https://www.cohnrestaurants.com/delshideout",
    phone: "(619) 255-8175",
    status: "staple",
  },
  {
    name: "Del Cerro Gallery",
    kind: "shop",
    address: "6398 Del Cerro Blvd, San Diego, CA 92120",
    blurb:
      "Healthcare office + rotating local art shows every few months — 30+ years on the hill.",
    status: "staple",
  },
  {
    name: "Heavenly Donuts",
    kind: "cafe",
    address: "5132 Waring Rd, San Diego, CA 92120",
    blurb: "Frosted morning stops for Allied Gardens and San Cerro neighbors.",
    status: "staple",
  },
  {
    name: "Paula Serno Real Estate",
    kind: "service",
    address: "Del Cerro / San Carlos / Allied Gardens",
    blurb: "Neighborhood-focused listing agent with deep local roots.",
    href: "https://paulaserno.com",
    status: "open",
  },
  {
    name: "Myron B. Green Elementary",
    kind: "school",
    address: "7030 Wandermere Dr, San Diego, CA 92119",
    blurb: "Neighborhood school — Jog-a-Thons, PTA, and Turkey Trot ground zero.",
    href: "https://green.sandiegounified.org/",
    phone: "(619) 510-4200",
    status: "staple",
  },
  {
    name: "Princess Del Cerro Park",
    kind: "park",
    address: "Del Cerro, San Diego, CA 92120",
    blurb: "Playground favorite and occasional community supply-drive host.",
    status: "staple",
  },
  {
    name: "Lake Murray Community Park",
    kind: "park",
    address: "San Carlos side of Lake Murray",
    blurb:
      "Trails, playground, and the historic home of the July 4th music fest.",
    status: "staple",
  },
];
