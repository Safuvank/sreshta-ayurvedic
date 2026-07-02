// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion, Variants } from "framer-motion";
// import { ArrowLeft, CheckCircle2, CalendarDays } from "lucide-react";
// import { Container } from "@/src/components/common/Container";

// // --- Framer Motion Variants ---
// const fadeUpVariants: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const staggerContainer: Variants = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { staggerChildren: 0.1 } },
// };

// export const SpecializationDetailClient = ({ category }: { category: any }) => {
//   return (
//     <main className="min-h-screen bg-[#F8F5EF] pb-24">
//       {/* --- PREMIUM HERO SECTION --- */}
//       <section className="relative h-[65vh] min-h-[500px] w-full flex items-end pb-16 md:pb-24 pt-32 overflow-hidden">
//         {/* Background Image & Gradient Overlays */}
//         <div className="absolute inset-0 z-0">
//           <Image
//             src={category.image}
//             alt={category.title}
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#1F3D35] z-10" />
//           <div className="absolute inset-0 bg-[#1F3D35]/40 z-10" />
//         </div>

//         <Container className="relative z-20 w-full">
//           {/* Animated Back Button */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Link
//               href="/our-core"
//               className="group inline-flex items-center gap-2 text-white/80 hover:text-[#C9A86A] transition-colors mb-8 md:mb-12 w-max"
//             >
//               <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C9A86A] transition-colors">
//                 <ArrowLeft size={16} />
//               </div>
//               <span className="text-sm font-medium tracking-wide uppercase">
//                 All Specializations
//               </span>
//             </Link>
//           </motion.div>

//           {/* Animated Hero Typography */}
//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             animate="show"
//             className="max-w-4xl"
//           >
//             <motion.h1
//               variants={fadeUpVariants}
//               className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-4"
//             >
//               {category.title}
//             </motion.h1>
//             <motion.div
//               variants={fadeUpVariants}
//               className="flex items-center gap-4"
//             >
//               <div className="h-[2px] w-12 bg-[#C9A86A]" />
//               <h2 className="text-xl md:text-3xl text-[#C9A86A] font-medium tracking-wide">
//                 {category.mlTitle}
//               </h2>
//             </motion.div>
//           </motion.div>
//         </Container>
//       </section>

//       {/* --- SPLIT EDITORIAL CONTENT SECTION --- */}
//       <section className="pt-16 md:pt-24 relative z-20">
//         <Container>
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
//             {/* LEFT COLUMN: Sticky Sidebar */}
//             <motion.div
//               className="lg:col-span-5"
//               variants={staggerContainer}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-100px" }}
//             >
//               <div className="sticky top-32 flex flex-col gap-8">
//                 {/* Overview Card */}
//                 <motion.div
//                   variants={fadeUpVariants}
//                   className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
//                 >
//                   <h3 className="text-sm font-bold tracking-[0.2em] text-[#C9A86A] uppercase mb-4">
//                     Overview
//                   </h3>
//                   <p className="text-lg text-gray-600 leading-relaxed font-light">
//                     {category.description}
//                   </p>
//                 </motion.div>

//                 {/* Modern CTA Card */}
//                 <motion.div
//                   variants={fadeUpVariants}
//                   className="bg-[#1F3D35] rounded-3xl p-8 relative overflow-hidden group shadow-xl"
//                 >
//                   {/* Decorative background circle */}
//                   <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#2F5D50] rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

//                   <div className="relative z-10">
//                     <div className="w-12 h-12 bg-[#C9A86A]/20 rounded-xl flex items-center justify-center mb-6 text-[#C9A86A]">
//                       <CalendarDays size={24} />
//                     </div>
//                     <h4 className="font-serif text-2xl text-white mb-2">
//                       Begin Your Healing Journey
//                     </h4>
//                     <p className="text-white/70 mb-8 font-light">
//                       Speak with our Ayurvedic experts to create a treatment
//                       plan tailored specifically to your body type.
//                     </p>
//                     <button className="w-full bg-[#C9A86A] hover:bg-white text-[#1F3D35] px-6 py-4 rounded-xl transition-colors font-semibold flex items-center justify-center gap-2">
//                       Book a Consultation
//                     </button>
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* RIGHT COLUMN: Conditions Grid */}
//             <motion.div
//               className="lg:col-span-7 pt-4 lg:pt-0"
//               variants={staggerContainer}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-100px" }}
//             >
//               {category.conditions.length > 0 ? (
//                 <div>
//                   <motion.div variants={fadeUpVariants} className="mb-10">
//                     <h3 className="text-3xl md:text-4xl font-serif text-[#1F3D35] mb-4">
//                       Conditions We Treat
//                     </h3>
//                     <p className="text-gray-500 text-lg">
//                       We offer specialized, root-cause Ayurvedic treatments for
//                       the following conditions:
//                     </p>
//                   </motion.div>

