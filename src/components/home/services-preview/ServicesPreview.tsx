


// // // "use client";

// // // import Link from "next/link";
// // // import { motion } from "framer-motion";
// // // import { ArrowRight } from "lucide-react";
// // // import { Container } from "../../common/Container";
// // // import { SectionHeading } from "../../common/SectionHeading";
// // // import { ServicePreviewGrid } from "./ServicesPreviewGrid";

// // // export const ServicesPreview = () => {
// // //   return (
// // //     <section className="relative py-10 lg:py-20 bg-white overflow-hidden">
// // //       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F8F5EF] rounded-2xl blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />

// // //       <Container>
// // //         <SectionHeading
// // //           eyebrow="OUR SERVICES"
// // //           title="Comprehensive Care for Mind, Body & Wellness"
// // //         />

// // //         <div className="mt-16 lg:mt-24">
// // //           {/* Pass the limit prop here */}
// // //           <ServicePreviewGrid limit={3} />
// // //         </div>

// // //         {/* New "View All Services" Button */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.6, delay: 0.4 }}
// // //           className="mt-16 text-center"
// // //         >
// // //           <Link
// // //             href="/services"
// // //             className="
// // //               group 
// // //               relative 
// // //               overflow-hidden 
// // //               inline-flex 
// // //               rounded-2xl 
// // //               border 
// // //               border-[#2F5D50] 
// // //               bg-transparent 
// // //               px-8 
// // //               py-4 
// // //               font-medium 
// // //               text-[#2F5D50] 
// // //               transition-all 
// // //               duration-300 
// // //               hover:text-white 
// // //               hover:shadow-lg 
// // //               hover:shadow-[#2F5D50]/20
// // //               "
// // //           >
// // //             {/* Animated Background (Slides up on hover) */}
// // //             <span className="absolute inset-0 translate-y-full bg-[#2F5D50] transition-transform duration-300 ease-out group-hover:translate-y-0" />

// // //             {/* Content Wrapper (Keeps text and icon above the background) */}
// // //             <span className="relative z-10 flex items-center gap-3">
// // //               View All Services
// // //               <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
// // //             </span>
// // //           </Link>
// // //         </motion.div>
// // //       </Container>
// // //     </section>
// // //   );
// // // };




// // "use client";

// // import Link from "next/link";
// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import { Calendar, Brain, Flower2, Utensils } from "lucide-react";
// // import { Container } from "../../common/Container"; // Adjust path as needed

// // // A reusable internal component for the specific static cards in this layout
// // const StaticServiceCard = ({
// //   title,
// //   subtitle,
// //   image,
// //   Icon,
// // }: {
// //   title: string;
// //   subtitle: string;
// //   image: string;
// //   Icon: any;
// // }) => (
// //   <motion.div 
// //     whileHover={{ y: -5 }}
// //     transition={{ duration: 0.3 }}
// //     className="bg-white rounded-[20px] overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] border border-gray-50"
// //   >
// //     <div className="relative h-40 sm:h-48 w-full bg-gray-100">
// //       <Image 
// //         src={image} 
// //         alt={title} 
// //         fill 
// //         className="object-cover" 
// //       />
// //     </div>
// //     <div className="p-4 sm:p-5 flex items-start gap-3 sm:gap-4">
// //       <div className="text-[#2F5D50] shrink-0">
// //         <Icon strokeWidth={1.5} className="w-7 h-7 sm:w-8 sm:h-8" />
// //       </div>
// //       <div>
// //         <h4 className="font-semibold text-gray-900 text-sm sm:text-base leading-tight mb-1">
// //           {title}
// //         </h4>
// //         <p className="text-[11px] sm:text-xs text-gray-500 font-medium">
// //           {subtitle}
// //         </p>
// //       </div>
// //     </div>
// //   </motion.div>
// // );

// // export const ServicesPreview = () => {
// //   return (
// //     <section className="relative py-16 lg:py-24 bg-[#F8F9FA] overflow-hidden">
// //       {/* Subtle Background Glow */}
// //       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[100px] opacity-60 pointer-events-none" />

