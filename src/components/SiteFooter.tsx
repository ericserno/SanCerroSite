import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <p className="footer-brand">San Cerro</p>
          <p className="footer-tag">San Carlos + Del Cerro · High on San Diego</p>
        </div>
        <div className="footer-links">
          <Link href="/events">Events</Link>
          <Link href="/directory">Directory</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Submit a tip</Link>
        </div>
      </div>
    </footer>
  );
}
