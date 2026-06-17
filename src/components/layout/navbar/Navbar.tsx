import { NavLogo } from "./NavLogo";
import { DesktopNav } from "./DesktopNav";
import { NavActions } from "./NavActions";
import { MobileNav } from "./MobileNav";
import { Container } from "../../home/Hero/Container";

export const Navbar = () => {
  return (
    <header
      className="
      absolute
      top-5
      left-0
      right-0
      z-101
      flex
      items-center
      transition-all 
      duration-300 
      "
    >
      <div className="absolute inset-0 -z-10" />

      <Container>
        <div className="container mx-auto flex items-center justify-between w-full text-white">
          <NavLogo />
          <DesktopNav />
          <div className="flex items-center gap-4">
            <NavActions />
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
};
