"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, ArrowUpRight, Sparkles } from "lucide-react";
import { featuredDoctor } from "@/src/data/doctors";

export const FeaturedDoctor = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mb-24 flex flex-col lg:flex-row bg-[#1F3D35] rounded-[2.5rem] overflow-hidden shadow-2xl relative"
    >
      {/* Decorative Gold Glow inside the dark container */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A86A] opacity-10 rounded-full blur-[100px] pointer-events-none" />

      {/* Left Image Side (40% width) */}
      <div className="relative w-full lg:w-5/12 h-[400px] lg:h-auto">
        <Image
          src={featuredDoctor.image}
          alt={featuredDoctor.name}
          fill
          className="object-cover object-top"
        />
        {/* Gradient fade to blend image into the dark background on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent to-[#1F3D35] opacity-80 lg:opacity-100" />
      </div>

      {/* Right Content Side (60% width) */}
      <div className="w-full lg:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
        
        <div className="inline-flex items-center gap-2 mb-6 text-[#C9A86A]">
          <Sparkles className="w-5 h-5" />
          <span className="text-sm font-semibold tracking-[0.2em] uppercase">Chief Physician</span>
        </div>

        <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-2 leading-tight">
          {featuredDoctor.name}
        </h3>
        
        <p className="text-lg md:text-xl text-[#C9A86A] italic font-serif mb-8">
          {featuredDoctor.qualifications}
        </p>

        <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl font-light">
          "{featuredDoctor.description}"
        </p>

        {/* Elegant Stats Divider */}
        <div className="grid grid-cols-2 gap-8 border-y border-white/10 py-6 mb-10 max-w-xl">
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-1">Experience</p>
            <p className="text-xl text-white font-serif">{featuredDoctor.experience}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-1">Specialization</p>
            <p className="text-xl text-white font-serif">{featuredDoctor.specialization}</p>
          </div>
        </div>

        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 bg-[#C9A86A] text-[#1F3D35] px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-white w-fit"
        >
          Book Priority Consultation
          <span className="flex items-center justify-center bg-[#1F3D35]/10 rounded-full w-8 h-8 transition-transform duration-300 group-hover:rotate-45">
             <ArrowUpRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
    </motion.div>
  );
};