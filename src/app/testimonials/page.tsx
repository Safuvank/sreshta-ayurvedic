"use client";

import { useState, useMemo } from "react";
import { testimonials, videoData } from "@/src/data/testimonials"; 
import { HeroSection } from "@/src/components/pages/testimonials/HeroSection";
import { TestimonialHighlights } from "@/src/components/pages/testimonials/TestimonialHighlights";
import { FilterBar } from "@/src/components/pages/testimonials/FilterBar";
import { VideoCarouselSection } from "@/src/components/pages/testimonials/VideoSection";
import { WrittenReviewsSection } from "@/src/components/pages/testimonials/WrittenReviewsSection";
import { GoogleReviewsSection } from "@/src/components/pages/testimonials/GoogleReviewsSection";
import { ConsultationCTA } from "@/src/components/home/consultation-cta/ConsultationCTA";

// import { metadata } from "./metadata";

// export { metadata };


const ALL_CATEGORIES = "All Treatments";

export default function PatientStoriesPage() {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES);

  // Generate unique categories dynamically from both video and text data to ensure no filters are missed
  const uniqueTreatments = useMemo(() => {
    const allTreatments = [
      ...testimonials.map((t) => t.treatment),
      ...videoData.map((v) => v.treatment),
    ];
    return [ALL_CATEGORIES, ...Array.from(new Set(allTreatments))];
  }, []);

  // Filter video data based on the active category
  const filteredVideos = useMemo(() => {
    if (activeCategory === ALL_CATEGORIES) return videoData;
    return videoData.filter((v) => v.treatment === activeCategory);
  }, [activeCategory]);

  // Filter written reviews based on the active category
  const filteredReviews = useMemo(() => {
    if (activeCategory === ALL_CATEGORIES) return testimonials;
    return testimonials.filter((t) => t.treatment === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-[#FAFAFA] pb-20">
      <HeroSection />

      <TestimonialHighlights />

      {/* 
        This is the single global filter bar. 
        It updates 'activeCategory', which then automatically 
        filters both the video array and the written array above. 
      */}
      <FilterBar
        categories={uniqueTreatments}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* Pass the filtered arrays as props */}
      <VideoCarouselSection videos={filteredVideos} />

      <WrittenReviewsSection reviews={filteredReviews} />

      <GoogleReviewsSection/>
      <ConsultationCTA/>
    </main>
    
  );
}
