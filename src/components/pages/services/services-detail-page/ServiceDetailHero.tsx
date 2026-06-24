"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Container } from "@/src/components/common/Container";

interface ServiceProps {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  benefits?: string[];
}

// 1. Define the animation rules (Variants)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Delay between each word animating
      delayChildren: 0.1, // Initial delay before the animation starts
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: "100%" }, // Start invisible and pushed down
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const, // Smooth, premium slide ease
    },
  },
};

export const ServiceDetailHero = ({ service }: { service: ServiceProps }) => {
  return (
    <>
      {/* 1. Full-Width Hero Image Banner */}
      <section className="relative pt-20 pb-20 lg:pb-20 min-h-[40vh] lg:min-h-[50vh] flex items-end overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          {/* Deep green overlay to make text readable */}
          <div className="absolute inset-0 bg-[#1F3D35]/85" />
        </div>

        <Container className="relative z-10 w-full">
          {/* Apply the staggered container to the entire text block */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Back Button (Animated as the first item) */}
            <div className="overflow-hidden mb-6 md:mb-8">
              <motion.div variants={wordVariants}>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest text-[#C9A86A] uppercase hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Services
                </Link>
              </motion.div>
            </div>

            {/* Service Title (Animated Word by Word) */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-6 leading-tight break-words flex flex-wrap gap-x-3 lg:gap-x-4 gap-y-1">
              {service.title.split(" ").map((word, index) => (
                <span key={index} className="block overflow-hidden pb-2">
                  <motion.span variants={wordVariants} className="block">
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Short description (Animated Word by Word) */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
              {service.description.split(" ").map((word, index) => (
                <span
                  key={index}
                  className="inline-block overflow-hidden align-bottom"
                >
                  <motion.span variants={wordVariants} className="inline-block">
                    {word}&nbsp;
                  </motion.span>
                </span>
              ))}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* 2. Detailed Content Section Below the Hero (Fades in normally on scroll) */}
      <section className="py-12 lg:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
            {/* Left Side: Long Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-serif text-gray-900 mb-6">
                About this Therapy
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {service.longDescription ||
                  "Experience deep healing and holistic wellness tailored to your unique needs."}
              </p>
            </motion.div>

            {/* Right Side: Benefits & CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-[#F8F5EF] p-8 md:p-10 rounded-[2.5rem] border border-gray-100"
            >
              {service.benefits && (
                <div className="mb-10">
                  <h3 className="text-sm font-bold tracking-widest uppercase text-[#2F5D50] mb-6">
                    Key Benefits
                  </h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#C9A86A] shrink-0 mt-0.5" />
                        <span className="leading-snug">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Button inside the card */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#2F5D50] text-white px-8 py-4 rounded-2xl font-medium hover:bg-[#1a3830] transition-colors shadow-lg shadow-[#2F5D50]/20"
              >
                Book this treatment
              </motion.button>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
};
