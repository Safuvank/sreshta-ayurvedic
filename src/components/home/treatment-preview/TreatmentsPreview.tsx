"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Container } from "../Hero/Container";
import { SectionHeading } from "../../common/SectionHeading";
import { TreatmentPreviewGrid } from "./TreatmentPreviewGrid";

export const TreatmentsPreview = () => {
  return (
    <section className="py-20 lg:py-32 bg-[#F8F5EF] relative overflow-hidden">
      {/* Optional decorative blur to blend with the cream background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C9A86A]/5 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />

      <Container>
        <div className="relative z-10">
          <SectionHeading
            eyebrow="Core Treatments"
            title="Healing Therapies Tailored For You"
            // description="Explore our specialized Ayurvedic treatments focused on targeting the root cause of illness and bringing long-lasting rejuvenation."
          />

          <div className="mt-16 lg:mt-20">
            <TreatmentPreviewGrid />
          </div>

          {/* Animated Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Link
              href="/treatments"
              className="
                group 
                relative 
                overflow-hidden 
                inline-flex 
                rounded-xl 
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
                View All Treatments
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
