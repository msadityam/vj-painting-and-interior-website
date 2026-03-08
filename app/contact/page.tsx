import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_TEL, WHATSAPP_URL } from "@/lib/siteConfig";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact | VJ Painting & Interior Decorators",
  description:
    "Contact VJ Painting & Interior Decorators for painting, interior, and wood polish services. Call or WhatsApp for a free site visit.",
};

export default function ContactPage() {
  return (
    <div className="container-page page-wrap space-y-10">
      <section className="page-intro">
        <p className="section-title">Contact</p>
        <h1>Let&apos;s Plan Your Makeover</h1>
        <p className="page-intro-desc">
          Reach out for painting, interior, and renovation requirements. Share
          your floor plan or room photos and we&apos;ll suggest colour palettes
          and layout ideas that match your style.
        </p>
      </section>

      <section className="contact-grid">
        <div className="space-y-6">
          <div className="card-surface contact-block p-5">
            <h2>Call or WhatsApp</h2>
            <p>
              Phone:{" "}
              <a href={`tel:${PHONE_NUMBER_TEL}`} className="phone-link">
                {PHONE_NUMBER_DISPLAY}
              </a>
            </p>
            <div className="contact-buttons">
              <a href={`tel:${PHONE_NUMBER_TEL}`} className="btn-outline-gold">
                Call Now
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="card-surface contact-block p-5">
            <h2>Quick Enquiry</h2>
            <p className="form-note">
              This form does not submit anywhere yet. Use it as a placeholder
              until you connect a backend or form service.
            </p>
            <ContactForm />
          </div>
        </div>

        <div className="card-surface flex flex-col justify-between p-5">
          <div className="contact-block">
            <h2>Location &amp; Service Area</h2>
            <p className="text-sm text-muted mt-2">
              Based in your city with projects across nearby neighbourhoods.
              We&apos;ll confirm exact locations and availability over call or
              WhatsApp.
            </p>
          </div>
          <div className="map-placeholder">
            <span className="font-medium text-muted">Google Maps Placeholder</span>
            <span>Embed your location iframe here once you have your map link.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
