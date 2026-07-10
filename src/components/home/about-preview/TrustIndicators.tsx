// "use client";

// import { motion } from "framer-motion";
// import { trustMetrics } from "@/src/data/about";



// interface TrustIndicatorsProps {
//   itemVariants: any;
// }

// export const TrustIndicators = ({ itemVariants }: TrustIndicatorsProps) => {
//   return (
//     <motion.div
//       variants={itemVariants}
//       // Main dark green container
//       className="w-full bg-[#2a4538] rounded-2xl md:rounded-2xl shadow-xl overflow-hidden py-6 lg:py-6 px-2 lg:px-4"
//     >
//       {/* FIXED: Strictly 4 columns in one row across all devices */}
//       <div className="grid grid-cols-4 w-full">
//         {trustMetrics.map((metric, index) => {
//           const Icon = metric.icon;

//           return (
//             <div
//               key={metric.id}
//               // FIXED: Simplified borders. Now it just adds a right border to the first 3 items!
//               className={`flex flex-col items-center justify-start text-center font-bold group px-1 sm:px-2 lg:p-6 border-[#C9A86A]/20
//                 ${index !== 3 ? "border-r" : ""}
//               `}
//             >
//               {/* Icon Container: Shrink heavily on mobile to fit 4 in a row */}
//               <div className="relative w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-full border border-[#C9A86A]/50 border-dashed flex items-center justify-center mb-2 lg:mb-6 transition-transform duration-500 group-hover:scale-105 group-hover:bg-[#C9A86A]/5">
//                 <Icon
//                   className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#C9A86A]"
//                   strokeWidth={1.5}
//                 />
//               </div>

//               {/* Metric Value: Scaled down on mobile */}
//               <h3 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl text-[#C9A86A] mb-1 lg:mb-2 leading-none">
//                 {metric.value}
//               </h3>

//               {/* Metric Label: Extremely small on mobile so it fits the narrow columns */}
//               <p className="text-[7px] sm:text-[9px] md:text-xs font-semibold text-white/90 uppercase tracking-widest whitespace-pre-line leading-tight md:leading-relaxed">
//                 {metric.label}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </motion.div>
//   );
// };








// "use client";

// import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
// import { useEffect, useRef } from "react";
// import { trustMetrics } from "@/src/data/about";

// interface TrustIndicatorsProps {
//   itemVariants: any;
// }

// // Sub-component to handle the counting animation
// const AnimatedCounter = ({ value }: { value: string | number }) => {
//   const ref = useRef<HTMLSpanElement>(null);
//   const isInView = useInView(ref, { once: true, margin: "-50px" });

//   // Extract prefix (e.g., "$"), number (e.g., "100" or "4.8"), and suffix (e.g., "+", "k")
//   const match = String(value).match(/^(\D*)([\d.]+)(\D*)$/);
  
//   const prefix = match ? match[1] : "";
//   const numString = match ? match[2] : "0";
//   const suffix = match ? match[3] : "";
  
//   const targetNumber = parseFloat(numString);
//   // Determine if it's a decimal (like 4.8) to format it correctly
//   const decimals = numString.includes(".") ? numString.split(".")[1].length : 0;

//   const count = useMotionValue(0);
//   const displayValue = useTransform(count, (latest) => latest.toFixed(decimals));

//   useEffect(() => {
//     if (isInView && match) {
//       const controls = animate(count, targetNumber, {
//         duration: 2, // 2 seconds animation
//         ease: "easeOut",
//       });
//       return controls.stop;
//     }
//   }, [isInView, targetNumber, count, match]);

//   // If the regex fails to match a number, just render the text normally
//   if (!match) return <span>{value}</span>;

//   return (
//     <span ref={ref} className="inline-flex items-center">
//       {prefix}
//       <motion.span>{displayValue}</motion.span>
//       {suffix}
//     </span>
//   );
// };

// export const TrustIndicators = ({ itemVariants }: TrustIndicatorsProps) => {
//   return (
//     <motion.div
//       variants={itemVariants}
//       // Main dark green container
//       className="w-full bg-[#2a4538] rounded-2xl md:rounded-2xl shadow-xl overflow-hidden py-6 lg:py-6 px-2 lg:px-4"
//     >
//       {/* FIXED: Strictly 4 columns in one row across all devices */}
//       <div className="grid grid-cols-4 w-full">
//         {trustMetrics.map((metric, index) => {
//           const Icon = metric.icon;

