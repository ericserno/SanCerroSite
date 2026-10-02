import type { Metadata } from "next";
import { suggestions } from "@/content/suggestions";

export const metadata: Metadata = {
  title: "Site ideas",
  description:
    "Practical ideas for a stronger San Cerro neighborhood website — calendar, tips, directory, and community features.",
  alternates: { canonical: "/suggestions" },
  robots: { index: false, follow: true },
};

export default function SuggestionsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <span className="eyebrow" style={{ color: "#c9dce6" }}>
            Recommendations
          </span>
          <h1>Ideas for a stronger community site</h1>
          <p>
            Practical upgrades for a neighborhood website — beyond a pretty
            blog template.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="shell idea-grid">
          {suggestions.map((item) => (
            <article key={item.title} className="idea-block">
              {"done" in item && item.done ? (
                <span className="status-inline">Done</span>
              ) : null}
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
