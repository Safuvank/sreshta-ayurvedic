// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// import { Container } from "../../common/Container";
// import { SectionHeading } from "../../common/SectionHeading";
// import { TreatmentPreviewGrid } from "./TreatmentPreviewGrid";

// export const TreatmentsPreview = () => {
//   return (
//     <section className="py-10 lg:py-20 bg-[#F8F5EF] relative overflow-hidden">
//       {/* Optional decorative blur to blend with the cream background */}
//       <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C9A86A]/5 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />

//       <Container>
//         <div className="relative z-10">
//           <SectionHeading
//             eyebrow="OUR TREATMENTS"
//             title="Traditional Ayurvedic Therapies for Complete Healing"
//             // description="Explore our specialized Ayurvedic treatments focused on targeting the root cause of illness and bringing long-lasting rejuvenation."
//           />

//           <div className="mt-16 lg:mt-20">
//             <TreatmentPreviewGrid limit={4} />
//           </div>

//           {/* Animated Bottom CTA */}
// <motion.div
//   initial={{ opacity: 0, y: 20 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true }}
//   transition={{ duration: 0.6, delay: 0.4 }}
//   className="mt-16 text-center"
// >
//   <Link
//     href="/treatments"
//     className="
//       group
//       relative
//       overflow-hidden
//       inline-flex
//       rounded-2xl
//       border
//       border-[#2F5D50]
//       bg-transparent
//       px-8
//       py-4
//       font-medium
//       text-[#2F5D50]
//       transition-all
//       duration-300
//       hover:text-white
//       hover:shadow-lg
//       hover:shadow-[#2F5D50]/20
//       "
//   >
//     {/* Animated Background (Slides up on hover) */}
//     <span className="absolute inset-0 translate-y-full bg-[#2F5D50] transition-transform duration-300 ease-out group-hover:translate-y-0" />

//     {/* Content Wrapper (Keeps text and icon above the background) */}
//     <span className="relative z-10 flex items-center gap-3">
//       View All Treatments
//       <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
//     </span>
//   </Link>
// </motion.div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowRight, Sparkles } from "lucide-react";

// import { Container } from "../../common/Container";
// import { SectionHeading } from "../../common/SectionHeading";

// export const TreatmentsPreview = () => {
//   // Extracted buttons into a helper function to avoid repeating code
//   // for desktop and mobile placements.
//   const ActionButtons = () => (
//     <>
//       {/* <Link
//         href="/experience"
//         className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#9B2B49] px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-[#7A2139] hover:shadow-lg"
//       >
//         <Sparkles className="h-4 w-4 opacity-70" />
//         <span className="text-sm">Step into a day at Ayurvedagram</span>
//         <Sparkles className="h-4 w-4 opacity-70" />
//       </Link> */}

//       <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="mt-16 text-center"
//           >
//             <Link
//               href="/treatments"
//               className="
//                 group
//                 relative
//                 overflow-hidden
//                 inline-flex
//                 rounded-2xl
//                 border
//                 border-[#2F5D50]
//                 bg-transparent
//                 px-8
//                 py-4
//                 font-medium
//                 text-[#2F5D50]
//                 transition-all
//                 duration-300
//                 hover:text-white
//                 hover:shadow-lg
//                 hover:shadow-[#2F5D50]/20
//                 "
//             >
//               {/* Animated Background (Slides up on hover) */}
//               <span className="absolute inset-0 translate-y-full bg-[#2F5D50] transition-transform duration-300 ease-out group-hover:translate-y-0" />

//               {/* Content Wrapper (Keeps text and icon above the background) */}
//               <span className="relative z-10 flex items-center gap-3">
//                 View All Treatments
//                 <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
//               </span>
//             </Link>
//           </motion.div>
//     </>
//   );

//   return (
//     <section className="py-10 lg:py-20 bg-[#F8F5EF] relative overflow-hidden">
//       {/* Decorative blur to blend with the cream background */}
//       <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C9A86A]/5 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />

//       <Container>
//         <div className="relative z-10">
//           {/* --- Section Heading --- */}
//           <div className="mb-12 lg:mb-16">
//             <SectionHeading
//               eyebrow="OUR TREATMENTS"
//               title="Traditional Ayurvedic Therapies for Complete Healing"
//             />
//           </div>

//           {/* --- Staggered Content Grid --- */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 w-full max-w-6xl mx-auto">
//             {/* --- Left Column --- */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="flex flex-col gap-6 md:gap-8"
//             >
//               {/* Top Image (Landscape) */}
//               <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
//                 <Image
//                   src="/images/treatments/facial-marma.png"
//                   alt="Ayurvedic heritage center at night"
//                   fill
//                   className="object-cover transition-transform duration-700 hover:scale-105"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                 />
//               </div>

