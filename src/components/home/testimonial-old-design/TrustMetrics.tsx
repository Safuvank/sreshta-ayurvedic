// "use client";

// import { motion } from "framer-motion";
// import { trustMetrics } from "@/src/data/testimonials";

// export const TrustMetrics = () => {
//   return (
//     <div className="flex flex-wrap gap-4 mt-8">
//       {trustMetrics.map((metric, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: index * 0.1 }}
//           className="bg-white border border-gray-100 rounded-2xl px-5 py-3 shadow-sm"
//         >
//           <span className="block font-serif text-2xl text-[#2F5D50]">
//             {metric.value}
//           </span>
//           <span className="block text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">
//             {metric.label}
//           </span>
//         </motion.div>
//       ))}
//     </div>
//   );
// };