import Link from "next/link";

export const ServicesOverview = () => {
  return (
    <section className="container-page page-section">
      <div className="page-section-header">
        <div>
          <p className="section-title">Services</p>
          <h2 className="section-heading">Interior &amp; Painting Solutions</h2>
        </div>
          <p className="services-arrow-hint-mobile">
        Tap a button to view pricing ↓
      </p>
        <div className="section-links">
          <Link
            href="/interior-works"
            className="btn-outline-gold px-4 py-2 services-link"
          >
            Interior Works
          </Link>
          <Link
            href="/painting-services"
            className="btn-outline-gold px-4 py-2 border-slate-700 text-muted services-link"
          >
            Painting Services
          </Link>
        </div>
      </div>
      <div className="services-grid">
        <div className="card-surface p-5 service-card">
          <h3>Interior &amp; Exterior Painting</h3>
          <p>
            Smooth wall putty, royal emulsion, texture finishes, and weather
            proof exteriors with sharp masking and clean edges.
          </p>
        </div>
        <div className="card-surface p-5 service-card">
          <h3>Wood Polish &amp; Metal Coatings</h3>
          <p>
            Doors, windows, grills, and wooden furniture coated with PU, melamine,
            and enamel systems for rich, long-lasting shine.
          </p>
        </div>
        <div className="card-surface p-5 service-card">
          <h3>Modular Interiors &amp; POP</h3>
          <p>
            Wardrobes, kitchens, TV units, POP ceilings, wall paneling, and
            custom storage designed for both style and function.
          </p>
        </div>
      </div>
    
    </section>
  );
};

export const WhyChooseUs = () => {
  return (
    <section className="container-page why-grid">
      <div>
        <p className="section-title">Why Choose Us</p>
        <h2 className="section-heading mt-2">A premium finish in every stroke</h2>
        <p className="section-desc">
          We treat every home as a showcase project. Our experienced supervisor
          monitors surface preparation, paint mixing, and final coats so your
          walls glow in deep blue, gold, or any palette you love.
        </p>
        <dl className="why-list">
          <div className="card-surface p-4">
            <dt>Expert Surface Preparation</dt>
            <dd>
              Putty, sanding, and primer application as per paint manufacturer
              standards for crack-free walls.
            </dd>
          </div>
          <div className="card-surface p-4">
            <dt>Transparent Pricing</dt>
            <dd>
              Per square foot pricing with material and labour separated, so you
              always know what you are paying for.
            </dd>
          </div>
          <div className="card-surface p-4">
            <dt>Skilled Painters</dt>
            <dd>
              Trained team experienced in both budget and luxury projects, with
              consistent finish across rooms.
            </dd>
          </div>
          <div className="card-surface p-4">
            <dt>Hassle-Free Experience</dt>
            <dd>
              Covered furniture, floor protection, and daily clean-up so your
              family can continue daily routines.
            </dd>
          </div>
        </dl>
      </div>
      <div className="card-surface why-aside p-5">
        <h3>Same-day site visit</h3>
        <p>
          Share your wall photos on WhatsApp and we&apos;ll schedule a site
          visit to measure, understand your colours, and share a detailed quote.
        </p>
        <p className="text-dim">
          Get a no-obligation consultation with layout ideas, colour
          combinations, and material suggestions.
        </p>
      </div>
    </section>
  );
};
