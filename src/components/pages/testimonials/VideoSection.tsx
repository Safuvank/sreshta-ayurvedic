// "use client";

// import { useState, useEffect } from "react";
// import { createPortal } from "react-dom";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, ChevronLeft, ChevronRight, X } from "lucide-react";
// import { Container } from "@/src/components/common/Container";

// interface VideoCarouselSectionProps {
//   videos: any[]; // Replace 'any' with your video object type
// }

// export const VideoCarouselSection = ({ videos }: VideoCarouselSectionProps) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeVideoId, setActiveVideoId] = useState("");
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // Reset to the first video whenever the passed videos array changes (e.g., on filter change)
//   useEffect(() => {
//     setActiveIndex(0);
//   }, [videos]);

//   const handleNext = () => {
//     if (videos.length <= 1) return;
//     setActiveIndex((prev) => (prev + 1) % videos.length);
//   };

//   const handlePrev = () => {
//     if (videos.length <= 1) return;
//     setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
//   };

//   const openVideo = (youtubeId: string) => {
//     setActiveVideoId(youtubeId);
//     setIsModalOpen(true);
//     document.body.style.overflow = "hidden";
//   };

//   const closeVideo = () => {
//     setIsModalOpen(false);
//     setActiveVideoId("");
//     document.body.style.overflow = "unset";
//   };

//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") closeVideo();
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, []);

//   // --- NEW: If there are no videos, don't render the section at all ---
//   if (!videos || videos.length === 0) {
//     return null;
//   }

//   return (
//     <>
//       <section
//         id="video-stories"
//         className="py-20 lg:py-28 bg-[#F9F6F0] overflow-hidden relative"
//       >
//         <Container>
//           {/* Section Header */}
//           <div className="text-center mb-10">
//             <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A86A] mb-3 block">
//               Featured Stories
//             </span>
//             <h2 className="text-4xl md:text-5xl font-serif text-gray-900 font-normal">
//               Stories of successful recovery
//             </h2>
//           </div>

//           {/* Carousel Track */}
//           <div className="relative h-[300px] md:h-[450px] flex items-center justify-center w-full max-w-6xl mx-auto">
//             {videos.map((video, index) => {
//               let relativeIndex = (index - activeIndex) % videos.length;
//               if (relativeIndex < 0) relativeIndex += videos.length;
//               if (relativeIndex > Math.floor(videos.length / 2)) {
//                 relativeIndex -= videos.length;
//               }

//               let scale = 1;
//               let x = 0;
//               let opacity = 1;
//               let zIndex = 10;
//               let filter = "brightness(100%)";

//               if (relativeIndex === 0) {
//                 scale = 1;
//                 x = 0;
//                 opacity = 1;
//                 zIndex = 20;
//               } else if (relativeIndex === -1) {
//                 scale = 0.75;
//                 x = -220;
//                 opacity = 0.8;
//                 zIndex = 15;
//                 filter = "brightness(70%)";
//               } else if (relativeIndex === 1) {
//                 scale = 0.75;
//                 x = 220;
//                 opacity = 0.8;
//                 zIndex = 15;
//                 filter = "brightness(70%)";
//               } else if (relativeIndex === -2) {
//                 scale = 0.55;
//                 x = -380;
//                 opacity = 0.5;
//                 zIndex = 10;
//                 filter = "brightness(40%)";
//               } else if (relativeIndex === 2) {
//                 scale = 0.55;
//                 x = 380;
//                 opacity = 0.5;
//                 zIndex = 10;
//                 filter = "brightness(40%)";
//               } else {
//                 opacity = 0;
//                 scale = 0;
//                 zIndex = 0;
//               }

//               if (typeof window !== "undefined" && window.innerWidth < 768) {
//                 x = x * 0.4;
//               }

//               const isActive = relativeIndex === 0;

//               return (
//                 <motion.div
//                   key={`${video.id}-${index}`} // Fixes the React duplicate key error!
//                   animate={{
//                     scale,
//                     x,
//                     opacity,
//                     zIndex,
//                     filter,
//                   }}
//                   transition={{ duration: 0.5, ease: "easeInOut" }}
//                   className="absolute w-[240px] h-[240px] md:w-[350px] md:h-[350px] rounded-3xl overflow-hidden cursor-pointer shadow-xl"
//                   onClick={() => {
//                     if (isActive) {
//                       openVideo(video.youtubeId);
//                     } else if (relativeIndex > 0) {
//                       handleNext();
//                     } else if (relativeIndex < 0) {
//                       handlePrev();
//                     }
//                   }}
//                 >
//                   <Image
//                     src={video.thumbnail}
//                     alt={video.name}
//                     fill
//                     className="object-cover"
//                   />

//                   {isActive && (
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: 0.3 }}
//                       className="absolute inset-0 flex items-center justify-center bg-black/10"
//                     >
//                       <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full transition-transform duration-300 hover:scale-110">
//                         <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-2" />
//                       </div>
//                     </motion.div>
//                   )}
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Navigation & Active Item Info */}
//           <div className="flex items-center justify-center mt-12 gap-8 md:gap-16">
//             <button
//               onClick={handlePrev}
//               disabled={videos.length <= 1}
//               className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
//                 videos.length <= 1
//                   ? "border-gray-200 text-gray-300 cursor-not-allowed"
//                   : "border-gray-400 text-gray-600 hover:border-[#2F5D50] hover:text-[#2F5D50]"
//               }`}
//               aria-label="Previous story"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>

