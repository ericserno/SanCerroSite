import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/**
 * Allow major search and AI-answer crawlers.
 * Training bots (GPTBot, Google-Extended, ClaudeBot) stay allowed so Gemini /
 * ChatGPT can ground answers in this site; tighten later if needed.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: new URL(absoluteUrl("/")).host,
  };
}
