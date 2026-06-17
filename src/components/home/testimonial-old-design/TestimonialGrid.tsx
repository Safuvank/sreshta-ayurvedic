// "use client";

// import { motion } from "framer-motion";
// import { testimonials } from "@/src/data/testimonials";
// import { TestimonialCard } from "./TestimonialCard";

// export const TestimonialsGrid = () => {
//   // Split testimonials into two columns for the staggered effect
//   const leftCol = testimonials.filter((_, i) => i % 2 === 0);
//   const rightCol = testimonials.filter((_, i) => i % 2 !== 0);

//   return (
//     <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 items-start">
//       {/* Column 1 */}
//       <div className="flex flex-col gap-6 lg:gap-8">
//         {leftCol.map((testimonial, index) => (
//           <motion.div
//             key={testimonial.id}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-50px" }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//           >
//             <TestimonialCard {...testimonial} />
//           </motion.div>
//         ))}
//       </div>

//       {/* Column 2 - Pushed down slightly using margin-top to create the stagger */}
//       <div className="flex flex-col gap-6 lg:gap-8 sm:mt-16">
//         {rightCol.map((testimonial, index) => (
//           <motion.div
//             key={testimonial.id}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-50px" }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//           >
//             <TestimonialCard {...testimonial} />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };