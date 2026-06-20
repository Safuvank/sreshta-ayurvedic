"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { SectionHeading } from "../../common/SectionHeading";
import { AutoSlidingTestimonials } from "./AutoSlidingTestimonial";
import { VideoTestimonialHighlight } from "./VideoTestimonialHighlight";

export const TestimonialsPreview = () => {
  return (
    <section className="bg-[#FAFAFA] py-7 lg:py-25 relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <SectionHeading
          eyebrow="Patient Stories"
          title="Trusted By Our Patients"
          // description="Read genuine experiences from individuals who found recovery and wellness through our authentic therapies."
        />

        {/* Split Layout: Video Left, Auto-Slider Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-16 lg:mt-24 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Video */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full"
          >
            <VideoTestimonialHighlight />
          </motion.div>

          {/* Right Column: Auto Sliding Reviews */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 w-full"
          >
            <AutoSlidingTestimonials />
          </motion.div>

        </div>

        {/* Bottom CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 lg:mt-15 flex justify-center"
        >
          <Link
            href="/patient-stories"
            className="group relative overflow-hidden inline-flex items-center gap-3 rounded-xl border border-[#2F5D50] bg-transparent px-8 py-4 font-medium text-[#2F5D50] transition-colors duration-300 hover:text-white"
          >
            {/* Animated Hover Background */}
            <span className="absolute inset-0 translate-y-full bg-[#2F5D50] transition-transform duration-300 ease-out group-hover:translate-y-0" />
            
            {/* Button Content */}
            <span className="relative z-10 flex items-center gap-3">
              View All Patient Stories
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>

      </Container>
    </section>
  );
};