// "use client";

// import { NavLogo } from "./NavLogo";
// import { DesktopNav } from "./DesktopNav";
// import { NavActions } from "./NavActions";
// import { MobileNav } from "./MobileNav";
// import { Container } from "../../home/Hero/Container"; // Adjust path if needed

// export const Navbar = () => {
//   return (
//     <header className="absolute top-0 left-0 right-0 z-[100] bg-transparent py-6 md:py-8">
//       <Container>
//         <div className="flex items-center justify-between w-full">
//           <NavLogo />
//           <DesktopNav />

//           <div className="flex items-center gap-4 lg:gap-6">
//             <NavActions />
//             <MobileNav />
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// };




// "use client";

// import { useState } from "react";
// import { motion, useScroll, useMotionValueEvent } from "framer-motion";
// import { NavLogo } from "./NavLogo";
// import { DesktopNav } from "./DesktopNav";
// import { NavActions } from "./NavActions";
// import { MobileNav } from "./MobileNav";
// import { Container } from "../../home/Hero/Container";

// export const Navbar = () => {
//   const { scrollY } = useScroll();
//   const [hidden, setHidden] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Optimized scroll listener using Framer Motion
//   useMotionValueEvent(scrollY, "change", (latest) => {
//     const previous = scrollY.getPrevious() || 0;

//     // 1. Check if we've scrolled past the very top
//     if (latest > 50) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }

//     // 2. Hide when scrolling down, Show when scrolling up
//     if (latest > previous && latest > 150) {
//       // User is scrolling down and past 150px
//       setHidden(true);
//     } else {
//       // User is scrolling up
//       setHidden(false);
//     }
//   });

//   return (
//     <motion.header
//       variants={{
//         visible: { y: 0 },
//         hidden: { y: "-100%" }, // Slides the navbar completely out of view
//       }}
//       animate={hidden ? "hidden" : "visible"}
//       transition={{ duration: 0.35, ease: "easeInOut" }}
//       // Use 'fixed' so it can appear when scrolling up from anywhere on the page
//       className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${
//         isScrolled
//           ? "bg-[#1F3D35]/95 backdrop-blur-md shadow-lg py-3" // Dark premium glass background when mid-page
//           : "bg-transparent/45 py-6 md:py-8" // Transparent at the very top
//       }`}
//     >
//       <Container>
//         <div className="flex items-center justify-between w-full">
//           <NavLogo />
//           <DesktopNav />

//           <div className="flex items-center gap-4 lg:gap-6">
//             <NavActions />
//             <MobileNav />
//           </div>
//         </div>
//       </Container>
//     </motion.header>
//   );
// };

"use client";

import { NavLogo } from "./NavLogo";
import { DesktopNav } from "./DesktopNav";
import { NavActions } from "./NavActions";
import { MobileNav } from "./MobileNav";
import { Container } from "../../home/Hero/Container";

export const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-[100] bg-transparent py-6 md:py-8">
      <Container>
        <div className="flex items-center justify-between w-full">
          <NavLogo />
          <DesktopNav />

          <div className="flex items-center gap-4 lg:gap-6">
            <NavActions />
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
};