import { AboutHero } from "@/src/components/about/AboutHero";
import { OrganizationOverview } from "@/src/components/about/OrganizationOverview";
import { BrandStory } from "@/src/components/about/BrandStory";
import { MissionVisionValues } from "@/src/components/about/MissionVisionValues";
import { HealthcareApproach } from "@/src/components/about/HealthcareApproach";
import { FacilitiesShowcase } from "@/src/components/about/FacilitiesShowcase";
import { WhyChooseUs } from "@/src/components/about/WhyChooseUs";
import { AboutCTA } from "@/src/components/about/AboutCTA";

export const metadata = {
  title: "About Us | Sreshta Ayurvedic Hospital",
  description:
    "Learn about Sreshta Ayurvedic Hospital's journey, mission, and commitment to authentic, personalized Ayurvedic healing and holistic healthcare.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <OrganizationOverview />
      <BrandStory />
      <MissionVisionValues />
      <HealthcareApproach />
      <FacilitiesShowcase />
      <WhyChooseUs />
      <AboutCTA />
    </main>
  );
}
