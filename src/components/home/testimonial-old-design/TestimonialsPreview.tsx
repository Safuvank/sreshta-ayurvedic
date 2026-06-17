// "use client";

// import { motion, Variants } from "framer-motion";
// import { testimonials } from "@/src/data/testimonials";
// import { Container } from "../Hero/Container";
// import { SectionHeading } from "../../common/SectionHeading";
// import { TestimonialCard } from "./TestimonialCard";

// export const TestimonialsPreview = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
//   };

//   return (
//     <section className="bg-white py-20 lg:py-32 relative">
//       <Container>
//         {/* Simple Section Header */}
//         <SectionHeading
//           eyebrow="Patient Stories"
//           title="Trusted By Our Patients"
//           description="Read simple, genuine experiences from individuals who found recovery and wellness through our authentic Ayurvedic therapies."
//         />

//         {/* Crisp, Balanced Grid Layout */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 lg:mt-24"
//         >
//           {testimonials.map((testimonial) => (
//             <motion.div key={testimonial.id} variants={itemVariants} className="h-full">
//               <TestimonialCard {...testimonial} />
//             </motion.div>
//           ))}
//         </motion.div>
//       </Container>
//     </section>
//   );
// };