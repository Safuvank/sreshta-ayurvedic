"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Container } from "../../common/Container";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "5,000+", label: "Patients Treated" },
  { value: "50+", label: "Expert Therapies" },
  { value: "100%", label: "Personalized Care" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const OrganizationOverview = () => {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Image with Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative h-[500px] lg:h-[650px] w-[90%] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/about/hospital-building.jpg" // Add actual image
                alt="Sreshta Ayurvedic Hospital"
                fill
                className="object-cover"
              />
              {/* Subtle Overlay to ensure it doesn't look flat */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D35]/40 to-transparent mix-blend-multiply" />
            </div>

            {/* Floating Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-8 right-0 bg-[#1F3D35] p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/10 max-w-[240px]"
            >
              <div className="w-12 h-12 bg-[#C9A86A]/20 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-[#C9A86A]" />
              </div>
              <p className="text-white font-serif text-2xl mb-1">Authentic</p>
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                Govt. Certified & Accredited Ayurvedic Hospital
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Content & Stats */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="flex items-center gap-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A86A] mb-6">
                <div className="w-8 h-[1px] bg-[#C9A86A]" />
                Organization Overview
              </span>
              
              <h2 className="font-serif text-4xl lg:text-5xl text-[#2F5D50] mb-6 leading-tight">
                A Legacy of <br/>
                <span className="italic text-[#C9A86A]">Authentic Care</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-10 font-light">
                Founded on the pure principles of Ayurveda, Sreshta has grown into a leading sanctuary for holistic health. We treat the root cause of illness, not just the symptoms, ensuring our patients achieve lasting wellness and balance in mind, body, and spirit.
              </p>
            </motion.div>

            {/* Animated Stats Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 gap-4 sm:gap-6"
            >
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="bg-[#F8F5EF] p-6 rounded-2xl border border-transparent hover:border-[#C9A86A]/30 hover:bg-white transition-colors duration-300 group"
                >
                  <h4 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#2F5D50] mb-2 group-hover:scale-105 transition-transform duration-300 origin-left">
                    {stat.value}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
};