import { GalleryGrid } from "@/components/GalleryGrid";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Gallery | VJ Painting & Interior Decorators",
  description:
    "Gallery of completed painting and interior projects by VJ Painting & Interior Decorators.",
};

export default function GalleryPage() {
  // read image filenames from the public/Gallery directory at build time
  let images: string[] = [];
  try {
    const galleryDir = path.join(process.cwd(), "public", "Gallery");
    const entries = fs.readdirSync(galleryDir);
    images = entries
      .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
      .sort()
      .map((f) => "/Gallery/" + encodeURIComponent(f));
  } catch (e) {
    // directory might not exist yet, fallback to empty
    console.warn("Could not read gallery directory:", e);
  }

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

      <section>
        <GalleryGrid images={images} />
      </section>
    </div>
  );
}
