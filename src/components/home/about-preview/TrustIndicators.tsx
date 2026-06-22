// "use client";

// import { motion } from "framer-motion";
// import { Award, Users, Leaf, ShieldCheck } from "lucide-react";

// const trustMetrics = [
//   { id: 1, icon: Award, value: "5+", label: "Years Experience" },
//   { id: 2, icon: Users, value: "250+", label: "Happy Patients" },
//   { id: 3, icon: Leaf, value: "70+", label: "Products" },
//   { id: 4, icon: ShieldCheck, value: "100%", label: "Product Purity" },
// ];

// interface TrustIndicatorsProps {
//   itemVariants: any;
// }

// export const TrustIndicators = ({ itemVariants }: TrustIndicatorsProps) => {
//   return (
//     <motion.div
//       variants={itemVariants}
//       // 1. Switched to Grid: 1 col (mobile) -> 2 cols (tablet) -> 4 cols (desktop)
//       // 2. Used gap-[1px] and bg-white/20 to automatically create perfect divider lines on all screens
//       className="w-full bg-white/20 border border-gray-200 rounded-[2rem] shadow-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] overflow-hidden"
//     >
//       {trustMetrics.map((metric) => {
//         const Icon = metric.icon;
//         return (
//           <div
//             key={metric.id}
//             // Background color moved here to allow the gap to act as borders
//             className="bg-[#2F5D50] py-10 px-4 lg:px-8 flex flex-col items-center justify-center text-center group transition-colors duration-500"
//           >
//             <div className="flex items-center justify-center gap-3 md:gap-4 mb-3">
//               <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#C9A86A] transition-transform duration-500 group-hover:scale-110 flex-shrink-0" />

//               <h3 className="text-4xl font-bold md:text-5xl uppercase lg:text-6xl text-[#C9A86A]">
//                 {metric.value}
//               </h3>
//             </div>

//             {/* Reduced text size slightly on smaller screens to prevent wrapping issues */}
//             <p className="text-[10px] md:text-xs font-bold text-white uppercase tracking-[0.15em] md:tracking-[0.2em] mt-2">
//               {metric.label}
//             </p>
//           </div>
//         );
//       })}
//     </motion.div>
//   );
// };





"use client";

import { motion } from "framer-motion";
import { Leaf, UserRound, FlaskConical, Users } from "lucide-react";

const trustMetrics = [
  { id: 1, icon: Leaf, value: "20+", label: "YEARS OF\nEXCELLENCE" },
  { id: 2, icon: UserRound, value: "50+", label: "EXPERT\nDOCTORS" },
  { id: 3, icon: FlaskConical, value: "25+", label: "SPECIALITY\nTREATMENTS" },
  { id: 4, icon: Users, value: "10K+", label: "PATIENTS\nHEALED" },
];

interface TrustIndicatorsProps {
  itemVariants: any;
}

export const TrustIndicators = ({ itemVariants }: TrustIndicatorsProps) => {
  return (
    <motion.div
      variants={itemVariants}
      // Main dark green container
      className="w-full bg-[#2a4538] rounded-2xl md:rounded-[2rem] shadow-xl overflow-hidden py-6 lg:py-12 px-2 lg:px-4"
    >
      {/* FIXED: Strictly 4 columns in one row across all devices */}
      <div className="grid grid-cols-4 w-full">
        {trustMetrics.map((metric, index) => {
          const Icon = metric.icon;
          
          return (
            <div
              key={metric.id}
              // FIXED: Simplified borders. Now it just adds a right border to the first 3 items!
              className={`flex flex-col items-center justify-start text-center group px-1 sm:px-2 lg:p-6 border-[#C9A86A]/20
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
              <h3 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-serif text-[#C9A86A] mb-1 lg:mb-2 leading-none">
                {metric.value}
              </h3>

              {/* Metric Label: Extremely small on mobile so it fits the narrow columns */}
              <p className="text-[7px] sm:text-[9px] md:text-xs font-medium text-white/90 uppercase tracking-widest whitespace-pre-line leading-tight md:leading-relaxed">
                {metric.label}
              </p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};