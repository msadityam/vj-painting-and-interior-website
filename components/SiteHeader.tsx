"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NAV_LINKS, PHONE_NUMBER_TEL, WHATSAPP_URL } from "@/lib/siteConfig";

export const SiteHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            className="header-whatsapp hidden md:inline-block"
          >
            WhatsApp
          </a>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-menu-btn"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden mobile-menu-overlay fixed inset-0 top-20 z-40 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className="mobile-menu bg-bg-card border-t border-border p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mobile-nav-link text-lg font-medium text-text hover:text-gold transition-colors py-2 px-4 rounded-md hover:bg-gold hover:bg-opacity-10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t border-border">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mobile-whatsapp-btn inline-block w-full text-center px-6 py-3 bg-whatsapp text-black font-semibold rounded-md hover:bg-whatsapp-hover transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

