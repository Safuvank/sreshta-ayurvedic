
// "use client";

// import { NavLogo } from "./NavLogo";
// import { DesktopNav } from "./DesktopNav";
// import { NavActions } from "./NavActions";
// import { MobileNav } from "./MobileNav";
// import { Container } from "../../common/Container";

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



"use client";

import { NavLogo } from "./NavLogo";
import { DesktopNav } from "./DesktopNav";
import { NavActions } from "./NavActions";
import { MobileNav } from "./MobileNav";
import { Container } from "../../common/Container"; // Adjust path if needed

export const Navbar = () => {
  return (
    // FIXED: Changed from absolute/bg-transparent to sticky/bg-white.
    // It now sits independently in the document flow ABOVE the hero section!
    <header className="sticky top-0 left-0 right-0 z-[110] bg-white border-b border-gray-100 py-3 md:py-4 ">
      <Container>
        <div className="flex items-center justify-between w-full">
          <NavLogo />
          <DesktopNav />

          <div className="flex items-center gap-4 lg:gap-6 relative z-[120]">
            <NavActions />
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
};