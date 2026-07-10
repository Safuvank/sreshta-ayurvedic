// components/gallery/ImageGallery.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../../common/Container";

const images = [
  { src: "/images/about/abynga-room.png", alt: "Heritage Room", colSpan: "md:col-span-8" },
  { src: "/images/about/ip-rooom.png", alt: "Treatment Room", colSpan: "md:col-span-4" },
  { src: "/images/about/newroom.png", alt: "Herbal Garden", colSpan: "md:col-span-4" },
  { src: "/images/about/facility1.png", alt: "Outdoor Spaces", colSpan: "md:col-span-8" },
];

export const ImageGallery = () => {
  return (
    <section className="bg-[#F8F5EF] py-5 lg:py-10">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-15"
        >
          {/* <span className="text-xs font-semibold tracking-[0.2em] text-[#C9A86A] uppercase mb-6 block">
            Our Spaces
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1A202C] leading-tight mb-6">
            A collection of spaces, <br/> each with a story.
          </h2> */}
          {/* <p className="text-gray-600 font-light text-lg">
            Our accommodations combine deep heritage with modern comfort, designed for pause, rest, and complete recovery.
          </p> */}
        </motion.div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden group ${img.colSpan}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Elegant Hover Overlay */}
              <div className="absolute inset-0 bg-[#2F5D50]/0 group-hover:bg-[#2F5D50]/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};