"use client";

import { motion } from "framer-motion";
import { Container } from "@/src/components/common/Container";
import { ServicePreviewGrid } from "@/src/components/home/services-preview/ServicesPreviewGrid"; // Ensure path is correct

export const ServicesShowcase = () => {
  return (
    <section className="py-20 lg:py-16 bg-[#F8F5EF]">
      <Container>
        {/* The Grid Component without limit to show everything */}
        <ServicePreviewGrid />
      </Container>
    </section>
  );
};
