"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import { Container } from "../common/Container";

const items = [
  {
    title: "Our Mission",
    icon: Target,
    description: "To provide authentic Ayurvedic healthcare through personalized treatments, rigorous clinical standards, and holistic wellness solutions.",
  },
  {
    title: "Our Vision",
    icon: Eye,
    description: "To become the world's most trusted and accessible destination for pure Ayurvedic healing and lifelong preventive healthcare.",
  },
  {
    title: "Our Values",
    icon: Heart,
    description: "Compassion, Authenticity, Medical Excellence, and a relentless commitment to Patient-Centered Care in everything we do.",
  },
];

export const MissionVisionValues = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group bg-[#F8F5EF]/50 p-10 rounded-[2rem] border border-[#F8F5EF] transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-[#2F5D50] mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};