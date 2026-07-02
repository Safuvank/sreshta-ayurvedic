"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Leaf } from "lucide-react";
import { Container } from "@/src/components/common/Container";


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: "100%" },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const SpecializationDetailClient = ({ category }: { category: any }) => {
  return (
    <main className="min-h-screen bg-[#F8F5EF] pb-0">
      {/* 1. Full-Width Hero Image Banner (Matched to Service Page) */}
      <section className="relative pt-20 pb-20 lg:pb-20 min-h-[40vh] lg:min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={category.image}
            alt={category.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1F3D35]/85" />
        </div>

        <Container className="relative z-10 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Back Button */}
            <div className="overflow-hidden mb-6 md:mb-8">
              <motion.div variants={wordVariants}>
                <Link
                  href="/our-core"
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest text-[#C9A86A] uppercase hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Specializations
                </Link>
              </motion.div>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-6 leading-tight break-words flex flex-wrap gap-x-3 lg:gap-x-4 gap-y-1">
              {category.title.split(" ").map((word: string, index: number) => (
                <span key={index} className="block overflow-hidden pb-2">
                  <motion.span variants={wordVariants} className="block">
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Overview / Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
              {(category.description || "")
                .split(" ")
                .map((word: string, index: number) => (
                  <span
                    key={index}
                    className="inline-block overflow-hidden align-bottom"
                  >
                    <motion.span
                      variants={wordVariants}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  </span>
                ))}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* 2. Specific Conditions Grid (Matched to Service Page) */}
      {category.conditions && category.conditions.length > 0 ? (
        <section className="py-16 lg:py-24 bg-[#F8F5EF]">
          <Container>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {category.conditions.map((condition: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-300 transition-all duration-300 flex flex-col"
                >
                  {/* Condition Image (Falls back to category image if none provided) */}
                  <div className="relative w-full h-64 sm:h-72 lg:h-80 bg-[#F8F5EF] overflow-hidden shrink-0">
                    <Image
                      src={condition.image || category.image}
                      alt={condition.en}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* --- CONTENT BODY --- */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-4 border-b border-gray-100 pb-4">
                      <div>
                        <h3 className="font-serif text-2xl text-[#2F5D50]">
                          {condition.en}
                        </h3>
                        <span className="text-sm font-medium tracking-wider text-[#2F5D50] mt-1 block">
                          {condition.ml}
                        </span>
                      </div>
                      {/* Leaf Icon */}
                      <div className="w-10 h-10 rounded-full bg-[#F8F5EF] flex items-center justify-center shrink-0 text-[#2F5D50]">
                        <Leaf className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Book Treatment Button */}
                    <div className="mt-auto pt-8">
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        className="
                          group/btn
                          relative 
                          overflow-hidden 
                          flex 
                          w-full
                          items-center 
                          justify-center 
                          rounded-xl 
                          border 
                          border-[#2F5D50]/30 
                          bg-transparent 
                          px-6 
                          py-3.5 
                          font-medium 
                          text-[#2F5D50] 
                          transition-all 
                          duration-300 
                          hover:text-white 
                          hover:border-[#2F5D50]
                          cursor-pointer
                        "
                      >
                        {/* Animated Background (Slides up on hover) */}
                        <span className="absolute inset-0 translate-y-full bg-[#2F5D50] transition-transform duration-300 ease-out group-hover/btn:translate-y-0" />
                        {/* Content Wrapper (Keeps text above the background) */}
                        <span className="relative z-10">Book Consultation</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      ) : (
        /* Empty State for Core specializations without specific listed conditions */
        <section className="py-16 lg:py-24 bg-[#F8F5EF]">
          <Container>
            <div className="bg-white p-10 md:p-16 rounded-3xl border border-gray-200 text-center max-w-3xl mx-auto shadow-sm">
              <div className="w-16 h-16 bg-[#F8F5EF] rounded-full flex items-center justify-center text-[#2F5D50] mx-auto mb-6">
                <Leaf className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-serif text-[#2F5D50] mb-4">
                Comprehensive Care
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our specialists provide holistic treatments for a wide range of{" "}
                {category.title.toLowerCase()}. Contact us to discuss your
                specific symptoms and receive a personalized Ayurvedic treatment
                plan tailored to your body constitution.
              </p>
              <button className="bg-[#1F3D35] hover:bg-[#2F5D50] text-white px-8 py-4 rounded-xl transition-colors font-medium">
                Schedule a Consultation
              </button>
            </div>
          </Container>
        </section>
      )}
    </main>
  );
};
