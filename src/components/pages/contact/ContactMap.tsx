"use client";

import { motion } from "framer-motion";
import { contactInfo } from "@/src/data/contact";
import { Container } from "../../common/Container";

export const ContactMap = () => {
  return (
    <section id="map" className="py-24 lg:py-32 bg-[#F8F5EF] overflow-hidden">
      <Container>
        <div className="flex flex-col items-center">
          {/* Centered Heading & Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
          >
            <h3 className="font-serif text-4xl lg:text-5xl text-[#2F5D50] mb-6">
              Find Us <span className="text-[#C9A86A] italic">Easily</span>
            </h3>
            <p className="text-gray-500 font-light text-lg leading-relaxed">
              Located in the serene heart of Kerala, our facility is easily
              accessible yet peacefully tucked away to provide the perfect
              environment for healing.
            </p>
          </motion.div>

          {/* Full-width Google Map iframe */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-[550px] w-full rounded-2xl lg:rounded-2xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(47,93,80,0.15)] border-4 border-white"
          >
            <iframe
              src={contactInfo.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