// //       <Container>
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
// //           {/* LEFT COLUMN: Text Content & Button */}
// //           <motion.div 
// //             initial={{ opacity: 0, x: -30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true, margin: "-100px" }}
// //             transition={{ duration: 0.7 }}
// //             className="flex flex-col items-start max-w-lg"
// //           >
// //             <span className="text-xs font-bold tracking-[0.2em] text-[#2F5D50]/70 uppercase mb-4 block">
// //               Our Services
// //             </span>
            
// //             <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A202C] leading-[1.15] mb-6">
// //               Comprehensive Care for Mind, Body & Wellness
// //             </h2>
            
// //             <p className="text-gray-500 font-light text-base sm:text-lg leading-relaxed mb-8">
// //               We offer personalized therapy, wellness programs, and holistic care to help you live a healthier, happier and more balanced life.
// //             </p>

// //             {/* Decorative Squiggly Line SVG */}
// //             <div className="mb-8 opacity-60 text-[#2F5D50]">
// //               <svg width="220" height="24" viewBox="0 0 250 30" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                 <path d="M2 15C35 5 70 25 105 15C140 5 175 25 210 15C225 10 240 18 248 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
// //                 <path d="M2 28C40 18 80 38 120 28C160 18 190 38 230 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
// //               </svg>
// //             </div>

// //             {/* CTA Button */}
// //             <Link
// //               href="/services"
// //               className="inline-flex items-center justify-center gap-3 bg-[#2F5D50] text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:bg-[#254A40] hover:shadow-lg hover:-translate-y-1"
// //             >
// //               <Calendar className="w-5 h-5" />
// //               Explore Programs
// //             </Link>
// //           </motion.div>

// //           {/* RIGHT COLUMN: Staggered Static Cards Grid */}
// //           <motion.div 
// //             initial={{ opacity: 0, x: 30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true, margin: "-100px" }}
// //             transition={{ duration: 0.7, delay: 0.2 }}
// //             className="grid grid-cols-2 gap-4 sm:gap-6 relative pt-10 lg:pt-0"
// //           >
// //             {/* Decorative Hand-drawn Arrow pointing to the card */}
// //             <div className="hidden lg:block absolute top-10 -left-12 text-[#2F5D50]/60 z-10">
// //               <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                 <path d="M10 75C5 50 15 20 50 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
// //                 <path d="M35 5L50 5L45 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// //               </svg>
// //             </div>

// //             {/* Top Right Card (Spans full width on mobile, 1 col on desktop) */}
// //             <div className="col-span-2 sm:col-span-1 sm:col-start-2">
// //               <StaticServiceCard 
// //                 title="Mental Health Support"
// //                 subtitle="Therapy & Counseling"
// //                 Icon={Brain}
// //                 image="/images/services/ayurveda-thrapies.png" 
// //               />
// //             </div>

// //             {/* Bottom Left Card */}
// //             <div className="col-span-1 sm:col-span-1 mt-0 sm:-mt-12">
// //               <StaticServiceCard 
// //                 title="Wellness Programs"
// //                 subtitle="Yoga, Meditation & More"
// //                 Icon={Flower2}
// //                 image="/images/services/beauty-therapies.png" 
// //               />
// //             </div>

// //             {/* Bottom Right Card */}
// //             <div className="col-span-1 sm:col-span-1">
// //               <StaticServiceCard 
// //                 title="Nutrition Guidance"
// //                 subtitle="Balanced Diet Plans"
// //                 Icon={Utensils}
// //                 image="/images/services/packagess.png" 
// //               />
// //             </div>
// //           </motion.div>

// //         </div>
// //       </Container>
// //     </section>
// //   );
// // };



// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ArrowRight, Sparkles, Leaf } from "lucide-react";
// import { Container } from "../../common/Container";

// export const ServicesPreview = () => {
//   return (
//     <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
//       {/* Background Decorative Element */}
//       <div className="absolute top-0 right-0 w-[40vw] h-[100%] bg-[#F8F5EF] rounded-l-[100px] -z-10 hidden lg:block" />

