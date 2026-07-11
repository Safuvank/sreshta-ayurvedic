// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Play } from "lucide-react";
// import { Container } from "../../common/Container";
// import { SectionHeading } from "../../common/SectionHeading";
// import { videos } from "@/src/data/gallery";

// export const VideoGallery = () => {
//   return (
//     <section className="bg-[#121A16] py-20 lg:py-32 overflow-hidden border-t border-white/5">
//       <Container>
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <SectionHeading
//               eyebrow="Watch & Listen"
//               title="Video Experiences"
//               isDark={true}
//               align="left"
//             />
//           </motion.div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {videos.map((video, index) => (
//             <motion.div
//               key={video.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.15 }}
//               className="group relative cursor-pointer"
//             >
//               {/* Thumbnail Container */}
//               <div className="relative h-[250px] sm:h-[300px] w-full rounded-2xl overflow-hidden bg-gray-900">
//                 <Image
//                   src={video.thumbnail}
//                   alt={video.title}
//                   fill
//                   className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
//                 />
//                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

//                 {/* Play Button */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40 group-hover:bg-[#C9A86A] group-hover:border-[#C9A86A] transition-all duration-500 transform group-hover:scale-110 shadow-xl">
//                     <Play className="w-6 h-6 text-white ml-1 fill-white" />
//                   </div>
//                 </div>
//               </div>

//               {/* Title */}
//               <h3 className="mt-5 text-lg font-medium text-white group-hover:text-[#C9A86A] transition-colors duration-300">
//                 {video.title}
//               </h3>
//             </motion.div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };



"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { Container } from "../../common/Container";
import { SectionHeading } from "../../common/SectionHeading";
import { videos } from "@/src/data/gallery";

export const VideoGallery = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Optional: Prevent scrolling on the background body when the modal is open
  useEffect(() => {
    if (activeVideoId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeVideoId]);

  return (
    <>
      <section className="bg-[#121A16] py-15 lg:py-16 overflow-hidden border-t border-white/5 relative z-10 mb-10">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                // eyebrow="Watch & Listen"
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
                onClick={() => setActiveVideoId(video.youtubeId)}
              >
                {/* Thumbnail Container */}
                <div className="relative h-[250px] sm:h-[300px] w-full rounded-2xl overflow-hidden bg-gray-900 shadow-lg">
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

      {/* Video Modal Overlay - Changed to z-[9999] */}
      <AnimatePresence>
        {activeVideoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10"
            onClick={() => setActiveVideoId(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white transition-colors z-[10000]"
              onClick={() => setActiveVideoId(null)}
            >
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            {/* Video iFrame Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-[10000]"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};