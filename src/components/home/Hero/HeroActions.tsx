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
      className="mt-10 flex flex-col sm:flex-row gap-4 w-full justify-start"
    >
      {/* Secondary: Dark Green Border Outline Button (Slides to solid fill) */}
      <button className="group relative overflow-hidden w-full sm:w-auto rounded-xl border border-[#1F3D35]/20 bg-transparent px-8 py-4 text-[#1F3D35] font-medium transition-colors duration-300 hover:text-white cursor-pointer">
        <span className="absolute inset-0 translate-y-full bg-[#1F3D35] transition-transform duration-300 ease-out group-hover:translate-y-0" />
        <span className="relative z-10 flex items-center justify-center gap-2">
          Explore Treatments
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </button>
    </motion.div>
  );
};
