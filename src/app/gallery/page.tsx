import { Metadata } from "next";
import { Container } from "@/src/components/common/Container";
import { WellnessExperience } from "@/src/components/pages/gallery/WellnessExperience";
import { SpacesGallery } from "@/src/components/pages/gallery/SpacesGallery";
import { AmenitiesGrid } from "@/src/components/pages/gallery/AmenitiesGrid";
import { VideoGallery } from "@/src/components/pages/gallery/VideoGallery";
import { GalleryHero } from "@/src/components/pages/gallery/GalleryHero";

export const metadata: Metadata = {
  title: "Gallery & Facilities | Sreshta Ayurveda",
  description:
    "Explore the serene spaces, heritage rooms, and wellness facilities at Sreshta Ayurveda.",
};

// A simple, elegant Hero section dedicated to the Gallery page
// const GalleryHero = () => {
//   return (
//     <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#F8F5EF] overflow-hidden">
//       <Container>
//         <div className="max-w-4xl mx-auto text-center">
//           <span className="text-xs font-semibold tracking-[0.2em] text-[#C9A86A] uppercase mb-6 block">
//             A Glimpse Inside
//           </span>
//           <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1A202C] leading-tight mb-8">
//             Immerse yourself in our{" "}
//             <span className="italic text-[#2F5D50]">healing spaces</span>
//           </h1>
//           <p className="text-gray-600 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
//             Take a visual journey through our carefully curated environment,
//             where traditional Kerala heritage meets modern comfort to support
//             your holistic recovery.
//           </p>
//         </div>
//       </Container>
//     </section>
//   );
// };

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Page Introduction */}
      <GalleryHero />

      {/* 2. Soft, story-driven heritage room showcase (Light Theme) */}
      <SpacesGallery />

      {/* 3. Deep, immersive facility experience (Dark Theme) */}
      <WellnessExperience />

      {/* 4. Detailed, structured amenities list (Light Theme) */}
      <AmenitiesGrid />

      {/* 5. Engaging video content (Dark Theme) */}
      <VideoGallery />
    </main>
  );
}

