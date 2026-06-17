"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../home/Hero/Container";

const facilities = [
  { title: "Consultation Rooms", image: "/images/facilities/consultation-room.jpg" },
  { title: "Therapy Rooms", image: "/images/facilities/therapy-room.jpg" },
  { title: "Patient Care Facilities", image: "/images/facilities/inpatient-care.jpg" },
  { title: "Ayurvedic Pharmacy", image: "/images/facilities/pharmacy.jpg" },
];

export const FacilitiesShowcase = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl text-gray-900 mb-4">World-Class Facilities</h2>
          <p className="text-gray-600 text-lg">Experience deep healing in a hygienic, serene, and traditionally architected environment.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
          {facilities.map((facility, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative h-[300px] rounded-[2rem] overflow-hidden cursor-pointer"
            >
              <Image 
                src={facility.image} 
                alt={facility.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="absolute bottom-6 left-8 text-xl font-serif text-white">{facility.title}</h3>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};