//       <Container>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
//           {/* LEFT COLUMN: Text Content & Button */}
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="flex flex-col items-start max-w-xl"
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <Leaf className="w-5 h-5 text-[#C9A86A]" />
//               <span className="text-sm font-semibold tracking-[0.2em] text-[#C9A86A] uppercase">
//                 Holistic Services
//               </span>
//             </div>
            
//             <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-[1.15] mb-6">
//               Discover the ancient art of <span className="italic text-[#2F5D50]">self-healing</span>
//             </h2>
            
//             <p className="text-gray-500 font-light text-lg leading-relaxed mb-10">
//               We offer personalized therapy, wellness programs, and holistic care to help you live a healthier, happier, and more balanced life. Experience traditional wisdom tailored to your modern lifestyle.
//             </p>

//             {/* Premium Pill-Shaped Button */}
//             <Link
//               href="/services"
//               className="group relative inline-flex items-center gap-4 bg-[#2F5D50] text-white px-8 py-4 rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_-10px_rgba(47,93,80,0.4)]"
//             >
//               <span className="relative z-10">Explore Our Programs</span>
//               <div className="relative z-10 bg-white/20 p-2 rounded-full transition-transform duration-300 group-hover:translate-x-1">
//                 <ArrowRight className="w-4 h-4" />
//               </div>
              
//               {/* Button Hover Sweep Effect */}
//               <div className="absolute inset-0 bg-[#254A40] translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
//             </Link>
//           </motion.div>

//           {/* RIGHT COLUMN: Editorial Image Collage */}
//           <div className="relative h-[450px] sm:h-[550px] lg:h-[650px] w-full">
            
//             {/* Main Large Background Image */}
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.9, x: 20 }}
//               whileInView={{ opacity: 1, scale: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="absolute top-0 right-0 w-[80%] h-[85%] rounded-[2rem] overflow-hidden shadow-2xl"
//             >
//               <Image 
//                 src="/images/services/ayurveda-thrapies.png" // <-- Main image
//                 alt="Ayurvedic Therapies"
//                 fill
//                 className="object-cover"
//               />
//               <div className="absolute inset-0 bg-[#2F5D50]/10 mix-blend-multiply" />
//             </motion.div>

//             {/* Secondary Overlapping Image (Bottom Left) */}
//             <motion.div 
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="absolute bottom-0 left-0 w-[60%] h-[45%] rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] border-[8px] sm:border-[12px] border-white z-10"
//             >
//               <Image 
//                 src="/images/services/beauty-therapies.png" // <-- Secondary image
//                 alt="Wellness Programs"
//                 fill
//                 className="object-cover"
//               />
//             </motion.div>

//             {/* Floating Glassmorphism Badge */}
//             <motion.div 
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="absolute top-[15%] left-[5%] sm:-left-[5%] bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-white/40"
//             >
//               <div className="bg-[#F8F5EF] p-3 rounded-full text-[#C9A86A]">
//                 <Sparkles className="w-6 h-6" />
//               </div>
//               <div>
//                 <p className="text-sm font-bold text-gray-900">Personalized Care</p>
//                 <p className="text-xs text-gray-500 font-medium">100% Natural Therapies</p>
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };









// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { Container } from "../../common/Container"; // Adjust path as needed

// // A reusable component for the staggered image cards
// const StaggeredImageCard = ({
//   src,
//   title,
//   // subtitle,
//   className,
//   delay,
// }: {
//   src: string;
//   title: string;
//   // subtitle: string;
//   className: string;
//   delay: number;
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true, margin: "-50px" }}
//     transition={{ duration: 0.7, delay, ease: "easeOut" }}
//     className={`absolute rounded-2xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] group ${className}`}
//   >
//     <Image
//       src={src}
//       alt={title}
//       fill
//       className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//     />
//     {/* Elegant gradient overlay for text readability */}
//     <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D35]/90 via-[#1F3D35]/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
    
