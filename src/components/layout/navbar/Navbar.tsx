// import { NavLogo } from "./NavLogo";
// import { DesktopNav } from "./DesktopNav";
// import { NavActions } from "./NavActions";
// import { MobileNav } from "./MobileNav";
// import { Container } from "../../home/Hero/Container";

// export const Navbar = () => {
//   return (
//     <header
//       className="
//       absolute
//       top-5
//       left-0
//       right-0
//       z-101
//       flex
//       items-center
//       transition-all 
//       duration-300 
//       "
//     >
//       <div className="absolute inset-0 -z-10" />

//       <Container>
//         <div className="container mx-auto flex items-center justify-between w-full text-white">
//           <NavLogo />
//           <DesktopNav />
//           <div className="flex items-center gap-4">
//             <NavActions />
//             <MobileNav />
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// };



// "use client";

// import { useState, useEffect } from "react";
// import { NavLogo } from "./NavLogo";
// import { DesktopNav } from "./DesktopNav";
// import { NavActions } from "./NavActions";
// import { MobileNav } from "./MobileNav";
// import { Container } from "../../home/Hero/Container";

// export const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Handle Scroll to toggle Navbar style
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
//         isScrolled
//           ? "bg-white/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-4"
//           : "bg-transparent py-6 md:py-8"
//       }`}
//     >
//       <Container>
//         <div className="flex items-center justify-between w-full">
//           {/* We pass isScrolled to children so they can change from white to dark text */}
//           <NavLogo isScrolled={isScrolled} />
//           <DesktopNav isScrolled={isScrolled} />
          
//           <div className="flex items-center gap-4 lg:gap-6">
//             <NavActions isScrolled={isScrolled} />
//             <MobileNav />
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// };



"use client";

import { NavLogo } from "./NavLogo";
import { DesktopNav } from "./DesktopNav";
import { NavActions } from "./NavActions";
import { MobileNav } from "./MobileNav";
import { Container } from "../../home/Hero/Container"; // Adjust path if needed

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