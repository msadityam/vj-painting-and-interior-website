export interface StandardUnit {
  name: string;
  pricePerSqft: number;
}

export interface CustomUnit {
  name: string;
  size: string;
  price: number;
}

interface PricingTableProps {
  title: string;
  description?: string;
  badge?: string;
  standardUnits?: StandardUnit[];
  customUnits?: CustomUnit[];
  footerNote?: string;
}

const currency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export const PricingTable = ({
  title,
  description,
  badge,
  standardUnits,
  customUnits,
  footerNote,
}: PricingTableProps) => {
  return (
    <section className="card-surface pricing-card">
      <div className="pricing-header">
        <div>
          <h2 className="pricing-title">{title}</h2>
          {description && <p className="pricing-desc">{description}</p>}
        </div>
        {badge && <span className="pricing-badge">{badge}</span>}
      </div>

      {standardUnits && standardUnits.length > 0 && (
        <div className="pricing-table-wrap">
          <div className="pricing-table-head">
            <div>Standard Units</div>
            <div className="text-right">Rate / Sqft</div>
          </div>
          <div className="pricing-table-body">
            {standardUnits.map((unit) => (
              <div key={unit.name} className="row">
                <div className="name">{unit.name}</div>
                <div className="value">
                  {currency(unit.pricePerSqft)}/sqft
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {customUnits && customUnits.length > 0 && (
        <div className="pricing-table-wrap mt-3">
          <div className="pricing-table-head three">
            <div>Custom Units</div>
            <div>Approx Size (ft)</div>
            <div className="text-right">Package</div>
          </div>
          <div className="pricing-table-body">
            {customUnits.map((unit, index) => (
              <div
                key={`${unit.name}-${index}-${unit.size}`}
                className="row three"
              >
                <div className="name">{unit.name}</div>
                <div className="size">{unit.size}</div>
                <div className="value">{currency(unit.price)}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {footerNote && <p className="pricing-note">{footerNote}</p>}
    </section>
  );
};
