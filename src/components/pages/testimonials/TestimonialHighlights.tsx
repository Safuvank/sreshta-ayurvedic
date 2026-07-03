"use client";

import { motion } from "framer-motion";
import { Star, PlayCircle, Heart, ArrowDownCircle } from "lucide-react";
import { Container } from "@/src/components/common/Container";

export const TestimonialHighlights = () => {
  const cards = [
    {
      icon: Star,
      title: "4.9/5 Rating",
      detail: "On Google Reviews",
      action: "Read Reviews",
      link: "#google-reviews",
    },
    {
      icon: PlayCircle,
      title: "Video Stories",
      detail: "Watch their journeys",
      action: "View Videos",
      link: "#video-stories",
    },
    {
      icon: Heart,
      title: "Authentic Care",
      detail: "Traditional Ayurveda",
      action: "Learn More",
      link: "/about", // Standard route link
    },
    {
      icon: ArrowDownCircle,
      title: "Written Reviews",
      detail: "Filtered by treatment",
      action: "Read Stories",
      link: "#written-reviews",
    },
  ];

  // Custom function to handle smooth scrolling for hash links
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string,
  ) => {
    // Only intercept if it's an anchor link on the same page
    if (link.startsWith("#")) {
      e.preventDefault();
      const targetId = link.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        // Smoothly scroll to the element
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <div className="relative z-20 -mt-20 sm:-mt-24 mb-16 lg:mb-20">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {cards.map((card, index) => (
            <motion.a
              key={index}
              href={card.link}
              onClick={(e) => handleSmoothScroll(e, card.link)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group block relative p-6 md:p-8 bg-[#254A40] rounded-2xl border border-white/10 shadow-2xl hover:border-[#C9A86A]/50 transition-colors duration-500 overflow-hidden"
            >
              {/* Permanent Gold Highlight Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent" />

              <div className="flex justify-between items-start mb-8">
                {/* Elegant translucent icon container */}
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#C9A86A] group-hover:bg-[#C9A86A] group-hover:text-[#2F5D50] transition-colors duration-500">
                  <card.icon className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base font-light text-gray-300 group-hover:text-white transition-colors duration-500">
                  {card.detail}
                </p>

                {/* Subtle text link appearance on hover */}
                <span className="inline-block mt-4 text-xs font-semibold uppercase tracking-widest text-[#C9A86A] opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {card.action} &rarr;
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </div>
  );
};
