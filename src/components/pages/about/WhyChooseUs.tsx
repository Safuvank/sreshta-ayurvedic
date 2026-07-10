"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Stethoscope,
  UserCog,
  Microscope,
  Flower2,
  ShieldCheck,
  MessageCircleHeart,
  Droplets,
} from "lucide-react";
import { Container } from "../../common/Container";
import { SectionHeading } from "../../common/SectionHeading";

const reasons = [
  {
    title: "Authentic Ayurveda",
    icon: Leaf,
    description:
      "Rooted in ancient traditions, delivering pure and uncompromised holistic healing.",
  },
  {
    title: "Experienced Doctors",
    icon: Stethoscope,
    description:
      "A dedicated team of expert physicians with decades of clinical excellence.",
  },
  {
    title: "Personalized Care",
    icon: UserCog,
    description:
      "Customized care plans tailored specifically to your unique mind-body constitution.",
  },
  {
    title: "Modern Diagnostics",
    icon: Microscope,
    description:
      "Seamlessly integrating contemporary tools with traditional Ayurvedic wisdom.",
  },
  {
    title: "Yoga & Meditation",
    icon: Flower2,
    description:
      "Comprehensive wellness combining mindful movement and mental tranquility.",
  },
  {
    title: "Ethical Practices",
    icon: ShieldCheck,
    description:
      "Transparent, honest, and strictly patient-first healthcare standards.",
  },
  {
    title: "Wellness Counselling",
    icon: MessageCircleHeart,
    description:
      "Compassionate guidance for sustainable lifestyle and dietary modifications.",
  },
  {
    title: "Traditional Therapies",
    icon: Droplets,
    description:
      "Authentic Panchakarma procedures using premium herbal preparations.",
  },
];

export const WhyChooseUsAlt = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C9A86A]/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        {/* --- CENTERED HEADER --- */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-[#C9A86A]/40 bg-[#C9A86A]/10 text-sm font-semibold tracking-widest text-[#B59556] uppercase mb-8 shadow-sm">
              The Sreshta Standard
            </span>
          </motion.div> */}

          <SectionHeading
            eyebrow="The Sreshta Standard"
            title="Excellence in Ayurvedic Healthcare"
            // description="We blend the timeless wisdom of traditional Ayurveda with modern medical standards to provide an unparalleled, patient-centered healing experience."
            isDark={false} // Since we are using the white background version
          />

          

          {/* <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl mx-auto"
          >
            We blend the timeless wisdom of traditional Ayurveda with modern medical standards to provide an unparalleled, patient-centered healing experience.
          </motion.p> */}
        </div>

        {/* --- SEAMLESS GLASS GRID --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="rounded-[2.5rem] bg-[#C9A86A]/30 p-[1px] shadow-2xl overflow-hidden shadow-[#1F3D35]/5"
        >
          {/* 
            The gap-[1px] combined with the bg-[#C9A86A]/30 parent creates 
            perfect, ultra-thin gold borders between the green grid items.
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#C9A86A]/30 rounded-[calc(2.5rem-1px)] overflow-hidden">
            {reasons.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-[#1F3D35] p-8 lg:p-10 h-full overflow-hidden transition-all duration-500 hover:bg-[#162C26]"
              >
                {/* Subtle hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A86A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top Row: Icon & Number */}
                <div className="flex items-start justify-between mb-12 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C9A86A] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-[#C9A86A] group-hover:text-[#1F3D35]">
                    <item.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <span className="font-serif italic text-4xl text-white/5 font-bold transition-colors duration-500 group-hover:text-white/10">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Bottom Row: Text */}
                <div className="relative z-10">
                  <h3 className="text-xl lg:text-2xl font-serif text-white mb-3 tracking-tight transition-colors duration-300 group-hover:text-[#C9A86A]">
                    {item.title}
                  </h3>
                  <p className="text-white/70 font-light leading-relaxed text-sm lg:text-base transition-colors duration-300 group-hover:text-white/90">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
