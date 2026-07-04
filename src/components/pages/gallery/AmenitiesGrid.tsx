// components/gallery/AmenitiesGrid.tsx
"use client";

import { motion } from "framer-motion";
import { Leaf, MapPin, Stethoscope, Heart, Pill, Building } from "lucide-react";
import { Container } from "../../common/Container";

const amenities = [
  {
    icon: Leaf,
    title: "Herbal garden",
    description: "Our garden hosting a wide variety of medicinal herbs and plants.",
  },
  {
    icon: MapPin,
    title: "Amphitheater",
    description: "Place to relax in the windy evenings of Kerala.",
  },
  {
    icon: Stethoscope,
    title: "Wellness & Treatment center",
    description: "An archetypal Kerala house, built of timber and tile houses our treatment rooms.",
  },
  {
    icon: Heart,
    title: "Recreational activities",
    description: "Indulge in some recreational activities hosted by our ground team at times.",
  },
  {
    icon: Pill,
    title: "Pharmacy",
    description: "Inhouse fully stocked pharmacy enabling you to carry herbs and formulations post your discharge.",
  },
  {
    icon: Building,
    title: "Doctor chambers",
    description: "This magnificent building houses the doctors' consultation rooms.",
  },
];

export const AmenitiesGrid = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <Container>
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-[#C9A86A] uppercase mb-6 block">
            More Amenities
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A202C] mb-6 leading-tight">
            Designed to support every part of your stay
          </h2>
          <p className="text-gray-600 font-light text-lg">
            Beyond these spaces, every detail of Sreshta Ayurveda is designed to support your healing journey.
          </p>
        </motion.div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {amenities.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${
                index < 3 ? "lg:border-b lg:border-gray-200 lg:pb-16" : ""
              } ${(index === 0 || index === 1) && "md:border-b md:border-gray-200 md:pb-16"} pb-8 border-b border-gray-200 md:border-none`}
            >
              <item.icon className="w-8 h-8 text-[#C9A86A] mb-6 stroke-[1.5]" />
              <h3 className="text-xl font-medium text-[#1A202C] mb-3">{item.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};