// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { CheckCircle2, ArrowRight } from "lucide-react";
// import { facilityHighlight } from "@/src/data/facilities";

// export const FacilityHighlight = () => {
//   return (
//     <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
//       {/* Left: Large Image */}
//       <motion.div 
//         initial={{ opacity: 0, x: -40 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true, margin: "-100px" }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="relative h-[400px] lg:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl"
//       >
//         <Image
//           src={facilityHighlight.image}
//           alt={facilityHighlight.title}
//           fill
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//       </motion.div>

//       {/* Right: Content */}
//       <motion.div 
//         initial={{ opacity: 0, x: 40 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true, margin: "-100px" }}
//         transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         className="flex flex-col"
//       >
//         <h3 className="font-serif text-3xl md:text-4xl text-gray-900">
//           {facilityHighlight.title}
//         </h3>
        
//         <p className="mt-6 text-lg text-gray-600 leading-relaxed">
//           {facilityHighlight.description}
//         </p>

//         {/* Features List */}
//         <ul className="mt-8 space-y-4">
//           {facilityHighlight.features.map((feature, index) => (
//             <li key={index} className="flex items-center gap-3 text-gray-700">
//               <CheckCircle2 className="w-6 h-6 text-[#C9A86A] flex-shrink-0" />
//               <span className="font-medium">{feature}</span>
//             </li>
//           ))}
//         </ul>

//         {/* CTA Button */}
//         <div className="mt-10">
//           <Link
//             href="/gallery"
//             className="group inline-flex items-center gap-2 rounded-full bg-[#2F5D50] px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-[#24483E] hover:shadow-lg"
//           >
//             Explore Full Gallery 
//             <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
//           </Link>
//         </div>
//       </motion.div>
//     </div>
//   );
// };