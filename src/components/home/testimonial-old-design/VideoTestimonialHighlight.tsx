"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { featuredTestimonial } from "@/src/data/testimonials";

export const VideoTestimonialHighlight = () => {
  return (
    <div className="relative h-[450px] w-full max-w-[380px] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-xl border border-gray-100">
      <Image
        src={featuredTestimonial.videoThumbnail}
        alt={featuredTestimonial.name}
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D35]/90 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-80" />

      {/* Center Play Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1F3D35]">
          <Play className="w-5 h-5 ml-1" />
        </div>
      </div>

      {/* Content at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <p className="text-white font-serif text-xl leading-snug mb-3 line-clamp-3">
          "{featuredTestimonial.quote}"
        </p>
        <p className="text-[#C9A86A] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
          <Play className="w-3 h-3 fill-current" /> Watch {featuredTestimonial.name}'s Story
        </p>
      </div>
    </div>
  );
};