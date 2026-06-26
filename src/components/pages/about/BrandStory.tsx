// // "use client";

// // import { motion } from "framer-motion";
// // import { Container } from "../../common/Container";

// // export const BrandStory = () => {
// //   return (
// //     <section className="py-20 lg:py-32 bg-[#F8F5EF] relative">
// //       <Container>
// //         <motion.div 
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, margin: "-100px" }}
// //           transition={{ duration: 0.8 }}
// //           className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-xl shadow-gray-100/50"
// //         >
// //           <div className="text-center mb-12">
// //             <span className="text-[#C9A86A] font-serif text-6xl leading-none">“</span>
// //             <h2 className="font-serif text-3xl md:text-5xl text-gray-900 mt-4">Our Journey</h2>
// //           </div>

// //           <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
// //             <p>
// //               Sreshta was born from a deep-seated desire to bring the unadulterated, profound healing power of Kerala Ayurveda to the modern world. Over two decades ago, our founders envisioned a space where ancient wisdom and compassionate care could converge seamlessly.
// //             </p>
// //             <p>
// //               What began as a modest clinic has blossomed into a comprehensive hospital, trusted by thousands. Through every phase of our growth, we have steadfastly refused to compromise on the authenticity of our treatments, the purity of our medicines, or the dedication of our Vaidyas (physicians).
// //             </p>
// //             <p>
// //               Today, our patient-first philosophy remains our guiding light. We believe that true healing requires time, customized attention, and a deep understanding of each individual's unique constitution. At Sreshta, you are not just a patient; you are a partner in your own wellness journey.
// //             </p>
// //           </div>
// //         </motion.div>
// //       </Container>
// //     </section>
// //   );
// // };

// "use client";

// import { motion } from "framer-motion";
// import { Container } from "../../common/Container";

// export const BrandStory = () => {
//   return (
//     <section className="py-20 lg:py-32 bg-[#F8F5EF] relative">
//       <Container>
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-[0_20px_60px_-15px_rgba(47,93,80,0.05)]"
//         >
//           <div className="text-center mb-12">
//             <span className="text-[#C9A86A] font-serif text-8xl leading-[0] block mb-6">“</span>
//             <h2 className="font-serif text-4xl md:text-5xl text-[#2F5D50]">Our Journey</h2>
//           </div>

//           <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light text-center md:text-left">
//             <p>
//               Sreshta was born from a deep-seated desire to bring the unadulterated, profound healing power of Kerala Ayurveda to the modern world. Over two decades ago, our founders envisioned a space where ancient wisdom and compassionate care could converge seamlessly.
//             </p>
//             <p>
//               What began as a modest clinic has blossomed into a comprehensive hospital, trusted by thousands. Through every phase of our growth, we have steadfastly refused to compromise on the authenticity of our treatments, the purity of our medicines, or the dedication of our Vaidyas (physicians).
//             </p>
//             <p>
//               Today, our patient-first philosophy remains our guiding light. We believe that true healing requires time, customized attention, and a deep understanding of each individual's unique constitution. At Sreshta, you are not just a patient; you are a partner in your own wellness journey.
//             </p>
//           </div>
//         </motion.div>
//       </Container>
//     </section>
//   );
// };






// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { Container } from "../../common/Container";

// const storyParagraphs = [
//   "Sreshta was born from a deep-seated desire to bring the unadulterated, profound healing power of Kerala Ayurveda to the modern world. Over two decades ago, our founders envisioned a space where ancient wisdom and compassionate care could converge seamlessly.",
//   "What began as a modest clinic has blossomed into a comprehensive hospital, trusted by thousands. Through every phase of our growth, we have steadfastly refused to compromise on the authenticity of our treatments, the purity of our medicines, or the dedication of our Vaidyas (physicians).",
//   "Today, our patient-first philosophy remains our guiding light. We believe that true healing requires time, customized attention, and a deep understanding of each individual's unique constitution. At Sreshta, you are not just a patient; you are a partner in your own wellness journey."
// ];

