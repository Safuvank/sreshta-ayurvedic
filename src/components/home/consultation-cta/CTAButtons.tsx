"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck, MessageCircle, ArrowRight } from "lucide-react";

export const CTAButtons = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto"
    >
      {/* Primary Button: Solid Gold */}
      <Link
        href="#"
        className="group relative overflow-hidden flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-[#C9A86A] px-8 py-4 font-medium text-[#1F3D35] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,106,0.3)]"
      >
        <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 ease-out group-hover:translate-y-0" />
        <span className="relative z-10 flex items-center gap-2">
          <CalendarCheck className="w-5 h-5" />
          Book Consultation
        </span>
      </Link>

      {/* Secondary Button: Outlined White */}
      {/* <Link
        href="https://wa.me/919999999999"
        target="_blank"
        className="group relative overflow-hidden flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-white/30 bg-transparent px-8 py-4 font-medium text-white transition-all duration-300 hover:text-[#1F3D35]"
      >
        <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 ease-out group-hover:translate-y-0" />
        <span className="relative z-10 flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          WhatsApp Us
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link> */}
    </motion.div>
  );
};