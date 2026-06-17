import { HospitalFacilities } from "../components/home/about-preview/HospitalFacilities";
// import { DoctorsPreview } from "../components/home/doctor-preview/DoctorsPreview";
// import { FacilitiesPreview } from "../components/home/facilities-preview/FacilitiesPreview";
import Hero from "../components/home/Hero/Hero";
import { ServicesPreview } from "../components/home/services-preview/ServicesPreview";
import { TestimonialsSection } from "../components/home/testimonials-preview/TestimonialSection";
// import { TestimonialsPreview } from "../components/home/testimonials-preview/TestimonialsPreview";
import { TreatmentsPreview } from "../components/home/treatment-preview/TreatmentsPreview";

export default function Home() {
  return (
    <div>
      <Hero />
      <HospitalFacilities/>
      <ServicesPreview />
      <TreatmentsPreview />
      {/* <FacilitiesPreview /> */}
      {/* <DoctorsPreview /> */}
      {/* <TestimonialsPreview /> */}
      <TestimonialsSection/>
    </div>
  );
}
