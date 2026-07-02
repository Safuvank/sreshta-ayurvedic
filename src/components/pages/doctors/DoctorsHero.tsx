"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Container } from "@/src/components/common/Container";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: "100%" },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const DoctorsHero = () => {
  const paragraphText =
    "Meet our team of experienced Ayurvedic practitioners, counselors, and yoga instructors dedicated to guiding you on your journey to holistic health and wellness.";

  return (
    <section className="relative py-16 md:py-24 lg:py-30 overflow-hidden pt-28 md:pt-32 min-h-[60vh] flex items-center">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/doctors/doctors-hero.png" 
          alt="Our expert Ayurvedic practitioners"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1F3D35]/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#C9A86A] opacity-20 rounded-full blur-[100px] md:blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-[#2F5D50] opacity-60 rounded-full blur-[80px] md:blur-[100px]" />
      </div>

      {/* Main Content Container */}
      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Top Badge Animation */}
          <motion.div
            variants={wordVariants}
            className="flex items-center justify-start gap-3 md:gap-4 mb-4 md:mb-6"
          >
            <div className="w-8 md:w-12 h-[1px] bg-[#C9A86A]" />
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A86A]">
              Our Experts
            </span>
          </motion.div>

          {/* H1 Animation */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight break-words">
            <span className="block overflow-hidden pb-2">
              <motion.span variants={wordVariants} className="block">
                Meet Our
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span
                variants={wordVariants}
                className="block italic text-[#C9A86A]"
              >
                Healers
              </motion.span>
            </span>
          </h1>

          {/* Paragraph Animation */}
          <p className="mt-6 md:mt-8 text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
            {paragraphText.split(" ").map((word, index) => (
              <span
                key={index}
                className="inline-block overflow-hidden align-bottom"
              >
                <motion.span variants={wordVariants} className="inline-block">
                  {word}&nbsp;
                </motion.span>
              </span>
            ))}
          </p>
        </motion.div>
      </Container>
    </section>
  );
};