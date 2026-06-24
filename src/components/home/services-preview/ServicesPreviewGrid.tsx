// "use client";

// import { motion, Variants } from "framer-motion";
// import { services } from "@/src/data/services";
// import { ServicePreviewCard } from "./ServicePreviewCard";

// export const ServicePreviewGrid = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 30 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   return (
//     <motion.div
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, margin: "-100px" }}
//       className="grid gap-6 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
//     >
//       {services.map((service) => (
//         <motion.div key={service.id} variants={itemVariants} className="h-full">
//           <ServicePreviewCard {...service} />
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };

"use client";

import { motion, Variants } from "framer-motion";
import { services } from "@/src/data/services";
import { ServicePreviewCard } from "./ServicePreviewCard";

// 1. Add an interface for the props
interface ServicePreviewGridProps {
  limit?: number;
}

export const ServicePreviewGrid = ({ limit }: ServicePreviewGridProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // 2. Slice the services array if a limit is provided
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid gap-6 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      {/* 3. Map over the newly sliced array */}
      {displayedServices.map((service) => (
        <motion.div key={service.id} variants={itemVariants} className="h-full">
          <ServicePreviewCard {...service} />
        </motion.div>
      ))}
    </motion.div>
  );
};