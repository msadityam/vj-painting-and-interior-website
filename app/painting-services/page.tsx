import { PricingTable } from "@/components/PricingTable";
import { PHONE_NUMBER_TEL, WHATSAPP_URL } from "@/lib/siteConfig";

const interiorWallPricing = [
  { name: "Royal Emulsion (Labour + Material)", pricePerSqft: 35 },
  { name: "Premium Emulsion (Labour + Material)", pricePerSqft: 25 },
  { name: "Tractor Emulsion (Labour + Material)", pricePerSqft: 20 },
];

const exteriorWallPricing = [
  { name: "Ultima Protect (Labour + Material)", pricePerSqft: 38 },
  { name: "Apex Ultima (Labour + Material)", pricePerSqft: 30 },
  { name: "Apex (Labour + Material)", pricePerSqft: 25 },
];

const woodAndMetalPricing = [
  { name: "Doors & Window Grills (Oil Paint)", pricePerSqft: 35 },
  { name: "POP Designs (Starting)", pricePerSqft: 65 },
];

export const metadata = {
  title: "Painting Services | VJ Painting & Interior Decorators",
  description:
    "Interior and exterior painting services in deep blue and gold theme. Royal, Ultima, Apex emulsions, and wood polish solutions for homes and commercial spaces.",
};

export default function PaintingServicesPage() {
  return (
    <div className="container-page page-wrap space-y-10">
      <section className="page-intro">
        <p className="section-title">Painting Services</p>
        <h1>Professional Wall Painting &amp; Wood Finishes</h1>
        <p className="page-intro-desc">
          Transparent per square foot pricing for interior, exterior, and wood
          polish works. All rates include surface preparation, putty, primer,
          and premium brand paints unless mentioned otherwise.
        </p>
        <div className="page-ctas">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-whatsapp">
            WhatsApp Your Floor Plan
          </a>
          <a href={`tel:${PHONE_NUMBER_TEL}`} className="btn-outline-gold">
            Call for Site Visit
          </a>
        </div>
      </section>

      <section className="page-grid-3">
        <PricingTable
          title="Interior Wall Painting"
          description="Smooth putty finish, primer, and two coats of emulsion in your chosen shade."
          badge="Most Popular"
          standardUnits={interiorWallPricing}
          footerNote="Rates are indicative and may vary based on wall condition, height, and putty thickness required."
        />
        <PricingTable
          title="Exterior Wall Painting"
          description="Weather-protective systems for building exteriors, parapet walls, and balconies."
          standardUnits={exteriorWallPricing}
          footerNote="Scaffolding, repairs, and waterproofing (if needed) are estimated separately after site inspection."
        />
        <PricingTable
          title="Wood & Metal Painting"
          description="Smooth enamel and PU finishes for doors, windows, grills, and POP elements."
          standardUnits={woodAndMetalPricing}
          footerNote="Door/window counts, grill designs, and existing finish condition may impact final costing."
        />
      </section>

      <section className="card-surface page-extra p-5">
        <h2>Special Decorative Systems</h2>
        <p>
          Texture paints, stencils, and feature wall concepts are priced per
          design and square foot. Premium finishes like Dico Paint and
          high-build coatings start from approximately ₹250/sqft, and railing
          running feet coatings from ₹160/RFT.
        </p>
        <p className="text-dim">
          Share your wall photos and inspiration images on WhatsApp for an
          accurate quote tailored to your home.
        </p>
      </section>
    </div>
  );
}
