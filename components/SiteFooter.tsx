import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_TEL, WHATSAPP_URL } from "@/lib/siteConfig";
import Link from "next/link";

export const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="container-page footer-inner">
        <div>
          <h3>VJ Interior Decorators & Painting Works</h3>
          <p className="text-sm text-muted mt-2">
            Sparkle Interiors with premium painting, interior decoration, and
            custom carpentry finishes. Serving homes and commercial spaces with
            a deep blue and gold luxury touch.
          </p>
        </div>
        <div>
          <div>
            <h4>Our Services</h4>
            <p className="rates-hint">For detailed rates click below</p>

            <div className="footer-links services-links">
              <Link href="/painting-services" className="service-btn">
                Painting Services
              </Link>

              <Link href="/interior-works" className="service-btn">
                Interior Works
              </Link>
            </div>
{/* 
            <div className="footer-links mt-4 pl-5">
              <Link href="/gallery">Gallery</Link>
            </div> */}
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
          <div className="footer-buttons flex flex-col gap-3 mt-4">
            <a
              href={`tel:${PHONE_NUMBER_TEL}`}
              className="btn-outline-gold px-6 py-3 text-base font-medium rounded-md text-center transition-colors hover:bg-gold-500 hover:text-white"
            >
              Call Now
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp px-6 py-3 text-base font-medium rounded-md text-center transition-colors hover:bg-green-600"
            >
              WhatsApp
            </a>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} VJ Interior Decorators & Painting Works. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

