// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { Container } from "../../common/Container";
// import { SectionHeading } from "../../common/SectionHeading";
// import { OurCoreGrid } from "./OurCoreGrid";

// export const OurCoreSection = () => {
//   return (
//     <section className="relative py-16 lg:py-24 bg-[#FEFCF8] overflow-hidden">
//       <Container>
//         <SectionHeading
//           eyebrow="OUR CORE"
//           title="The Foundation of Our Ayurvedic Excellence"
//         />

//         <div className="mt-10 md:mt-16 lg:mt-20">
//           {/* Renders 4 items initially with hybrid carousel/grid */}
//           <OurCoreGrid limit={4} />
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="mt-12 md:mt-16 text-center"
//         >
//           {/* Animated Slide-Up Button */}
//           <Link
//             href="/our-core"
//             className="
//               group 
//               relative 
//               overflow-hidden 
//               inline-flex 
//               rounded-2xl 
//               border 
//               border-[#2F5D50] 
//               bg-transparent 
//               px-8 
//               py-4 
//               font-medium 
//               text-[#2F5D50] 
//               transition-all 
//               duration-300 
//               hover:text-white 
//               hover:shadow-lg 
//               hover:shadow-[#2F5D50]/20
//             "
//           >
//             {/* Animated Background (Slides up on hover) */}
//             <span className="absolute inset-0 translate-y-full bg-[#2F5D50] transition-transform duration-300 ease-out group-hover:translate-y-0" />

//             {/* Content Wrapper (Keeps text and icon above the background) */}
//             <span className="relative z-10 flex items-center gap-3">
//               View Our all Core
//               <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
//             </span>
//           </Link>
//         </motion.div>
//       </Container>
//     </section>
//   );
// };













"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "../../common/Container"; // Adjust path as needed
import { OurCoreGrid } from "./OurCoreGrid";

export const OurCoreSection = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-[#FCFAF5] overflow-hidden">
      <Container>
        {/* Centered Header matching the reference */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-[#C9A86A] uppercase mb-4 block">
            OUR CORE
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1A202C] mb-6">
            The Foundation of Our Ayurvedic Excellence
          </h2>
          {/* <p className="text-gray-600 font-light text-base lg:text-lg leading-relaxed">
            Whether you are seeking relief from specific health conditions, or need a meaningful reset to your life, our core therapies can support your journey.
          </p> */}
        </motion.div>

        {/* The Grid / Mobile Carousel */}
        <div>
          <OurCoreGrid limit={4} />
        </div>

        {/* Bottom Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-16 text-center"
        >
          <Link
            href="/our-core"
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
            <span className="absolute inset-0 translate-y-full bg-[#2F5D50] transition-transform duration-300 ease-out group-hover:translate-y-0" />
            <span className="relative z-10 flex items-center gap-3">
              View All Core Therapies
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};