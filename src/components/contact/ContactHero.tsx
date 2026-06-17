"use client";

import { motion } from "framer-motion";
import { Container } from "../home/Hero/Container";

export const ContactHero = () => {
  return (
    <section className="bg-[#1F3D35] py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle decorative background element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A86A] opacity-5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-center mx-auto"
        >
          <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight">
            Contact <span className="text-[#C9A86A] italic">Us</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            We're here to help you begin your healing journey. Reach out for consultations, appointments, and treatment enquiries. Our specialists are ready to guide you.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};