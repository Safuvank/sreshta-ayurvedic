import { Container } from "@/src/components/common/Container";
import { OurCoreGrid } from "../../home/our-core-preview/OurCoreGrid";

export const OurCoreShowcase = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#F8F5EF]">
      <Container>
        {/* <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-[#2F5D50] mb-6">
            Conditions We Support
          </h2>
          <p className="text-lg text-gray-600">
            Authentic, time-tested Ayurvedic therapies tailored to your unique body constitution. Explore our diverse range of treatments naturally categorized to help you find the right path to healing.
          </p>
        </div> */}
        
        {/* Render all core treatments (no limit passed) */}
        <OurCoreGrid />
      </Container>
    </section>
  );
};