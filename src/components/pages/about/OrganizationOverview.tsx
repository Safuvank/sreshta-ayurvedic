"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../../common/Container";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "5000+", label: "Patients Treated" },
  { value: "50+", label: "Treatments" },
  { value: "100%", label: "Personalized Care" },
];

export const OrganizationOverview = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/hospital-building.jpg" // Add actual image
              alt="Sreshta Ayurvedic Hospital"
              fill
              className="object-cover"
            />
            {/* Subtle Gold Frame Overlay */}
            <div className="absolute inset-6 border-2 border-white/30 rounded-[1.5rem] pointer-events-none" />
          </motion.div>

          {/* Right: Content & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl text-gray-900 mb-6">
              A Legacy of <span className="text-[#2F5D50] italic">Authentic Care</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Founded on the pure principles of Ayurveda, Sreshta has grown into a leading sanctuary for holistic health. We treat the root cause of illness, not just the symptoms, ensuring our patients achieve lasting wellness and balance in mind, body, and spirit.
            </p>

            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="border-l-2 border-[#C9A86A] pl-4">
                  <h4 className="font-serif text-4xl text-[#2F5D50] mb-1">{stat.value}</h4>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};