//     <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
//       <h4 className="text-white font-serif text-lg sm:text-xl md:text-2xl mb-1">
//         {title}
//       </h4>
//       {/* <p className="text-white/80 font-light text-xs sm:text-sm">
//         {subtitle}
//       </p> */}
//     </div>
//   </motion.div>
// );

// export const ServicesPreview = () => {
//   return (
//     <section className="relative py-20 lg:py-32 bg-[#F8F5EF] overflow-hidden">
//       <Container>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
//           {/* LEFT COLUMN: Text Content & Actions */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8 }}
//             className="flex flex-col items-start max-w-lg lg:pr-10"
//           >
//             <span className="text-sm font-semibold tracking-[0.2em] text-[#C9A86A] uppercase mb-5 block">
//               Our Services
//             </span>

//             <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A202C] leading-[1.15] mb-6">
//               Comprehensive Care for Mind, Body & Wellness
//             </h2>

//             <p className="text-gray-600 font-light text-lg leading-relaxed mb-10">
//               Explore our full range of traditional therapies, natural beauty treatments, and holistic wellness programs designed to restore your mind, body, and spirit to its natural state of harmony. 
//             </p>

//             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              
//               {/* Secondary Text Link Updated to Animated Outlined Button */}
//               <Link
//                 href="/services"
//                 className="
//                   group 
//                   relative 
//                   overflow-hidden 
//                   inline-flex 
//                   rounded-2xl 
//                   border 
//                   border-[#2F5D50] 
//                   bg-transparent 
//                   px-8 
//                   py-4 
//                   font-medium 
//                   text-[#2F5D50] 
//                   transition-all 
//                   duration-300 
//                   hover:text-white 
//                   hover:shadow-lg 
//                   hover:shadow-[#2F5D50]/20
//                 "
//               >
//                 {/* Animated Background (Slides up on hover) */}
//                 <span className="absolute inset-0 translate-y-full bg-[#2F5D50] transition-transform duration-300 ease-out group-hover:translate-y-0" />

//                 {/* Content Wrapper (Keeps text and icon above the background) */}
//                 <span className="relative z-10 flex items-center gap-3">
//                   Explore all programs
//                   <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
//                 </span>
//               </Link>

//             </div>
//           </motion.div>

//           {/* RIGHT COLUMN: Staggered Image Collage */}
//           <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] mt-10 lg:mt-0">
            
//             {/* Top Left - Main Image */}
//             <StaggeredImageCard
//               src="/images/services/ayurveda-thrapies.png" 
//               title="Ayurveda Therapies"
//               // subtitle="Deep cellular detox"
//               className="top-0 left-0 w-[55%] h-[60%] sm:h-[65%] z-10"
//               delay={0.2}
//             />

//             {/* Top Right - Smaller Image */}
//             <StaggeredImageCard
//               src="/images/services/beauty-therapies.png" 
//               title="Beauty Therapies"
//               // subtitle="Restore your vitality"
//               className="top-[8%] sm:top-[19%] right-0 w-[40%] h-[40%] sm:h-[45%] z-20"
//               delay={0.4}
//             />

//             {/* Bottom - Wide Image */}
//             <StaggeredImageCard
//               src="/images/services/packagess.png" 
//               title="Packages"
//               // subtitle="Personalized healing plans"
//               className="bottom-0 left-[15%] sm:left-[20%] w-[70%] h-[35%] sm:h-[32%] z-30"
//               delay={0.6}
//             />
            
//             {/* Decorative Element Behind Collage */}
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1 }}
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#C9A86A]/10 rounded-full blur-[60px] -z-10 pointer-events-none"
//             />
//           </div>

//         </div>
//       </Container>
//     </section>
//   );
// };











// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { Container } from "../../common/Container"; // Adjust path as needed

// // A reusable component for the staggered image cards
// const StaggeredImageCard = ({
//   src,
//   title,
//   // subtitle,
//   className,
//   delay,
// }: {
//   src: string;
//   title: string;
//   // subtitle: string;
//   className: string;
//   delay: number;
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true, margin: "-50px" }}
//     transition={{ duration: 0.7, delay, ease: "easeOut" }}
//     className={`absolute rounded-2xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] group ${className}`}
//   >
//     <Image
//       src={src}
//       alt={title}
//       fill
//       className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//     />
//     {/* Elegant gradient overlay for text readability */}
//     <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D35]/90 via-[#1F3D35]/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
    
