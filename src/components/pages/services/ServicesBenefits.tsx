"use client";

import { motion } from "framer-motion";
import { Sparkles, Shield, Clock, HeartHandshake } from "lucide-react";
import { Container } from "@/src/components/common/Container";

const benefits = [
  {
    icon: Sparkles,
    title: "Pure Ingredients",
    desc: "We use only authentic, ethically sourced herbs and freshly prepared oils for maximum efficacy.",
  },
  {
    icon: Shield,
    title: "Zero Side Effects",
    desc: "100% natural, holistic healing protocols designed to work in harmony with your body.",
  },
  {
    icon: Clock,
    title: "Lasting Results",
    desc: "Addressing the root cause prevents recurrence, ensuring long-term health and vitality.",
  },
  {
    icon: HeartHandshake,
    title: "Expert Guidance",
    desc: "Constant monitoring and support from highly experienced Ayurvedic physicians.",
  },
];

export const ServicesBenefits = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="bg-[#1F3D35] rounded-[3rem] p-10 md:p-16 lg:p-20 relative overflow-hidden">
          {/* Subtle pattern background */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]" />
          
          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">Why Choose Ayurveda?</h2>
              <p className="text-gray-300">Experience a medical science that doesn't just treat disease, but teaches you how to truly live.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {benefits.map((benefit, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#2F5D50] border border-[#3A6D60] flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-[#C9A86A]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};