import Link from "next/link";
import Image from "next/image";
import { PHONE_NUMBER_TEL, WHATSAPP_URL } from "@/lib/siteConfig";

export const Hero = () => {
  return (
    <section className="container-page hero">
      <div>
        <p className="section-title">VJ Interior Decorators</p>
        <div className="gradient-divider mt-3" />
        {/* <h1 className="hero-title">
          VJ Interior Decorators &amp; Painting Works
        </h1> */}
        <p className="hero-desc">
          Transform your home with deep blue and gold luxury finishes, premium
          paints, and precision interior carpentry. From feature walls to full
          interior makeovers, we make every corner sparkle.
        </p>
        <div className="hero-ctas">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-whatsapp">
            WhatsApp for Quote
          </a>
          <a href={`tel:${PHONE_NUMBER_TEL}`} className="btn-outline-gold">
            Call Now
          </a>
        </div>
        <div className="hero-cards">
          <div className="card-surface p-3">
            <p className="hero-card-title">Premium Paints</p>
            <p className="hero-card-desc">
              Royal, Ultima, Apex, and top brands for a long-lasting finish.
            </p>
          </div>
          <div className="card-surface p-3">
            <p className="hero-card-title">On-Time Delivery</p>
            <p className="hero-card-desc">
              Professionally planned projects with clear timelines.
            </p>
          </div>
          <div className="card-surface p-3">
            <p className="hero-card-title">Clean Execution</p>
            <p className="hero-card-desc">
              Dust-minimized work, daily clean-up, and supervisor monitoring.
            </p>
          </div>
        </div>
      </div>
      <div className="hero-aside">
        <div className="card-surface relative p-6">
          <div className="hero-aside-overlay" />
          <p className="section-title text-center">Interiors &amp; Painting </p>
          {/* <p className="text-sm text-muted text-center mt-2">
            WhatsApp card preview. Replace with your final design.
          </p> */}
          
            <div className="hero-card-box">
              <div className="hero-card-inner">
                
                <Image
                  src="/images/hero.png"
                  alt="VJ Painting & Interior Decorators WhatsApp card"
                  fill
                  className="object-contain "
                />
              <div className="hero-image-overlay"></div>
            </div>
          </div>
          {/* <p className="text-xs text-dim text-center mt-3">
            Place your WhatsApp card image at{" "}
            <code className="hero-code">public/images/vj-whatsapp-card.png</code>
            .
          </p> */}
          <Link href="/gallery" className="hero-link">
            View completed projects →
          </Link>
        </div>
      </div>
    </section>
  );
};
