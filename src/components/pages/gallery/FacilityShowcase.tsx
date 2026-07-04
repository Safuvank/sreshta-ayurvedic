// // components/gallery/FacilityShowcase.tsx
// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Flower2, BookOpen, Footprints, Utensils } from "lucide-react";
// import { Container } from "../../common/Container";

// const features = [
//   {
//     icon: Flower2,
//     title: "Yoga & Meditation Hall",
//     description: "Dedicated spaces for daily yoga and breathwork sessions guided by our expert teachers.",
//   },
//   {
//     icon: BookOpen,
//     title: "Activity Center & Library",
//     description: "A serene environment to relax, read, and reconnect with nature during your recovery.",
//   },
//   {
//     icon: Footprints,
//     title: "Walking Trails",
//     description: "Beautifully maintained gardens and tracks that keep you energized and active.",
//   },
//   {
//     icon: Utensils,
//     title: "Ayurvedic Restaurant",
//     description: "Nutritious meals prepared with organic ingredients tailored to your personalized healing plan.",
//   },
// ];

// export const FacilityShowcase = () => {
//   return (
//     <section className="bg-[#121A16] py-20 lg:py-32 overflow-hidden text-white">
//       <Container>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
//           {/* Left Content */}
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8 }}
//             className="flex flex-col"
//           >
//             <div className="mb-12">
//               <span className="text-xs font-semibold tracking-[0.2em] text-[#C9A86A] uppercase mb-4 block">
//                 Discover The Experience
//               </span>
//               <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6">
//                 A complete wellness sanctuary
//               </h2>
//               <p className="text-gray-400 font-light text-lg leading-relaxed">
//                 Thoughtfully designed spaces and amenities that support every part of your stay, ensuring physical healing and mental tranquility.
//               </p>
//             </div>

//             <div className="flex flex-col space-y-8">
//               {features.map((feature, index) => (
//                 <div key={index} className="flex gap-6 group">
//                   <div className="mt-1 flex-shrink-0 text-[#C9A86A] transition-transform duration-500 group-hover:scale-110">
//                     <feature.icon className="w-7 h-7 stroke-[1.5]" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#C9A86A] transition-colors">
//                       {feature.title}
//                     </h3>
//                     <p className="text-sm text-gray-400 font-light leading-relaxed">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Right Image */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative w-full h-[500px] lg:h-[750px] rounded-2xl overflow-hidden shadow-2xl"
//           >
//             <Image
//               src="/images/about/ward.png" // Replace with your image
//               alt="Facility Showcase"
//               fill
//               className="object-cover"
//             />
//             <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.5)] pointer-events-none" />
//           </motion.div>
//         </div>
//       </Container>
//     </section>
//   );
// };