// "use client";

// import { motion, Variants } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// interface HeroActionsProps {
//   itemVariants: Variants;
// }

// export const HeroActions = ({ itemVariants }: HeroActionsProps) => {
//   return (
//     <motion.div
//       variants={itemVariants}
//       // FIXED: Added "flex" and the proper responsive alignments
//       className="mt-10 flex w-full flex-col sm:flex-row justify-start md:justify-center lg:justify-start gap-4"
//     >
//       {/* Secondary: Dark Green Border Outline Button (Slides to solid fill) */}
//       {/* FIXED: Removed unnecessary md:text-center as flex handles the alignment */}
//       <button className="invisible md:visible lg:visible group relative overflow-hidden w-full sm:w-auto rounded-xl border border-[#1F3D35]/20 bg-transparent px-8 py-4 text-[#1F3D35] font-medium transition-colors duration-300 hover:text-white cursor-pointer">
//         <span className="absolute inset-0 translate-y-full bg-[#1F3D35] transition-transform duration-300 ease-out group-hover:translate-y-0" />
//         {/* FIXED: Typo in justify-center */}
//         <span className="relative z-10 flex items-center justify-center gap-2">
//           Explore Treatments
//           <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//         </span>
//       </button>
//     </motion.div>
//   );
// };




"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroActionsProps {
  itemVariants: Variants;
}

export const HeroActions = ({ itemVariants }: HeroActionsProps) => {
  return (
    <motion.div
      variants={itemVariants}
      // FIXED: Strictly left aligned (justify-start on all sizes)
      className="invisible md:visible mt-10 flex w-full flex-col sm:flex-row justify-start gap-4"
    >
      <button className="group relative overflow-hidden w-full sm:w-auto rounded-xl border border-[#1F3D35]/20 bg-transparent px-8 py-4 text-[#1F3D35] font-medium transition-colors duration-300 hover:text-white cursor-pointer backdrop-blur-sm bg-white/20">
        <span className="absolute inset-0 translate-y-full bg-[#1F3D35] transition-transform duration-300 ease-out group-hover:translate-y-0" />
        <span className="relative z-10 flex items-center justify-center gap-2">
          Explore Treatments
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </button>
    </motion.div>
  );
};