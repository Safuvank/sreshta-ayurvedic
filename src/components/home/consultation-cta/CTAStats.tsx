"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "5000+",
    label: "Patients Treated",
  },
  {
    value: "50+",
    label: "Authentic Therapies",
  },
  {
    value: "20+",
    label: "Years Experience",
  },
];

export const CTAStats = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mx-auto max-w-4xl rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-8 shadow-2xl"
    >
      <div className="grid gap-8 text-center md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className="pt-8 md:pt-0"
          >
            <h3 className="font-serif text-4xl lg:text-5xl text-[#C9A86A]">
              {stat.value}
            </h3>
            <p className="mt-2 text-gray-300 font-medium tracking-wide">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
