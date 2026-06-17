"use client";

import { motion } from "framer-motion";
import { Award, Users, Leaf, ShieldCheck } from "lucide-react";

const trustMetrics = [
  { id: 1, icon: Award, value: "1+", label: "Years Experience" },
  { id: 2, icon: Users, value: "400+", label: "Happy Patients" },
  { id: 3, icon: Leaf, value: "200+", label: "Products" },
  { id: 4, icon: ShieldCheck, value: "100%", label: "Product Purity" },
];

interface TrustIndicatorsProps {
  itemVariants: any;
}

export const TrustIndicators = ({ itemVariants }: TrustIndicatorsProps) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="w-full bg-[#2F5D50] border border-gray-200 rounded-[2rem] shadow-sm flex flex-col md:flex-row overflow-hidden divide-y md:divide-y-0 md:divide-x divide-gray-100/20"
    >
      {trustMetrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <div
            key={metric.id}
            className="flex-1 py-12 px-8 flex flex-col items-center justify-center text-center group transition-colors duration-500"
          >
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-3">
              {/* Slightly increased icon size to balance the larger text */}
              <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#C9A86A] transition-transform duration-500 group-hover:scale-110" />
              
              {/* INCREASED VALUE SIZE HERE */}
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#C9A86A]">
                {metric.value}
              </h3>
            </div>
            
            <p className="text-xs font-bold text-white uppercase tracking-[0.2em] mt-2">
              {metric.label}
            </p>
          </div>
        );
      })}
    </motion.div>
  );
};