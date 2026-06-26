// "use client";

// import { motion } from "framer-motion";
// import { Container } from "../../common/Container";

// export const ContactHero = () => {
//   return (
//     <section className="bg-[#1F3D35] py-24 lg:py-32 relative overflow-hidden">
//       {/* Subtle decorative background element */}
//       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A86A] opacity-5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

//       <Container>
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="max-w-3xl text-center mx-auto"
//         >
//           <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight">
//             Contact <span className="text-[#C9A86A] italic">Us</span>
//           </h1>
//           <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
//             We're here to help you begin your healing journey. Reach out for consultations, appointments, and treatment enquiries. Our specialists are ready to guide you.
//           </p>
//         </motion.div>
//       </Container>
//     </section>
//   );
// };



"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../../common/Container";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: "100%" },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const ContactHero = () => {
  const paragraphText = "We're here to help you begin your healing journey. Reach out for consultations, appointments, and treatment enquiries. Our specialists are ready to guide you.";

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden pt-28 md:pt-32 min-h-[60vh] flex items-center">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact/contact-hero.png" /* <-- Add your image path here */
          alt="Contact Sreshta Ayurveda"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1F3D35]/85" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#C9A86A] opacity-20 rounded-full blur-[100px] md:blur-[120px]" />
      </div>

      <Container className="relative z-10 w-full pb-16">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="max-w-3xl">
          {/* Top Badge */}
          <motion.div variants={wordVariants} className="flex items-center justify-start gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="w-8 md:w-12 h-[1px] bg-[#C9A86A]" />
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A86A]">
              Get In Touch
            </span>
          </motion.div>

          {/* H1 Animation */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight break-words">
            <span className="block overflow-hidden pb-2">
              <motion.span variants={wordVariants} className="block">
                Contact <span className="italic text-[#C9A86A]">Us</span>
              </motion.span>
            </span>
          </h1>

          {/* Paragraph Animation */}
          <p className="mt-6 md:mt-8 text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
            {paragraphText.split(" ").map((word, index) => (
              <span key={index} className="inline-block overflow-hidden align-bottom">
                <motion.span variants={wordVariants} className="inline-block">{word}&nbsp;</motion.span>
              </span>
            ))}
          </p>
        </motion.div>
      </Container>
    </section>
  );
};