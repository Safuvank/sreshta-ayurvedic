// import { ServicePreviewGrid } from "@/src/components/home/services-preview/ServicesPreviewGrid"; // Adjust this import path to wherever your grid component lives
// import { Container } from "@/src/components/common/Container"; // Adjust this import path as well

// export default function ServicesPage() {
//   return (
//     <main className="min-h-screen bg-[#F8F5EF] pt-8 pb-24">
//       <Container>
        
//         {/* Page Header */}
//         <div className="max-w-3xl mb-16 md:mb-24">
//           <span className="text-sm font-bold tracking-[0.2em] text-[#C9A86A] uppercase mb-4 block">
//             Our Offerings
//           </span>
//           <h1 className="font-serif text-5xl md:text-6xl text-[#2F5D50] leading-tight mb-6">
//             Comprehensive Ayurvedic Care
//           </h1>
//           <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
//             Explore our full range of traditional therapies, natural beauty treatments, and holistic wellness programs designed to restore your mind, body, and spirit.
//           </p>
//         </div>

//         {/* Render the grid WITHOUT a limit to show all services */}
//         <ServicePreviewGrid />

//       </Container>
//     </main>
//   );
// }



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