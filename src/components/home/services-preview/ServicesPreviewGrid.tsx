"use client";

import { motion, Variants } from "framer-motion";
import { services } from "@/src/data/services";
import { ServicePreviewCard } from "./ServicePreviewCard";

export const ServicePreviewGrid = () => {
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      {services.map((service) => (
        // Added h-full here to align the cards properly
        <motion.div key={service.id} variants={itemVariants} className="h-full">
          <ServicePreviewCard {...service} />
        </motion.div>
      ))}
    </motion.div>
  );
};

