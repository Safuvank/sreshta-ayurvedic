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
        // FIXED: Strictly left aligned
        className="mx-0 inline-flex rounded-full border border-[#C9A86A]/40 bg-[#C9A86A]/5 
    px-3 py-1.5 text-[8px] tracking-[0.1em]
    md:px-4 md:py-2 md:text-xs md:tracking-[0.15em]
    font-bold text-[#C9A86A] uppercase backdrop-blur-md"
      >
        Trusted Ayurvedic Healthcare
      </motion.span>

      <motion.h1
        variants={itemVariants}
        // FIXED: Reduced text sizes across all breakpoints (2xl -> 4xl -> 5xl -> 6xl)
        className="mt-2 mb-9 font-serif text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.2] md:leading-[1.12] text-[#1F3D35] tracking-tight text-left"
      >
        Sreshta <br className="block md:hidden" />
        Ayurvedic <br className="block md:hidden" />
        Way of <br className="block md:hidden" />
        Advanced <br className="block md:hidden" />
        Care
      </motion.h1>

      <motion.p
        variants={itemVariants}
        // FIXED: Added "hidden md:block" to hide this paragraph on mobile phones
        className="hidden md:block mt-6 text-base sm:text-lg leading-relaxed text-[#1F3D35]/80 max-w-xl text-left mx-0"
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
