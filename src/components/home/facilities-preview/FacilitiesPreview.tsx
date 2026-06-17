import { Container } from "../Hero/Container";
import { SectionHeading } from "../../common/SectionHeading";
import { FacilityBentoShowcase } from "./FacilityBentoShowcase";

export const FacilitiesPreview = () => {
  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden relative">
      {/* Decorative Blur Background */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#F8F5EF] rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <Container>
        <div className="relative z-10">
          <SectionHeading
            eyebrow="Our Facilities"
            title="Healing Spaces Designed For Your Comfort"
            description="Experience a peaceful, modern Ayurvedic healthcare environment created with varying atmospheres to support your physical recovery and mental relaxation."
          />

          <div className="mt-16 lg:mt-20">
            {/* Replaced highlight and grid with a single modern bento layout */}
            <FacilityBentoShowcase />
          </div>
        </div>
      </Container>
    </section>
  );
};