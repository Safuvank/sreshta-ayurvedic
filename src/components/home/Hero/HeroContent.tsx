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
        className="
        mt-10
          inline-flex
          rounded-full
          border
          border-white/30
          bg-white/10
          px-3
          py-2
          sm:px-4
          text-xs
          sm:text-sm
          text-white
          backdrop-blur-md
        "
      >
        Trusted Ayurvedic Healthcare
      </motion.span>

      <motion.h1
        variants={itemVariants}
        className="
          mt-4
          font-serif
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          leading-tight
          text-white
        "
      >
        Sreshta-Ayurvedic Way of Advanced Care
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="
          mt-5
          mx-auto
          max-w-xs
          sm:max-w-lg
          md:max-w-2xl
          text-center
          text-base
          sm:text-lg
          leading-relaxed
          text-gray-200
        "
      >
        Sreshta Multi specialty Ayurveda clinic is a premium Ayurveda centre
        where the traditional system of Ayurveda is in confluence with modern
        medical techniques, without compromising the authenticity of the
        science.
      </motion.p>
    </>
  );
};
