import type { MetadataRoute } from "next";
import { categoryMeta, posts } from "@/content/posts";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/events"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/directory"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/about"), lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: absoluteUrl("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/categories"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/suggestions"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = Object.values(categoryMeta).map(
    (category) => ({
      url: absoluteUrl(category.href),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.65,
    }),
  );

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(`${post.date}T12:00:00`),
    changeFrequency: "yearly" as const,
    priority: post.featured ? 0.8 : 0.55,
  }));

  return [...staticRoutes, ...categoryRoutes, ...postRoutes];
}
