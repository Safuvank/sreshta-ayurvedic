"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "../../common/Container";


// A reusable helper component for Word-by-Word animation
const AnimatedWords = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const words = text.split(" ");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.04 } },
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
          className="mr-[0.25em] mb-[0.1em]" // Manages spacing between words
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// A reusable component for the staggered image cards
const StaggeredImageCard = ({
  src,
  title,
  className,
  delay,
}: {
  src: string;
  title: string;
  className: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={`rounded-2xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)] group ${className}`}
  >
    <Image
      src={src}
      alt={title}
      fill
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D35]/90 via-[#1F3D35]/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

    <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6">
      <h4 className="text-white font-serif text-base sm:text-lg lg:text-2xl mb-1 leading-tight">
        {title}
      </h4>
    </div>
  </motion.div>
);

export const ServicesPreview = () => {
  return (
    <section className="relative py-16 lg:py-32 bg-[#F8F5EF] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* LEFT COLUMN: Text Content & Actions */}
          <div className="flex flex-col items-start max-w-lg lg:pr-10">
            {/* Custom Animated Section Heading */}
         {/* Custom Animated Section Heading */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left w-full">
              {/* Eyebrow */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="text-sm font-bold tracking-widest text-[#C9A86A] uppercase mb-4"
              >
                Our Services
              </motion.span>

              {/* Word-by-Word Title */}
              <AnimatedWords
                text="Comprehensive Care for Mind, Body & Wellness"
                // Added justify-center md:justify-start here 👇
                className="justify-center md:justify-start text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F3D35] mb-6 leading-tight"
              />

              {/* Word-by-Word Description */}
              <AnimatedWords
                text="Explore our full range of traditional therapies, natural beauty treatments, and holistic wellness programs designed to restore your mind, body, and spirit to its natural state of harmony."
                // Added justify-center md:justify-start here 👇
                className="justify-center md:justify-start text-base sm:text-lg text-[#2F5D50]/80 leading-relaxed text-center md:text-left"
              />
            </div>
            {/* DESKTOP BUTTON: Hidden on mobile, visible on lg screens and up */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6 }} // Delayed slightly so it appears after text
              className="hidden lg:flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 mt-8 lg:mt-10"
            >
              <Link
                href="/services"
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
                  Explore All Services
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Responsive Image Collage */}
          <div className="relative w-full h-auto lg:h-150 mt-2 lg:mt-0 grid grid-cols-2 gap-3 sm:gap-4 lg:block">
            {/* 1. Top Image */}
            <StaggeredImageCard
              src="/images/services/each/nasyam.png"
              title="Ayurveda Therapies"
              className="relative col-span-2 h-55 sm:h-75 lg:absolute lg:top-0 lg:left-0 lg:w-[50%] lg:h-[65%] z-10"
              delay={0.2}
            />

            {/* 2. Bottom-Left Image */}
            <StaggeredImageCard
              src="/images/services/beauty-therapies.png"
              title="Beauty Therapies"
              className="relative col-span-1 h-[150px] sm:h-[220px] lg:absolute lg:top-[15%] lg:right-0 lg:w-[45%] lg:h-[50%] z-20"
              delay={0.4}
            />

            {/* 3. Bottom-Right Image */}
            <StaggeredImageCard
              src="/images/services/packagess.png"
              title="Packages"
              className="relative col-span-1 h-[150px] sm:h-[220px] lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:w-[70%] lg:h-[30%] z-30"
              delay={0.6}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#C9A86A]/10 rounded-full blur-[60px] -z-10 pointer-events-none"
            />
          </div>

          {/* MOBILE BUTTON: Hidden on desktop, shows up after the images on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex lg:hidden justify-center w-full mt-4"
          >
            <Link
              href="/services"
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
              <span className="absolute inset-0 translate-y-full bg-[#2F5D50] transition-transform duration-300 ease-out group-hover:translate-y-0" />
              <span className="relative z-10 flex items-center gap-3">
                Explore all programs
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
