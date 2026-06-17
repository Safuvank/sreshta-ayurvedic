// "use client";

// import { motion } from "framer-motion";
// import { testimonials } from "@/src/data/testimonials";
// import { TestimonialCard } from "./TestimonialCard";

// export const TestimonialsMarquee = () => {
//   // Duplicate the array to create a seamless infinite loop
//   const duplicatedTestimonials = [...testimonials, ...testimonials];

//   return (
//     <div className="relative w-full overflow-hidden py-10 flex">
//       {/* Subtle gradient fades on the edges for a premium look */}
//       <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#F8F5EF] to-transparent z-10 pointer-events-none" />
//       <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#F8F5EF] to-transparent z-10 pointer-events-none" />

//       <motion.div
//         className="flex w-max gap-6 pr-6"
//         animate={{ x: ["0%", "-50%"] }}
//         transition={{
//           repeat: Infinity,
//           ease: "linear",
//           duration: 35, // Adjust this value to make it move faster or slower
//         }}
//       >
//         {duplicatedTestimonials.map((testimonial, index) => (
//           <TestimonialCard key={`${testimonial.id}-${index}`} {...testimonial} />
//         ))}
//       </motion.div>
//     </div>
//   );
// };