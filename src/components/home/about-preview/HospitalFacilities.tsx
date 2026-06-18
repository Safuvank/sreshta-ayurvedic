"use client";

import { motion, Variants } from "framer-motion";
import { Container } from "../Hero/Container"; 
import { SectionHeading } from "../../common/SectionHeading"; // Adjust path to match your folder structure
import { TrustIndicators } from "./TrustIndicators";


export const HospitalFacilities = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-20 lg:py-32 bg-[#FAFAFA] relative">
      <Container>
        
        {/* Integrated Section Heading */}
        <div className="mb-16">
          <SectionHeading
            // eyebrow="Why Choose Us"
            title="Why People Choose Sreshta"
            // description="Experience world-class holistic wellness powered by authentic traditions and modern medical standards."
            align="center"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-6 lg:gap-8"
        >
          {/* Row 1: Unified Metrics Bar */}
          <TrustIndicators itemVariants={itemVariants} />

          {/* Row 2: Premium Masonry Bento Box */}
          {/* <GridOverview
            containerVariants={containerVariants} 
            itemVariants={itemVariants} 
          /> */}
        </motion.div>

      </Container>
    </section>
  );
};