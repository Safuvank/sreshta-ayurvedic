// import Image from "next/image";
// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";

// interface TreatmentPreviewCardProps {
//   title: string;
//   description: string;
//   image: string;
//   slug: string;
// }

// export const TreatmentPreviewCard = ({
//   title,
//   description,
//   image,
//   slug,
// }: TreatmentPreviewCardProps) => {
//   return (
//     <Link
//       href={`/treatments/${slug}`}
//       className="group relative block h-[400px] lg:h-[450px] w-full overflow-hidden rounded-xl bg-[#1F3D35]"
//     >
//       {/* Background Image */}
//       <Image
//         src={image}
//         alt={title}
//         fill
//         className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
//       />

//       {/* Deep Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A14] via-[#0A1A14]/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

//       {/* Top-Right Floating Action Icon */}
//       <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 group-hover:opacity-100 group-hover:bg-[#C9A86A]">
//         <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" />
//       </div>

//       {/* Content Layer (Slides up on hover) */}
//       <div className="absolute inset-0 flex flex-col justify-end pb-11 lg:pb-11 pl-6 md:p-8">
//         <div className="translate-y-8 transition-transform duration-500 ease-out group-hover:translate-y-0">
          
//           {/* Subtle Accent Line */}
//           <div className="mb-4 h-px w-8 bg-[#C9A86A] transition-all duration-500 group-hover:w-16" />

//           <h3 className="font-serif text-2xl md:text-3xl text-white">
//             {title}
//           </h3>

//           {/* Description fades in and expands */}
//           <div className="grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover:grid-rows-[1fr]">
//             <p className="mt-3 overflow-hidden text-sm md:text-base text-gray-300 leading-relaxed opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100">
//               <span className="line-clamp-2 block">{description}</span>
//             </p>
//           </div>
          
//         </div>
//       </div>
//     </Link>
//   );
// };

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