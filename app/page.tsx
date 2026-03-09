import { Hero } from "@/components/Hero";
import { ServicesOverview, WhyChooseUs } from "@/components/HomeSections";
import {
  HomeGalleryPreview,
  StructuredPaintingSection,
} from "@/components/HomeGallery";
import { readGalleryCategories } from "@/lib/gallery";

export default function HomePage() {
  const categories = readGalleryCategories();

  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <StructuredPaintingSection />
      <HomeGalleryPreview categories={categories} />
    </>
  );
}

