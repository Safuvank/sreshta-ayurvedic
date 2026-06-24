"use client";

import { motion } from "framer-motion";
import { Container } from "@/src/components/common/Container";
import { ServicePreviewGrid } from "@/src/components/home/services-preview/ServicesPreviewGrid"; // Ensure path is correct

export const ServicesShowcase = () => {
  return (
    <section className="py-20 lg:py-16 bg-[#F8F5EF]">
      <Container>
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl lg:text-5xl text-gray-900 mb-4">
              Our Modalities
            </h2>
            <p className="text-gray-600 text-lg">
              Select a specialized treatment area to discover our comprehensive therapies.
            </p>
          </div>
        </motion.div> */}

        {/* The Grid Component without limit to show everything */}
        <ServicePreviewGrid />
      </Container>
    </section>
  );
};