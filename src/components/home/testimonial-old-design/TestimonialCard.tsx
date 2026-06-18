import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  treatment: string;
  rating: number;
  image: string;
  review: string;
}

export const TestimonialCard = ({
  name,
  treatment,
  rating,
  image,
  review,
}: TestimonialCardProps) => {
  return (
    <article className="flex flex-col h-full bg-white p-8 rounded-3xl border border-gray-300 transition-all duration-300">
      {/* 1. Header: Stars & Treatment Info */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A86A] bg-[#F8F5EF] px-3 py-1 rounded-md">
          {treatment}
        </span>
        <div className="flex gap-0.5">
          {[...Array(rating)].map((_, index) => (
            <Star key={index} className="h-3.5 w-3.5 fill-[#C9A86A] text-[#C9A86A]" />
          ))}
        </div>
      </div>

      {/* 2. Body: Patient Review Text */}
      <p className="text-gray-600 leading-relaxed flex-1 text-base">
        "{review}"
      </p>

      {/* 3. Footer: Patient Profile */}
      <div className="mt-8 flex items-center gap-4 pt-6 border-t border-gray-50">
        <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-50 flex-shrink-0">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 text-base">{name}</h4>
          <p className="text-xs text-gray-400 mt-0.5">Verified Patient</p>
        </div>
      </div>
    </article>
  );
};