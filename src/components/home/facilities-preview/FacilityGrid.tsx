// "use client";

// import { motion, Variants } from "framer-motion";
// import { facilities } from "@/src/data/facilities";
// import { FacilityCard } from "./FacilityCard";

// export const FacilityGrid = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 },
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
//       className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
//     >
//       {facilities.map((facility) => (
//         <motion.div key={facility.id} variants={itemVariants}>
//           <FacilityCard {...facility} />
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };
