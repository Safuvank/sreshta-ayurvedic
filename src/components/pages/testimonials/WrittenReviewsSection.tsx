"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { Container } from "@/src/components/common/Container";
import { TestimonialCard } from "../../home/testimonial-old-design/TestimonialCard";

interface WrittenReviewsSectionProps {
  reviews: any[]; // Replace 'any' with your Testimonial type interface
}

export const WrittenReviewsSection = ({
  reviews,
}: WrittenReviewsSectionProps) => {
  // --- NEW: Early return if there are no reviews to show ---
  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <section
      id="written-reviews"
      className="py-16 lg:py-24 bg-white border-t border-gray-100"
    >
      <Container>
        {/* <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-6 h-6 text-[#C9A86A]" />
            <h2 className="text-3xl font-serif text-gray-900">Written Reviews</h2>
          </div>
          <span className="text-sm font-medium text-gray-500 bg-gray-100 px-4 py-1.5 rounded-full">
            Showing {reviews.length} stories
          </span>
        </div> */}

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {reviews.map((testimonial, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={`${testimonial.id || "review"}-${index}`} // Fallback added just in case id is missing
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
};
