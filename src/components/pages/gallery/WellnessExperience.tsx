// components/gallery/WellnessExperience.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Footprints, Utensils, Flower2 } from "lucide-react";
import { Container } from "../../common/Container";
import { SectionHeading } from "../../common/SectionHeading";

const features = [
  {
    icon: Flower2,
    title: "Yoga hall",
    description:
      "Place for your daily yoga and breathwork sessions as recommended by your doctor with our expert yoga teachers.",
  },
  {
    icon: BookOpen,
    title: "Activity center & library",
    description: "Space for you to sit out and relax amidst books and nature.",
  },
  {
    icon: Footprints,
    title: "Walking & Jogging track",
    description:
      "Walking trails surrounded by beautifully maintained gardens that keep you energised and active.",
  },
  {
    icon: Utensils,
    title: "In House Kitchen and Restaurant",
    description:
      "Food prepared with the healthiest ingredients made as per your personalised plan.",
  },
];

export const WellnessExperience = () => {
  return (
    <section className="bg-[#121A16] py-10 lg:py-16 overflow-hidden text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            <div>
              <SectionHeading
                // eyebrow="Discover Sreshta Ayurveda"
                title="A complete wellness experience"
                isDark={true}
                align="left" /* Remove this line if you want it to use your default "center" alignment! */
              />
              {/* <p className="text-gray-400 font-light text-lg">
                Thoughtfully designed spaces and amenities that support every
                part of your stay.
              </p> */}
            </div>

            <div className="flex flex-col space-y-6 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex gap-5 pb-6 ${index !== features.length - 1 ? "border-b border-white/10" : ""}`}
                >
                  <div className="mt-1 flex-shrink-0 text-[#C9A86A]">
                    <feature.icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/about/ward.png"
              alt="Meditation and Wellness"
              fill
              className="object-cover"
            />
            {/* Soft inner shadow for depth */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)] pointer-events-none" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
