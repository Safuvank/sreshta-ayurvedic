"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "../home/Hero/Container";

const principles = [
  "Holistic Healing of Mind, Body & Spirit",
  "100% Personalized Treatment Plans",
  "Natural, Plant-Based Therapies",
  "Focus on Preventive Healthcare & Immunity",
];

export const HealthcareApproach = () => {
  return (
    <section className="py-20 lg:py-32 bg-[#1F3D35] text-white overflow-hidden relative">
      {/* Decorative Blob */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2F5D50] rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl lg:text-5xl mb-6 leading-tight">
              Our Unique <br />
              <span className="italic text-[#C9A86A]">Healing Philosophy</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We do not believe in a one-size-fits-all approach. According to Ayurveda, every individual is unique (Prakriti). Our treatments are meticulously customized to your specific body type, restoring your natural internal balance to eradicate disease from its roots.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-8 md:p-12"
          >
            <ul className="space-y-6">
              {principles.map((principle, idx) => (
                <li key={idx} className="flex items-center gap-4 text-lg font-medium text-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-[#C9A86A] flex-shrink-0" />
                  {principle}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};