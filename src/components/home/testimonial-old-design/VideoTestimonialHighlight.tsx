




// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Play } from "lucide-react";
// import { featuredTestimonial } from "@/src/data/testimonials";

// export const VideoTestimonialHighlight = () => {
//   return (
//     <div className="relative w-full max-w-4xl mx-auto aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden group cursor-pointer shadow-2xl border border-gray-100">
//       <Image
//         src={featuredTestimonial.videoThumbnail}
//         alt={featuredTestimonial.name}
//         fill
//         className="object-cover transition-transform duration-1000 group-hover:scale-105"
//       />
      
//       {/* Dark gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D35]/90 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-80" />

//       {/* Center Play Icon */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
//         <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#1F3D35]">
//           <Play className="w-6 h-6 ml-1" />
//         </div>
//       </div>

//       {/* Content at bottom */}
//       <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
//         <p className="text-white font-serif text-xl md:text-3xl leading-snug mb-3 md:mb-4 line-clamp-3 md:max-w-3xl">
//           "{featuredTestimonial.quote}"
//         </p>
//         <p className="text-[#C9A86A] text-xs md:text-sm font-bold uppercase tracking-widest flex items-center gap-2">
//           <Play className="w-3 h-3 md:w-4 md:h-4 fill-current" /> Watch {featuredTestimonial.name}'s Story
//         </p>
//       </div>
//     </div>
//   );
// };