//           return (
//             <div
//               key={metric.id}
//               // FIXED: Simplified borders. Now it just adds a right border to the first 3 items!
//               className={`flex flex-col items-center justify-start text-center font-bold group px-1 sm:px-2 lg:p-6 border-[#C9A86A]/20
//                 ${index !== 3 ? "border-r" : ""}
//               `}
//             >
//               {/* Icon Container: Shrink heavily on mobile to fit 4 in a row */}
//               <div className="relative w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-full border border-[#C9A86A]/50 border-dashed flex items-center justify-center mb-2 lg:mb-6 transition-transform duration-500 group-hover:scale-105 group-hover:bg-[#C9A86A]/5">
//                 <Icon
//                   className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#C9A86A]"
//                   strokeWidth={1.5}
//                 />
//               </div>

//               {/* Metric Value: Scaled down on mobile, now with Counter Animation */}
//               <h3 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl text-[#C9A86A] mb-1 lg:mb-2 leading-none">
//                 <AnimatedCounter value={metric.value} />
//               </h3>

//               {/* Metric Label: Extremely small on mobile so it fits the narrow columns */}
//               <p className="text-[7px] sm:text-[9px] md:text-xs font-semibold text-white/90 uppercase tracking-widest whitespace-pre-line leading-tight md:leading-relaxed">
//                 {metric.label}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </motion.div>
//   );
// };









"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { trustMetrics } from "@/src/data/about";
import { useMotionValue, useTransform } from "framer-motion";

interface TrustIndicatorsProps {
  itemVariants: any;
}

// Custom component to handle the counting animation
const AnimatedCounter = ({ value }: { value: string | number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Extract prefix (e.g., "$"), number (e.g., "100" or "4.8"), and suffix (e.g., "+", "k")
  const match = String(value).match(/^(\D*)([\d.]+)(\D*)$/);
  
  const prefix = match ? match[1] : "";
  const numString = match ? match[2] : "0";
  const suffix = match ? match[3] : "";
  
  const targetNumber = parseFloat(numString);
  // Determine if it's a decimal (like 4.8) to format it correctly
  const decimals = numString.includes(".") ? numString.split(".")[1].length : 0;

  const count = useMotionValue(0);
  const displayValue = useTransform(count, (latest) => latest.toFixed(decimals));

  useEffect(() => {
    if (isInView && match) {
      const controls = animate(count, targetNumber, {
        duration: 2.5, // Slightly longer duration for a smoother glide
        // Custom cubic-bezier for a buttery smooth deceleration at the end
        ease: [0.16, 1, 0.3, 1], 
      });
      return controls.stop;
    }
  }, [isInView, targetNumber, count, match]);

  // If the regex fails to match a number, just render the text normally
  if (!match) return <span>{value}</span>;

  return (
    // Added 'tabular-nums' to prevent horizontal jittering while counting
    <span ref={ref} className="inline-flex items-center tabular-nums">
      {prefix}
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};

export const TrustIndicators = ({ itemVariants }: TrustIndicatorsProps) => {
  return (
    <motion.div
      variants={itemVariants}
      // Main dark green container
      className="w-full bg-[#2a4538] rounded-2xl md:rounded-2xl shadow-xl overflow-hidden py-6 lg:py-6 px-2 lg:px-4"
    >
      {/* FIXED: Strictly 4 columns in one row across all devices */}
      <div className="grid grid-cols-4 w-full">
        {trustMetrics.map((metric, index) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.id}
              // FIXED: Simplified borders. Now it just adds a right border to the first 3 items!
              className={`flex flex-col items-center justify-start text-center font-bold group px-1 sm:px-2 lg:p-6 border-[#C9A86A]/20
                ${index !== 3 ? "border-r" : ""}
              `}
            >
              {/* Icon Container: Shrink heavily on mobile to fit 4 in a row */}
              <div className="relative w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-full border border-[#C9A86A]/50 border-dashed flex items-center justify-center mb-2 lg:mb-6 transition-transform duration-500 group-hover:scale-105 group-hover:bg-[#C9A86A]/5">
                <Icon
                  className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#C9A86A]"
                  strokeWidth={1.5}
                />
              </div>

              {/* Metric Value: Scaled down on mobile */}
              <h3 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl text-[#C9A86A] mb-1 lg:mb-2 leading-none">
                {/* Replaced static metric.value with the AnimatedCounter */}
                <AnimatedCounter value={metric.value} />
              </h3>

              {/* Metric Label: Extremely small on mobile so it fits the narrow columns */}
              <p className="text-[7px] sm:text-[9px] md:text-xs font-semibold text-white/90 uppercase tracking-widest whitespace-pre-line leading-tight md:leading-relaxed">
                {metric.label}
              </p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};




