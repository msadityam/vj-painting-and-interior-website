import fs from "fs";
import path from "path";

export type GalleryCategory = {
  slug: string;
  name: string;
  images: string[];
};

const IMAGE_REGEX = /\.(jpe?g|png|webp|gif)$/i;

const CATEGORY_LABELS: Record<string, string> = {
  bedroom: "Bedroom",
  kitchen: "Kitchen",
  living_room: "Living Room",
  wardrobe: "Wardrobe",
  others: "Others",
};

const toTitleCase = (value: string) =>
  value
    .replace(/[_\-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

export function readGalleryCategories(limitPerCategory?: number): GalleryCategory[] {
  const categories: GalleryCategory[] = [];

  try {
    const baseDir = path.join(process.cwd(), "public", "category");

    const entries = fs.readdirSync(baseDir, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;

      const slug = entry.name;
      const dirPath = path.join(baseDir, slug);

      const files = fs
        .readdirSync(dirPath)
        .filter((file) => IMAGE_REGEX.test(file))
        .sort();

      if (files.length === 0) continue;

      let images = files.map(
        (file) => `/category/${encodeURIComponent(slug)}/${encodeURIComponent(file)}`
      );

      if (limitPerCategory && limitPerCategory > 0) {
        images = images.slice(0, limitPerCategory);
      }

      const name = CATEGORY_LABELS[slug] ?? toTitleCase(slug);

      categories.push({
        slug,
        name,
        images,
      });
    }
  } catch (e) {
    console.warn("Could not read category gallery directory:", e);
  }

  return categories;
}

