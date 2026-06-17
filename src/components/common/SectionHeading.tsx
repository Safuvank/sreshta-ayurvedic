"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A86A]">
          {eyebrow}
        </span>
      )}

      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-4 md:mt-6 text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};
