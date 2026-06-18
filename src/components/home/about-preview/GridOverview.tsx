// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Sparkles, SunDim, Leaf, ShieldCheck } from "lucide-react";

// interface GridOverviewProps {
//   containerVariants?: any;
//   itemVariants: any;
// }

// export const GridOverview = ({ itemVariants }: GridOverviewProps) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[repeat(8,minmax(90px,1fr))] gap-4 lg:gap-6 w-full max-w-6xl mx-auto auto-rows-[250px] md:auto-rows-auto">
      
//       {/* BLOCK 1: Top Left Image */}
//       <motion.div variants={itemVariants} className="group relative w-full h-full col-span-1 md:row-span-2 rounded-[2rem] overflow-hidden min-h-[200px] md:min-h-0 border border-gray-100">
//         <Image
//           src="https://images.unsplash.com/photo-1545289414-1c3cb1c06238?q=80&w=1000&auto=format&fit=crop"
//           alt="Healing Environment"
//           fill
//           className="object-cover transition-transform duration-700 group-hover:scale-105"
//         />
//       </motion.div>

//       {/* BLOCK 2: Top Middle - Dark Emerald */}
//       <motion.div variants={itemVariants} className="col-span-1 md:row-span-3 bg-[#1F3D35] text-white p-6 lg:p-8 rounded-[2rem] flex flex-col justify-between shadow-lg relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-32 h-32 bg-[#2F5D50] rounded-full blur-[50px] opacity-50" />
//         <div className="relative z-10">
//           <div className="flex items-center gap-2 mb-4 text-[#C9A86A]">
//             <Sparkles className="w-5 h-5" />
//             <span className="font-bold tracking-widest text-xs uppercase">Sreshta</span>
//           </div>
//           <h2 className="font-serif text-3xl lg:text-4xl leading-tight">
//             Advanced Care for a Brighter Tomorrow
//           </h2>
//         </div>
//         <div className="mt-8 relative z-10">
//           <p className="uppercase text-xs tracking-widest font-bold text-gray-300 border-t border-white/20 pt-4">
//             Authentic Ayurveda
//           </p>
//         </div>
//       </motion.div>

//       {/* BLOCK 3: Top Right Image with Floating Element */}
//       <motion.div variants={itemVariants} className="group relative w-full h-full col-span-1 md:row-span-3 rounded-[2rem] overflow-hidden min-h-[250px] md:min-h-0 border border-gray-100">
//         <Image
//           src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop"
//           alt="Ayurvedic Care"
//           fill
//           className="object-cover transition-transform duration-700 group-hover:scale-105"
//         />
//         <div className="absolute top-6 right-6">
//           <div className="w-14 h-14 bg-white/90 backdrop-blur-md text-[#1F3D35] rounded-full flex items-center justify-center font-bold shadow-xl transition-transform duration-500 hover:rotate-12 hover:bg-[#C9A86A] hover:text-white">
//             <Leaf className="w-6 h-6" />
//           </div>
//         </div>
//       </motion.div>

//       {/* BLOCK 4: Middle Left - Cream Accent */}
//       <motion.div variants={itemVariants} className="col-span-1 md:row-span-3 bg-[#F8F5EF] rounded-[2rem] flex flex-col items-center justify-center p-6 min-h-[250px] md:min-h-0 border border-gray-200">
//         <div className="text-[#2F5D50] flex flex-col items-center">
//           <SunDim className="w-16 h-16 stroke-[1.5]" />
//         </div>
//       </motion.div>

//       {/* BLOCK 5: Middle Wide - Image & Text Split */}
//       <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 md:row-span-2 bg-white rounded-[2rem] overflow-hidden relative flex flex-col md:flex-row shadow-sm border border-gray-100 min-h-[250px] md:min-h-0">
//         <div className="flex flex-col justify-center p-8 w-full md:w-1/2 z-10">
//           <div className="flex items-center gap-2 mb-3 text-[#C9A86A]">
//             <Sparkles className="w-4 h-4" />
//             <span className="font-bold tracking-widest text-xs uppercase">Wellness</span>
//           </div>
//           <p className="font-serif text-2xl lg:text-3xl text-[#1F3D35] leading-snug">
//             The future of health is powered by nature.
//           </p>
//         </div>
//         <div className="relative w-full md:w-1/2 h-full min-h-[150px]">
//           <Image
//             src="https://images.unsplash.com/photo-1582560475093-ba66accbc424?q=80&w=1000&auto=format&fit=crop"
//             alt="Facility"
//             fill
//             className="object-cover"
//           />
//           {/* Soft fade to blend image into the white background on desktop */}
//           <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white via-white/40 to-transparent" />
//         </div>
//       </motion.div>

//       {/* BLOCK 6: Bottom Left - Soft Green Accent */}
//       <motion.div variants={itemVariants} className="col-span-1 md:row-span-2 bg-[#2F5D50] text-white p-6 lg:p-8 rounded-[2rem] flex flex-col justify-between shadow-lg">
//         <h3 className="font-serif text-2xl lg:text-3xl leading-tight">
//           Join the evolution of holistic wellness.
//         </h3>
//         <div className="flex justify-between items-end mt-8 border-t border-white/20 pt-4">
//           <p className="text-[10px] uppercase tracking-widest text-gray-300">
//             A Better Life
//           </p>
//           <Leaf className="w-5 h-5 text-[#C9A86A]" />
//         </div>
//       </motion.div>

//       {/* BLOCK 7: Bottom Middle - Minimalist Dark */}
//       <motion.div variants={itemVariants} className="col-span-1 md:row-span-2 bg-gray-900 text-white p-6 lg:p-8 rounded-[2rem] flex flex-col justify-between shadow-lg">
//         <h3 className="font-serif text-xl lg:text-2xl leading-tight text-gray-200">
//           Turn your life into a sustainable health source.
//         </h3>
//         <div className="flex justify-between items-end mt-8 border-t border-gray-700 pt-4">
//           <p className="text-[10px] uppercase tracking-widest text-gray-400">
//             Root Cause Healing
//           </p>
//           <ShieldCheck className="w-5 h-5 text-gray-500" />
//         </div>
//       </motion.div>

//       {/* BLOCK 8: Bottom Right - Cinematic Tall Image */}
//       <motion.div variants={itemVariants} className="group relative w-full h-full col-span-1 md:row-span-3 rounded-[2rem] overflow-hidden min-h-[300px] md:min-h-0 shadow-lg bg-black">
//         <Image
//           src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop"
//           alt="Mobile Interaction"
//           fill
//           className="object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-50"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D35]/90 via-black/20 to-transparent" />
//         <div className="absolute bottom-6 left-6 right-6">
//           <h3 className="text-white font-serif text-3xl lg:text-4xl mb-2">
//             Sreshta
//           </h3>
//           <p className="text-[#C9A86A] text-xs uppercase tracking-[0.2em] font-semibold">
//             Take Control
//           </p>
//         </div>
//       </motion.div>

//       {/* BLOCK 9: Bottom Wide - Gold Accent Banner */}
//       <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 md:row-span-1 bg-[#C9A86A] text-white rounded-[2rem] flex items-center p-6 shadow-md">
//         <div className="flex items-center justify-center w-full gap-4">
//           <ShieldCheck className="w-8 h-8 stroke-[2]" />
//           <span className="font-serif text-2xl md:text-3xl tracking-wide">
//             Quality Assured
//           </span>
//         </div>
//       </motion.div>

//     </div>
//   );
// };