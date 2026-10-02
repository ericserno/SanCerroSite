import type { CalendarEvent } from "@/content/calendar";
import type { Place } from "@/content/directory";
import type { Post } from "@/content/posts";
import { absoluteUrl, siteConfig } from "@/lib/site";

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    alternateName: ["San Carlos + Del Cerro", "SanCerro"],
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    logo: absoluteUrl(siteConfig.ogImage),
    areaServed: siteConfig.areaServed.map((name) => ({
      "@type": "Place",
      name,
    })),
    knowsAbout: [
      "San Carlos San Diego",
      "Del Cerro San Diego",
      "neighborhood events",
      "local businesses",
      "Lake Murray",
      "Mission Trails Regional Park",
    ],
  };
}

export function webPageJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": absoluteUrl("/#website") },
    about: {
      "@type": "Place",
      name: "San Carlos and Del Cerro",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Diego",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
  };
}

export function blogPostingJsonLd(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [absoluteUrl(post.image)],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.ogImage),
      },
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    articleSection: post.categoryLabel,
    keywords: [
      post.categoryLabel,
      "San Cerro",
      "San Carlos",
      "Del Cerro",
      "San Diego",
    ],
    inLanguage: siteConfig.language,
  };
}

export function eventListJsonLd(events: CalendarEvent[]) {
  return events.map((event) => {
    const url = event.href
      ? event.href.startsWith("/")
        ? absoluteUrl(event.href)
        : event.href
      : absoluteUrl("/events");

    return {
      "@context": "https://schema.org",
      "@type": "Event",
      name: event.title,
      description: event.summary,
      startDate: event.start,
      endDate: event.end,
      eventStatus:
        event.status === "needs-support" || event.status === "tentative"
          ? "https://schema.org/EventScheduled"
          : "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: event.where,
        address: {
          "@type": "PostalAddress",
          streetAddress: event.where,
          addressLocality: "San Diego",
          addressRegion: "CA",
          addressCountry: "US",
        },
      },
      url,
      organizer: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    };
  });
}

export function directoryJsonLd(places: Place[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "San Cerro local directory",
    description:
      "Restaurants, parks, schools, and services in San Carlos and Del Cerro.",
    numberOfItems: places.length,
    itemListElement: places.map((place, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type":
          place.kind === "park"
            ? "Park"
            : place.kind === "school"
              ? "School"
              : place.kind === "restaurant" || place.kind === "cafe" || place.kind === "bar"
                ? "LocalBusiness"
                : "Place",
        name: place.name,
        description: place.blurb,
        address: {
          "@type": "PostalAddress",
          streetAddress: place.address,
          addressLocality: "San Diego",
          addressRegion: "CA",
          addressCountry: "US",
        },
        telephone: place.phone,
        url: place.href,
        areaServed: siteConfig.areaServed,
      },
    })),
  };
}