//     <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
//       <h4 className="text-white font-serif text-lg sm:text-xl md:text-2xl mb-1">
//         {title}
//       </h4>
//       {/* <p className="text-white/80 font-light text-xs sm:text-sm">
//         {subtitle}
//       </p> */}
//     </div>
//   </motion.div>
// );

// export const ServicesPreview = () => {
//   return (
//     <section className="relative py-20 lg:py-32 bg-[#F8F5EF] overflow-hidden">
//       <Container>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
//           {/* LEFT COLUMN: Text Content & Actions */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8 }}
//             className="flex flex-col items-start max-w-lg lg:pr-10"
//           >
//             <span className="text-sm font-semibold tracking-[0.2em] text-[#C9A86A] uppercase mb-5 block">
//               Our Services
//             </span>

//             <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A202C] leading-[1.15] mb-6">
//               Comprehensive Care for Mind, Body & Wellness
//             </h2>

//             <p className="text-gray-600 font-light text-lg leading-relaxed mb-10">
//               Explore our full range of traditional therapies, natural beauty treatments, and holistic wellness programs designed to restore your mind, body, and spirit to its natural state of harmony. 
//             </p>

//             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              
//               {/* Secondary Text Link Updated to Animated Outlined Button */}
//               <Link
//                 href="/services"
//                 className="
//                   group 
//                   relative 
//                   overflow-hidden 
//                   inline-flex 
//                   rounded-2xl 
//                   border 
//                   border-[#2F5D50] 
//                   bg-transparent 
//                   px-8 
//                   py-4 
//                   font-medium 
//                   text-[#2F5D50] 
//                   transition-all 
//                   duration-300 
//                   hover:text-white 
//                   hover:shadow-lg 
//                   hover:shadow-[#2F5D50]/20
//                 "
//               >
//                 {/* Animated Background (Slides up on hover) */}
//                 <span className="absolute inset-0 translate-y-full bg-[#2F5D50] transition-transform duration-300 ease-out group-hover:translate-y-0" />

//                 {/* Content Wrapper (Keeps text and icon above the background) */}
//                 <span className="relative z-10 flex items-center gap-3">
//                   Explore all programs
//                   <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
//                 </span>
//               </Link>

//             </div>
//           </motion.div>

//           {/* RIGHT COLUMN: Staggered Image Collage (Matched to reference) */}
//           <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[600px] mt-10 lg:mt-0">
            
//             {/* Top Left - Main Tall Image */}
//             <StaggeredImageCard
//               src="/images/services/ayurveda-thrapies.png" 
//               title="Ayurveda Therapies"
//               className="top-0 left-0 w-[50%] h-[60%] sm:h-[65%] z-10"
//               delay={0.2}
//             />

//             {/* Center Right - Smaller Image */}
//             <StaggeredImageCard
//               src="/images/services/beauty-therapies.png" 
//               title="Beauty Therapies"
//               className="top-[10%] sm:top-[15%] right-0 w-[45%] h-[45%] sm:h-[50%] z-20"
//               delay={0.4}
//             />

//             {/* Bottom Center - Wide Horizontal Image */}
//             <StaggeredImageCard
//               src="/images/services/packagess.png" 
//               title="Packages"
//               className="bottom-0 left-1/2 -translate-x-1/2 w-[85%] sm:w-[70%] h-[30%] sm:h-[30%] z-30"
//               delay={0.6}
//             />
            
//             {/* Decorative Element Behind Collage */}
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1 }}
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#C9A86A]/10 rounded-full blur-[60px] -z-10 pointer-events-none"
//             />
//           </div>

//         </div>
//       </Container>
//     </section>
//   );
// };










// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { Container } from "../../common/Container"; // Adjust path as needed

