"use client";

import { motion } from "framer-motion";
import { Container } from "../common/Container";

export const BrandStory = () => {
  return (
    <section className="py-20 lg:py-32 bg-[#F8F5EF] relative">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-xl shadow-gray-100/50"
        >
          <div className="text-center mb-12">
            <span className="text-[#C9A86A] font-serif text-6xl leading-none">“</span>
            <h2 className="font-serif text-3xl md:text-5xl text-gray-900 mt-4">Our Journey</h2>
          </div>

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
            <p>
              Sreshta was born from a deep-seated desire to bring the unadulterated, profound healing power of Kerala Ayurveda to the modern world. Over two decades ago, our founders envisioned a space where ancient wisdom and compassionate care could converge seamlessly.
            </p>
            <p>
              What began as a modest clinic has blossomed into a comprehensive hospital, trusted by thousands. Through every phase of our growth, we have steadfastly refused to compromise on the authenticity of our treatments, the purity of our medicines, or the dedication of our Vaidyas (physicians).
            </p>
            <p>
              Today, our patient-first philosophy remains our guiding light. We believe that true healing requires time, customized attention, and a deep understanding of each individual's unique constitution. At Sreshta, you are not just a patient; you are a partner in your own wellness journey.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};