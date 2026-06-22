// export const HeroBackground = () => {
//   return (
//     <div className="absolute inset-0 -z-10 bg-white overflow-hidden">
//       {/* MOBILE ONLY BACKGROUND IMAGE */}
//       {/* Replace '/images/your-mobile-bg.jpg' with your actual image path */}
//       {/* md:hidden ensures it disappears on tablets and desktops */}
//       <div className="absolute inset-0 bg-[url('/images/hero/mobile-view-bg.png')] bg-cover bg-center md:hidden" />

//       {/* Premium Ultra-Soft Light Glows */}
//       {/* (You might want to add md:block to these if you want to hide the glows on mobile) */}
//       <div className="absolute top-[-10%] left-[-10%] w-150 h-150 bg-[#1F3D35]/5 rounded-full blur-[130px]" />
//       <div className="absolute bottom-[-10%] right-[-5%] w-125 h-125 bg-[#C9A86A]/10 rounded-full blur-[150px]" />

//       {/* Subtle organic pattern overlay */}
//       <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] opacity-[0.015] pointer-events-none" />
//     </div>
//   );
// };






// "use client";

// import { motion } from "framer-motion";

// export const HeroBackground = () => {
//   return (
//     <div className="absolute inset-0 -z-10 bg-white overflow-hidden">
//       {/* FULL RESPONSIVE BACKGROUND IMAGE */}
//       <motion.div 
//         initial={{ opacity: 0, scale: 1.05 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         // FIXED: h-[30vh] on mobile/tablet, lg:h-full on desktop. 
//         // bg-right ensures the photo portion stays visible on small screens!
//         className="absolute top-0 left-0 w-full h-[40vh] lg:h-full bg-[url('/images/hero/heroimg.png')] bg-cover bg-right lg:bg-center" 
//       />

//       {/* Subtle overlay to ensure text is readable on the left side of desktop */}
//       <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-transparent pointer-events-none lg:w-2/3" />
//     </div>
//   );
// };



// "use client";

// import { motion } from "framer-motion";

// export const HeroBackground = () => {
//   return (
//     <div className="absolute inset-0 -z-10 bg-white overflow-hidden">
//       {/* FULL RESPONSIVE BACKGROUND IMAGE */}
//       <motion.div 
//         initial={{ opacity: 0, scale: 1.05 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         // FIXED: Changed h-[30vh] to h-full so it always properly covers the space behind the text!
//         className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero/heroimg.png')] bg-cover bg-right lg:bg-center" 
//       />

//       {/* Subtle overlay to ensure text is readable on top of the image */}
//       <div className="absolute inset-0 bg-white/40 md:bg-transparent pointer-events-none" />
//       <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent pointer-events-none lg:w-2/3" />
//     </div>
//   );
// };


"use client";

import { motion } from "framer-motion";

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 bg-[#F6F5F0] overflow-hidden">
      
      {/* FIXED: Changed h-full to h-[40vh] for mobile, and added lg:h-full for desktop */}
      <div className="absolute top-0 right-0 w-full h-[40vh] sm:h-[50vh] lg:h-full lg:w-3/4">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          // Note: Changed back to bg-cover here since we are now strictly limiting the container height
          className="absolute inset-0 bg-[url('/images/hero/heroimg.png')] bg-no-repeat bg-[position:80%_center] lg:bg-center bg-cover" 
        />

        {/* MASK 1: Fades the image out at the bottom so it blends into the cream background */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#F6F5F0] via-[#F6F5F0]/40 to-transparent" /> */}
        
        {/* MASK 2: Fades the image out on the left side so the text is clear */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#F6F5F0] via-[#F6F5F0]/80 to-transparent lg:via-[#F6F5F0]/40" /> */}
      </div>

    </div>
  );
};