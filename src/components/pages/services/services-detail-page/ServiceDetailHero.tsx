// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowLeft } from "lucide-react";
// import { Container } from "@/src/components/common/Container";

// // Define the shape of your service prop
// interface ServiceProps {
//   title: string;
//   description: string;
//   longDescription?: string;
//   image: string;
//   benefits?: string[];
// }

// export const ServiceDetailHero = ({ service }: { service: ServiceProps }) => {
//   return (
//     <section className="pt-8 pb-20 bg-white">
//       <Container>
//         {/* Back Button */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Link
//             href="/services"
//             className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-[#C9A86A] uppercase hover:text-[#2F5D50] transition-colors mb-12"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Back to Services
//           </Link>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-16 items-start">
          
//           {/* Left Column: Image */}
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="relative h-[400px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden bg-[#F8F5EF] shadow-lg"
//           >
//             <Image
//               src={service.image}
//               alt={service.title}
//               fill
//               className="object-cover"
//               priority
//             />
//           </motion.div>

//           {/* Right Column: Content */}
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="flex flex-col justify-center h-full"
//           >
//             <h1 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6">
//               {service.title}
//             </h1>

//             <p className="text-xl text-gray-500 leading-relaxed mb-10">
//               {service.longDescription || service.description}
//             </p>

//             {/* Render Benefits if they exist */}
//             {service.benefits && (
//               <div className="mb-12">
//                 <h3 className="text-sm font-bold tracking-widest uppercase text-[#2F5D50] mb-6">
//                   Key Benefits
//                 </h3>
//                 <ul className="space-y-4">
//                   {service.benefits.map((benefit, index) => (
//                     <motion.li
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
//                       key={index}
//                       className="flex items-center gap-4 text-gray-600"
//                     >
//                       <div className="w-2 h-2 rounded-full bg-[#C9A86A]" />
//                       {benefit}
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {/* CTA Button */}
//             <motion.button 
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="bg-[#2F5D50] text-white px-10 py-5 rounded-2xl w-fit font-medium hover:bg-[#1a3830] transition-all shadow-lg shadow-[#2F5D50]/20"
//             >
//               Book this treatment
//             </motion.button>
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
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Container } from "@/src/components/common/Container";

interface ServiceProps {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  benefits?: string[];
}

export const ServiceDetailHero = ({ service }: { service: ServiceProps }) => {
  return (
    <>
      {/* 1. Full-Width Hero Image Banner */}
      <section className="relative pt-20 pb-20 lg:pb-20 min-h-[50vh] flex items-end overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          {/* Deep green overlay to make text readable */}
          <div className="absolute inset-0 bg-[#1F3D35]/85" />
        </div>

        <Container className="relative z-10 w-full">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-[#C9A86A] uppercase hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
          </motion.div>

          {/* Service Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6"
          >
            {service.title}
          </motion.h1>
          
          {/* Short description directly in the hero */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl font-light"
          >
            {service.description}
          </motion.p>
        </Container>
      </section>

      {/* 2. Detailed Content Section Below the Hero */}
      <section className="py-12 lg:py-12 bg-white">
        <Container>
          <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-start">
            
            {/* Left Side: Long Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h2 className="text-3xl font-serif text-gray-900 mb-6">About this Therapy</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {service.longDescription || "Experience deep healing and holistic wellness tailored to your unique needs."}
              </p>
            </motion.div>

            {/* Right Side: Benefits & CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-[#F8F5EF] p-8 md:p-10 rounded-[2.5rem] border border-gray-100"
            >
              {service.benefits && (
                <div className="mb-10">
                  <h3 className="text-sm font-bold tracking-widest uppercase text-[#2F5D50] mb-6">
                    Key Benefits
                  </h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-[#C9A86A] shrink-0 mt-0.5" />
                        <span className="leading-snug">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Button inside the card */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#2F5D50] text-white px-8 py-4 rounded-2xl font-medium hover:bg-[#1a3830] transition-colors shadow-lg shadow-[#2F5D50]/20"
              >
                Book this treatment
              </motion.button>
            </motion.div>

          </div>
        </Container>
      </section>
    </>
  );
};