// // A reusable component for the staggered image cards
// const StaggeredImageCard = ({
//   src,
//   title,
//   // subtitle,
//   className,
//   delay,
// }: {
//   src: string;
//   title: string;
//   // subtitle: string;
//   className: string;
//   delay: number;
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true, margin: "-50px" }}
//     transition={{ duration: 0.7, delay, ease: "easeOut" }}
//     // Removed hardcoded 'absolute' here so the parent can control 'relative' vs 'absolute' based on screen size
//     className={`rounded-2xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)] group ${className}`}
//   >
//     <Image
//       src={src}
//       alt={title}
//       fill
//       className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//     />
//     {/* Elegant gradient overlay for text readability */}
//     <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D35]/90 via-[#1F3D35]/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
    
//     {/* Adjusted padding and text sizing for mobile screens */}
//     <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6">
//       <h4 className="text-white font-serif text-base sm:text-lg lg:text-2xl mb-1 leading-tight">
//         {title}
//       </h4>
//       {/* <p className="text-white/80 font-light text-[10px] sm:text-sm">
//         {subtitle}
//       </p> */}
//     </div>
//   </motion.div>
// );

// export const ServicesPreview = () => {
//   return (
//     <section className="relative py-16 lg:py-32 bg-[#F8F5EF] overflow-hidden">
//       <Container>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          
//           {/* LEFT COLUMN: Text Content & Actions */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8 }}
//             className="flex flex-col items-start max-w-lg lg:pr-10"
//           >
//             <span className="text-sm font-semibold tracking-[0.2em] text-[#C9A86A] uppercase mb-4 lg:mb-5 block">
//               Our Services
//             </span>

//             <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A202C] leading-[1.15] mb-5 lg:mb-6">
//               Comprehensive Care for Mind, Body & Wellness
//             </h2>

//             <p className="text-gray-600 font-light text-base lg:text-lg leading-relaxed mb-8 lg:mb-10">
//               Explore our full range of traditional therapies, natural beauty treatments, and holistic wellness programs designed to restore your mind, body, and spirit to its natural state of harmony. 
//             </p>

//             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              
//               {/* Animated Outlined Button */}
//               <Link
//                 href="/services"
//                 className="
//                   group 
//                   relative 
//                   overflow-hidden 
//                   inline-flex 
//                   rounded-2xl 
//                   border 
//                   border-[#2F5D50] 
//                   bg-transparent 
//                   px-8 
//                   py-4 
//                   font-medium 
//                   text-[#2F5D50] 
//                   transition-all 
//                   duration-300 
//                   hover:text-white 
//                   hover:shadow-lg 
//                   hover:shadow-[#2F5D50]/20
//                 "
//               >
//                 {/* Animated Background (Slides up on hover) */}
//                 <span className="absolute inset-0 translate-y-full bg-[#2F5D50] transition-transform duration-300 ease-out group-hover:translate-y-0" />

//                 {/* Content Wrapper (Keeps text and icon above the background) */}
//                 <span className="relative z-10 flex items-center gap-3">
//                   Explore all programs
//                   <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
//                 </span>
//               </Link>

//             </div>
//           </motion.div>

//           {/* RIGHT COLUMN: Responsive Image Collage */}
//           {/* On mobile: CSS Grid (2 columns). On desktop (lg): Block with Absolute Overlaps */}
//           <div className="relative w-full h-auto lg:h-[600px] mt-6 lg:mt-0 grid grid-cols-2 gap-3 sm:gap-4 lg:block">
            
//             {/* 1. Top Image (Full width on mobile, Top-Left on desktop) */}
//             <StaggeredImageCard
//               src="/images/services/ayurveda-thrapies.png" 
//               title="Ayurveda Therapies"
//               className="relative col-span-2 h-[220px] sm:h-[300px] lg:absolute lg:top-0 lg:left-0 lg:w-[50%] lg:h-[65%] z-10"
//               delay={0.2}
//             />

