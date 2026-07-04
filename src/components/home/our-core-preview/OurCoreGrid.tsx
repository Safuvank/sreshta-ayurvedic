// "use client";

// import { motion } from "framer-motion";
// import { ourCoreData } from "@/src/data/specializations-core";
// import { OurCoreCard } from "./OurCoreCard";

// interface OurCoreGridProps {
//   limit?: number;
// }

// export const OurCoreGrid = ({ limit }: OurCoreGridProps) => {
//   const displayedItems = limit ? ourCoreData.slice(0, limit) : ourCoreData;

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 sm:gap-y-12 gap-x-6 lg:gap-x-8 pb-8 lg:pb-16">
//       {displayedItems.map((item, index) => {
//         // Stagger logic: Pushes down the 2nd and 4th columns on screens larger than mobile
//         const isStaggered = index % 2 !== 0;

//         return (
//           <motion.div
//             key={item.id}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-50px" }}
//             transition={{
//               duration: 0.8,
//               delay: index * 0.15,
//               ease: [0.21, 0.47, 0.32, 0.98], // Premium, smooth deceleration easing
//             }}
//             // Apply the top margin to create the staggered effect on tablet/desktop
//             className={`w-full ${isStaggered ? "sm:mt-12 lg:mt-20" : ""}`}
//           >
//             <OurCoreCard {...item} className="w-full h-full" />
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };




// "use client";

// import { motion } from "framer-motion";
// import { ourCoreData } from "@/src/data/specializations-core"; // Adjust path
// import { OurCoreCard } from "./OurCoreCard";

// interface OurCoreGridProps {
//   limit?: number;
// }

// export const OurCoreGrid = ({ limit }: OurCoreGridProps) => {
//   const displayedItems = limit ? ourCoreData.slice(0, limit) : ourCoreData;

//   return (
//     /* Mobile: flex row with horizontal scroll and snap. 
//       Tablet/Desktop: standard 2-column grid.
//       [&::-webkit-scrollbar]:hidden hides the scrollbar for a cleaner mobile UI.
//     */
//     <div className="
//       flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 
//       md:grid md:grid-cols-2 md:overflow-x-visible md:snap-none md:pb-0 md:mx-0 md:px-0 
//       gap-6 lg:gap-x-12 lg:gap-y-12
//       [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']
//     ">
//       {displayedItems.map((item, index) => (
//         <motion.div
//           key={item.id}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-50px" }}
//           transition={{ duration: 0.7, delay: index * 0.1 }}
//           // On mobile, force cards to be about 85% of screen width to show a peek of the next card
//           className="w-[85vw] shrink-0 snap-center md:w-auto md:shrink-1"
//         >
//           <OurCoreCard {...item} />
//         </motion.div>
//       ))}
//     </div>
//   );
// };


"use client";

import { motion } from "framer-motion";
import { ourCoreData } from "@/src/data/specializations-core"; // Adjust path
import { OurCoreCard } from "./OurCoreCard";

interface OurCoreGridProps {
  limit?: number;
  isDarkTheme?: boolean; // 1. ADD THIS LINE
}

export const OurCoreGrid = ({ limit, isDarkTheme = false }: OurCoreGridProps) => { // 2. DESTRUCTURE IT HERE
  const displayedItems = limit ? ourCoreData.slice(0, limit) : ourCoreData;

  return (
    <div className="
      flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 
      md:grid md:grid-cols-2 md:overflow-x-visible md:snap-none md:pb-0 md:mx-0 md:px-0 
      gap-6 lg:gap-x-12 lg:gap-y-12
      [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']
    ">
      {displayedItems.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          className="w-[85vw] shrink-0 snap-center md:w-auto md:shrink-1"
        >
          {/* 3. PASS IT DOWN TO THE CARD */}
          <OurCoreCard {...item} isDarkTheme={isDarkTheme} />
        </motion.div>
      ))}
    </div>
  );
};