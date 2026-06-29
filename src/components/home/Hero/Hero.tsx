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
//     // FIXED: Removed 100dvh. Used pt-10 pb-16 so it naturally fits the content and lets the next section show below it!
//     <section className="relative w-full overflow-hidden pt-10 lg:pt-0 lg:pb-0 lg:flex lg:items-center lg:min-h-[calc(100vh-90px)]">
//       <HeroBackground />

//       <Container>
//         <motion.div
//           className="w-full lg:w-1/2 flex flex-col items-start text-left z-10 relative"
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
    // REMOVED: bg-[#F8F5EF] so there is no solid color blocking the image
    <section className="relative w-full overflow-hidden pt-10 pb-16 lg:pt-0 lg:pb-0 lg:flex lg:items-center lg:min-h-[calc(100vh-90px)]">
      <HeroBackground />

      <Container>
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-start text-left z-10 relative"
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