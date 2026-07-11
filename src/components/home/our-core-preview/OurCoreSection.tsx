// "use client";

// import Link from "next/link";

// import { motion } from "framer-motion";

// import { ArrowRight } from "lucide-react";

// import { Container } from "../../common/Container";

// import { OurCoreGrid } from "./OurCoreGrid";

// import { SectionHeading } from "../../common/SectionHeading";

// export const OurCoreSection = () => {
//   return (
//     <section className="relative py-16 lg:py-24 bg-[#2a4538] overflow-hidden">
//       <Container>
//         {/* Centered Header using reusable component with isDark flag */}

//         <div className="mb-12 lg:mb-20">
//           <SectionHeading
//             eyebrow="Where We Support"
//             title="Balance and Healing"
//             // description="Whether you are seeking relief from specific health conditions, or need a meaningful reset to your life, our core therapies can support your journey."

//             align="center"
//             isDark={true}
//           />
//         </div>

//         {/* The Grid / Mobile Carousel */}

//         <div>
//           <OurCoreGrid limit={4} isDarkTheme={true} />
//         </div>

//         {/* Bottom Action Button */}

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="mt-12 md:mt-16 text-center"
//         >
//           <Link
//             href="/our-core"
//             className="

//               group
//               relative
//               overflow-hidden
//               inline-flex
//               rounded-2xl

//               border

//               border-[#C9A86A]

//               bg-transparent

//               px-8

//               py-4

//               font-medium

//               text-[#C9A86A]

//               transition-all

//               duration-300

//               hover:text-[#2a4538]

//               hover:shadow-lg

//               hover:shadow-[#C9A86A]/20

//             "
//           >
//             <span className="absolute inset-0 translate-y-full bg-[#C9A86A] transition-transform duration-300 ease-out group-hover:translate-y-0" />

//             <span className="relative z-10 flex items-center gap-3">
//               View All Core Therapies
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
import { Container } from "../../common/Container";
import { OurCoreGrid } from "./OurCoreGrid";
import { SectionHeading } from "../../common/SectionHeading";

export const OurCoreSection = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-[#2a4538] overflow-hidden">
      <Container>
        {/* Centered Header */}
        <div className="mb-12 lg:mb-20">
          <SectionHeading
            eyebrow="Where We Support"
            title="Balance and Healing"
            align="center"
            isDark={true}
          />
        </div>

        {/* Unified Responsive Grid */}
        <div>
          <OurCoreGrid limit={4} isDarkTheme={true} />
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
              group relative overflow-hidden inline-flex rounded-xl
              border border-[#C9A86A] bg-transparent
              px-8 py-4 font-medium text-[#C9A86A]
              transition-all duration-300
              hover:text-[#2a4538] hover:shadow-lg hover:shadow-[#C9A86A]/20
            "
          >
            <span className="absolute inset-0 translate-y-full bg-[#C9A86A] transition-transform duration-300 ease-out group-hover:translate-y-0" />
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