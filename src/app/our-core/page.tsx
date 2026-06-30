import { Metadata } from "next";
import { OurCoreHero } from "@/src/components/pages/core/OurCoreHero";
import { OurCoreShowcase } from "@/src/components/pages/core/OurCoreShowcase";

export const metadata: Metadata = {
  title: "Our Core Treatments | Panchakarma & Ayurveda",
  description: "Explore our core Ayurvedic treatments for orthopaedic, gastrointestinal, lifestyle diseases, and more.",
};

export default function OurCorePage() {
  return (
    <main className="min-h-screen bg-[#FCFAF5]">
      <OurCoreHero />
      <OurCoreShowcase />
    </main>
  );
}