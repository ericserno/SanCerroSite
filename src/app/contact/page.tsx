import type { Metadata } from "next";
import { TipForm } from "@/components/TipForm";

export const metadata: Metadata = {
  title: "Submit a tip",
  description:
    "Send a San Cerro neighborhood tip for San Carlos or Del Cerro — openings, events, fundraisers, and corrections. Moderated before publishing.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <span className="eyebrow" style={{ color: "#c9dce6" }}>
            Contact
          </span>
          <h1>Submit a tip</h1>
          <p>
            Tell neighbors about openings, school fundraisers, or calendar
            corrections. Tips are moderated before anything goes live —
            on Vercel each tip adds a row to the San Cerro Google Sheet.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="shell" style={{ maxWidth: 720 }}>
          <TipForm />
        </div>
      </section>
    </>
  );
}
