import type { Metadata } from "next";
import Link from "next/link";
import { categoryMeta } from "@/content/posts";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Browse San Cerro posts by topic — events, food and drink, local business, school, community, and recreation in San Carlos and Del Cerro.",
  alternates: { canonical: "/categories" },
};

export default function CategoriesIndexPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <span className="eyebrow" style={{ color: "#c9dce6" }}>
            Browse
          </span>
          <h1>Categories</h1>
          <p>Events, food, school, recreation, and the rest of neighborhood life.</p>
        </div>
      </section>
      <section className="section">
        <div className="shell idea-grid">
          {Object.values(categoryMeta).map((cat) => (
            <Link key={cat.href} href={cat.href} className="idea-block">
              <h3>{cat.label}</h3>
              <p>{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
