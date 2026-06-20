"use client";

import { motion, Variants } from "framer-motion";

interface HeroContentProps {
  itemVariants: Variants;
}

export const HeroContent = ({ itemVariants }: HeroContentProps) => {
  return (
    <>
      <motion.span
        variants={itemVariants}
        // ADDED: md:mx-auto (centers on tablet) and lg:mx-0 (moves back to left on desktop)
        className="mx-0 md:mx-auto lg:mx-0 inline-flex rounded-full border border-[#C9A86A]/40 bg-[#C9A86A]/5 
    px-3 py-1.5 text-[8px] tracking-[0.1em] /* Mobile sizes */
    md:px-4 md:py-2 md:text-xs md:tracking-[0.15em] /* Tablet/Desktop sizes */
    font-bold text-[#C9A86A] uppercase backdrop-blur-md"
      >
        Trusted Ayurvedic Healthcare
      </motion.span>

      <motion.h1
        variants={itemVariants}
        // ADDED: md:text-center (tablet) and lg:text-left (desktop)
        className="mt-3 font-serif text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.12] text-[#1F3D35] tracking-tight text-left md:text-center lg:text-left"
      >
        Sreshta-Ayurvedic Way of Advanced Care
      </motion.h1>

      <motion.p
        variants={itemVariants}
        // ADDED: md:text-center md:mx-auto (tablet) and lg:text-left lg:mx-0 (desktop)
        className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600 max-w-xl text-left mx-0 md:text-center md:mx-auto lg:text-left lg:mx-0"
      >
        Sreshta Multi specialty Ayurveda clinic is a premium Ayurveda centre
        where the traditional system of Ayurveda is in confluence with modern
        medical techniques, without <br className="block md:hidden" />
        compromising the authenticity of <br className="block md:hidden" /> the
        science.
      </motion.p>
    </>
  );
};
