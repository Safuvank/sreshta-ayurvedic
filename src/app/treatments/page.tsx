import { TreatmentsHero } from "@/src/components/pages/treatment/TreatmentHero";
import { TreatmentsShowcase } from "@/src/components/pages/treatment/TreatmentShowcase";

export default function TreatmentsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <TreatmentsHero />

      {/* 2. The Treatments Grid */}
      <TreatmentsShowcase />
    </main>
  );
}
