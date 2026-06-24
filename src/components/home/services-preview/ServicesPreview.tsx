// import { Container } from "../../common/Container";
// import { SectionHeading } from "../../common/SectionHeading";
// import { ServicePreviewGrid } from "./ServicesPreviewGrid";

// export const ServicesPreview = () => {
//   return (
//     <section className="relative py-10 lg:py-20 bg-white overflow-hidden">
//       {/* Decorative Background Element (Optional - adds premium feel) */}
//       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F8F5EF] rounded-xl blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />

//       <Container>
//         <SectionHeading
//           eyebrow="Our Expertise"
//           title="Holistic Ayurvedic Solutions"
//         />

//         <div className="mt-16 lg:mt-24">
//           <ServicePreviewGrid />
//         </div>
//       </Container>
//     </section>
//   );
// };




// import Link from "next/link";
// import { Container } from "../../common/Container";
// import { SectionHeading } from "../../common/SectionHeading";
// import { ServicePreviewGrid } from "./ServicesPreviewGrid";

// export const ServicesPreview = () => {
//   return (
//     <section className="relative py-10 lg:py-20 bg-white overflow-hidden">
//       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F8F5EF] rounded-xl blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />

//       <Container>
//         <SectionHeading
//           eyebrow="Our Expertise"
//           title="Holistic Ayurvedic Solutions"
//         />

//         <div className="mt-16 lg:mt-24">
//           {/* Pass the limit prop here */}
//           <ServicePreviewGrid limit={3} />
//         </div>

//         {/* New "View All Services" Button */}
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="mt-16 text-center"
//           >
//             <Link
//               href="/services"
//               className="
//                 group 
//                 relative 
//                 overflow-hidden 
//                 inline-flex 
//                 rounded-xl 
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
//                 View All Services
//                 <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
//               </span>
//             </Link>
//           </motion.div>

        
//       </Container>
//     </section>
//   );
// };

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "../../common/Container";
import { SectionHeading } from "../../common/SectionHeading";
import { ServicePreviewGrid } from "./ServicesPreviewGrid";

export const ServicesPreview = () => {
  return (
    <section className="relative py-10 lg:py-20 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F8F5EF] rounded-xl blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />

      <Container>
        <SectionHeading
          eyebrow="Our Expertise"
          title="Holistic Ayurvedic Solutions"
        />

        <div className="mt-16 lg:mt-24">
          {/* Pass the limit prop here */}
          <ServicePreviewGrid limit={3} />
        </div>

        {/* New "View All Services" Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            href="/services"
            className="
              group 
              relative 
              overflow-hidden 
              inline-flex 
              rounded-xl 
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
              View All Services
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};