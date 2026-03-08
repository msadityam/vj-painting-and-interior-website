import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_TEL, WHATSAPP_URL } from "@/lib/siteConfig";
import Link from "next/link";

export const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="container-page footer-inner">
        <div>
          <h3>VJ Painting & Interior Decorators</h3>
          <p className="text-sm text-muted mt-2">
            Sparkle Interiors with premium painting, interior decoration, and
            custom carpentry finishes. Serving homes and commercial spaces with
            a deep blue and gold luxury touch.
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <div className="footer-links mt-2">
            <Link href="/painting-services">Painting Services</Link>
            <Link href="/interior-works">Interior Works</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p className="mt-3">
            Phone:{" "}
            <a href={`tel:${PHONE_NUMBER_TEL}`} className="phone-link">
              {PHONE_NUMBER_DISPLAY}
            </a>
          </p>
          <div className="footer-buttons">
            <a
              href={`tel:${PHONE_NUMBER_TEL}`}
              className="btn-outline-gold px-3 py-1 text-xs"
            >
              Call Now
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp px-3 py-1 text-xs"
            >
              WhatsApp
            </a>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} VJ Painting & Interior Decorators. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

