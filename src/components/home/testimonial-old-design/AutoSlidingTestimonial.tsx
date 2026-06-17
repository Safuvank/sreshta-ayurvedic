"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/src/data/testimonials";
import { TestimonialCard } from "./TestimonialCard";

export const AutoSlidingTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-[380px] md:min-h-[320px] flex flex-col justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-full"
        >
          {/* We pass the currently active testimonial to your existing card */}
          <TestimonialCard {...testimonials[activeIndex]} />
        </motion.div>
      </AnimatePresence>

      {/* Interactive Dot Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.slice(0, 5).map((_, idx) => ( // Showing max 5 dots for clean UI
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`transition-all duration-300 rounded-full h-2 ${
              activeIndex === idx ? "w-8 bg-[#C9A86A]" : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};