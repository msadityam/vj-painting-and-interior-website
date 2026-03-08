import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, PHONE_NUMBER_TEL, WHATSAPP_URL } from "@/lib/siteConfig";

export const SiteHeader = () => {
  return (
    <header className="site-header">
      <div className="container-page header-inner">
        <Link href="/" className="logo-link">
          <div
            style={{
              position: "relative",
              width: "4rem",
              height: "4rem",
              borderRadius: "var(--radius)",
              overflow: "hidden",
              border: "2px solid var(--gold)",
            }}
          >
            <Image
              src="/images/logo_navbar.jpeg"
              alt="VJ Painting & Interior Decorators"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="leading-tight">
            <p className="logo-tagline text-lg">Sparkle Interiors</p>
            <p className="logo-name text-lg">VJ Painting & Interior Decorators</p>
          </div>
        </Link>

        <nav className="nav-links">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300 hover:scale-105 transform"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-ctas">
          <a href={`tel:${PHONE_NUMBER_TEL}`} className="header-call">
            Call Now
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="header-whatsapp"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

