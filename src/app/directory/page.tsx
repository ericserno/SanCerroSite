import type { Metadata } from "next";
import Link from "next/link";
import { places } from "@/content/directory";
import { JsonLd } from "@/components/JsonLd";
import { directoryJsonLd, webPageJsonLd } from "@/lib/structured-data";

const directoryDescription =
  "Local directory for San Carlos and Del Cerro — Del Cerro Pizza & Beer, Windmill Farms, Mission Trails, Lake Murray, schools, and boulevard staples.";

export const metadata: Metadata = {
  title: "Directory",
  description: directoryDescription,
  alternates: { canonical: "/directory" },
  openGraph: {
    title: "San Cerro directory",
    description: directoryDescription,
    url: "/directory",
  },
};

export default function DirectoryPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            title: "San Cerro directory",
            description: directoryDescription,
            path: "/directory",
          }),
          directoryJsonLd(places),
        ]}
      />
      <section className="page-hero">
        <div className="shell">
          <span className="eyebrow" style={{ color: "#c9dce6" }}>
            Local guide
          </span>
          <h1>San Cerro directory</h1>
          <p>
            A short list of boulevard staples, schools, parks, and the newest
            opening — Del Cerro Pizza & Beer.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="shell place-grid">
          {places.map((place) => (
            <article key={place.name} className="place-block">
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                <span className="status-inline">{place.kind}</span>
                {place.status === "new" ? (
                  <span className="status-inline new">New opening</span>
                ) : null}
                {place.status === "staple" ? (
                  <span className="status-inline">Staple</span>
                ) : null}
              </div>
              <h3>{place.name}</h3>
              <p>{place.blurb}</p>
              <div className="meta-row">
                <span>{place.address}</span>
                {place.phone ? <span>{place.phone}</span> : null}
              </div>
              {place.href ? (
                <p>
                  <Link href={place.href} target="_blank" rel="noreferrer">
                    Visit →
                  </Link>
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
