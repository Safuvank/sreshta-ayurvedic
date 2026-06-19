// "use client";

// import { motion, Variants } from "framer-motion";

// interface HeroActionsProps {
//   itemVariants: Variants;
// }

// export const HeroActions = ({ itemVariants }: HeroActionsProps) => {
//   return (
//     <motion.div
//       variants={itemVariants}
//       className="
//         mt-8
//         flex
//         w-full
//         flex-col
//         gap-4
//         sm:w-auto
//         sm:flex-row
//         justify-center
//       "
//     >
//       {/* <button
//         className="
//           w-full
//           sm:w-auto
//           rounded-full
//           bg-[#2F5D50]
//           px-8
//           py-4
//           text-white
//           font-medium
//           transition
//           hover:bg-[#24483E]
//         "
//       >
//         Book Consultation
//       </button> */}

//       <button
//         className="
//     group
//     relative
//     overflow-hidden
//     w-full
//     sm:w-auto
//     rounded-xl
//     border
//     border-white
//     bg-transparent
//     px-8
//     py-4
//     text-white
//     font-medium
//     transition-colors
//     duration-300
//     hover:text-black
//     cursor-pointer
//   "
//       >
//         {/* Animated Background (Starts pushed down below the button, slides up on hover) */}
//         <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 ease-out group-hover:translate-y-0" />

//         {/* Button Text (Relative z-index keeps it layered above the white background) */}
//         <span className="relative z-10">Explore Treatments</span>
//       </button>
//     </motion.div>
//   );
// };






"use client";

import { motion, Variants } from "framer-motion";
import { CalendarCheck, ArrowRight } from "lucide-react";

interface HeroActionsProps {
  itemVariants: Variants;
}

export const HeroActions = ({ itemVariants }: HeroActionsProps) => {
  return (
    <motion.div
      variants={itemVariants}
      className="mt-10 flex flex-col sm:flex-row gap-4 w-full justify-start"
    >
      {/* Primary: Solid Gold Action Button (Slides to Dark Green text-white) */}
      {/* <button
        className="group relative overflow-hidden w-full sm:w-auto rounded-xl bg-[#C9A86A] px-8 py-4 text-[#1F3D35] font-semibold transition-all duration-300 hover:text-white hover:shadow-[0_10px_30px_rgba(25,61,53,0.1)] cursor-pointer"
      >
        <span className="absolute inset-0 translate-y-full bg-[#1F3D35] transition-transform duration-300 ease-out group-hover:translate-y-0" />
        <span className="relative z-10 flex items-center justify-center gap-2">
          <CalendarCheck className="w-5 h-5" />
          Book Consultation
        </span>
      </button> */}

      {/* Secondary: Dark Green Border Outline Button (Slides to solid fill) */}
      <button
        className="group relative overflow-hidden w-full sm:w-auto rounded-xl border border-[#1F3D35]/20 bg-transparent px-8 py-4 text-[#1F3D35] font-medium transition-colors duration-300 hover:text-white cursor-pointer"
      >
        <span className="absolute inset-0 translate-y-full bg-[#1F3D35] transition-transform duration-300 ease-out group-hover:translate-y-0" />
        <span className="relative z-10 flex items-center justify-center gap-2">
          Explore Treatments
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </button>
    </motion.div>
  );
};

