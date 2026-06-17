// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { Star, Quote } from "lucide-react";
// import { testimonials } from "@/src/data/testimonials";

// export const InteractiveTestimonial = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const activeTestimonial = testimonials[activeIndex];

//   return (
//     <div className="flex flex-col items-center max-w-4xl mx-auto mt-16">
      
//       {/* Top: Large Quote Icon */}
//       <Quote className="w-16 h-16 text-[#C9A86A] opacity-30 mb-8" />

//       {/* Middle: The Active Review (Cross-fades on change) */}
//       <div className="min-h-[200px] flex flex-col items-center text-center">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeIndex}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//             className="flex flex-col items-center"
//           >
//             {/* Star Rating */}
//             <div className="flex gap-1 mb-6">
//               {[...Array(activeTestimonial.rating)].map((_, index) => (
//                 <Star key={index} className="h-5 w-5 fill-[#C9A86A] text-[#C9A86A]" />
//               ))}
//             </div>

//             {/* The Review Text */}
//             <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-white leading-relaxed mb-8">
//               "{activeTestimonial.review}"
//             </p>

//             {/* Author Details */}
//             <div className="flex flex-col items-center">
//               <h3 className="font-bold text-lg text-white tracking-wide">
//                 {activeTestimonial.name}
//               </h3>
//               <p className="text-sm font-medium text-[#C9A86A] uppercase tracking-widest mt-2">
//                 {activeTestimonial.treatment}
//               </p>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Bottom: Interactive Portrait Track */}
//       <div className="mt-16 md:mt-24 pt-8 border-t border-white/10 w-full flex justify-center gap-4 md:gap-8">
//         {testimonials.map((testimonial, index) => {
//           const isActive = index === activeIndex;

//           return (
//             <button
//               key={testimonial.id}
//               onClick={() => setActiveIndex(index)}
//               className="relative group flex flex-col items-center outline-none"
//               aria-label={`View testimonial from ${testimonial.name}`}
//             >
//               {/* Avatar Ring Animation */}
//               <motion.div
//                 className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden transition-all duration-500 ${
//                   isActive 
//                     ? "border-2 border-[#C9A86A] scale-110 shadow-[0_0_20px_rgba(201,168,106,0.3)]" 
//                     : "border border-white/20 opacity-50 group-hover:opacity-100 group-hover:scale-105"
//                 }`}
//               >
//                 <Image
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   fill
//                   className="object-cover"
//                 />
//               </motion.div>

//               {/* Active Indicator Dot */}
//               {isActive && (
//                 <motion.div 
//                   layoutId="activeIndicator"
//                   className="w-2 h-2 rounded-full bg-[#C9A86A] mt-4"
//                 />
//               )}
//             </button>
//           );
//         })}
//       </div>

//     </div>
//   );
// };

