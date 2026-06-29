"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Container } from "@/src/components/common/Container"; // Adjust path if needed

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export const TreatmentDetailClient = ({ treatment }: { treatment: any }) => {
  return (
    <main className="min-h-screen bg-[#F8F5EF] pb-24">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-end pb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src={treatment.image}
            alt={treatment.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D35] via-[#1F3D35]/70 to-transparent" />
        </div>

        <Container className="relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/treatments"
              className="inline-flex items-center text-white/80 hover:text-[#C9A86A] transition-colors mb-6 text-sm uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Treatments
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {/* <motion.span
              variants={fadeUpVariants}
              className="inline-block px-3 py-1 bg-[#C9A86A]/20 text-[#C9A86A] text-sm font-semibold tracking-widest uppercase rounded-full mb-4 border border-[#C9A86A]/30"
            >
              {treatment.category}
            </motion.span> */}

            <motion.h1
              variants={fadeUpVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4"
            >
              {treatment.title}
            </motion.h1>
          </motion.div>
        </Container>
      </section>

      {/* 2. Content Section */}
      <Container className="mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Main Content Column (Descriptions) */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-3xl font-serif text-[#2F5D50] mb-4">
                Overview
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                {treatment.description}
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <h3 className="text-2xl font-serif text-[#2F5D50] mb-4">
                About the Therapy
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {treatment.longDescription}
              </p>
            </motion.div>

            {/* Special Section for Key Aspects (if they exist) */}
            {treatment.keyAspects && (
              <motion.div
                variants={fadeUpVariants}
                className="pt-6 border-t border-gray-200"
              >
                <h3 className="text-2xl font-serif text-[#2F5D50] mb-6">
                  Key Aspects
                </h3>
                <div className="space-y-6">
                  {treatment.keyAspects.map((aspect: any, idx: number) => (
                    <div
                      key={idx}
                      className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                    >
                      <h4 className="text-xl font-semibold text-[#1F3D35] mb-2">
                        {aspect.name}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {aspect.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Sidebar Column (Lists: Benefits, Types, Used For) */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Helper function to render bullet lists conditionally */}
            {renderList("Benefits", treatment.benefits)}
            {renderList("Highly Effective For", treatment.usedFor)}
            {renderList("Primary Purpose", treatment.purpose)}
            {renderList("Main Components", treatment.mainComponents)}
            {renderList("Types Available", treatment.types)}

            {/* CTA Box */}
            <motion.div
              variants={fadeUpVariants}
              className="bg-[#1F3D35] p-8 rounded-2xl text-center mt-12 shadow-xl"
            >
              <h4 className="text-2xl font-serif text-white mb-4">
                Book Your Session
              </h4>
              <p className="text-white/80 mb-6">
                Consult with our Ayurvedic physicians to determine if{" "}
                {treatment.title} is right for your body constitution.
              </p>
              <button className="w-full bg-[#C9A86A] hover:bg-[#b09054] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Schedule Consultation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </main>
  );
};

// Helper function to render sidebar lists
function renderList(title: string, items?: string[]) {
  if (!items || items.length === 0) return null;

  return (
    <motion.div
      variants={fadeUpVariants}
      className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
    >
      <h3 className="text-2xl font-serif text-[#2F5D50] mb-6">{title}</h3>
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-[#C9A86A] shrink-0 mt-0.5" />
            <span className="text-gray-700 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
