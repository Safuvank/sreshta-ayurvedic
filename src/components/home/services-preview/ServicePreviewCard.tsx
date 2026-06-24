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
//     <article className="group relative flex h-full flex-col bg-white rounded-[2.5rem] p-2 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(47,93,80,0.08)] border border-gray-100 hover:border-[#2F5D50]/20">
//       {/* Inset Framed Image Container */}
//       <div className="relative h-[240px] md:h-[260px] w-full overflow-hidden rounded-[2rem] bg-[#F8F5EF]">
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

//         {/* Modern Bottom Action Bar */}
//         {/* <div className="mt-2 flex items-center justify-between border-t border-gray-100 pt-4 transition-colors duration-300 group-hover:border-[#C9A86A]/30">
//           <span className="text-xs font-semibold tracking-[0.2em] text-[#C9A86A] uppercase">
//             view more
//           </span>

//           <Link
//             href={`/services/${slug}`}
//             // Make the button background transition smoothly
//             className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-[#F8F5EF] text-[#2F5D50] transition-colors duration-500 group-hover:bg-[#2F5D50] group-hover:text-white"
//             aria-label={`Explore ${title}`}
//           >
//             {/* The absolute span makes the entire parent card clickable on desktop */}
//             {/* <span className="absolute inset-0 z-10 hidden md:block" /> */}

//             {/* --- SMOOTH PREMIUM ARROW ANIMATION --- */}
//             {/* <div className="relative flex items-center justify-center w-5 h-5 overflow-hidden"> */}
//               {/* Arrow 1: Slides up and out of view */}
//               {/* <ArrowUpRight className="absolute w-5 h-5 transition-transform duration-500 ease-out group-hover:translate-x-[150%] group-hover:translate-y-[150%]" /> */}

//               {/* Arrow 2: Starts out of view and slides in from the bottom left */}
//               {/* <ArrowUpRight className="absolute w-5 h-5 translate-x-[150%] translate-y-[150%] transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0" /> */}
//             {/* </div> */}
//           {/* </Link> */} 
//         {/* </div> */}

//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="mt-16 text-center"
//           >
//             <Link
//               href="/treatments"
//               className="
//                 group 
//                 relative 
//                 overflow-hidden 
//                 inline-flex 
//                 rounded-xl 
//                 border 
//                 border-[#2F5D50] 
//                 bg-transparent 
//                 px-8 
//                 py-4 
//                 font-medium 
//                 text-[#2F5D50] 
//                 transition-all 
//                 duration-300 
//                 hover:text-white 
//                 hover:shadow-lg 
//                 hover:shadow-[#2F5D50]/20
//                 "
//             >
//               {/* Animated Background (Slides up on hover) */}
//               <span className="absolute inset-0 translate-y-full bg-[#2F5D50] transition-transform duration-300 ease-out group-hover:translate-y-0" />

//               {/* Content Wrapper (Keeps text and icon above the background) */}
//               <span className="relative z-10 flex items-center gap-3">
//                 View All Treatments
//                 <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
//               </span>
//             </Link>
//           </motion.div>
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
}

export const ServicePreviewCard = ({
  title,
  description,
  image,
  slug,
}: ServicePreviewCardProps) => {
  return (
    <article className="group relative flex h-full flex-col bg-white rounded-[2.5rem] p-2 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(47,93,80,0.08)] border border-gray-100 hover:border-[#2F5D50]/20">
      {/* Inset Framed Image Container */}
      <div className="relative h-[240px] md:h-[260px] w-full overflow-hidden rounded-[2rem] bg-[#F8F5EF]">
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
      <div className="flex flex-1 flex-col px-5 py-6 lg:px-6 lg:py-8">
        <h3 className="font-serif text-2xl text-gray-900 group-hover:text-[#2F5D50] transition-colors duration-300">
          {title}
        </h3>

        <p className="mt-3 flex-1 text-gray-500 leading-relaxed text-sm md:text-base">
          {description}
        </p>

        {/* Modern Bottom Action Bar - SPECIFIC TO THIS CARD */}
        <div className="mt-2 flex items-center justify-between border-t border-gray-100 pt-4 transition-colors duration-300 group-hover:border-[#C9A86A]/30">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#C9A86A] uppercase">
            view details
          </span>

          <Link
            href={`/services/${slug}`}
            className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-[#F8F5EF] text-[#2F5D50] transition-colors duration-500 group-hover:bg-[#2F5D50] group-hover:text-white"
            aria-label={`Explore ${title}`}
          >
            {/* The absolute span makes the entire parent card clickable on desktop */}
            <span className="absolute inset-0 z-10 hidden md:block" />

            {/* --- SMOOTH PREMIUM ARROW ANIMATION --- */}
            <div className="relative flex items-center justify-center w-5 h-5 overflow-hidden">
              {/* Arrow 1: Slides up and out of view */}
              <ArrowUpRight className="absolute w-5 h-5 transition-transform duration-500 ease-out group-hover:translate-x-[150%] group-hover:translate-y-[150%]" />

              {/* Arrow 2: Starts out of view and slides in from the bottom left */}
              <ArrowUpRight className="absolute w-5 h-5 translate-x-[150%] translate-y-[150%] transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
};