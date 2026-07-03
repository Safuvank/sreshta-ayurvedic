"use client";

import { motion } from "framer-motion";
import { ourCoreData } from "@/src/data/specializations-core";
import { OurCoreCard } from "./OurCoreCard";

interface OurCoreGridProps {
  limit?: number;
}

export const OurCoreGrid = ({ limit }: OurCoreGridProps) => {
  const displayedItems = limit ? ourCoreData.slice(0, limit) : ourCoreData;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 sm:gap-y-12 gap-x-6 lg:gap-x-8 pb-8 lg:pb-16">
      {displayedItems.map((item, index) => {
        // Stagger logic: Pushes down the 2nd and 4th columns on screens larger than mobile
        const isStaggered = index % 2 !== 0;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: [0.21, 0.47, 0.32, 0.98], // Premium, smooth deceleration easing
            }}
            // Apply the top margin to create the staggered effect on tablet/desktop
            className={`w-full ${isStaggered ? "sm:mt-12 lg:mt-20" : ""}`}
          >
            <OurCoreCard {...item} className="w-full h-full" />
          </motion.div>
        );
      })}
    </div>
  );
};
