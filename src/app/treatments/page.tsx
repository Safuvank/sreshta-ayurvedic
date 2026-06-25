import { TreatmentsHero } from "@/src/components/pages/treatment/TreatmentHero";
import { TreatmentsShowcase } from "@/src/components/pages/treatment/TreatmentShowcase";
// import { ServicesBenefits } from "@/src/components/pages/services/ServicesBenefits"; // Reusing the benefits from services!
// import { AboutCTA } from "@/src/components/pages/about/AboutCTA"; 

export default function TreatmentsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <TreatmentsHero />

      {/* 2. The Treatments Grid */}
      <TreatmentsShowcase />

      {/* 3. Reused Benefits Section */}
      {/* <ServicesBenefits /> */}

      {/* 4. Optional CTA */}
      {/* <AboutCTA /> */}
    </main>
  );
}