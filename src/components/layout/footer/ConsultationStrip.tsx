import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../../home/Hero/Container";

export const ConsultationStrip = () => {
  return (
    <div className="bg-[#C9A86A] ">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row lg:py-12">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-3xl md:text-4xl text-gray-900">
              Need Expert Ayurvedic Consultation?
            </h3>
            <p className="mt-2 text-gray-800 font-medium">
              Take the first step towards holistic healing today.
            </p>
          </div>

          <Link
            href="/contacts"
            className="group flex flex-shrink-0 items-center gap-2 rounded-full bg-[#1F3D35] px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-[#152a24] hover:shadow-lg hover:shadow-[#1F3D35]/20"
          >
            Book Appointment
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </div>
  );
};