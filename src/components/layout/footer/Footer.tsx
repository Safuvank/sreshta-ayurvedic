import { Container } from "../../home/Hero/Container";
import { FooterBrand } from "./FooterBrand";
import { FooterLinks } from "./FooterLink";
import { FooterServices } from "./FooterServices";
import { FooterContact } from "./FooterContact";
import { FooterBottom } from "./FooterBottom";

export const Footer = () => {
  return (
    <>
      {/* High-conversion strip placed right before the footer content */}
      {/* <ConsultationStrip /> */}

      <footer className="bg-[#1F3D35] relative overflow-hidden">
        {/* Subtle decorative background ring */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full border-[40px] border-white/[0.02] pointer-events-none" />

        <Container>
          <div className="relative z-10 grid gap-12 gap-y-16 py-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="md:col-span-2 lg:col-span-1">
              <FooterBrand />
            </div>

            <FooterLinks />

            <FooterServices />

            <FooterContact />
          </div>

          <FooterBottom />
        </Container>
      </footer>
    </>
  );
};
