// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export interface OurCoreCardProps {
//   id?: number | string;
//   title: string;
//   description: string;
//   image: string;
//   slug: string;
//   className?: string;
// }

// export const OurCoreCard = ({
//   title,
//   description,
//   image,
//   slug,
//   className = "",
// }: OurCoreCardProps) => {
//   return (
//     <article className={`flex flex-col gap-5 shrink-0 ${className}`}>
//       {/* Image Container */}
//       <div className="relative w-full aspect-[4/5] md:aspect-[16/9] rounded-2xl overflow-hidden bg-gray-200">
//         <Image
//           src={image}
//           alt={title}
//           fill
//           className="object-cover transition-transform duration-700 ease-out hover:scale-105"
//           sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw"
//         />
//       </div>

//       {/* Content */}
//       <div className="flex flex-col gap-3">
//         <h3 className="font-serif text-2xl md:text-[1.75rem] text-gray-900 leading-tight">
//           {title}
//         </h3>

//         <p className="text-[15px] text-gray-500 leading-relaxed line-clamp-3 md:line-clamp-4">
//           {description}
//         </p>

//         {/* Updated Route Link */}
//         <Link
//           href={`/our-core/${slug}`}
//           className="group inline-flex items-center gap-2 text-[15px] font-medium text-[#2F5D50] transition-colors hover:text-[#2F5D50] mt-1 w-fit"
//         >
//           Learn more
//           <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
//         </Link>
//       </div>
//     </article>
//   );
// };



"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface OurCoreCardProps {
  id?: number | string;
  title: string;
  description: string;
  image: string;
  slug: string;
  className?: string;
}

export const OurCoreCard = ({
  title,
  description,
  image,
  slug,
  className = "",
}: OurCoreCardProps) => {
  return (
    <article className={`flex flex-col sm:flex-row items-start gap-5 lg:gap-6 pb-8 border-b border-gray-200/80 h-full ${className}`}>
      
      {/* Image Container */}
      {/* Fixed width/aspect ratio to match the reference style */}
      <div className="relative w-full sm:w-[140px] lg:w-[180px] shrink-0 aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 group cursor-pointer">
        <Link href={`/our-core/${slug}`}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 85vw, 180px"
          />
          {/* Subtle overlay effect on hover */}
          <div className="absolute inset-0 bg-[#2F5D50]/0 transition-colors duration-500 group-hover:bg-[#2F5D50]/10 mix-blend-multiply" />
        </Link>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center flex-1 h-full">
        <Link href={`/our-core/${slug}`}>
          <h3 className="font-serif text-xl lg:text-2xl text-gray-900 leading-tight mb-3 hover:text-[#2F5D50] transition-colors">
            {title}
          </h3>
        </Link>

        <p className="text-[14px] lg:text-[15px] text-gray-500 leading-relaxed line-clamp-3 mb-4">
          {description}
        </p>

        {/* Route Link matching the maroon reference color */}
        <Link
          href={`/our-core/${slug}`}
          className="group inline-flex items-center gap-2 text-[14px] font-medium text-[#8B2E42] transition-colors hover:text-[#2F5D50] mt-auto w-fit"
        >
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};