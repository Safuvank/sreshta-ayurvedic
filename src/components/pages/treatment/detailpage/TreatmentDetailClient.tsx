// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion, Variants } from "framer-motion";
// import { ArrowLeft, CheckCircle2 } from "lucide-react";
// import { Container } from "@/src/components/common/Container"; // Adjust path if needed

// // --- ANIMATION VARIANTS ---

// // Variants for body content
// const fadeUpVariants: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { staggerChildren: 0.1 } },
// };

// // Variants for Hero Word-by-Word Animation
// const heroContainerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.05, delayChildren: 0.1 },
//   },
// };

// const heroWordVariants = {
//   hidden: { opacity: 0, y: "100%" },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
//   },
// };

// export const TreatmentDetailClient = ({ treatment }: { treatment: any }) => {
//   return (
//     <main className="min-h-screen bg-[#F8F5EF] pb-24">
//       {/* 1. Full-Width Hero Image Banner */}
//       <section className="relative pt-20 pb-20 lg:pb-20 min-h-[40vh] lg:min-h-[50vh] flex items-end overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src={treatment.image}
//             alt={treatment.title}
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-[#1F3D35]/85" />
//         </div>

//         <Container className="relative z-10 w-full">
//           <motion.div
//             variants={heroContainerVariants}
//             initial="hidden"
//             animate="show"
//           >
//             {/* Back Button */}
//             <div className="overflow-hidden mb-6 md:mb-8">
//               <motion.div variants={heroWordVariants}>
//                 <Link
//                   href="/treatments"
//                   className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest text-[#C9A86A] uppercase hover:text-white transition-colors"
//                 >
//                   <ArrowLeft className="w-4 h-4" />
//                   Back to Treatments
//                 </Link>
//               </motion.div>
//             </div>

//             {/* Title Animation */}
//             <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-6 leading-tight break-words flex flex-wrap gap-x-3 lg:gap-x-4 gap-y-1">
//               {treatment.title.split(" ").map((word: string, index: number) => (
//                 <span key={index} className="block overflow-hidden pb-2">
//                   <motion.span variants={heroWordVariants} className="block">
//                     {word}
//                   </motion.span>
//                 </span>
//               ))}
//             </h1>

//             {/* Subtitle / Description Animation */}
//             <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
//               {treatment.description
//                 .split(" ")
//                 .map((word: string, index: number) => (
//                   <span
//                     key={index}
//                     className="inline-block overflow-hidden align-bottom"
//                   >
//                     <motion.span
//                       variants={heroWordVariants}
//                       className="inline-block"
//                     >
//                       {word}&nbsp;
//                     </motion.span>
//                   </span>
//                 ))}
//             </p>
//           </motion.div>
//         </Container>
//       </section>

//       {/* 2. Content Section */}
//       <Container className="mt-16">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
//           {/* Main Content Column (Descriptions) */}
//           <motion.div
//             className="lg:col-span-7 space-y-8"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//           >
//             <motion.div variants={fadeUpVariants}>
//               <h3 className="text-2xl font-serif text-[#2F5D50] mb-4">
//                 About the Therapy
//               </h3>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 {treatment.longDescription}
//               </p>
//             </motion.div>

//             {/* Special Section for Key Aspects (if they exist) */}
//             {treatment.keyAspects && (
//               <motion.div
//                 variants={fadeUpVariants}
//                 className="pt-6 border-t border-gray-200"
//               >
//                 <h3 className="text-2xl font-serif text-[#2F5D50] mb-6">
//                   Key Aspects
//                 </h3>
//                 <div className="space-y-6">
//                   {treatment.keyAspects.map((aspect: any, idx: number) => (
//                     <div
//                       key={idx}
//                       className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
//                     >
//                       <h4 className="text-xl font-semibold text-[#1F3D35] mb-2">
//                         {aspect.name}
//                       </h4>
//                       <p className="text-gray-600 leading-relaxed">
//                         {aspect.description}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             )}
//           </motion.div>

//           {/* Sidebar Column (Lists: Benefits, Types, Used For) */}
//           <motion.div
//             className="lg:col-span-5 space-y-8"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//           >
//             {/* Helper function to render bullet lists conditionally */}
//             {renderList("Benefits", treatment.benefits)}
//             {renderList("Highly Effective For", treatment.usedFor)}
//             {renderList("Primary Purpose", treatment.purpose)}
//             {renderList("Main Components", treatment.mainComponents)}
//             {renderList("Types Available", treatment.types)}

//             {/* CTA Box */}
//             <motion.div
//               variants={fadeUpVariants}
//               className="bg-[#1F3D35] p-8 rounded-2xl text-center mt-12 shadow-xl"
//             >
//               <h4 className="text-2xl font-serif text-white mb-4">
//                 Book Your Session
//               </h4>
//               <p className="text-white/80 mb-6">
//                 Consult with our Ayurvedic physicians to determine if{" "}
//                 {treatment.title} is right for your body constitution.
//               </p>
//               <button className="w-full bg-[#C9A86A] hover:bg-[#b09054] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
//                 Schedule Consultation
//               </button>
//             </motion.div>
//           </motion.div>
//         </div>
//       </Container>
//     </main>
//   );
// };

// // Helper function to render sidebar lists
// function renderList(title: string, items?: string[]) {
//   if (!items || items.length === 0) return null;

//   return (
//     <motion.div
//       variants={fadeUpVariants}
//       className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
//     >
//       <h3 className="text-2xl font-serif text-[#2F5D50] mb-6">{title}</h3>
//       <ul className="space-y-4">
//         {items.map((item, idx) => (
//           <li key={idx} className="flex items-start gap-3">
//             <CheckCircle2 className="w-6 h-6 text-[#C9A86A] shrink-0 mt-0.5" />
//             <span className="text-gray-700 leading-relaxed">{item}</span>
//           </li>
//         ))}
//       </ul>
//     </motion.div>
//   );
// }





"use client";

import React, { useState } from "react"; // 1. Added useState
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Container } from "@/src/components/common/Container"; // Adjust path if needed
// 2. Import the Modal (Adjust path to where your modal is saved)
import ConsultationModal from "@/src/components/common/ConsultationModal"; 

