"use client";

import { motion, Variants } from "framer-motion";
import { treatments } from "@/src/data/treatments";
import { TreatmentPreviewCard } from "./TreatmentPreviewCard";

export const TreatmentPreviewGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
    >
      {treatments.map((treatment) => (
        <motion.div
          key={treatment.id}
          variants={itemVariants}
          className="h-full"
        >
          <TreatmentPreviewCard {...treatment} />
        </motion.div>
      ))}
    </motion.div>
  );
};