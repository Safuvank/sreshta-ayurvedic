import { Container } from "../Hero/Container";
import { SectionHeading } from "../../common/SectionHeading";
import { ServicePreviewGrid } from "./ServicesPreviewGrid";

export const ServicesPreview = () => {
  return (
    <section className="relative py-10 lg:py-20 bg-white overflow-hidden">
      {/* Decorative Background Element (Optional - adds premium feel) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F8F5EF] rounded-xl blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />

      <Container>
        <SectionHeading
          eyebrow="Our Expertise"
          title="Holistic Ayurvedic Solutions"
        />

        <div className="mt-16 lg:mt-24">
          <ServicePreviewGrid />
        </div>
      </Container>
    </section>
  );
};