// --- ANIMATION VARIANTS ---

// Variants for body content
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// Variants for Hero Word-by-Word Animation
const heroContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const heroWordVariants = {
  hidden: { opacity: 0, y: "100%" },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const TreatmentDetailClient = ({ treatment }: { treatment: any }) => {
  // 3. State to control the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F8F5EF] pb-24">
      {/* 1. Full-Width Hero Image Banner */}
      <section className="relative pt-20 pb-20 lg:pb-20 min-h-[40vh] lg:min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={treatment.image}
            alt={treatment.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1F3D35]/85" />
        </div>

        <Container className="relative z-10 w-full">
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Back Button */}
            <div className="overflow-hidden mb-6 md:mb-8">
              <motion.div variants={heroWordVariants}>
                <Link
                  href="/treatments"
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest text-[#C9A86A] uppercase hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Treatments
                </Link>
              </motion.div>
            </div>

            {/* Title Animation */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-6 leading-tight break-words flex flex-wrap gap-x-3 lg:gap-x-4 gap-y-1">
              {treatment.title.split(" ").map((word: string, index: number) => (
                <span key={index} className="block overflow-hidden pb-2">
                  <motion.span variants={heroWordVariants} className="block">
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Subtitle / Description Animation */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
              {treatment.description
                .split(" ")
                .map((word: string, index: number) => (
                  <span
                    key={index}
                    className="inline-block overflow-hidden align-bottom"
                  >
                    <motion.span
                      variants={heroWordVariants}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  </span>
                ))}
            </p>
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
              <button 
                onClick={() => setIsModalOpen(true)} // 4. Add onClick handler
                className="w-full bg-[#C9A86A] hover:bg-[#b09054] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Schedule Consultation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* 5. Render the Modal outside of the layout grid */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
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