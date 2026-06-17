"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { featuredTestimonial } from "@/src/data/testimonials";

export const VideoTestimonialHighlight = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative h-[400px] w-full max-w-[320px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-xl mt-8"
    >
      <Image
        src={featuredTestimonial.videoThumbnail}
        alt={featuredTestimonial.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D35]/90 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-80" />

      {/* Play Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1F3D35]">
          <Play className="w-5 h-5 ml-1" />
        </div>
      </div>

      {/* Content at bottom of video */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-white font-serif text-lg leading-snug mb-3 line-clamp-2">
          "{featuredTestimonial.quote}"
        </p>
        <p className="text-[#C9A86A] text-xs font-semibold uppercase tracking-wider">
          Watch {featuredTestimonial.name}'s Story
        </p>
      </div>
    </motion.div>
  );
};