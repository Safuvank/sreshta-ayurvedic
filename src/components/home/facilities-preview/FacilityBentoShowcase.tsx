"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { facilityHighlight, facilities } from "@/src/data/facilities";
import { Variants } from "framer-motion";

export const FacilityBentoShowcase = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants:Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 auto-rows-[300px]"
    >
      {/* 1. MAIN HIGHLIGHT (Spans 8 columns, 2 rows) */}
      <motion.div 
        variants={itemVariants}
        className="group relative md:col-span-2 lg:col-span-8 lg:row-span-2 overflow-hidden rounded-[2rem] bg-[#1F3D35]"
      >
        <Image
          src={facilityHighlight.image}
          alt={facilityHighlight.title}
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
        {/* Deep gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium w-fit mb-6">
            <Sparkles className="w-4 h-4 text-[#C9A86A]" />
            Premium Environment
          </div>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
            {facilityHighlight.title}
          </h3>
          {/* <p className="text-gray-300 md:text-lg max-w-2xl leading-relaxed mb-8"> */}
            {/* {facilityHighlight.description} */}
          {/* </p> */}
          
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 text-white font-medium hover:text-[#C9A86A] transition-colors w-fit"
          >
            Explore Full Gallery 
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-[#C9A86A] group-hover:border-[#C9A86A] group-hover:text-black transition-all duration-300">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </motion.div>

      {/* 2. TOP RIGHT SMALL CARD (Spans 4 columns, 1 row) */}
      <motion.div variants={itemVariants} className="group relative lg:col-span-4 lg:row-span-1 overflow-hidden rounded-[2rem] bg-gray-100">
        <Image src={facilities[0]?.image || "/images/placeholder.jpg"} alt={facilities[0]?.title || "Facility"} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/60" />
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <h4 className="font-serif text-2xl text-white mb-2">{facilities[0]?.title}</h4>
          <p className="text-sm text-gray-300 line-clamp-2">{facilities[0]?.description}</p>
        </div>
      </motion.div>

      {/* 3. MIDDLE RIGHT SMALL CARD (Spans 4 columns, 1 row) */}
      <motion.div variants={itemVariants} className="group relative lg:col-span-4 lg:row-span-1 overflow-hidden rounded-[2rem] bg-gray-100">
        <Image src={facilities[1]?.image || "/images/placeholder.jpg"} alt={facilities[1]?.title || "Facility"} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/60" />
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <h4 className="font-serif text-2xl text-white mb-2">{facilities[1]?.title}</h4>
          <p className="text-sm text-gray-300 line-clamp-2">{facilities[1]?.description}</p>
        </div>
      </motion.div>

   
      
    </motion.div>
  );
};