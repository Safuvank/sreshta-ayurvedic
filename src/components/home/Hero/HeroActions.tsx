"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface HeroActionsProps {
  itemVariants: Variants;
}

export const HeroActions = ({ itemVariants }: HeroActionsProps) => {
  return (
    <motion.div
      variants={itemVariants}
      // FIXED: Replaced "invisible md:visible flex" with "hidden md:flex".
      // This completely removes the empty space on mobile screens!
      className="hidden md:flex w-full flex-col sm:flex-row justify-start md:pt-5"
    >
      {/* <button className="group relative overflow-hidden w-full sm:w-auto rounded-xl border border-[#1F3D35]/20 bg-transparent px-8 py-4 text-[#1F3D35] font-medium transition-colors duration-300 hover:text-white cursor-pointer backdrop-blur-sm bg-white/20">
        <span className="absolute inset-0 translate-y-full bg-[#1F3D35] transition-transform duration-300 ease-out group-hover:translate-y-0" />
        <span className="relative z-10 flex items-center justify-center gap-2">
          Explore Treatments
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </button> */}
      <div className="hidden lg:flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              <Link
                href="/treatments"
                className="
                  group 
                  relative 
                  overflow-hidden 
                  inline-flex 
                  rounded-xl 
                  border 
                  border-[#2F5D50] 
                  bg-transparent 
                  px-8 
                  py-4 
                  font-medium 
                  text-[#2F5D50] 
                  transition-all 
                  duration-300 
                  hover:text-white 
                  hover:shadow-lg 
                  hover:shadow-[#2F5D50]/20
                "
              >
                <span className="absolute inset-0 translate-y-full bg-[#2F5D50] transition-transform duration-300 ease-out group-hover:translate-y-0" />
                <span className="relative z-10 flex items-center gap-3">
                  Explore all treatments
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
        
    </motion.div>
  );
};
