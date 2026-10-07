import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FeaturedCard, PostCard } from "@/components/PostCard";
import { JsonLd } from "@/components/JsonLd";
import { categoryMeta, getFeaturedPosts, getRecentPosts } from "@/content/posts";
import { webPageJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} — ${siteConfig.tagline}`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = getFeaturedPosts();
  const recent = getRecentPosts(9);
  const categories = Object.values(categoryMeta);

  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: `${siteConfig.name} — ${siteConfig.tagline}`,
          description: siteConfig.description,
          path: "/",
        })}
      />
      <section className="hero">
        <div className="hero-media">
          <Image
            src="/images/hero-welcome.png"
            alt="Welcome to San Cerro neighborhood entrance"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-veil" />
        </div>
        <div className="shell hero-copy">
          <h1>San Cerro</h1>
          <p className="hero-sub">
            High on San Diego — neighborhood life for San Carlos and Del Cerro.
          </p>
          <div className="cta-row">
            <Link href="/events" className="button button-primary">
              See Calendar
            </Link>
            <Link href="/directory" className="button button-ghost">
              Local directory
            </Link>
          </div>
        </div>
      </section>

      <div className="shell">
        <div className="category-strip reveal">
          {categories.map((cat) => (
            <Link key={cat.href} href={cat.href} className="category-chip">
              {cat.label}
            </Link>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="shell">
          <div className="section-head reveal">
            <h2>What neighbors are talking about</h2>
            <p>
              Turkey Trot 2026, Navajo planners, Oktoberfests, and boulevard pizza.
            </p>
          </div>
          <div className="featured-grid">
            {featured.map((post, i) => (
              <div key={post.slug} className={`reveal reveal-delay-${i + 1}`}>
                <FeaturedCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="shell">
          <div className="section-head reveal">
            <h2>Most recent</h2>
            <p>Posts from the original San Cerro site, plus new neighborhood updates.</p>
          </div>
          <div className="post-grid">
            {recent.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="section newsletter">
        <div className="shell">
          <div className="section-head">
            <h2>Stay in touch</h2>
            <p>
              Race mornings, school fundraisers, and boulevard openings — send a tip
              when something’s happening on the hill.
            </p>
          </div>
          <div className="cta-row" style={{ marginTop: "1.25rem" }}>
            <Link href="/contact" className="button button-primary">
              Submit a tip
            </Link>
            <Link href="/events" className="button button-ghost">
              Community calendar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
