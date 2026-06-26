"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import { Container } from "../../common/Container";

const items = [
  {
    title: "Our Mission",
    icon: Target,
    description:
      "To provide authentic Ayurvedic healthcare through personalized treatments, rigorous clinical standards, and holistic wellness solutions.",
  },
  {
    title: "Our Vision",
    icon: Eye,
    description:
      "To become the world's most trusted and accessible destination for pure Ayurvedic healing and lifelong preventive healthcare.",
  },
  {
    title: "Our Values",
    icon: Heart,
    description:
      "Compassion, Authenticity, Medical Excellence, and a relentless commitment to Patient-Centered Care in everything we do.",
  },
];

export const MissionVisionValues = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#1F3D35]">
      <Container>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group bg-white/5 p-10 rounded-2xl border border-white/10 transition-all duration-500 hover:bg-white/10"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 mb-8 flex items-center justify-center text-[#C9A86A] bg-white/10 rounded-xl transition-all duration-500">
                <item.icon className="w-7 h-7" />
              </div>

              {/* Text content in White */}
              <h3 className="font-serif text-2xl text-white mb-4 tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-200 font-light leading-relaxed transition-colors duration-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};