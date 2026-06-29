import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface TreatmentPreviewCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  category: string;
}

export const TreatmentPreviewCard = ({
  title,
  description,
  image,
  slug,
  category,
}: TreatmentPreviewCardProps) => {
  return (
    // The entire card becomes a clickable link routing to the specific slug
    <Link href={`/treatments/${slug}`} className="group block h-full">
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-300 h-full flex flex-col transition-all duration-300">
        {/* Image Container */}
        <div className="relative h-48 md:h-56 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Floating Category Badge */}
          {/* <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#2F5D50] uppercase tracking-wider shadow-sm">
            {category}
          </div> */}
        </div>

        {/* Text Content Container */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-2xl font-serif text-[#1F3D35] mb-3 group-hover:text-[#C9A86A] transition-colors">
            {title}
          </h3>

          {/* line-clamp-3 ensures descriptions stay uniform in height */}
          <p className="text-gray-600 text-base line-clamp-3 mb-6 flex-1">
            {description}
          </p>

          {/* Call to Action at bottom of card */}
          <div className="flex items-center text-[#C9A86A] font-medium text-sm mt-auto">
            Explore Treatment
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
          </div>
        </div>
      </div>
    </Link>
  );
};