// export const BrandStory = () => {
//   return (
//     <section className="py-20 lg:py-32 bg-white overflow-hidden">
//       <Container>
//         <div className="relative w-full">
//           {/* Solid Green Background Offset to the Right */}
//           {/* Using your brand's dark green. We stretch it way off the right side of the screen so it always covers the edge */}
//           <div className="absolute top-0 bottom-0 right-[-10vw] w-[95%] lg:w-[80%] bg-[#4F6C5B] rounded-l-[2.5rem] lg:rounded-l-[4rem]" />

//           <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 py-12 lg:py-20">
            
//             {/* Left Side: Overlapping Image */}
//             <motion.div 
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.8 }}
//               className="w-full lg:w-5/12 shrink-0 px-4 sm:px-8 lg:px-0"
//             >
//               <div className="relative w-full aspect-[3/4] max-h-[600px] lg:max-h-[700px] rounded-[2rem] overflow-hidden shadow-2xl">
//                 <Image
//                   src="/images/about/sreshta.png" // Place your Sreshta photo here
//                   alt="Sreshta Journey"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </motion.div>

//             {/* Right Side: Content */}
//             <motion.div 
//               initial={{ opacity: 0, x: 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="w-full lg:w-7/12 pr-6 sm:pr-12 lg:pr-20 text-white"
//             >
//               <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-10 lg:mb-14 text-white">
//                 Our Journey
//               </h2>

//               {/* Formatted to match the reference image's list style with arrows */}
//               <div className="space-y-8 lg:space-y-10 font-light text-sm sm:text-base lg:text-lg text-white/90">
//                 {storyParagraphs.map((text, idx) => (
//                   <div key={idx} className="flex items-start gap-4 lg:gap-6">
//                     {/* The Arrow Icon */}
//                     <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 shrink-0 mt-1 text-white/80" />
//                     {/* The Text */}
//                     <p className="leading-relaxed">
//                       {text}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

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

export const BrandStory = () => {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <Container>
        <div className="relative w-full">
          {/* Solid Green Background Offset to the Right */}
          {/* Using your brand's dark green. We stretch it way off the right side of the screen so it always covers the edge */}
          <div className="absolute top-0 bottom-0 right-[-10vw] w-[95%] lg:w-[80%] bg-[#4F6C5B] rounded-l-[2.5rem] lg:rounded-l-[4rem]" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 py-12 lg:py-20">
            
            {/* Left Side: Overlapping Image */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-5/12 shrink-0 px-4 sm:px-8 lg:px-0"
            >
              <div className="relative w-full aspect-[3/4] max-h-[600px] lg:max-h-[700px] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/about/sreshta.png" // Place your Sreshta photo here
                  alt="Sreshta Journey"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Right Side: Content */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-7/12 pr-6 sm:pr-12 lg:pr-20 text-white"
            >
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 lg:mb-10 text-white">
                Our Journey
              </h2>

              {/* Standard paragraph text, formatted elegantly */}
              <div className="space-y-6 font-light text-base sm:text-lg text-white/90 leading-relaxed">
                <p>
                  Sreshta was born from a deep-seated desire to bring the unadulterated, profound healing power of Kerala Ayurveda to the modern world. Over two decades ago, our founders envisioned a space where ancient wisdom and compassionate care could converge seamlessly.
                </p>
                <p>
                  What began as a modest clinic has blossomed into a comprehensive hospital, trusted by thousands. Through every phase of our growth, we have steadfastly refused to compromise on the authenticity of our treatments, the purity of our medicines, or the dedication of our Vaidyas (physicians).
                </p>
                <p>
                  Today, our patient-first philosophy remains our guiding light. We believe that true healing requires time, customized attention, and a deep understanding of each individual's unique constitution. At Sreshta, you are not just a patient; you are a partner in your own wellness journey.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  );
};