//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                     {category.conditions.map(
//                       (condition: any, index: number) => (
//                         <motion.div
//                           key={index}
//                           variants={fadeUpVariants}
//                           className="group flex flex-col p-6 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-[#C9A86A]/40 transition-all duration-300 translate-y-0 hover:-translate-y-1"
//                         >
//                           <div className="flex items-center gap-4 mb-3">
//                             <div className="w-10 h-10 rounded-full bg-[#F8F5EF] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1F3D35] transition-colors duration-300">
//                               <CheckCircle2 className="w-5 h-5 text-[#2F5D50] group-hover:text-[#C9A86A]" />
//                             </div>
//                             <h4 className="font-semibold text-[#1F3D35] text-lg leading-tight">
//                               {condition.en}
//                             </h4>
//                           </div>
//                           <span className="text-[#C9A86A] font-medium pl-14">
//                             {condition.ml}
//                           </span>
//                         </motion.div>
//                       ),
//                     )}
//                   </div>
//                 </div>
//               ) : (
//                 /* Empty State / Extended Content if no specific conditions are listed */
//                 <motion.div
//                   variants={fadeUpVariants}
//                   className="flex flex-col items-center justify-center h-full min-h-[300px] bg-white rounded-3xl border border-dashed border-gray-300 p-10 text-center"
//                 >
//                   <div className="w-16 h-16 bg-[#F8F5EF] rounded-full flex items-center justify-center text-[#2F5D50] mb-4">
//                     <CheckCircle2 size={32} />
//                   </div>
//                   <h3 className="text-2xl font-serif text-[#1F3D35] mb-2">
//                     Comprehensive Care
//                   </h3>
//                   <p className="text-gray-500 max-w-md">
//                     Our specialists provide holistic treatments for a wide range
//                     of {category.title.toLowerCase()}. Contact us to discuss
//                     your specific symptoms.
//                   </p>
//                 </motion.div>
//               )}
//             </motion.div>
//           </div>
//         </Container>
//       </section>
//     </main>
//   );
// };





"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Leaf } from "lucide-react";
import { Container } from "@/src/components/common/Container";

// --- Framer Motion Variants (Matched to Service Page) ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: "100%" },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const SpecializationDetailClient = ({ category }: { category: any }) => {
  return (
    <main className="min-h-screen bg-[#F8F5EF] pb-0">
      {/* 1. Full-Width Hero Image Banner (Matched to Service Page) */}
      <section className="relative pt-20 pb-20 lg:pb-20 min-h-[40vh] lg:min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={category.image}
            alt={category.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1F3D35]/85" />
        </div>

        <Container className="relative z-10 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Back Button */}
            <div className="overflow-hidden mb-6 md:mb-8">
              <motion.div variants={wordVariants}>
                <Link
                  href="/our-core"
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest text-[#C9A86A] uppercase hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Specializations
                </Link>
              </motion.div>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-6 leading-tight break-words flex flex-wrap gap-x-3 lg:gap-x-4 gap-y-1">
              {category.title.split(" ").map((word: string, index: number) => (
                <span key={index} className="block overflow-hidden pb-2">
                  <motion.span variants={wordVariants} className="block">
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Overview / Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
              {(category.description || "").split(" ").map((word: string, index: number) => (
                <span
                  key={index}
                  className="inline-block overflow-hidden align-bottom"
                >
                  <motion.span variants={wordVariants} className="inline-block">
                    {word}&nbsp;
                  </motion.span>
                </span>
              ))}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* 2. Specific Conditions Grid (Matched to Service Page) */}
      {category.conditions && category.conditions.length > 0 ? (
        <section className="py-16 lg:py-24 bg-[#F8F5EF]">
          <Container>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {category.conditions.map((condition: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-300 transition-all duration-300 flex flex-col"
                >
                  {/* Condition Image (Falls back to category image if none provided) */}
                  <div className="relative w-full h-64 sm:h-72 lg:h-80 bg-[#F8F5EF] overflow-hidden shrink-0">
                    <Image
                      src={condition.image || category.image}
                      alt={condition.en}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* --- CONTENT BODY --- */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-4 border-b border-gray-100 pb-4">
                      <div>
                        <h3 className="font-serif text-2xl text-[#2F5D50]">
                          {condition.en}
                        </h3>
                        <span className="text-sm font-medium tracking-wider text-[#2F5D50] mt-1 block">
                          {condition.ml}
                        </span>
                      </div>
                      {/* Leaf Icon */}
                      <div className="w-10 h-10 rounded-full bg-[#F8F5EF] flex items-center justify-center shrink-0 text-[#2F5D50]">
                        <Leaf className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Book Treatment Button */}
                    <div className="mt-auto pt-8">
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        className="
                          group/btn
                          relative 
                          overflow-hidden 
                          flex 
                          w-full
                          items-center 
                          justify-center 
                          rounded-xl 
                          border 
                          border-[#2F5D50]/30 
                          bg-transparent 
                          px-6 
                          py-3.5 
                          font-medium 
                          text-[#2F5D50] 
                          transition-all 
                          duration-300 
                          hover:text-white 
                          hover:border-[#2F5D50]
                          cursor-pointer
                        "
                      >
                        {/* Animated Background (Slides up on hover) */}
                        <span className="absolute inset-0 translate-y-full bg-[#2F5D50] transition-transform duration-300 ease-out group-hover/btn:translate-y-0" />
                        {/* Content Wrapper (Keeps text above the background) */}
                        <span className="relative z-10">Book Consultation</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      ) : (
        /* Empty State for Core specializations without specific listed conditions */
        <section className="py-16 lg:py-24 bg-[#F8F5EF]">
          <Container>
            <div className="bg-white p-10 md:p-16 rounded-3xl border border-gray-200 text-center max-w-3xl mx-auto shadow-sm">
              <div className="w-16 h-16 bg-[#F8F5EF] rounded-full flex items-center justify-center text-[#2F5D50] mx-auto mb-6">
                <Leaf className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-serif text-[#2F5D50] mb-4">
                Comprehensive Care
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our specialists provide holistic treatments for a wide range of {category.title.toLowerCase()}. Contact us to discuss your specific symptoms and receive a personalized Ayurvedic treatment plan tailored to your body constitution.
              </p>
              <button className="bg-[#1F3D35] hover:bg-[#2F5D50] text-white px-8 py-4 rounded-xl transition-colors font-medium">
                Schedule a Consultation
              </button>
            </div>
          </Container>
        </section>
      )}
    </main>
  );
};