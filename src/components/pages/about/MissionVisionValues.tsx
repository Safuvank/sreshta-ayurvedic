// "use client";

// import { motion } from "framer-motion";
// import { Target, Eye, Heart } from "lucide-react";
// import { Container } from "../../common/Container";

// const items = [
//   {
//     title: "Our Mission",
//     icon: Target,
//     description:
//       "Sreshta Multi-Specialty Ayurveda Hospital represents the Ayurvedic Way of Advanced Care. Our facility is dedicated to the dual objectives of maintaining positive health and providing effective treatment through scientifically grounded Ayurvedic protocols.",
//   },
//   {
//     title: "Our Vision",
//     icon: Eye,
//     description:
//       "To become the world's most trusted and accessible destination for pure Ayurvedic healing and lifelong preventive healthcare.",
//   },
//   {
//     title: "Our Values",
//     icon: Heart,
//     description:
//       "Compassion, Authenticity, Medical Excellence, and a relentless commitment to Patient-Centered Care in everything we do.",
//   },
// ];

// export const MissionVisionValues = () => {
//   return (
//     <section className="py-24 lg:py-32 bg-[#1F3D35]">
//       <Container>
//         <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
//           {items.map((item, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: idx * 0.15 }}
//               className="group bg-white/5 p-10 rounded-2xl border border-white/10 transition-all duration-500 hover:bg-white/10"
//             >
//               {/* Icon Container */}
//               <div className="w-14 h-14 mb-8 flex items-center justify-center text-[#C9A86A] bg-white/10 rounded-xl transition-all duration-500">
//                 <item.icon className="w-7 h-7" />
//               </div>

//               {/* Text content in White */}
//               <h3 className="font-serif text-2xl text-white mb-4 tracking-tight">
//                 {item.title}
//               </h3>
//               <p className="text-gray-200 font-light leading-relaxed transition-colors duration-300">
//                 {item.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };











"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import { Container } from "../../common/Container";

export const MissionVisionValues = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#1F3D35]">
      <Container>
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-serif text-white tracking-tight"
          >
            Our Guiding <span className="text-[#C9A86A] italic">Philosophy</span>
          </motion.h2>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* 1. Mission Feature Card (Spans 7 columns on Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 relative flex flex-col justify-between bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 lg:p-14 overflow-hidden group hover:bg-white/[0.05] transition-colors duration-500"
          >
            {/* Watermark Icon */}
            <Target 
              className="absolute -right-12 -top-12 w-80 h-80 text-white/5 opacity-50 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-1000 ease-out pointer-events-none" 
              strokeWidth={1}
            />
            
            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="w-16 h-16 bg-[#C9A86A]/10 border border-[#C9A86A]/20 rounded-2xl flex items-center justify-center mb-8 lg:mb-12">
                <Target className="w-8 h-8 text-[#C9A86A]" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl lg:text-5xl font-serif mb-6 text-white tracking-tight">
                Our Mission
              </h3>
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed font-light max-w-xl">
                Sreshta Multi-Specialty Ayurveda Hospital represents the Ayurvedic Way of Advanced Care. Our facility is dedicated to the dual objectives of maintaining positive health and providing effective treatment through scientifically grounded Ayurvedic protocols.
              </p>
            </div>
          </motion.div>

          {/* Right Side Stack (Spans 5 columns on Desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            
            {/* 2. Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="flex-1 bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 lg:p-10 hover:bg-white/[0.05] transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl lg:text-3xl font-serif text-white tracking-tight">
                  Our Vision
                </h3>
                <div className="w-12 h-12 bg-[#C9A86A]/10 border border-[#C9A86A]/20 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-[#C9A86A]" strokeWidth={1.5} />
                </div>
              </div>
              <p className="text-white/70 font-light leading-relaxed text-lg">
                To become the world's most trusted and accessible destination for pure Ayurvedic healing and lifelong preventive healthcare.
              </p>
            </motion.div>

            {/* 3. Values Highlight Card (Solid Accent Background) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="flex-1 bg-[#C9A86A] rounded-[2rem] p-8 lg:p-10 hover:bg-[#E3C994] transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl lg:text-3xl font-serif text-[#1F3D35] tracking-tight">
                  Our Values
                </h3>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#1F3D35]" strokeWidth={1.5} />
                </div>
              </div>
              <p className="text-[#1F3D35]/80 font-medium leading-relaxed text-lg">
                Compassion, Authenticity, Medical Excellence, and a relentless commitment to Patient-Centered Care in everything we do.
              </p>
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  );
};