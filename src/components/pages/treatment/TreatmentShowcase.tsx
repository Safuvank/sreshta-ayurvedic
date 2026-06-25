"use client";

import { Container } from "@/src/components/common/Container";
import { TreatmentPreviewGrid } from "../../home/treatment-preview/TreatmentPreviewGrid";

export const TreatmentsShowcase = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#F8F5EF]">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-[#2F5D50] mb-6">Our Core Treatments</h2>
          <p className="text-lg text-gray-600">Authentic, time-tested Ayurvedic therapies tailored to your unique body constitution.</p>
        </div>
        
        {/* Render all treatments (no limit) */}
        <TreatmentPreviewGrid />
      </Container>
    </section>
  );
};