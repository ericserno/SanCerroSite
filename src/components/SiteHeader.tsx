import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Calendar" },
  { href: "/directory", label: "Directory" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Submit a tip" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand-mark" aria-label="San Cerro home">
          San Cerro
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
