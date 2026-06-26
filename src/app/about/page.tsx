import { AboutHero } from "@/src/components/pages/about/AboutHero";
import { OrganizationOverview } from "@/src/components/pages/about/OrganizationOverview";
import { BrandStory } from "@/src/components/pages/about/BrandStory";
import { MissionVisionValues } from "@/src/components/pages/about/MissionVisionValues";
import { FacilitiesShowcase } from "@/src/components/pages/about/FacilitiesShowcase";
import { ConsultationCTA } from "@/src/components/home/consultation-cta/ConsultationCTA";

export const metadata = {
  title: "About Us | Sreshta Ayurvedic Hospital",
  description:
    "Learn about Sreshta Ayurvedic Hospital's journey, mission, and commitment to authentic, personalized Ayurvedic healing and holistic healthcare.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <BrandStory />
      <OrganizationOverview />
      <MissionVisionValues />
      <FacilitiesShowcase />
     <ConsultationCTA/>
    </main>
  );
}
