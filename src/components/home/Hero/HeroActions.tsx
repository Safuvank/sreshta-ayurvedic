"use client";

import { motion, Variants } from "framer-motion";

interface HeroActionsProps {
  itemVariants: Variants;
}

export const HeroActions = ({ itemVariants }: HeroActionsProps) => {
  return (
    <motion.div
      variants={itemVariants}
      className="
        mt-8
        flex
        w-full
        flex-col
        gap-4
        sm:w-auto
        sm:flex-row
        justify-center
      "
    >
      {/* <button
        className="
          w-full
          sm:w-auto
          rounded-full
          bg-[#2F5D50]
          px-8
          py-4
          text-white
          font-medium
          transition
          hover:bg-[#24483E]
        "
      >
        Book Consultation
      </button> */}

      <button
        className="
    group
    relative
    overflow-hidden
    w-full
    sm:w-auto
    rounded-xl
    border
    border-white
    bg-transparent
    px-8
    py-4
    text-white
    font-medium
    transition-colors
    duration-300
    hover:text-black
    cursor-pointer
  "
      >
        {/* Animated Background (Starts pushed down below the button, slides up on hover) */}
        <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 ease-out group-hover:translate-y-0" />

        {/* Button Text (Relative z-index keeps it layered above the white background) */}
        <span className="relative z-10">Explore Treatments</span>
      </button>
    </motion.div>
  );
};
