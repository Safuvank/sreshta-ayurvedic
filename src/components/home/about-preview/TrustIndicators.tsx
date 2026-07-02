"use client";

import { motion } from "framer-motion";
import { trustMetrics } from "@/src/data/about";



interface TrustIndicatorsProps {
  itemVariants: any;
}

export const TrustIndicators = ({ itemVariants }: TrustIndicatorsProps) => {
  return (
    <motion.div
      variants={itemVariants}
      // Main dark green container
      className="w-full bg-[#2a4538] rounded-2xl md:rounded-2xl shadow-xl overflow-hidden py-6 lg:py-12 px-2 lg:px-4"
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
              <h3 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl text-[#C9A86A] mb-1 lg:mb-2 leading-none">
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
