import { DoctorsHero } from "@/src/components/pages/doctors/DoctorsHero";
import { DoctorPreviewGrid } from "@/src/components/pages/doctors/DoctorsPreviewGrid";
import { Container } from "@/src/components/common/Container";

export default function DoctorsPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF]">
      {/* Hero Section */}
      <DoctorsHero />

      {/* Main Content Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <Container>
          {/* <div className="mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900">
              Meet the Experts
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl text-base md:text-lg">
              Our dedicated professionals bring decades of authentic Ayurvedic experience to help you achieve profound physical and mental well-being.
            </p>
          </div> */}

          {/* Render all doctors */}
          <DoctorPreviewGrid />
        </Container>
      </section>
    </main>
  );
}