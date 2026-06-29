"use client";

import { motion, Variants } from "framer-motion";

interface HeroContentProps {
  itemVariants: Variants;
}

export const HeroContent = ({ itemVariants }: HeroContentProps) => {
  // Store the paragraph text as a single string so we can easily map through it word-by-word
  const paragraphText =
    "Sreshta Multi specialty Ayurveda clinic is a premium Ayurveda centre where the traditional system of Ayurveda is in confluence with modern medical techniques, without compromising the authenticity of the science.";

  return (
    <>
      {/* 1. Badge Animation */}
      <div className="overflow-hidden inline-block">
        <motion.span
          variants={itemVariants}
          // FIXED: Strictly left aligned
          className="mx-0 inline-flex rounded-full border border-[#C9A86A]/40 bg-[#C9A86A]/5 
          px-3 py-1.5 text-[8px] tracking-widest
          md:px-4 md:py-2 md:text-xs md:tracking-[0.15em]
          font-bold text-[#C9A86A] uppercase backdrop-blur-md"
        >
          Trusted Ayurvedic Healthcare
        </motion.span>
      </div>

      {/* 2. Heading Animation (Line-by-Line with your custom mobile breaks) */}
      <h1 className="mt-2 mb-9 font-serif text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.4] md:leading-[1.12] text-[#1F3D35] tracking-tight text-left">
        <span className="inline-block overflow-hidden align-bottom pb-1 md:pb-2">
          <motion.span variants={itemVariants} className="inline-block">
            Sreshta
          </motion.span>
        </span>{" "}
        <br className="block md:hidden" />
        <span className="inline-block overflow-hidden align-bottom pb-1 md:pb-2">
          <motion.span variants={itemVariants} className="inline-block">
            Ayurvedic
          </motion.span>
        </span>{" "}
        <br className="block md:hidden" />
        <span className="inline-block overflow-hidden align-bottom pb-1 md:pb-2">
          <motion.span variants={itemVariants} className="inline-block">
            Way of
          </motion.span>
        </span>{" "}
        <br className="block md:hidden" />
        <span className="inline-block overflow-hidden align-bottom pb-1 md:pb-2">
          <motion.span variants={itemVariants} className="inline-block">
            Advanced
          </motion.span>
        </span>{" "}
        <br className="block md:hidden" />
        <span className="inline-block overflow-hidden align-bottom pb-1 md:pb-2">
          <motion.span variants={itemVariants} className="inline-block">
            Care
          </motion.span>
        </span>
      </h1>

      {/* 3. Paragraph Animation (Word-by-Word) */}
      {/* FIXED: Added "hidden md:block" to hide this paragraph on mobile phones */}
      <p className="hidden md:block text-base sm:text-lg leading-relaxed text-[#1F3D35]/80 max-w-xl text-left mx-0">
        {paragraphText.split(" ").map((word, index) => (
          <span
            key={index}
            className="inline-block overflow-hidden align-bottom pb-1"
          >
            <motion.span variants={itemVariants} className="inline-block">
              {word}&nbsp;
            </motion.span>
          </span>
        ))}
      </p>
    </>
  );
};
