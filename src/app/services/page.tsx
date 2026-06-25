import { ServicesHero } from "@/src/components/pages/services/ServicesHero";
// import { ServicesProcess } from "@/src/components/pages/services/ServicesProcess";
import { ServicesShowcase } from "@/src/components/pages/services/ServicesShowcase";
import { ServicesBenefits } from "@/src/components/pages/services/ServicesBenefits";
import { AboutCTA } from "@/src/components/pages/about/AboutCTA"; // Reusing your existing CTA!

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <ServicesHero />

      {/* 2. How it works */}
      {/* <ServicesProcess /> */}

      {/* 3. The Actual Services Grid */}
      <ServicesShowcase />

      {/* 4. Benefits / Trust Builders */}
      {/* <ServicesBenefits /> */}

      {/* 5. Reusable CTA from your About page */}
      {/* <AboutCTA /> */}
    </main>
  );
}
