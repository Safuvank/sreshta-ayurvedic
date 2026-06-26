"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { trustMetrics } from "@/src/data/about";

export const OrganizationOverview = () => {
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Featured Image (Reference image style) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-sm"
          >
            <Image
              src="/images/about/sreshta.png"
              alt="Sreshta Ayurvedic Hospital"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right: Content & Structured Data */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl md:text-6xl text-gray-900 mb-6">
              A Legacy of Authentic Care
            </h2>

            <p className="text-gray-600 leading-relaxed mb-10 font-light">
              Sreshta Multi specialty Ayurveda clinic is a premium ayurveda
              centre where the traditional system of ayurveda is in confluence
              with modern medical techniques, without compromising the
              authenticity of the Science.
            </p>

            {/* Structured Stats Grid (Like property investment metrics) */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6 border-t border-gray-200 pt-8">
              {trustMetrics.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-xs uppercase tracking-[0.1em] text-gray-700 font-semibold mb-2">
                    {stat.label}
                  </p>
                  <h4 className="text-2xl md:text-3xl font-semibold text-[#2F5D50]">
                    {stat.value}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
