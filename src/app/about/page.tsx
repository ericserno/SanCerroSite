import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <span className="eyebrow" style={{ color: "#c9dce6" }}>
            About
          </span>
          <h1>What is San Cerro?</h1>
          <p>
            San Carlos and Del Cerro are neighboring San Diego communities —
            family hillsides, short commercial spines, and neighbors who show up
            for Turkey Trots and school Jog-a-Thons.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="shell article-layout">
          <div className="article-hero-image">
            <Image
              src="/images/hero-welcome.png"
              alt="Welcome to San Cerro sign"
              fill
              className="object-cover"
              sizes="(max-width: 900px) 100vw, 1120px"
            />
          </div>
          <div className="prose">
            <p>
              <strong>San Cerro</strong> is the portmanteau locals use for San
              Carlos + Del Cerro — two hillside neighborhoods east of SDSU and
              west of La Mesa, tucked against Lake Murray and Mission Trails.
            </p>
            <p>
              Households here skew toward family life, school fundraisers, and
              low-key weekends: Windmill Farms runs, KnB patio dinners, Cowles
              Mountain climbs, and the annual Thanksgiving Turkey Trot around
              Green Elementary.
            </p>
            <p>
              This site rebuilds the original Webflow community blog with all
              graphics hosted locally, a working contact path, a neighborhood
              directory, and newer openings the old feed missed.
            </p>
            <p>
              <Link href="/suggestions">See recommended upgrades →</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
