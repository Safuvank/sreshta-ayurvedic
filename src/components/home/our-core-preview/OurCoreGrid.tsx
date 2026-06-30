// "use client";

// import { useRef } from "react";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// // Update this path to wherever your data now lives
// import { ourCoreData } from "@/src/data/specializations-core";
// import { OurCoreCard } from "./OurCoreCard";

// interface OurCoreGridProps {
//   limit?: number;
// }

// export const OurCoreGrid = ({ limit }: OurCoreGridProps) => {
//   const displayedItems = limit ? ourCoreData.slice(0, limit) : ourCoreData;
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   const handleScroll = (direction: "left" | "right") => {
//     if (scrollContainerRef.current) {
//       const container = scrollContainerRef.current;
//       const card = container.firstElementChild as HTMLElement;
      
//       if (card) {
//         // card.offsetWidth + gap (20px)
//         const scrollAmount = card.offsetWidth + 20; 
//         const targetScroll = direction === "left" ? -scrollAmount : scrollAmount;
        
//         container.scrollBy({ left: targetScroll, behavior: "smooth" });
//       }
//     }
//   };

//   return (
//     <div className="relative">
//       {/* Container: 
//         Mobile -> Flex row, snap scrolling, hides scrollbar 
//         Desktop -> CSS Grid, 4 columns 
//       */}
//       <div 
//         ref={scrollContainerRef}
//         className="
//           flex md:grid 
//           md:grid-cols-2 lg:grid-cols-4 
//           gap-5 md:gap-8 
//           overflow-x-auto md:overflow-visible 
//           snap-x snap-mandatory md:snap-none 
//           pb-4 md:pb-0
//           [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
//         "
//       >
//         {displayedItems.map((item, index) => (
//           <motion.div 
//             key={item.id} 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-50px" }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             // Mobile: fixed 85vw width for the "peek" effect. Desktop: 100% of grid cell.
//             className="w-[85vw] md:w-full shrink-0 snap-center md:snap-align-none"
//           >
//             <OurCoreCard {...item} className="w-full" />
//           </motion.div>
//         ))}
//       </div>

//       {/* Mobile Navigation Controls (Hidden on medium screens and larger) */}
//       <div className="flex md:hidden justify-start items-center gap-4 mt-4 px-1">
//         <button 
//           onClick={() => handleScroll("left")}
//           className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-600 text-gray-800 transition-colors hover:bg-gray-900 hover:border-gray-900 hover:text-white"
//           aria-label="Scroll left"
//         >
//           <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
//         </button>
        
//         <button 
//           onClick={() => handleScroll("right")}
//           className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-600 text-gray-800 transition-colors hover:bg-gray-900 hover:border-gray-900 hover:text-white"
//           aria-label="Scroll right"
//         >
//           <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
//         </button>
//       </div>
//     </div>
//   );
// };




"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
// Update this path to wherever your data now lives
import { ourCoreData } from "@/src/data/specializations-core";
import { OurCoreCard } from "./OurCoreCard";

interface OurCoreGridProps {
  limit?: number;
}

export const OurCoreGrid = ({ limit }: OurCoreGridProps) => {
  const displayedItems = limit ? ourCoreData.slice(0, limit) : ourCoreData;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.firstElementChild as HTMLElement;
      
      if (card) {
        // card.offsetWidth + gap (20px)
        const scrollAmount = card.offsetWidth + 20; 
        const targetScroll = direction === "left" ? -scrollAmount : scrollAmount;
        
        container.scrollBy({ left: targetScroll, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative">
      {/* Container: 
        Mobile -> Flex row, snap scrolling, hides scrollbar 
        Desktop -> CSS Grid, 4 columns 
      */}
      <div 
        ref={scrollContainerRef}
        className="
          flex md:grid 
          md:grid-cols-2 lg:grid-cols-4 
          gap-5 md:gap-8 
          overflow-x-auto md:overflow-visible 
          snap-x snap-mandatory md:snap-none 
          pb-4 md:pb-0
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
        "
      >
        {displayedItems.map((item, index) => (
          <motion.div 
            key={item.id} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            // Mobile: fixed 85vw width for the "peek" effect. Desktop: 100% of grid cell.
            className="w-[85vw] md:w-full shrink-0 snap-center md:snap-align-none"
          >
            <OurCoreCard {...item} className="w-full" />
          </motion.div>
        ))}
      </div>

      {/* Mobile Navigation Controls (Hidden on medium screens and larger) */}
      <div className="flex md:hidden justify-start items-center gap-4 mt-4 px-1">
        <button 
          onClick={() => handleScroll("left")}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-600 text-gray-800 transition-colors hover:bg-gray-900 hover:border-gray-900 hover:text-white"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
        </button>
        
        <button 
          onClick={() => handleScroll("right")}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-600 text-gray-800 transition-colors hover:bg-gray-900 hover:border-gray-900 hover:text-white"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};