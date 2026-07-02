"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "../../common/Container";
import { SectionHeading } from "../../common/SectionHeading";
import { OurCoreGrid } from "./OurCoreGrid";

export const OurCoreSection = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-[#FEFCF8] overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="OUR EXPERTISE"
          title="Our Core Specializations"
        />

        <div className="mt-10 md:mt-16 lg:mt-20">
          {/* Renders 4 items initially with hybrid carousel/grid */}
          <OurCoreGrid limit={4} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-16 text-center"
        >
          {/* Animated Slide-Up Button */}
          <Link
            href="/our-core"
            className="
              group 
              relative 
              overflow-hidden 
              inline-flex 
              rounded-2xl 
              border 
              border-[#2F5D50] 
              bg-transparent 
              px-8 
              py-4 
              font-medium 
              text-[#2F5D50] 
              transition-all 
              duration-300 
              hover:text-white 
              hover:shadow-lg 
              hover:shadow-[#2F5D50]/20
            "
          >
            {/* Animated Background (Slides up on hover) */}
            <span className="absolute inset-0 translate-y-full bg-[#2F5D50] transition-transform duration-300 ease-out group-hover:translate-y-0" />

            {/* Content Wrapper (Keeps text and icon above the background) */}
            <span className="relative z-10 flex items-center gap-3">
              View Our all Core
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};