//               {/* Bottom Content */}
//               <div className="">
//                 {/* <p className="text-[#4A4A4A] text-sm md:text-base leading-relaxed">
//                   Tucked away in the quiet outskirts of Bengaluru, Ayurvedagram is a
//                   serene space rooted in heritage. Restored Kerala cottages, natural
//                   surroundings, and thoughtful design that create a space for pause
//                   and recovery that you have been looking for.
//                 </p> */}

//                 {/* Desktop Buttons (Hidden on mobile) */}
//                 <div className="hidden md:flex flex-wrap items-center gap-4">
//                   <ActionButtons />
//                 </div>
//               </div>
//             </motion.div>

//             {/* --- Right Column --- */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="flex flex-col gap-6 md:gap-8 md:mt-24 lg:mt-32"
//             >
//               {/* Top Content (Staggered to align with bottom of left image) */}
//               {/* <div className="space-y-6 lg:pl-8">
//                 <p className="text-[#4A4A4A] text-sm md:text-base leading-relaxed">
//                   Expert-led Ayurveda programs designed around your individual needs.

//                 </p>
//               </div> */}

//               {/* Bottom Image (Square/Landscape) */}
//               <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
//                 <Image
//                   src="/images/treatments/abyangam.png"
//                   alt="Ayurvedic oil pouring treatment"
//                   fill
//                   className="object-cover transition-transform duration-700 hover:scale-105"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                 />
//               </div>
//             </motion.div>
//           </div>

//           {/* --- Mobile Only Action Buttons (Appears after both images) --- */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="flex md:hidden flex-wrap items-center gap-4 mt-8"
//           >
//             <ActionButtons />
//           </motion.div>
//         </div>
//       </Container>
//     </section>
//   );
// };

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Container } from "../../common/Container";
import { SectionHeading } from "../../common/SectionHeading";

export const TreatmentsPreview = () => {
  // Extracted buttons into a helper function to avoid repeating code
  // for desktop and mobile placements.
  const ActionButtons = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Link
        href="/treatments"
        className="
          group
          relative
          overflow-hidden
          inline-flex
          rounded-2xl
          border
          border-[#2F5D50]
          bg-transparent
          px-8
          py-4
          font-medium
          text-[#2F5D50]
          transition-all
          duration-300
          hover:text-white
          hover:shadow-lg
          hover:shadow-[#2F5D50]/20
        "
      >
        {/* Animated Background (Slides up on hover) */}
        <span className="absolute inset-0 translate-y-full bg-[#2F5D50] transition-transform duration-300 ease-out group-hover:translate-y-0" />

        {/* Content Wrapper (Keeps text and icon above the background) */}
        <span className="relative z-10 flex items-center gap-3">
          View All Treatments
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>
  );

  return (
    <section className="py-10 lg:py-20 bg-[#F8F5EF] relative overflow-hidden">
      {/* Decorative blur to blend with the cream background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C9A86A]/5 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />

      <Container>
        <div className="relative z-10">
          {/* --- Section Heading --- */}
          <div className="mb-10 lg:mb-16">
            <SectionHeading
              eyebrow="OUR TREATMENTS"
              title="Traditional Ayurvedic Therapies for Complete Healing"
            />
          </div>

          {/* --- Staggered Content Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 lg:gap-16 w-full max-w-6xl mx-auto items-stretch">
            {/* --- Left Column --- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col h-full"
            >
              {/* Top Image (Landscape) */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/images/treatments/facial-marma.png"
                  alt="Ayurvedic Facial Marma Treatment"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Bottom Content / Desktop Button - Pushed to absolute bottom left */}
              <div className="hidden md:flex flex-col md:items-start ote justify-end mt-auto pt-12">
                <ActionButtons />
              </div>
            </motion.div>

            {/* --- Right Column --- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col h-full md:mt-0"
            >
              {/* Top Content (2 Sentences) */}
              <div className="hidden md:block space-y-4 lg:pl-8 md:mb-12">
                <p className="text-[#4A4A4A] text-sm md:text-base leading-relaxed">
                  Experience deep healing and detoxification with our
                  specialized Ayurvedic treatments. We focus on treating the
                  root cause of ailments to bring lasting vitality and peace.
                </p>
              </div>

              {/* Bottom Image (Aligns horizontally with left button) */}
              <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden shadow-sm mt-auto">
                <Image
                  src="/images/treatments/abyangam.png"
                  alt="Ayurvedic Abhyangam massage treatment"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>

          {/* --- Mobile Only Action Buttons (Appears after both columns) --- */}
          <div className="flex md:hidden justify-start mt-8">
            <ActionButtons />
          </div>
        </div>
      </Container>
    </section>
  );
};
