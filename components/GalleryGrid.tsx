"use client";

import { useState, useEffect } from "react";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  description?: string;
}

export const GalleryGrid = ({ images }: { images: string[] }) => {
  // build a simple list of items from the URL array; titles are just numbered
  const ITEMS: GalleryItem[] = images.map((src, index) => {
    const id = index + 1;
    return {
      id,
      src,
      title: `Photo ${id.toString().padStart(2, "0")}`,
    };
  });

  const [activeId, setActiveId] = useState<number | null>(null);
  const activeItem = ITEMS.find((item) => item.id === activeId) ?? null;
  const activeIndex = activeItem ? ITEMS.findIndex((item) => item.id === activeId) : -1;

  const goToPrevious = () => {
    if (activeIndex > 0) {
      setActiveId(ITEMS[activeIndex - 1].id);
    }
  };

  const goToNext = () => {
    if (activeIndex < ITEMS.length - 1) {
      setActiveId(ITEMS[activeIndex + 1].id);
    }
  };

  // keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeId) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "Escape") {
        setActiveId(null);
      }
    };

    if (activeId) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [activeId, activeIndex]);

  if (ITEMS.length === 0) {
    return <p className="text-center text-muted">No photos to display.</p>;
  }

  return (
    <>
      <div className="gallery-grid">
        {ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveId(item.id)}
            className="gallery-grid-btn"
          >
            {/* image goes behind content for better accessibility */}
            <img
              src={item.src}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="gallery-grid-btn-overlay" />
            <div className="gallery-grid-btn-inner">
              <div className="gallery-grid-btn-label">
                Interior &amp; Painting
              </div>
              <div>
                {/* <p className="gallery-grid-btn-title">{item.title}</p> */}
                <p className="gallery-grid-btn-hint">
                  Tap for full view
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {activeItem && (
        <div
          className="lightbox-overlay"
          onClick={() => setActiveId(null)}
        >
          <div
            className="card-surface lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-header">
              <div>
                <p className="lightbox-subtitle">Photo Preview</p>
                <h2 className="lightbox-title">{activeItem.title}</h2>
                {activeItem.description && (
                  <p className="lightbox-desc">{activeItem.description}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setActiveId(null)}
                className="btn-close"
              >
                Close
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem", marginTop: "1.5rem" }}>
              {/* Image container */}
              <img
                src={activeItem.src}
                alt={activeItem.title}
                className="lightbox-image"
                style={{ maxWidth: "100%", maxHeight: "80vh", display: "block" }}
              />

              {/* Navigation buttons below image */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
                {/* Previous button */}
                <button
                  type="button"
                  onClick={goToPrevious}
                  disabled={activeIndex === 0}
                  className="lightbox-nav-btn"
                  style={{
                    padding: "0.5rem 0.75rem",
                    opacity: activeIndex === 0 ? 0.3 : 1,
                    cursor: activeIndex === 0 ? "not-allowed" : "pointer",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                    background: "rgba(15, 23, 42, 0.3)",
                    color: "var(--text-muted)",
                    fontSize: "0.75rem",
                    fontWeight: "400",
                  }}
                >
                  ← Prev
                </button>

                {/* Counter */}
                <div style={{ fontSize: "0.75rem", color: "rgba(203, 213, 225, 0.7)" }}>
                  {activeIndex + 1} / {ITEMS.length}
                </div>

                {/* Next button */}
                <button
                  type="button"
                  onClick={goToNext}
                  disabled={activeIndex === ITEMS.length - 1}
                  className="lightbox-nav-btn"
                  style={{
                    padding: "0.5rem 0.75rem",
                    opacity: activeIndex === ITEMS.length - 1 ? 0.3 : 1,
                    cursor: activeIndex === ITEMS.length - 1 ? "not-allowed" : "pointer",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                    background: "rgba(15, 23, 42, 0.3)",
                    color: "var(--text-muted)",
                    fontSize: "0.75rem",
                    fontWeight: "400",
                  }}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
