"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { SectionHeading } from "../../common/SectionHeading";
import { FeaturedDoctor } from "./FutureDoctor";
import { DoctorsGrid } from "./DoctorsGrid";

export const DoctorsPreview = () => {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <Container>
        <div className="flex flex-col items-center mb-16 lg:mb-20">
          <SectionHeading
            eyebrow="Meet Our Experts"
            title="Vaidyas Dedicated To Your Wellness"
            // description="Our team of highly qualified Ayurvedic physicians provides personalized care, accurate diagnosis, and traditional treatment plans tailored to your specific health needs."
          />
        </div>

        <div className="relative z-10">
          {/* Top Featured Doctor Highlight (Dark Editorial Block) */}
          <FeaturedDoctor />

          {/* Grid of Other Specialists (Arch Card Design) */}
          <div className="mt-24">
            <div className="flex items-center justify-between mb-12">
              <h3 className="font-serif text-3xl text-gray-900">Our Specialists</h3>
              <div className="h-px bg-gray-200 flex-1 mx-8 hidden md:block" />
            </div>
            
            <DoctorsGrid />
          </div>
        </div>

        {/* Bottom Centered CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <Link
            href="/doctors"
            className="group inline-flex items-center gap-3 rounded-full border border-[#2F5D50] text-[#2F5D50] px-8 py-4 font-medium transition-all duration-300 hover:bg-[#2F5D50] hover:text-white hover:shadow-lg"
          >
            View Entire Team
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};