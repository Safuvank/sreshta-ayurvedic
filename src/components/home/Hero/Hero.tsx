// "use client";

// import { motion, Variants } from "framer-motion";
// import { HeroBackground } from "./HeroBackground";
// import { HeroContent } from "./HeroContent";
// import { HeroActions } from "./HeroActions";

// export default function Hero() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       <HeroBackground />

//       <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8">
//         <motion.div
//           className="flex max-w-4xl flex-col items-center text-center"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <HeroContent itemVariants={itemVariants} />
//           <HeroActions itemVariants={itemVariants} />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion, Variants } from "framer-motion";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroActions } from "./HeroActions";
import { HeroImageSlider } from "./HeroImageSlider";
import { Container } from "../Hero/Container"; // Keep or adjust to match path

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
      transition: { duration: 0.8, ease: [0.215, 0.610, 0.355, 1.000] }, 
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden pt-32 pb-16">
      <HeroBackground />

      <Container>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column Area: Content & Typography actions */}
          {/* FIXED: Changed order-2 to order-1 so text always loads first on mobile */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10 order-1">
            <HeroContent itemVariants={itemVariants} />
            <HeroActions itemVariants={itemVariants} />
          </div>

          {/* Right Column Area: High-end interactive image carousel track */}
          {/* FIXED: Changed order-1 to order-2 so images load under the text on mobile */}
          <div className="lg:col-span-6 w-full z-10 order-2">
            <HeroImageSlider itemVariants={itemVariants} />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}