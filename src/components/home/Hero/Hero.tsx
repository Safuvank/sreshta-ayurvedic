// "use client";

// import { motion, Variants } from "framer-motion";
// import { HeroBackground } from "./HeroBackground";
// import { HeroContent } from "./HeroContent";
// import { HeroActions } from "./HeroActions";
// import { HeroImageSlider } from "./HeroImageSlider";
// import { Container } from "../../common/Container"; // Keep or adjust to match path

// export default function Hero() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.12, delayChildren: 0.2 },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 35 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1.0] },
//     },
//   };

//   return (
//     <section className="relative min-h-screen w-full flex items-center overflow-hidden pt-32 pb-16">
//       <HeroBackground />

//       <Container>
//         <motion.div
//           className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {/* Notice the added md:items-center and lg:items-start */}
//           <div className="lg:col-span-6 flex flex-col items-start md:items-center lg:items-start text-left z-10 order-1">
//             <HeroContent itemVariants={itemVariants} />
//             <HeroActions itemVariants={itemVariants} />
//           </div>

//           {/* Right Column Area: High-end interactive image carousel track */}
//           {/* FIXED: Changed to "invisible lg:visible" to hide the slider but keep its empty space on mobile */}
//           <div className="invisible lg:visible md:visible lg:col-span-6 w-full z-10 order-2">
//             <HeroImageSlider itemVariants={itemVariants} />
//           </div>
//         </motion.div>
//       </Container>
//     </section>
//   );
// }



// "use client";

// import { motion, Variants } from "framer-motion";
// import { HeroBackground } from "./HeroBackground";
// import { HeroContent } from "./HeroContent";
// import { HeroActions } from "./HeroActions";
// import { Container } from "../../common/Container";

// export default function Hero() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.12, delayChildren: 0.2 },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 35 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1.0] },
//     },
//   };

//   return (
//     // FIXED: Added pt-[32vh] on mobile so the text starts right after the 30vh image. 
//     // On desktop, it goes back to lg:pt-32 and lg:min-h-screen.
//     <section className="relative w-full flex items-center overflow-hidden pt-[32vh] pb-12 lg:pt-32 lg:pb-16 lg:min-h-screen">
//       <HeroBackground />

//       <Container>
//         <motion.div
//           className="w-full lg:w-1/2 flex flex-col items-start text-left z-10"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <HeroContent itemVariants={itemVariants} />
//           <HeroActions itemVariants={itemVariants} />
//         </motion.div>
//       </Container>
//     </section>
//   );
// }



// "use client";

// import { motion, Variants } from "framer-motion";
// import { HeroBackground } from "./HeroBackground";
// import { HeroContent } from "./HeroContent";
// import { HeroActions } from "./HeroActions";
// import { Container } from "../../common/Container"; // Adjust path if needed

// export default function Hero() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.12, delayChildren: 0.2 },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 35 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1.0] },
//     },
//   };

//   return (
//     // FIXED: Adjusted padding and min-height so it sits perfectly underneath the new independent Navbar.
//     // pt-[calc(30vh+2rem)] ensures mobile text starts right after the 30vh image.
//     <section className="relative w-full flex items-center overflow-hidden pt-[calc(30vh+2rem)] pb-12 lg:pt-0 lg:pb-0 lg:min-h-[calc(100vh-90px)]">
//       <HeroBackground />

//       <Container>
//         <motion.div
//           className="w-full lg:w-1/2 flex flex-col items-start text-left z-10"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <HeroContent itemVariants={itemVariants} />
//           <HeroActions itemVariants={itemVariants} />
//         </motion.div>
//       </Container>
//     </section>
//   );
// }




"use client";

import { motion, Variants } from "framer-motion";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroActions } from "./HeroActions";
import { Container } from "../../common/Container";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1.0] },
    },
  };

  return (
    // FIXED: Removed the pt-[32vh] push-down margin. 
    // Now it uses py-16 to perfectly center the text inside the background image on mobile.
    <section className="relative w-full flex items-center overflow-hidden min-h-[40vh] py-8 lg:py-0 lg:min-h-[calc(100vh-90px)]">
      <HeroBackground />

      <Container>
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-start text-left z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroContent itemVariants={itemVariants} />
          <HeroActions itemVariants={itemVariants} />
        </motion.div>
      </Container>
    </section>
  );
}