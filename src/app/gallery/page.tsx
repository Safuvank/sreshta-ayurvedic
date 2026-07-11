import { Metadata } from "next";
import { Container } from "@/src/components/common/Container";
import { WellnessExperience } from "@/src/components/pages/gallery/WellnessExperience";

import { VideoGallery } from "@/src/components/pages/gallery/VideoGallery";
import { GalleryHero } from "@/src/components/pages/gallery/GalleryHero";
import { ImageGallery } from "@/src/components/pages/gallery/ImageGallery";
import { ConsultationCTA } from "@/src/components/home/consultation-cta/ConsultationCTA";


import { metadata } from "./metadata";

export { metadata };



export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Page Introduction */}
      <GalleryHero />

      {/* 2. Soft, story-driven heritage room showcase (Light Theme) */}
     <ImageGallery/>

      {/* 3. Deep, immersive facility experience (Dark Theme) */}
      <WellnessExperience />

      

      {/* 5. Engaging video content (Dark Theme) */}
      <VideoGallery />

      <ConsultationCTA/>
    </main>
  );
}
