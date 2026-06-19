"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  { type: "image", src: "/images/hospital-exterior.jpg", alt: "Facility Exterior" },
  { type: "image", src: "/images/treatment-room.jpg", alt: "Ayurvedic Treatment Room" },
  { 
    type: "text", 
    text: "Every treatment is tailored to balance your body, mind, and spirit naturally.",
    bg: "bg-[#1F3D35]" 
  },
  { type: "image", src: "/images/consultation-lounge.jpg", alt: "Holistic Lounge" },
  { type: "image", src: "/images/herbs-setup.jpg", alt: "Authentic Medicines" },
];

export const HeroShowcaseTrack = () => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar px-4 sm:px-8 lg:px-16 py-4">
      {/* Flex container arranging elements identical to the showcase template */}
      <div className="flex gap-4 sm:gap-6 min-w-max lg:min-w-0 lg:grid lg:grid-cols-5 h-[340px] sm:h-[420px] md:h-[460px]">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            className="w-[260px] sm:w-[300px] lg:w-auto h-full rounded-[2.5rem] overflow-hidden shadow-md relative"
          >
            {item.type === "image" ? (
              <Image
                src={item.src!}
                alt={item.alt!}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-w-1024px) 300px, 20vw"
              />
            ) : (
              /* Philosophy Block matching the central brown panel from the example image */
              <div className={`${item.bg} w-full h-full flex items-center justify-center p-8 text-center`}>
                <p className="font-serif text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed font-light">
                  {item.text}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};