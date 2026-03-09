import { GalleryGrid } from "@/components/GalleryGrid";
import { readGalleryCategories } from "@/lib/gallery";

export const metadata = {
  title: "Gallery | VJ Painting & Interior Decorators",
  description:
    "Gallery of completed painting and interior projects by VJ Painting & Interior Decorators.",
};

export default function GalleryPage() {
  const categories = readGalleryCategories();

  return (
    <div className="container-page page-wrap space-y-8">
      <section className="page-intro">
        <p className="section-title">Gallery</p>
        <h1>Completed Projects</h1>
        <p className="page-intro-desc">
          A selection of painting and interior projects across living rooms,
          bedrooms, kitchens, and feature walls. Tap any card to open a lightbox
          preview.
        </p>
      </section>

      <section className="space-y-10">
        {categories.map((category) => (
          <div key={category.slug} id={category.slug} className="space-y-4">
            <h2 className="section-heading">{category.name}</h2>
            <GalleryGrid images={category.images} />
          </div>
        ))}
      </section>
    </div>
  );
}
