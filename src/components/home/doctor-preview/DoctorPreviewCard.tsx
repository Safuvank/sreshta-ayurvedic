import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface DoctorPreviewCardProps {
  name: string;
  designation: string;
  specialization: string;
  experience: string;
  image: string;
  slug?: string; // Optional: If you have individual doctor pages
}

export const DoctorPreviewCard = ({
  name,
  designation,
  specialization,
  experience,
  image,
  slug = "#",
}: DoctorPreviewCardProps) => {
  return (
    <article className="group flex flex-col items-center text-center h-full">
      {/* Premium Arch-Shaped Image Container */}
      <div className="relative h-[320px] w-full max-w-[280px] overflow-hidden rounded-t-full rounded-b-3xl bg-[#F8F5EF] mb-8 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#2F5D50]/10 group-hover:-translate-y-2">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Floating Glassmorphic Badge */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/80 backdrop-blur-md px-4 py-2 text-xs font-semibold text-[#2F5D50] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-6 shadow-sm">
          {experience} Experience
        </div>
      </div>

      {/* Minimalist Content */}
      <div className="flex flex-col flex-1 w-full px-4">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9A86A] mb-3">
          {designation}
        </p>

        <h4 className="font-serif text-2xl text-gray-900 mb-2 transition-colors duration-300 group-hover:text-[#2F5D50]">
          {name}
        </h4>

        <p className="text-gray-500 text-sm font-medium mb-6 flex-1">
          {specialization}
        </p>

        {/* Sleek Interaction Link */}
        <Link
          href={`/doctors/${slug}`}
          className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#2F5D50] transition-all duration-300 group-hover:text-[#C9A86A]"
        >
          Book Consultation
          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
        </Link>
      </div>
    </article>
  );
};