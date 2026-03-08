import { Hero } from "@/components/Hero";
import {
  GalleryPreview,
  ServicesOverview,
  WhyChooseUs
} from "@/components/HomeSections";
import fs from "fs";
import path from "path";

export default function HomePage() {
  // read image filenames from the public/Gallery directory at build time
  let galleryImages: string[] = [];
  try {
    const galleryDir = path.join(process.cwd(), "public", "Gallery");
    const entries = fs.readdirSync(galleryDir);
    galleryImages = entries
      .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
      .sort()
      .map((f) => "/Gallery/" + encodeURIComponent(f))
      .slice(0, 6); // only first 6 for preview
  } catch (e) {
    console.warn("Could not read gallery directory:", e);
  }

  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <GalleryPreview images={galleryImages} />
    </>
  );
}

