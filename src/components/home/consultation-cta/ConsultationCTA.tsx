"use client";

import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { CTAButtons } from "./CTAButtons";

export const ConsultationCTA = () => {
  return (
    // The section background is light to make the dark card pop
    <section className="relative pb-7 lg:py-10 bg-[#FAFAFA] overflow-hidden">
      <Container>
        {/* The Floating Premium Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-xl lg:rounded-xl bg-[#1F3D35] px-6 py-20 md:py-24 lg:py-32 shadow-2xl border border-white/10"
        >
          {/* Abstract Ambient Glows */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#2F5D50] rounded-full blur-[100px] opacity-80 pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#C9A86A] rounded-full blur-[120px] opacity-20 pointer-events-none" />

          {/* Noise overlay for texture */}
          <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

          {/* Centered Content Layout */}
          <div className="relative z-10 mx-auto max-w-3xl text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="inline-flex rounded-full border border-[#C9A86A]/30 bg-[#C9A86A]/10 px-5 py-2 text-xs font-bold tracking-[0.2em] text-[#C9A86A] uppercase backdrop-blur-md">
                Take The First Step
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15]"
            >
              Ready to begin your healing journey?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              Connect with our experienced Ayurvedic doctors and receive
              personalized treatment plans designed to restore your balance,
              wellness, and long-term health.
            </motion.p>

            {/* Action Buttons */}
            <CTAButtons />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
