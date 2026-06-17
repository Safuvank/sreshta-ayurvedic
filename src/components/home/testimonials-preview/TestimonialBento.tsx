"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Star, Quote, Play, ArrowUpRight } from "lucide-react";
import { testimonials, featuredTestimonial } from "@/src/data/testimonials";

interface TestimonialsBentoProps {
  containerVariants: any;
  itemVariants: Variants;
}

export const TestimonialsBento = ({ containerVariants, itemVariants }: TestimonialsBentoProps) => {
  // --- AUTO-SLIDE STATE ---
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // 4 seconds

    return () => clearInterval(timer);
  }, []);

  const mainTestimonial = testimonials[activeIndex];
  const subTestimonial1 = testimonials[(activeIndex + 1) % testimonials.length];
  const subTestimonial2 = testimonials[(activeIndex + 2) % testimonials.length];

  // --- ENTRANCE ANIMATIONS ---
  const featuredVariants: Variants = {
    hidden: { opacity: 0, x: -40, scale: 0.95 },
    show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } },
  };

  const videoVariants: Variants = {
    hidden: { opacity: 0, x: 40, scale: 0.95 },
    show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } },
  };

  const review1Variants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const review2Variants: Variants = {
    hidden: { opacity: 0, y: -40, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[240px]"
    >
      {/* BLOCK 1: The Featured Review (Spans 2 Columns, 2 Rows)
        ** RESPONSIVE FIX **: Changed 'flex' to 'hidden md:flex' to hide on mobile.
      */}
      <motion.div
        variants={featuredVariants}
        className="hidden md:flex md:col-span-2 md:row-span-2 bg-[#1F3D35] rounded-[2rem] p-8 lg:p-12 shadow-lg flex-col justify-between relative overflow-hidden group"
      >
        <Quote className="absolute -right-8 -top-8 w-48 h-48 text-[#2F5D50] opacity-30 rotate-12 pointer-events-none" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={`main-${activeIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col h-full justify-between"
          >
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(mainTestimonial?.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C9A86A] text-[#C9A86A]" />
                ))}
              </div>
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-snug mb-6 max-w-2xl">
                "{mainTestimonial?.review}"
              </h3>
            </div>

            <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#C9A86A]">
                <Image src={mainTestimonial?.image || "/images/placeholder.jpg"} alt={mainTestimonial?.name || "Patient"} fill className="object-cover" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">{mainTestimonial?.name}</h4>
                <p className="text-[#C9A86A] text-xs font-semibold tracking-widest uppercase">
                  {mainTestimonial?.treatment}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* BLOCK 2: Video Highlight */}
      <motion.div
        variants={videoVariants}
        className="md:col-span-1 md:row-span-2 relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg border border-gray-100 min-h-[300px] md:min-h-0"
      >
        <Image
          src={featuredTestimonial.videoThumbnail}
          alt={featuredTestimonial.name}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D35]/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1F3D35]">
            <Play className="w-5 h-5 ml-1" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
          <p className="text-white font-serif text-lg leading-snug mb-2 line-clamp-2">
            "{featuredTestimonial.quote}"
          </p>
          <p className="text-[#C9A86A] text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2">
            <Play className="w-3 h-3 fill-current" /> Watch Story
          </p>
        </div>
      </motion.div>

      {/* BLOCK 3: Standard Review */}
      <motion.div
        variants={review1Variants}
        className="md:col-span-1 md:row-span-1 bg-white border border-gray-200 rounded-[2rem] p-6 lg:p-8 flex flex-col justify-between shadow-sm group hover:border-[#2F5D50]/30 transition-colors"
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-0.5">
             {[...Array(subTestimonial1?.rating || 5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C9A86A] text-[#C9A86A]" />
              ))}
          </div>
          <Quote className="w-6 h-6 text-gray-200" />
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={`sub1-${activeIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-full justify-between"
          >
            <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3 mb-4">
              "{subTestimonial1?.review}"
            </p>
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                <Image src={subTestimonial1?.image || "/images/placeholder.jpg"} alt={subTestimonial1?.name || "Patient"} fill className="object-cover" />
              </div>
              <div>
                <h4 className="text-gray-900 font-bold text-sm">{subTestimonial1?.name}</h4>
                <p className="text-gray-400 text-xs">{subTestimonial1?.treatment}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* BLOCK 4: Standard Review */}
      <motion.div
        variants={review2Variants}
        className="md:col-span-1 md:row-span-1 bg-[#F8F5EF] rounded-[2rem] p-6 lg:p-8 flex flex-col justify-between shadow-sm"
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-0.5">
             {[...Array(subTestimonial2?.rating || 5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C9A86A] text-[#C9A86A]" />
              ))}
          </div>
          <Quote className="w-6 h-6 text-[#2F5D50]/20" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`sub2-${activeIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-full justify-between"
          >
            <p className="text-gray-800 text-sm md:text-base leading-relaxed line-clamp-3 mb-4">
              "{subTestimonial2?.review}"
            </p>
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                <Image src={subTestimonial2?.image || "/images/placeholder.jpg"} alt={subTestimonial2?.name || "Patient"} fill className="object-cover" />
              </div>
              <div>
                <h4 className="text-gray-900 font-bold text-sm">{subTestimonial2?.name}</h4>
                <p className="text-gray-500 text-xs">{subTestimonial2?.treatment}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* BLOCK 5: Metric & CTA Block */}
      <motion.div
        variants={itemVariants}
        className="md:col-span-1 md:row-span-1 bg-[#C9A86A] text-[#1F3D35] rounded-[2rem] p-6 lg:p-8 flex flex-col justify-between group cursor-pointer overflow-hidden relative shadow-md"
      >
        <div className="relative z-10">
          <h3 className="font-serif text-4xl lg:text-5xl mb-2">400+</h3>
          <p className="font-bold uppercase tracking-widest text-xs opacity-90">
            Happy Patients
          </p>
        </div>
        
        <div className="relative z-10 flex items-center justify-between border-t border-[#1F3D35]/20 pt-4 mt-4">
          <span className="font-semibold text-sm">Read All Stories</span>
          <div className="w-8 h-8 rounded-full bg-[#1F3D35] text-[#C9A86A] flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 blur-2xl rounded-full pointer-events-none" />
      </motion.div>

    </motion.div>
  );
};