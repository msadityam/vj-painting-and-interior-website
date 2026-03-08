import Link from "next/link";

export const ServicesOverview = () => {
  return (
    <section className="container-page page-section">
      <div className="page-section-header">
        <div>
          <p className="section-title">Services</p>
          <h2 className="section-heading">Painting &amp; Interior Solutions</h2>
        </div>
        <div className="section-links flex gap-3">
          <Link href="/painting-services" className="btn-outline-gold px-4 py-2">
            Painting Services
          </Link>
          <Link
            href="/interior-works"
            className="btn-outline-gold px-4 py-2 border-slate-700 text-muted"
          >
            Interior Works
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

export const GalleryPreview = ({ images }: { images: string[] }) => {
  const items = images.map((src, index) => ({
    id: index + 1,
    title: `Project ${(index + 1).toString().padStart(2, "0")}`,
    src,
  }));

  return (
    <section className="container-page mt-10 pb-10">
      <div className="gallery-preview-header">
        <div>
          <p className="section-title">Gallery</p>
          <h2 className="gallery-preview-title">Recent completed projects</h2>
          <p className="gallery-preview-desc">
            A glimpse of feature walls, bedroom makeovers, ceilings, and
            wardrobes completed by the VJ Painting &amp; Interior Decorators team.
          </p>
        </div>
        <Link href="/gallery" className="gallery-preview-link btn-outline-gold px-4 py-2">
          View full gallery
        </Link>
      </div>
      <div className="gallery-preview-grid grid-6">
        {items.map((item) => (
          <div key={item.id} className="gallery-item">
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover absolute inset-0"
              loading="lazy"
            />
            <div className="gallery-item-overlay" />
            <div className="gallery-item-content">
              <p className="gallery-item-title">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="gallery-mobile-link">
        <Link href="/gallery">View full gallery →</Link>
      </div>
    </section>
  );
};
