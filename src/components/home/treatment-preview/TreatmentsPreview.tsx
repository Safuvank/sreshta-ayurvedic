"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Container } from "../../common/Container";

// A reusable helper component for Word-by-Word animation
const AnimatedWords = ({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  const words = text.split(" ");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.04, delayChildren: delay },
        },
        hidden: {},
      }}
      className={`flex flex-wrap ${className || ""}`}
    >
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          className="mr-[0.25em] mb-[0.1em]" // Manages natural spacing between words
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const TreatmentsPreview = () => {
  // Extracted buttons into a helper function to avoid repeating code
  // for desktop and mobile placements.
  const ActionButtons = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Link
        href="/treatments"
        className="
          group
          relative
          overflow-hidden
          inline-flex
          rounded-2xl
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
        {/* Animated Background (Slides up on hover) */}
        <span className="absolute inset-0 translate-y-full bg-[#2F5D50] transition-transform duration-300 ease-out group-hover:translate-y-0" />

        {/* Content Wrapper (Keeps text and icon above the background) */}
        <span className="relative z-10 flex items-center gap-3">
          View All Treatments
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>
  );

  return (
    <section className="py-10 lg:py-20 bg-[#F8F5EF] relative overflow-hidden">
      {/* Decorative blur to blend with the cream background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C9A86A]/5 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />

      <Container>
        <div className="relative z-10">
          {/* --- Custom Animated Section Heading --- */}
          <div className="mb-10 lg:mb-16 flex flex-col items-center text-center w-full max-w-3xl mx-auto">
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="text-sm font-bold tracking-widest text-[#C9A86A] uppercase mb-4"
            >
              OUR TREATMENTS
            </motion.span>

            {/* Word-by-Word Title (Centered) */}
            <AnimatedWords
              text="Traditional Ayurvedic Therapies for Complete Healing"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F3D35] mb-6 leading-tight justify-center"
            />
          </div>

          {/* --- Staggered Content Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 lg:gap-16 w-full max-w-6xl mx-auto items-stretch">
            {/* --- Left Column --- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col h-full"
            >
              {/* Top Image (Landscape) */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/images/treatments/facial-marma.png"
                  alt="Ayurvedic Facial Marma Treatment"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Bottom Content / Desktop Button - Pushed to absolute bottom left */}
              <div className="hidden md:flex flex-col md:items-start ote justify-end mt-auto pt-12">
                <ActionButtons />
              </div>
            </motion.div>

            {/* --- Right Column --- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col h-full md:mt-0"
            >
              {/* Top Content (Word-by-Word Animated Paragraph) */}
              <div className="hidden md:block space-y-4 lg:pl-8 md:mb-12">
                <AnimatedWords
                  text="Experience deep healing and detoxification with our specialized Ayurvedic treatments. We focus on treating the root cause of ailments to bring lasting vitality and peace."
                  className="text-[#4A4A4A] text-sm md:text-base leading-relaxed"
                  delay={0.3} // slight delay so it starts animating after the title
                />
              </div>

              {/* Bottom Image (Aligns horizontally with left button) */}
              <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden shadow-sm mt-auto">
                <Image
                  src="/images/treatments/abyangam.png"
                  alt="Ayurvedic Abhyangam massage treatment"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>

          {/* --- Mobile Only Action Buttons (Appears after both columns) --- */}
          <div className="flex md:hidden justify-start mt-8">
            <ActionButtons />
          </div>
        </div>
      </Container>
    </section>
  );
};
