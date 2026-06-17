"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck, MessageCircle } from "lucide-react";

export const CTAButtons = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-10 flex flex-wrap justify-center gap-4"
    >
      <Link
        href="/contact"
        className="group flex items-center gap-2 rounded-full bg-[#C9A86A] px-8 py-4 font-medium text-gray-900 transition-all hover:bg-white hover:shadow-lg hover:shadow-white/10"
      >
        <CalendarCheck className="w-5 h-5 transition-transform group-hover:scale-110" />
        Book Consultation
      </Link>

      <Link
        href="https://wa.me/919999999999"
        target="_blank"
        className="group flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm px-8 py-4 text-white transition-all hover:bg-white hover:text-[#2F5D50]"
      >
        <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
        WhatsApp Us
      </Link>
    </motion.div>
  );
};