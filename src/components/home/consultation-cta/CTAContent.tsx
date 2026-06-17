"use client";

import { motion } from "framer-motion";
import { CTAButtons } from "./CTAButtons";

export const CTAContent = () => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-flex rounded-full border border-[#C9A86A]/50 bg-[#C9A86A]/10 px-4 py-2 text-sm font-medium tracking-wider text-[#C9A86A] uppercase">
          Take The First Step
        </span>
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-6 font-serif text-4xl text-white lg:text-6xl leading-tight"
      >
        Ready To Begin Your Healing Journey?
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-lg lg:text-xl text-gray-300 leading-relaxed"
      >
        Connect with our experienced Ayurvedic doctors and receive personalized treatment plans designed to restore your balance, wellness, and long-term health.
      </motion.p>

      <CTAButtons />
    </div>
  );
};