//             <div className="text-center min-w-[200px]">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeIndex}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <h3 className="text-xl md:text-2xl font-serif text-gray-900 mb-1">
//                     {videos[activeIndex]?.name}
//                   </h3>
//                   <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
//                     {videos[activeIndex]?.location}
//                   </p>
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             <button
//               onClick={handleNext}
//               disabled={videos.length <= 1}
//               className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
//                 videos.length <= 1
//                   ? "border-gray-200 text-gray-300 cursor-not-allowed"
//                   : "border-gray-400 text-gray-600 hover:border-[#2F5D50] hover:text-[#2F5D50]"
//               }`}
//               aria-label="Next story"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         </Container>
//       </section>

//       {/* YouTube Modal Popup */}
//       {mounted &&
//         createPortal(
//           <AnimatePresence>
//             {isModalOpen && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-4 md:p-10"
//                 onClick={closeVideo}
//               >
//                 <button
//                   onClick={closeVideo}
//                   className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white transition-colors"
//                   aria-label="Close video"
//                 >
//                   <X className="w-10 h-10" />
//                 </button>

//                 <motion.div
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   exit={{ scale: 0.9, opacity: 0 }}
//                   transition={{ type: "spring", damping: 25, stiffness: 300 }}
//                   className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   <iframe
//                     src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
//                     title="YouTube video player"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                     className="w-full h-full border-0"
//                   ></iframe>
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>,
//           document.body,
//         )}
//     </>
//   );
// };









"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Container } from "@/src/components/common/Container";

interface Video {
  id: string | number;
  youtubeId: string;
  thumbnail: string;
  name: string;
  location: string;
}

interface VideoCarouselSectionProps {
  videos: Video[];
}

export const VideoCarouselSection = ({ videos }: VideoCarouselSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset to the first video whenever the passed videos array changes
  useEffect(() => {
    setActiveIndex(0);
  }, [videos]);

  const handleNext = () => {
    if (!videos || videos.length <= 1) return;
    setActiveIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    if (!videos || videos.length <= 1) return;
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const openVideo = (youtubeId: string) => {
    setActiveVideoId(youtubeId);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeVideo = () => {
    setIsModalOpen(false);
    setActiveVideoId("");
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeVideo();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Return null if no videos exist to prevent rendering an empty section
  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <>
      <section
        id="video-stories"
        className="py-20 lg:py-28 bg-[#F9F6F0] overflow-hidden relative"
      >
        <Container>
          <div className="text-center mb-10">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A86A] mb-3 block">
              Featured Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 font-normal">
              Stories of successful recovery
            </h2>
          </div>

          <div className="relative h-[300px] md:h-[450px] flex items-center justify-center w-full max-w-6xl mx-auto">
            {videos.map((video, index) => {
              let relativeIndex = (index - activeIndex) % videos.length;
              if (relativeIndex < 0) relativeIndex += videos.length;
              if (relativeIndex > Math.floor(videos.length / 2)) {
                relativeIndex -= videos.length;
              }

              // Calculate animations based on position
              const isActive = relativeIndex === 0;
              const isSide = Math.abs(relativeIndex) === 1;
              const isFarSide = Math.abs(relativeIndex) === 2;

              let scale = isActive ? 1 : isSide ? 0.75 : isFarSide ? 0.55 : 0;
              let x = isActive ? 0 : isSide ? (relativeIndex > 0 ? 220 : -220) : (relativeIndex > 0 ? 380 : -380);
              let opacity = isActive ? 1 : isSide ? 0.8 : isFarSide ? 0.5 : 0;
              let zIndex = isActive ? 20 : isSide ? 15 : 10;
              let filter = isActive ? "brightness(100%)" : isSide ? "brightness(70%)" : "brightness(40%)";

              if (typeof window !== "undefined" && window.innerWidth < 768) {
                x *= 0.4;
              }

              return (
                <motion.div
                  key={video.id}
                  animate={{ scale, x, opacity, zIndex, filter }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute w-[240px] h-[240px] md:w-[350px] md:h-[350px] rounded-3xl overflow-hidden cursor-pointer shadow-xl"
                  onClick={() => {
                    if (isActive) openVideo(video.youtubeId);
                    else if (relativeIndex > 0) handleNext();
                    else handlePrev();
                  }}
                >
                  <Image src={video.thumbnail} alt={video.name} fill className="object-cover" />
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center bg-black/10"
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full">
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-2" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="flex items-center justify-center mt-12 gap-8 md:gap-16">
            <button onClick={handlePrev} className="w-10 h-10 rounded-full border border-gray-400 text-gray-600 hover:border-[#2F5D50] hover:text-[#2F5D50] flex items-center justify-center">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="text-center min-w-[200px]">
              <AnimatePresence mode="wait">
                <motion.div key={activeIndex} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <h3 className="text-xl md:text-2xl font-serif text-gray-900 mb-1">{videos[activeIndex].name}</h3>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">{videos[activeIndex].location}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <button onClick={handleNext} className="w-10 h-10 rounded-full border border-gray-400 text-gray-600 hover:border-[#2F5D50] hover:text-[#2F5D50] flex items-center justify-center">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </Container>
      </section>

      {mounted && createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-4" onClick={closeVideo}>
              <button onClick={closeVideo} className="absolute top-6 right-6 text-white/70 hover:text-white"><X className="w-10 h-10" /></button>
              <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <iframe src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`} className="w-full h-full" allowFullScreen allow="autoplay" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};