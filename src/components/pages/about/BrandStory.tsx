// "use client";

// import { motion } from "framer-motion";
// import { Container } from "../../common/Container";
// import { SectionHeading } from "../../common/SectionHeading";

// // Updated AnimatedText to accept variants for orchestration
// const AnimatedText = ({ text, variants }: { text: string; variants: any }) => {
//   const words = text.split(" ");

//   const child = {
//     visible: { opacity: 1, y: 0 },
//     hidden: { opacity: 0, y: 10 },
//   };

//   return (
//     <motion.div
//       style={{ display: "flex", flexWrap: "wrap" }}
//       variants={variants} // Use the variants passed from parent
//     >
//       {words.map((word, index) => (
//         <motion.span
//           variants={child}
//           style={{ marginRight: "6px" }}
//           key={index}
//         >
//           {word}
//         </motion.span>
//       ))}
//     </motion.div>
//   );
// };

// export const BrandStory = () => {
//   const paragraphs = [
//     "Sreshta Multi specialty Ayurveda clinic is a premium ayurveda centre where the traditional system of ayurveda is in confluence with modern medical techniques, without compromising the authenticity of the Science. Our Ayurveda centre in Kerala seamlessly blends modern diagnostics, yoga, meditation and counselling with the ancient art of Ayurveda to deliver a unique east-meets-west healing experience that will revive and revitalise you.",
//     "We all know Ayurveda is the “Science of Life” and not merely a healing system. So we believe that this science can enhance the standards of your well being not only by healing your ailments, but also by providing an in-depth knowledge about dos and don’ts of your day today life. To ensure this we have tried to integrate the healing concept with the wellness concept which is very much essential in this modern era.",
//     "We ensure quality service to our patients by meeting all the standards and religiously following the principles of ayurveda and medical ethics. We are blessed to have a team of eminent Doctors, Yoga instructors, wellness counsellors, therapists and other paramedical staff to ensure that all your health needs are taken care of with out compromising the quality, tradition and hospitality.",
//     "Our services includes consultation, Ayurveda Therapies, Beauty Therapies, Yoga, Counselling, Packages, and Pharmacy.",
//   ];

//   // Parent container variants to orchestrate the sequential paragraph reveal
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.8, // Wait 0.8s between paragraphs
//       },
//     },
//   };

//   // Variant for each paragraph to start word-by-word reveal
//   const paragraphVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.03 },
//     },
//   };

//   return (
//     <section className="py-10 lg:py-16 bg-white">
//       <Container>
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
//           <SectionHeading
//             eyebrow="Our Story"
//             title="Our Journey of Authentic Healing"
//             align="left"
//           />

//           {/* Sequential Paragraph Container */}
//           <motion.div
//             className="space-y-6 text-gray-500 font-font-normal leading-relaxed"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {paragraphs.map((para, idx) => (
//               <AnimatedText
//                 key={idx}
//                 text={para}
//                 variants={paragraphVariants}
//               />
//             ))}
//           </motion.div>
//         </div>
//       </Container>
//     </section>
//   );
// };


"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "../../common/Container";
import { SectionHeading } from "../../common/SectionHeading";

// Enhanced AnimatedText to accept custom classes for styling
const AnimatedText = ({
  text,
  variants,
  className = "",
}: {
  text: string;
  variants: any;
  className?: string;
}) => {
  const words = text.split(" ");

  const child = {
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
  };

  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          className="mr-[0.25em] mb-[0.2em] inline-block"
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const BrandStory = () => {
  // We split your paragraphs to give them distinct visual hierarchy
  const leadText =
    "Sreshta Multi specialty Ayurveda clinic is a premium ayurveda centre where the traditional system of ayurveda is in confluence with modern medical techniques, without compromising the authenticity of the Science. Our centre seamlessly blends modern diagnostics, yoga, meditation, and counselling with the ancient art of Ayurveda to deliver a unique east-meets-west healing experience.";
  
  const quoteText =
    "Ayurveda is the 'Science of Life' and not merely a healing system. We believe this science can enhance your well-being not only by healing ailments but by providing in-depth knowledge about your day-to-day life. We integrate the healing concept with the wellness concept—essential in this modern era.";

  const bodyText =
    "We ensure quality service to our patients by meeting all standards and religiously following the principles of Ayurveda and medical ethics. We are blessed to have a team of eminent Doctors, Yoga instructors, wellness counsellors, therapists, and other paramedical staff to ensure all your health needs are taken care of without compromising quality, tradition, or hospitality.";

  const services = [
    "Consultation",
    "Ayurveda Therapies",
    "Beauty Therapies",
    "Yoga",
    "Counselling",
    "Wellness Packages",
    "Pharmacy",
  ];

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04 },
    },
  };

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* --- LEFT COLUMN: Sticky Header & Quote --- */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <SectionHeading
                eyebrow="Our Story"
                title="A Journey of Authentic Healing"
                align="left"
              />

              {/* Editorial Pull-Quote */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 relative"
              >
                <Quote className="absolute -top-6 -left-4 w-16 h-16 text-[#C9A86A]/10 rotate-180" />
                <div className="pl-6 border-l-2 border-[#C9A86A]">
                  <p className="text-xl lg:text-2xl font-serif text-[#1F3D35] italic leading-relaxed">
                    "{quoteText}"
                  </p>
                  <span className="block mt-4 text-sm font-semibold tracking-widest text-gray-400 uppercase">
                    — Our Philosophy
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Narrative & Services --- */}
          <div className="lg:col-span-7 flex flex-col justify-center pt-4 lg:pt-8">
            
            {/* 1. Large Lead Paragraph (Word-by-word reveal) */}
            <AnimatedText
              text={leadText}
              variants={wordVariants}
              className="text-2xl lg:text-[1.75rem] font-serif text-[#1F3D35] leading-snug tracking-tight mb-12"
            />

            {/* Subtle Divider */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-24 h-[1px] bg-[#C9A86A]/40 mb-10 origin-left"
            />

            {/* 2. Standard Body Text (Fade up) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-600 font-light leading-relaxed mb-16"
            >
              {bodyText}
            </motion.p>

            {/* 3. Services Pills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4 className="text-sm font-semibold tracking-widest text-[#1F3D35] uppercase mb-6">
                Our Core Offerings
              </h4>
              <div className="flex flex-wrap gap-3">
                {services.map((service, idx) => (
                  <span
                    key={idx}
                    className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-600 text-sm font-medium hover:border-[#C9A86A] hover:text-[#C9A86A] hover:bg-[#C9A86A]/5 transition-all duration-300 cursor-default"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  );
};