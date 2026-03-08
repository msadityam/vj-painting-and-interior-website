import { PricingTable } from "@/components/PricingTable";
import { PHONE_NUMBER_TEL, WHATSAPP_URL } from "@/lib/siteConfig";

const standardUnits = [
  { name: "Wardrobe", pricePerSqft: 2250 },
  { name: "Box Paneling", pricePerSqft: 1100 },
  { name: "TV Cabinet", pricePerSqft: 2000 },
  { name: "Zero Paneling", pricePerSqft: 1000 },
  { name: "Kitchen", pricePerSqft: 2500 },
  { name: "Bed", pricePerSqft: 1400 },
  { name: "Study Table", pricePerSqft: 1500 },
];

const customUnits = [
  { name: "Table", size: "2.6 x 5", price: 23400 },
  { name: "Storage Unit", size: "2.6 x 9", price: 35800 },
  { name: "Pooja Room", size: "3 x 3.5", price: 13500 },
  { name: "Table", size: "4 x 8 x 3", price: 172800 },
  { name: "Storage Unit", size: "2.9 x 7", price: 30450 },
  { name: "POP", size: "8 x 9.6", price: 26880 },
  { name: "Wall Partition", size: "10 x 9.6", price: 33600 },
  { name: "Wall Partition", size: "9 x 10", price: 31500 },
];

const totalProjectCost = 125000;

export const metadata = {
  title: "Interior Works Pricing | VJ Painting & Interior Decorators",
  description:
    "Wardrobes, kitchens, TV units, paneling, POP ceilings, and custom interior works pricing for VJ Painting & Interior Decorators.",
};

export default function InteriorWorksPage() {
  return (
    <div className="container-page page-wrap space-y-10">
      <section className="page-intro">
        <p className="section-title">Interior Works</p>
        <h1>Modular Interiors &amp; Custom Carpentry</h1>
        <p className="page-intro-desc">
          Pricing for standard modular units and custom-built elements. All
          works use quality hardware, laminates, and finishes curated to match
          the deep blue and gold design language of your home.
        </p>
        <div className="page-ctas">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-whatsapp">
            Share Your Floor Plan
          </a>
          <a href={`tel:${PHONE_NUMBER_TEL}`} className="btn-outline-gold">
            Discuss Interior Layout
          </a>
        </div>
      </section>

      <section className="page-grid-2">
        <PricingTable
          title="Standard Modular Units"
          description="Per square foot pricing for frequently requested interior elements."
          badge="Package Based"
          standardUnits={standardUnits}
          footerNote="Pricing assumes premium laminate, basic hardware, and standard heights. Special finishes or hardware may alter costing."
        />
        <PricingTable
          title="Custom Units &amp; Feature Elements"
          description="Unique elements sized for your layout, such as partitions, POP ceilings, and pooja units."
          customUnits={customUnits}
          footerNote="Sizes are indicative of one recent project. Your final estimate will be based on exact site measurements and finish selections."
        />
      </section>

      <section className="card-surface page-extra mt-2 p-5">
        <h2>Sample Project Investment</h2>
        <p>
          The above interior scope for a recent 2 BHK home totalled
          approximately{" "}
          <span className="highlight">
            ₹{totalProjectCost.toLocaleString("en-IN")}
          </span>
          , including wardrobes, kitchen, TV unit, POP, and partitions.
        </p>
        <p className="text-dim">
          Every home is unique. Use this as a ballpark indication and contact us
          for a customised proposal aligned with your budget and priorities.
        </p>
      </section>
    </div>
  );
}