//             {/* 2. Bottom-Left Image (Half width on mobile, Center-Right on desktop) */}
//             <StaggeredImageCard
//               src="/images/services/beauty-therapies.png" 
//               title="Beauty Therapies"
//               className="relative col-span-1 h-[150px] sm:h-[220px] lg:absolute lg:top-[15%] lg:right-0 lg:w-[45%] lg:h-[50%] z-20"
//               delay={0.4}
//             />

//             {/* 3. Bottom-Right Image (Half width on mobile, Bottom-Center on desktop) */}
//             <StaggeredImageCard
//               src="/images/services/packagess.png" 
//               title="Packages"
//               className="relative col-span-1 h-[150px] sm:h-[220px] lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:w-[70%] lg:h-[30%] z-30"
//               delay={0.6}
//             />
            
//             {/* Decorative Element Behind Collage (Hidden on mobile to keep grid clean) */}
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1 }}
//               className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#C9A86A]/10 rounded-full blur-[60px] -z-10 pointer-events-none"
//             />
//           </div>

//         </div>
//       </Container>
//     </section>
//   );
// };



"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "../../common/Container"; // Adjust path as needed

// A reusable component for the staggered image cards
const StaggeredImageCard = ({
  src,
  title,
  // subtitle,
  className,
  delay,
}: {
  src: string;
  title: string;
  // subtitle: string;
  className: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={`rounded-2xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)] group ${className}`}
  >
    <Image
      src={src}
      alt={title}
      fill
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D35]/90 via-[#1F3D35]/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
    
    <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6">
      <h4 className="text-white font-serif text-base sm:text-lg lg:text-2xl mb-1 leading-tight">
        {title}
      </h4>
    </div>
  </motion.div>
);

export const ServicesPreview = () => {
  return (
    <section className="relative py-16 lg:py-32 bg-[#F8F5EF] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Text Content & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start max-w-lg lg:pr-10"
          >
            <span className="text-sm font-semibold tracking-[0.2em] text-[#C9A86A] uppercase mb-4 lg:mb-5 block">
              Our Services
            </span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A202C] leading-[1.15] mb-5 lg:mb-6">
              Comprehensive Care for Mind, Body & Wellness
            </h2>

            <p className="text-gray-600 font-light text-base lg:text-lg leading-relaxed mb-8 lg:mb-10">
              Explore our full range of traditional therapies, natural beauty treatments, and holistic wellness programs designed to restore your mind, body, and spirit to its natural state of harmony. 
            </p>

            {/* DESKTOP BUTTON: Hidden on mobile, visible on lg screens and up */}
            <div className="hidden lg:flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              <Link
                href="/services"
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
                  Explore all programs
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Responsive Image Collage */}
          <div className="relative w-full h-auto lg:h-[600px] mt-2 lg:mt-0 grid grid-cols-2 gap-3 sm:gap-4 lg:block">
            
            {/* 1. Top Image */}
            <StaggeredImageCard
              src="/images/services/ayurveda-thrapies.png" 
              title="Ayurveda Therapies"
              className="relative col-span-2 h-[220px] sm:h-[300px] lg:absolute lg:top-0 lg:left-0 lg:w-[50%] lg:h-[65%] z-10"
              delay={0.2}
            />

            {/* 2. Bottom-Left Image */}
            <StaggeredImageCard
              src="/images/services/beauty-therapies.png" 
              title="Beauty Therapies"
              className="relative col-span-1 h-[150px] sm:h-[220px] lg:absolute lg:top-[15%] lg:right-0 lg:w-[45%] lg:h-[50%] z-20"
              delay={0.4}
            />

            {/* 3. Bottom-Right Image */}
            <StaggeredImageCard
              src="/images/services/packagess.png" 
              title="Packages"
              className="relative col-span-1 h-[150px] sm:h-[220px] lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:w-[70%] lg:h-[30%] z-30"
              delay={0.6}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#C9A86A]/10 rounded-full blur-[60px] -z-10 pointer-events-none"
            />
          </div>

          {/* MOBILE BUTTON: Hidden on desktop, shows up after the images on mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex lg:hidden justify-center w-full mt-4"
          >
            <Link
              href="/services"
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
                Explore all programs
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};