"use client";

import { motion } from "framer-motion";
import { Container } from "../../common/Container";

// Updated AnimatedText to accept variants for orchestration
const AnimatedText = ({ text, variants }: { text: string; variants: any }) => {
  const words = text.split(" ");

  const child = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 10 },
  };

  return (
    <motion.div
      style={{ display: "flex", flexWrap: "wrap" }}
      variants={variants} // Use the variants passed from parent
    >
      {words.map((word, index) => (
        <motion.span variants={child} style={{ marginRight: "6px" }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const BrandStory = () => {
  const paragraphs = [
    "Sreshta Multi specialty Ayurveda clinic is a premium ayurveda centre where the traditional system of ayurveda is in confluence with modern medical techniques, without compromising the authenticity of the Science. Our Ayurveda centre in Kerala seamlessly blends modern diagnostics, yoga, meditation and counselling with the ancient art of Ayurveda to deliver a unique east-meets-west healing experience that will revive and revitalise you.",
    "We all know Ayurveda is the “Science of Life” and not merely a healing system. So we believe that this science can enhance the standards of your well being not only by healing your ailments, but also by providing an in-depth knowledge about dos and don’ts of your day today life. To ensure this we have tried to integrate the healing concept with the wellness concept which is very much essential in this modern era.",
    "We ensure quality service to our patients by meeting all the standards and religiously following the principles of ayurveda and medical ethics. We are blessed to have a team of eminent Doctors, Yoga instructors, wellness counsellors, therapists and other paramedical staff to ensure that all your health needs are taken care of with out compromising the quality, tradition and hospitality.",
    "Our services includes consultation, Ayurveda Therapies, Beauty Therapies, Yoga, Counselling, Packages, and Pharmacy."
  ];

  // Parent container variants to orchestrate the sequential paragraph reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8, // Wait 0.8s between paragraphs
      },
    },
  };

  // Variant for each paragraph to start word-by-word reveal
  const paragraphVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03 },
    },
  };

  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Our Story</span>
            <div className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.1]">
              <AnimatedText text="Our Journey of Authentic Healing" variants={paragraphVariants} />
            </div>
          </motion.div>

          {/* Sequential Paragraph Container */}
          <motion.div
            className="space-y-6 text-gray-900 font-medium leading-relaxed text-lg"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {paragraphs.map((para, idx) => (
              <AnimatedText key={idx} text={para} variants={paragraphVariants} />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};