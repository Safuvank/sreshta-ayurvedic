"use client";

import { motion, Variants } from "framer-motion";
import { Container } from "../Hero/Container"; 
import { SectionHeading } from "../../common/SectionHeading"; 
import { TestimonialsBento } from "./TestimonialBento";

export const TestimonialsSection = () => {
  // Shared animation variants for the section
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="bg-white py-20 lg:py-32 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#F8F5EF] rounded-full blur-[120px] -z-10 -translate-x-1/2 -translate-y-1/2 opacity-70" />

      <Container>
        {/* Modern Editorial Header */}
        <div className="mb-16 lg:mb-20">
          <SectionHeading
            eyebrow="Patient Stories"
            title="Transformations Realized"
            description="Discover genuine experiences from individuals who found recovery, balance, and wellness through our authentic Ayurvedic therapies."
            align="center"
          />
        </div>

        {/* The Bento Box Grid */}
        <TestimonialsBento 
          containerVariants={containerVariants} 
          itemVariants={itemVariants} 
        />
        
      </Container>
    </section>
  );
};