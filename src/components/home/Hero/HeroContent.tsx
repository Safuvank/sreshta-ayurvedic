"use client";

import { motion, Variants } from "framer-motion";

interface HeroContentProps {
  itemVariants: Variants;
}

export const HeroContent = ({ itemVariants }: HeroContentProps) => {
  return (
    <>
      {/* <motion.span
        variants={itemVariants}
        // ADDED: mx-auto lg:mx-0 forces the badge to center on mobile/tablet
        className="mx-auto lg:mx-0 inline-flex rounded-full border border-[#C9A86A]/40 bg-[#C9A86A]/5 px-4 py-2 text-xs font-bold tracking-[0.15em] text-[#C9A86A] uppercase backdrop-blur-md"
      >
        Trusted Ayurvedic Healthcare
      </motion.span> */}

      <motion.span
        variants={itemVariants}
        className="mx-0 inline-flex rounded-full border border-[#C9A86A]/40 bg-[#C9A86A]/5 
    px-3 py-1.5 text-[8px] tracking-[0.1em] /* Mobile sizes (smaller) */
    md:px-4 md:py-2 md:text-xs md:tracking-[0.15em] /* Tablet/Desktop sizes (original) */
    font-bold text-[#C9A86A] uppercase backdrop-blur-md"
      >
        Trusted Ayurvedic Healthcare
      </motion.span>

      <motion.h1
        variants={itemVariants}
        className="mt-3 font-serif text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.12] text-[#1F3D35] tracking-tight text-left"
      >
        Sreshta-Ayurvedic Way of Advanced Care
      </motion.h1>

      <motion.p
        variants={itemVariants}
        // FIXED: Removed mx-auto to ensure it stays left-aligned on mobile
        className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600 max-w-xl text-left mx-0"
      >
        Sreshta Multi specialty Ayurveda clinic is a premium Ayurveda centre
        where the traditional system of Ayurveda is in confluence with modern
        medical techniques, without{" "}
        {/* ADDED: This break will only show on mobile screens and hide on tablets/desktops */}
        <br className="block md:hidden" />
        compromising the authenticity of <br className="block md:hidden" /> the science.
      </motion.p>
    </>
  );
};
