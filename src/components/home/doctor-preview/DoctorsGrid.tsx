"use client";

import { motion, Variants } from "framer-motion";
import { doctors } from "@/src/data/doctors";
import { DoctorPreviewCard } from "./DoctorPreviewCard";

export const DoctorsGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
      className="grid gap-12 md:gap-x-8 md:gap-y-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
    >
      {doctors.map((doctor) => (
        <motion.div key={doctor.id} variants={itemVariants} className="h-full">
          <DoctorPreviewCard {...doctor} />
        </motion.div>
      ))}
    </motion.div>
  );
};