// "use client";

// import { motion } from "framer-motion";

// export const HeroBackground = () => {
//   return (
//     <div className="absolute inset-0 -z-10 overflow-hidden">
      
//       {/* FIXED: Replaced h-[40vh] with h-[40svh]. 
//           This locks the height and stops the zoom/jitter effect when scrolling on mobile! 
//           Also corrected lg:w-4/4 to standard Tailwind lg:w-full */}
//       <div className="absolute top-0 right-0 w-full h-[40svh] sm:h-[50svh] lg:h-full lg:w-full">
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="absolute inset-0 bg-[url('/images/hero/heroimg.png')] bg-no-repeat bg-[position:80%_center] lg:bg-center bg-cover" 
//         />

//         {/* MASK 1: Fades the image out at the bottom so it blends into the cream background */}
//         {/* <div className="absolute inset-0 bg-gradient-to-t from-[#F6F5F0] via-[#F6F5F0]/40 to-transparent" /> */}
        
//         {/* MASK 2: Fades the image out on the left side so the text is clear */}
//         {/* <div className="absolute inset-0 bg-gradient-to-r from-[#F6F5F0] via-[#F6F5F0]/80 to-transparent lg:via-[#F6F5F0]/40" /> */}
//       </div>

//     </div>
//   );
// };






"use client";

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      
      <div className="absolute top-0 right-0 w-full h-[40svh] sm:h-[50svh] lg:h-full lg:w-full">
        {/* FIXED: Changed motion.div to a standard div and removed all animation props */}
        <div 
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