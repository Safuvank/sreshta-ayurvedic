// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Container } from "../../common/Container";
// import { trustMetrics } from "@/src/data/about";
// import { SectionHeading } from "../../common/SectionHeading";

// export const OrganizationOverview = () => {
//   return (
//     <section className="py-12 bg-white">
//       <Container>
//         <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
//           {/* Left: Featured Image (Reference image style) */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="lg:col-span-5 relative h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-sm"
//           >
//             <Image
//               src="/images/about/sreshta.png"
//               alt="Sreshta Ayurvedic Hospital"
//               fill
//               className="object-cover"
//             />
//           </motion.div>

//           {/* Right: Content & Structured Data */}
//           <div className="lg:col-span-7">
//             <SectionHeading title="A Legacy of Authentic Care" align="left" />

//             <p className="text-gray-600 leading-relaxed mb-10 font-light">
//               Sreshta Multi specialty Ayurveda clinic is a premium ayurveda
//               centre where the traditional system of ayurveda is in confluence
//               with modern medical techniques, without compromising the
//               authenticity of the Science.
//             </p>

//             {/* Structured Stats Grid (Like property investment metrics) */}
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6 border-t border-gray-200 pt-8">
//               {trustMetrics.map((stat, idx) => (
//                 <div key={idx}>
//                   <p className="text-xs uppercase tracking-[0.1em] text-gray-700 font-semibold mb-2">
//                     {stat.label}
//                   </p>
//                   <h4 className="text-2xl md:text-3xl font-semibold text-[#2F5D50]">
//                     {stat.value}
//                   </h4>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };




// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Container } from "../../common/Container";
// import { trustMetrics } from "@/src/data/about";
// import { SectionHeading } from "../../common/SectionHeading";

// export const OrganizationOverview = () => {
//   return (
//     <section className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
//       {/* Subtle Ambient Glow for depth */}
//       <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#C9A86A]/10 rounded-full blur-[120px] pointer-events-none" />

//       <Container className="relative z-10">
//         <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
//           {/* --- LEFT: Editorial Image Presentation --- */}
//           <div className="lg:w-1/2 w-full relative">
//             {/* Decorative Offset Gold Frame */}
//             <motion.div 
//               initial={{ opacity: 0, x: -20, y: 20 }}
//               whileInView={{ opacity: 1, x: 0, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="absolute -inset-4 lg:-inset-6 border border-[#C9A86A]/40 rounded-[2.5rem] md:rounded-[3rem] z-0 hidden md:block translate-x-4 translate-y-4"
//             />

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="relative aspect-[4/5] w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#1F3D35]/10 z-10"
//             >
//               {/* Subtle dark gradient overlay at the bottom for premium contrast */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D35]/30 via-transparent to-transparent z-10 pointer-events-none" />
              
//               <Image
//                 src="/images/about/sreshta.png"
//                 alt="Sreshta Ayurvedic Hospital"
//                 fill
//                 className="object-cover transition-transform duration-1000 hover:scale-105"
//               />
//             </motion.div>
//           </div>

//           {/* --- RIGHT: Content & Premium Stats Grid --- */}
//           <div className="lg:w-1/2 w-full">
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <SectionHeading 
//                 eyebrow="Who We Are"
//                 title={
//                   <>
//                     A Legacy of <br />
//                     <span className="text-[#C9A86A] italic">Authentic Care</span>
//                   </>
//                 }
//                 align="left" 
//                 isDark={false} 
//               />

//               <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-light mt-8 mb-12">
//                 Sreshta Multi specialty Ayurveda clinic is a premium ayurveda
//                 centre where the traditional system of ayurveda is in confluence
//                 with modern medical techniques, without compromising the
//                 authenticity of the Science.
//               </p>
//             </motion.div>

//             {/* Premium Interactive Stats Grid (Bento Style) */}
//             <div className="grid grid-cols-2 gap-4 sm:gap-6">
//               {trustMetrics.map((stat, idx) => (
//                 <motion.div 
//                   key={idx}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: 0.3 + (idx * 0.1) }}
//                   className="group bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#C9A86A]/10 transition-all duration-500 hover:-translate-y-1"
//                 >
//                   <h4 className="text-4xl md:text-5xl font-serif text-[#1F3D35] mb-3 group-hover:text-[#C9A86A] transition-colors duration-300">
//                     {stat.value}
//                   </h4>
//                   <p className="text-xs md:text-sm uppercase tracking-widest text-gray-500 font-semibold group-hover:text-gray-900 transition-colors duration-300">
//                     {stat.label}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };



"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { trustMetrics } from "@/src/data/about";
import { SectionHeading } from "../../common/SectionHeading";

export const OrganizationOverview = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#F9F9F8] overflow-hidden">
      <Container>
        {/* CSS Grid is used to place elements in the same row so they can overlap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* --- RIGHT: Organic Arch Image (Spans from col 6 to 12) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-start-6 lg:col-end-13 lg:row-start-1 relative h-[500px] lg:h-[700px] w-full z-0 group"
          >
            <div className="absolute inset-0 rounded-t-full rounded-b-[2.5rem] overflow-hidden border-4 border-white shadow-2xl shadow-gray-200">
              {/* Subtle image overlay */}
              <div className="absolute inset-0 bg-[#1F3D35]/10 z-10 transition-opacity duration-700 group-hover:opacity-0 pointer-events-none" />
              <Image
                src="/images/about/sreshta.png"
                alt="Sreshta Ayurvedic Hospital"
                fill
                className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                priority
              />
            </div>
            
            {/* Decorative organic leaf/dot accent */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#C9A86A]/20 rounded-full blur-2xl pointer-events-none" />
          </motion.div>

          {/* --- LEFT: Overlapping Content Card (Spans from col 1 to 7) --- */}
          {/* Note the -mt-24 on mobile to pull it up over the image, and lg:mt-0 on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:col-start-1 lg:col-end-8 lg:row-start-1 relative z-10 -mt-24 lg:mt-0"
          >
            <div className="bg-white rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-[0_20px_60px_rgba(31,61,53,0.08)] border border-gray-100 backdrop-blur-xl">
              
              <SectionHeading 
                eyebrow="Who We Are"
                title="A Legacy of Authentic Care"
                align="left" 
                isDark={false} 
              />

              <p className="text-lg text-gray-600 leading-relaxed font-light mt-6 lg:mt-8 mb-12 lg:pr-8">
                Sreshta Multi-specialty Ayurveda clinic is a premium wellness
                centre where the traditional system of Ayurveda is in perfect confluence
                with modern medical techniques, without ever compromising the
                deep-rooted authenticity of the Science.
              </p>

              {/* Ultra-minimal horizontal metrics */}
              <div className="pt-8 border-t border-gray-100 flex flex-wrap gap-y-8">
                {trustMetrics.map((stat, idx) => (
                  <div 
                    key={idx}
                    className={`flex-1 min-w-[120px] ${
                      idx !== trustMetrics.length - 1 ? "border-r border-gray-100 pr-6 mr-6" : ""
                    }`}
                  >
                    <motion.h4 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + (idx * 0.1) }}
                      className="text-3xl lg:text-4xl font-serif text-[#1F3D35] mb-2"
                    >
                      {stat.value}
                    </motion.h4>
                    <p className="text-[11px] lg:text-xs uppercase tracking-[0.15em] text-gray-400 font-semibold leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};