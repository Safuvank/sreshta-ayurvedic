"use client";

import { motion, Variants } from "framer-motion";
import { doctorsDetails } from "@/src/data/doctors"; 
import { DoctorCard } from "./DoctorsPreviewCard";

interface DoctorPreviewGridProps {
  limit?: number;
}

export const DoctorPreviewGrid = ({ limit }: DoctorPreviewGridProps) => {
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

  const displayedDoctors = limit ? doctorsDetails.slice(0, limit) : doctorsDetails;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid gap-6 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    >
      {displayedDoctors.map((doctor) => (
        <motion.div key={doctor.id} variants={itemVariants} className="h-full">
          <DoctorCard {...doctor} />
        </motion.div>
      ))}
    </motion.div>
  );
};