/** Canonical site identity for SEO, Open Graph, and structured data. */
export const siteConfig = {
  name: "San Cerro",
  shortName: "San Cerro",
  tagline: "High on San Diego",
  description:
    "Neighborhood news, events, and local directory for San Carlos and Del Cerro in San Diego — openings, school fundraisers, community calendar, and boulevard staples.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://sancerrosite.vercel.app").replace(
    /\/$/,
    "",
  ),
  locale: "en_US",
  language: "en",
  areaServed: ["San Carlos", "Del Cerro", "Allied Gardens", "Navajo", "San Diego"],
  keywords: [
    "San Cerro",
    "San Carlos San Diego",
    "Del Cerro",
    "Del Cerro Boulevard",
    "neighborhood events",
    "Lake Murray",
    "Mission Trails",
    "Turkey Trot",
    "local directory",
  ],
  ogImage: "/images/hero-welcome.png",
  twitterHandle: undefined as string | undefined,
} as const;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}
