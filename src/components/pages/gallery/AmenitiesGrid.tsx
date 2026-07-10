// // components/gallery/AmenitiesGrid.tsx
// "use client";

// import { motion } from "framer-motion";
// import { Leaf, MapPin, Stethoscope, Heart, Pill, Building } from "lucide-react";
// import { Container } from "../../common/Container";
// import { SectionHeading } from "../../common/SectionHeading";

// const amenities = [
//   {
//     icon: Leaf,
//     title: "Herbal garden",
//     description:
//       "Our garden hosting a wide variety of medicinal herbs and plants.",
//   },
//   {
//     icon: MapPin,
//     title: "Amphitheater",
//     description: "Place to relax in the windy evenings of Kerala.",
//   },
//   {
//     icon: Stethoscope,
//     title: "Wellness & Treatment center",
//     description:
//       "An archetypal Kerala house, built of timber and tile houses our treatment rooms.",
//   },
//   {
//     icon: Heart,
//     title: "Recreational activities",
//     description:
//       "Indulge in some recreational activities hosted by our ground team at times.",
//   },
//   {
//     icon: Pill,
//     title: "Pharmacy",
//     description:
//       "Inhouse fully stocked pharmacy enabling you to carry herbs and formulations post your discharge.",
//   },
//   {
//     icon: Building,
//     title: "Doctor chambers",
//     description:
//       "This magnificent building houses the doctors' consultation rooms.",
//   },
// ];

// export const AmenitiesGrid = () => {
//   return (
//     <section className="bg-white py-20 lg:py-32">
//       <Container>
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
//         >
//           <SectionHeading
//             eyebrow="More Amenities"
//             title="Designed to support every part of your stay"
//             align="center"
//           />
//           {/* <p className="text-gray-600 font-light text-lg">
//             Beyond these spaces, every detail of Sreshta Ayurveda is designed to
//             support your healing journey.
//           </p> */}
//         </motion.div>

//         {/* Grid Section */}
//         {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
//           {amenities.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className={`relative ${
//                 index < 3 ? "lg:border-b lg:border-gray-200 lg:pb-16" : ""
//               } ${(index === 0 || index === 1) && "md:border-b md:border-gray-200 md:pb-16"} pb-8 border-b border-gray-200 md:border-none`}
//             >
//               <item.icon className="w-8 h-8 text-[#C9A86A] mb-6 stroke-[1.5]" />
//               <h3 className="text-xl font-medium text-[#1A202C] mb-3">
//                 {item.title}
//               </h3>
//               <p className="text-gray-500 font-light leading-relaxed text-sm">
//                 {item.description}
//               </p>
//             </motion.div>
//           ))}
//         </div> */}

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//   {amenities.map((item, index) => (
//     <motion.div
//       key={index}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
//       className="group relative bg-[#1F3D35] rounded-2xl p-8 border border-white/5 transition-all duration-300 hover:bg-[#264b41] hover:shadow-2xl hover:shadow-[#C9A86A]/20 hover:-translate-y-1 flex flex-col"
//     >
//       {/* Icon Container */}
//       <div className="w-14 h-14 rounded-xl bg-[#C9A86A]/15 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#C9A86A]">
//         {/* Notice the hover state here: the icon turns dark green against the gold background! */}
//         <item.icon className="w-7 h-7 text-[#C9A86A] stroke-[1.5] transition-colors duration-300 group-hover:text-[#1F3D35]" />
//       </div>
      
//       {/* Title */}
//       <h3 className="text-xl font-medium text-white mb-3 transition-colors duration-300 group-hover:text-[#C9A86A]">
//         {item.title}
//       </h3>
      
//       {/* Description */}
//       <p className="text-gray-300 font-light leading-relaxed text-sm">
//         {item.description}
//       </p>
//     </motion.div>
//   ))}
// </div>
//       </Container>
//     </section>
//   );
// };
