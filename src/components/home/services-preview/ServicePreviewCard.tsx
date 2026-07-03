// import Image from "next/image";
// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";

// interface ServicePreviewCardProps {
//   title: string;
//   description: string;
//   image: string;
//   slug: string;
// }

// export const ServicePreviewCard = ({
//   title,
//   description,
//   image,
//   slug,
// }: ServicePreviewCardProps) => {
//   return (
//     <article className="group relative flex h-full flex-col bg-white rounded-2xl p-2 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(47,93,80,0.08)] border border-gray-100 hover:border-[#2F5D50]/20">
//       {/* Inset Framed Image Container */}
//       <div className="relative h-[240px] md:h-[260px] w-full overflow-hidden rounded-2xl bg-[#F8F5EF]">
//         <Image
//           src={image}
//           alt={title}
//           fill
//           className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
//         />
//         {/* Soft elegant tint on hover */}
//         <div className="absolute inset-0 bg-[#2F5D50]/0 transition-colors duration-500 group-hover:bg-[#2F5D50]/10 mix-blend-multiply" />
//       </div>

//       {/* Content Container */}
//       <div className="flex flex-1 flex-col px-5 py-6 lg:px-6 lg:py-8">
//         <h3 className="font-serif text-2xl text-gray-900 group-hover:text-[#2F5D50] transition-colors duration-300">
//           {title}
//         </h3>

//         <p className="mt-3 flex-1 text-gray-500 leading-relaxed text-sm md:text-base">
//           {description}
//         </p>

//         {/* Modern Bottom Action Bar - SPECIFIC TO THIS CARD */}
//         <div className="mt-2 flex items-center justify-between border-t border-gray-100 pt-4 transition-colors duration-300 group-hover:border-[#C9A86A]/30">
//           <span className="text-xs font-semibold tracking-[0.2em] text-[#C9A86A] uppercase">
//             view details
//           </span>

//           <Link
//             href={`/services/${slug}`}
//             className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-[#F8F5EF] text-[#2F5D50] transition-colors duration-500 group-hover:bg-[#2F5D50] group-hover:text-white"
//             aria-label={`Explore ${title}`}
//           >
//             {/* The absolute span makes the entire parent card clickable on desktop */}
//             <span className="absolute inset-0 z-10 hidden md:block" />

//             {/* --- SMOOTH PREMIUM ARROW ANIMATION --- */}
//             <div className="relative flex items-center justify-center w-5 h-5 overflow-hidden">
//               {/* Arrow 1: Slides up and out of view */}
//               <ArrowUpRight className="absolute w-5 h-5 transition-transform duration-500 ease-out group-hover:translate-x-[150%] group-hover:translate-y-[150%]" />

//               {/* Arrow 2: Starts out of view and slides in from the bottom left */}
//               <ArrowUpRight className="absolute w-5 h-5 translate-x-[150%] translate-y-[150%] transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
//             </div>
//           </Link>
//         </div>
//       </div>
//     </article>
//   );
// };



import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ServicePreviewCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  index?: number; // Added to handle specific mobile layouts
}

export const ServicePreviewCard = ({
  title,
  description,
  image,
  slug,
  index = 0,
}: ServicePreviewCardProps) => {
  const isFeaturedMobile = index === 0;

  return (
    <article className="group relative flex h-full flex-col bg-white rounded-2xl p-2 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(47,93,80,0.08)] border border-gray-100 hover:border-[#2F5D50]/20">
      {/* Inset Framed Image Container */}
      <div 
        className={`relative w-full overflow-hidden rounded-2xl bg-[#F8F5EF] transition-all duration-300
        ${isFeaturedMobile ? "h-[200px] md:h-[260px]" : "h-[140px] md:h-[260px]"}`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        />
        {/* Soft elegant tint on hover */}
        <div className="absolute inset-0 bg-[#2F5D50]/0 transition-colors duration-500 group-hover:bg-[#2F5D50]/10 mix-blend-multiply" />
      </div>

      {/* Content Container */}
      <div 
        className={`flex flex-1 flex-col ${
          isFeaturedMobile ? "px-4 py-5 lg:px-6 lg:py-8" : "px-3 py-4 md:px-6 md:py-8"
        }`}
      >
        <h3 
          className={`font-serif text-gray-900 group-hover:text-[#2F5D50] transition-colors duration-300 ${
            isFeaturedMobile ? "text-xl md:text-2xl" : "text-base md:text-2xl line-clamp-2 md:line-clamp-none"
          }`}
        >
          {title}
        </h3>

        {/* Hide description on the smaller mobile cards to save space */}
        <p 
          className={`mt-2 flex-1 text-gray-500 leading-relaxed text-sm md:text-base ${
            isFeaturedMobile ? "line-clamp-2 md:line-clamp-none" : "hidden md:block"
          }`}
        >
          {description}
        </p>

        {/* Modern Bottom Action Bar */}
        <div 
          className={`mt-2 flex items-center justify-between border-t border-gray-100 transition-colors duration-300 group-hover:border-[#C9A86A]/30 ${
            isFeaturedMobile ? "pt-4" : "pt-3 md:pt-4"
          }`}
        >
          {/* Hide 'view details' text on smaller cards */}
          <span 
            className={`text-[10px] md:text-xs font-semibold tracking-[0.2em] text-[#C9A86A] uppercase ${
              isFeaturedMobile ? "block" : "hidden md:block"
            }`}
          >
            view details
          </span>

          <Link
            href={`/services/${slug}`}
            className={`relative flex items-center justify-center rounded-2xl bg-[#F8F5EF] text-[#2F5D50] transition-colors duration-500 group-hover:bg-[#2F5D50] group-hover:text-white ${
              isFeaturedMobile ? "w-10 h-10 md:w-12 md:h-12" : "w-8 h-8 md:w-12 md:h-12 ml-auto"
            }`}
            aria-label={`Explore ${title}`}
          >
            {/* The absolute span makes the entire parent card clickable on desktop */}
            <span className="absolute inset-0 z-10 hidden md:block" />

            {/* SMOOTH PREMIUM ARROW ANIMATION */}
            <div className="relative flex items-center justify-center w-4 h-4 md:w-5 md:h-5 overflow-hidden">
              <ArrowUpRight className="absolute w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 ease-out group-hover:translate-x-[150%] group-hover:translate-y-[150%]" />
              <ArrowUpRight className="absolute w-4 h-4 md:w-5 md:h-5 translate-x-[150%] translate-y-[150%] transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
};