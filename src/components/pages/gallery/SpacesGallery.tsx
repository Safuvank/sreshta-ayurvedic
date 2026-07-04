// components/gallery/SpacesGallery.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "../../common/Container";

export const SpacesGallery = () => {
  return (
    <section className="bg-[#F8F5EF] py-20 lg:py-32 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-10"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-[#C9A86A] uppercase mb-6 block">
              Discover Our Spaces
            </span>
            <h2 className="font-serif text-5xl lg:text-6xl text-[#1A202C] leading-[1.1] mb-8">
              A collection of spaces. Each with a story.
            </h2>
            <p className="text-gray-600 font-light text-lg leading-relaxed mb-10">
              Our homes and rooms combine comfort and heritage and are designed for pause, rest, and recovery. Each room carries its own story, leaving an impression that stays with you long after you leave.
            </p>
            
            {/* <Link 
              href="/gallery/rooms" 
              className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              <span className="font-medium text-sm">View all spaces</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link> */}
          </motion.div>

          {/* Right Images Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden mt-0 sm:mt-12"
            >
              <Image
                src="/images/about/ward.png" 
                alt="Heritage Room Interior"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/about/ward.png" // Add your actual image path
                alt="Traditional Bed Setup"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
};