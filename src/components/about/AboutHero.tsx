"use client";

import { motion } from "framer-motion";
import { Container } from "../home/Hero/Container";

export const AboutHero = () => {
  return (
    <section className="relative bg-[#1F3D35] py-24 lg:py-32 overflow-hidden">
      {/* Decorative Gold Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A86A] opacity-10 rounded-full blur-[120px] pointer-events-none" />
      
      <Container>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A86A]"
          >
            About Sreshta
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight"
          >
            Rooted in <span className="italic text-[#C9A86A]">Ayurveda.</span><br />
            Committed to <span className="italic text-[#C9A86A]">Healing.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            Combining authentic Ayurvedic wisdom with modern healthcare practices to provide personalized healing, profound recovery, and holistic wellness solutions.
          </motion.p>
        </div>
      </Container>
    </section>
  );
};