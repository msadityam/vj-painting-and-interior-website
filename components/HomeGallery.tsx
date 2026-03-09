"use client";

import Link from "next/link";
import type { GalleryCategory } from "@/lib/gallery";

export const StructuredPaintingSection = () => {
  return (
    <section className="container-page mt-10 pb-10">
      <div className="page-section-header">
        <div>
          {/* <p className="section-title">Structured Painting</p> */}
          <h2 className="section-title text-gold">Structured painting</h2>
          <p className="section-desc">
            See how we plan, protect, and execute each painting project step by
            step for a clean, premium finish.
          </p>
        </div>
      </div>
      <div className="structured-video-wrap">
        <video controls className="structured-video">
          <source
            src="/Gallery/video/WhatsApp Video 2026-03-09 at 00.01.19.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

type HomeGalleryPreviewProps = {
  categories: GalleryCategory[];
};

export const HomeGalleryPreview = ({ categories }: HomeGalleryPreviewProps) => {
  return (
    <section className="container-page mt-10 pb-10">
      <div className="gallery-preview-header">
        <div>
          <p className="section-title">Gallery</p>
          <h2 className="gallery-preview-title">Recent completed projects</h2>
          <p className="gallery-preview-desc">
            Browse by room type or element. Tap a category card to view the full gallery for that category.
          </p>
        </div>
        <Link href="/gallery" className="gallery-preview-link btn-outline-gold px-4 py-2">
          View full gallery
        </Link>
      </div>
      <div className="gallery-preview-grid flex flex-nowrap overflow-x-auto gap-4">
        {categories.map((category) => {
          const cover = category.images[0];
          return (
            <Link
              key={category.slug}
              href={`/gallery#${category.slug}`}
              className="gallery-item gallery-category-card"
            >
              {cover && (
                <img
                  src={cover}
                  alt={category.name}
                  className="w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                />
              )}
              <div className="gallery-item-overlay" />
              <div className="gallery-item-content">
                <p className="gallery-item-title">{category.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="gallery-mobile-link">
        <Link href="/gallery">View full gallery →</Link>
      </div>
    </section>
  );
};

