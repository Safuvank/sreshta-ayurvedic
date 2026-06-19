"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

const sliderImages = [
  {
    id: 1,
    src: "/images/hero/1.png",
    alt: "Sreshta Premium Facility Exterior",
  },
  {
    id: 2,
    src: "/images/hero/2.png",
    alt: "Authentic Ayurvedic Treatment Spaces",
  },
  {
    id: 3,
    src: "/images/hero/3.png",
    alt: "Authentic Ayurvedic Treatment Spaces",
  },
  {
    id: 4,
    src: "/images/hero/4.png",
    alt: "Authentic Ayurvedic Treatment Spaces",
  },

  {
    id: 5,
    src: "/images/hero/6.png",
    alt: "Authentic Ayurvedic Treatment Spaces",
  },
];

interface HeroImageSliderProps {
  itemVariants: Variants;
}

export const HeroImageSlider = ({ itemVariants }: HeroImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4500); // Transitions every 4.5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      variants={itemVariants}
      className="relative w-full h-95 sm:h-12 md:h-130 lg:h-145 lg:rounded-xl overflow-hidden rounded-xl border border-white/10 group shadow-2xl"
    >
      {/* Cinematic Wipe & Scale Loop */}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          // The wipe starts from the right side, slightly zoomed in
          initial={{ clipPath: "inset(0 0 0 100%)", scale: 1.05 }}
          // It fully reveals the image and settles into its normal scale
          animate={{ clipPath: "inset(0 0 0 0)", scale: 1 }}
          // As it leaves, it wipes away towards the left
          exit={{ clipPath: "inset(0 100% 0 0)", scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.77, 0, 0.175, 1], // A premium, snappy cubic-bezier easing
          }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <Image
            src={sliderImages[currentIndex].src}
            alt={sliderImages[currentIndex].alt}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Luxury Minimal Mask Overlay (keeps pagination visible) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10" />

      {/* Subtle Slider Pagination Lines */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {sliderImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1 rounded-full transition-all duration-500 ease-out ${
              currentIndex === idx
                ? "w-8 bg-[#C9A86A]"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
};
