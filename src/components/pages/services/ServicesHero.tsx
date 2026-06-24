// "use client";

// import { motion } from "framer-motion";
// import { Container } from "@/src/components/common/Container";

// export const ServicesHero = () => {
//   return (
//     <section className="relative bg-[#1F3D35] py-24 lg:py-32 overflow-hidden pt-32">
//       {/* Decorative Elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-[#C9A86A] opacity-5 rounded-full blur-[120px]" />
//         <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-[#2F5D50] opacity-50 rounded-full blur-[100px]" />
//       </div>
      
//       <Container>
//         <div className="max-w-4xl mx-auto text-center relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="flex items-center justify-center gap-4 mb-6"
//           >
//             <div className="w-12 h-[1px] bg-[#C9A86A]" />
//             <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A86A]">
//               Our Services
//             </span>
//             <div className="w-12 h-[1px] bg-[#C9A86A]" />
//           </motion.div>
          
//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight"
//           >
//             Comprehensive <br />
//             <span className="italic text-[#C9A86A]">Ayurvedic Care</span>
//           </motion.h1>

//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="mt-8 text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-light"
//           >
//             Explore our full range of traditional therapies, natural beauty treatments, and holistic wellness programs designed to restore your mind, body, and spirit to its natural state of harmony.
//           </motion.p>
//         </div>
//       </Container>
//     </section>
//   );
// };




// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Container } from "@/src/components/common/Container";

// export const ServicesHero = () => {
//   return (
//     <section className="relative py-24 lg:py-32 overflow-hidden pt-32 min-h-[60vh] flex items-center">
      
//       {/* 1. Background Image & Overlay */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/images/services/service-hero.png" /* <-- Add your image path here */
//           alt="Ayurvedic treatments background"
//           fill
//           className="object-cover"
//           priority 
//         />
//         <div className="absolute inset-0 bg-[#1F3D35]/85" />
//       </div>

//       {/* 2. Decorative Elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
//         <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-[#C9A86A] opacity-20 rounded-full blur-[120px]" />
//         <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-[#2F5D50] opacity-60 rounded-full blur-[100px]" />
//       </div>
      
//       {/* 3. Main Content Container */}
//       <Container className="relative z-10">
//         {/* Removed 'mx-auto' and 'text-center' to allow it to left-align naturally */}
//         <div className="max-w-3xl">
          
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
     
//             className="flex items-center justify-start gap-4 mb-6"
//           >
//             <div className="w-12 h-[1px] bg-[#C9A86A]" />
//             <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A86A]">
//               Our Services
//             </span>
//             {/* Removed the right-side line for a cleaner left-aligned look */}
//           </motion.div>
          
//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight"
//           >
//             Comprehensive <br />
//             <span className="italic text-[#C9A86A]">Ayurvedic Care</span>
//           </motion.h1>

//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
            
//             className="mt-8 text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl font-light"
//           >
//             Explore our full range of traditional therapies, natural beauty treatments, and holistic wellness programs designed to restore your mind, body, and spirit to its natural state of harmony.
//           </motion.p>
          
//         </div>
//       </Container>
//     </section>
//   );
// };



"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/src/components/common/Container";

export const ServicesHero = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden pt-28 md:pt-32 min-h-[60vh] flex items-center">
      
      {/* 1. Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services/service-hero.png" /* <-- Add your image path here */
          alt="Ayurvedic treatments background"
          fill
          className="object-cover"
          priority 
        />
        <div className="absolute inset-0 bg-[#1F3D35]/85" />
      </div>

      {/* 2. Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#C9A86A] opacity-20 rounded-full blur-[100px] md:blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-[#2F5D50] opacity-60 rounded-full blur-[80px] md:blur-[100px]" />
      </div>
      
      {/* 3. Main Content Container */}
      <Container className="relative z-10">
        <div className="max-w-3xl">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-start gap-3 md:gap-4 mb-4 md:mb-6"
          >
            <div className="w-8 md:w-12 h-[1px] bg-[#C9A86A]" />
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A86A]">
              Our Services
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
  
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight break-words"
          >
            Comprehensive <br />
            <span className="italic text-[#C9A86A]">Ayurvedic Care</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          
            className="mt-6 md:mt-8 text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl font-light"
          >
            Explore our full range of traditional therapies, natural beauty treatments, and holistic wellness programs designed to restore your mind, body, and spirit to its natural state of harmony.
          </motion.p>
          
        </div>
      </Container>
    </section>
  );
};