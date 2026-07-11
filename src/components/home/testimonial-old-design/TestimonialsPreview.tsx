"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { VideoCarouselSection } from "../../pages/testimonials/VideoSection";
import { videoData } from "@/src/data/testimonials";

export const TestimonialsPreview = () => {
  return (
    <section className="bg-[#FAFAFA] py-10 lg:py-0 relative overflow-hidden">
      {/* Full-width Video Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full mt-0 lg:mt-0" // Removed max-w-5xl/mx-auto
      >
        <VideoCarouselSection videos={videoData} />
      </motion.div>

      {/* Marquee Section */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-16 lg:mt-24"
      >
        <TestimonialsMarquee />
      </motion.div> */}

      {/* Bottom CTA Button */}
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 lg:mt-10 flex justify-center"
        >
          <Link
            href="/testimonials"
            className="group relative overflow-hidden inline-flex items-center gap-3 rounded-2xl border border-[#2F5D50] bg-transparent px-8 py-4 font-medium text-[#2F5D50] transition-colors duration-300 hover:text-white"
          >
            <span className="absolute inset-0 translate-y-full bg-[#2F5D50] transition-transform duration-300 ease-out group-hover:translate-y-0" />
            <span className="relative z-10 flex items-center gap-3">
              View All Patient Stories
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};
