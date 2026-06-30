import { HospitalFacilities } from "../components/home/about-preview/HospitalFacilities";
// import { DoctorsPreview } from "../components/home/doctor-preview/DoctorsPreview";
// import { FacilitiesPreview } from "../components/home/facilities-preview/FacilitiesPreview";
import Hero from "../components/home/Hero/Hero";
import { ServicesPreview } from "../components/home/services-preview/ServicesPreview";
import { TestimonialsPreview } from "../components/home/testimonial-old-design/TestimonialsPreview";
import { TreatmentsPreview } from "../components/home/treatment-preview/TreatmentsPreview";
import { ConsultationCTA } from "../components/home/consultation-cta/ConsultationCTA";
import { OurCoreSection } from "../components/home/our-core-preview/OurCoreSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <HospitalFacilities />
      <ServicesPreview />
      <TreatmentsPreview />
      <OurCoreSection />
      {/* <FacilitiesPreview /> */}
      {/* <DoctorsPreview /> */}
      <TestimonialsPreview />
      <ConsultationCTA />
    </div>
  );
}
