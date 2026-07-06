// components/gallery/VideoGallery.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Container } from "../../common/Container";
import { SectionHeading } from "../../common/SectionHeading";

const videos = [
  {
    id: 1,
    title: "The Panchakarma Journey",
    thumbnail: "/images/gallery/video-thumb-1.jpg", // Add your actual image path
  },
  {
    id: 2,
    title: "Patient Testimonials",
    thumbnail: "/images/gallery/video-thumb-2.jpg",
  },
  {
    id: 3,
    title: "A Day at Sreshta",
    thumbnail: "/images/gallery/video-thumb-3.jpg",
  },
];

export const VideoGallery = () => {
  return (
    <section className="bg-[#121A16] py-20 lg:py-32 overflow-hidden border-t border-white/5">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              eyebrow="Watch & Listen"
              title="Video Experiences"
              isDark={true}
              align="left" 
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative cursor-pointer"
            >
              {/* Thumbnail Container */}
              <div className="relative h-[250px] sm:h-[300px] w-full rounded-2xl overflow-hidden bg-gray-900">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40 group-hover:bg-[#C9A86A] group-hover:border-[#C9A86A] transition-all duration-500 transform group-hover:scale-110 shadow-xl">
                    <Play className="w-6 h-6 text-white ml-1 fill-white" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-medium text-white group-hover:text-[#C9A86A] transition-colors duration-300">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

// // components/gallery/VideoGallery.tsx
// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Play } from "lucide-react";
// import { Container } from "../../common/Container";

// const videos = [
//   { title: "The Panchakarma Journey", thumbnail: "/images/gallery/video-1.jpg" },
//   { title: "Hear from our Patients", thumbnail: "/images/gallery/video-2.jpg" },
//   { title: "A Walkthrough of Sreshta", thumbnail: "/images/gallery/video-3.jpg" },
// ];

// export const VideoGallery = () => {
//   return (
//     <section className="bg-white py-20 lg:py-32 overflow-hidden">
//       <Container>
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="text-xs font-semibold tracking-[0.2em] text-[#C9A86A] uppercase mb-4 block">
//               Watch & Listen
//             </span>
//             <h2 className="font-serif text-4xl md:text-5xl text-[#2F5D50]">
//               Video Experiences
//             </h2>
//           </motion.div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {videos.map((video, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.15 }}
//               className="group relative cursor-pointer"
//             >
//               <div className="relative h-[250px] sm:h-[320px] w-full rounded-2xl overflow-hidden bg-gray-900 shadow-lg">
//                 <Image
//                   src={video.thumbnail}
//                   alt={video.title}
//                   fill
//                   className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
//                 />
//                 <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />

//                 {/* Play Button */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40 group-hover:bg-[#C9A86A] group-hover:border-[#C9A86A] transition-all duration-500 transform group-hover:scale-110 shadow-xl">
//                     <Play className="w-6 h-6 text-white ml-1 fill-white" />
//                   </div>
//                 </div>
//               </div>

//               <h3 className="mt-5 text-xl font-serif text-[#1A202C] group-hover:text-[#2F5D50] transition-colors duration-300">
//                 {video.title}
//               </h3>
//             </motion.div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };
