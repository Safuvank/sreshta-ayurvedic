import { Container } from "@/src/components/common/Container";
import { ContactHero } from "@/src/components/pages/contact/ContactHero";
import { QuickContact } from "@/src/components/pages/contact/QuickContact";
import { ContactMap } from "@/src/components/pages/contact/ContactMap";
import { WorkingHours } from "@/src/components/pages/contact/WorkingHours";
import { ContactSplitBlock } from "@/src/components/pages/contact/ContactSplitBlock";
import { ContactImage } from "@/src/components/pages/contact/ContactImage";

export const metadata = {
  title: "Contact Us | Sreshta Ayurvedic Hospital",
  description:
    "Reach out to Sreshta Ayurvedic Hospital for consultations, appointments, and holistic treatment inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Area */}
      <ContactHero />

      {/* 2. Floating Quick Contact Cards 
          (Note: Container and negative margin overlap are handled inside this component) */}
      <QuickContact />

      <ContactSplitBlock />

      {/* 3. Main Split Section: Info + Working Hours (Left) & Form (Right) */}
      <section className="bg-white pb-24 lg:pb-32">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column: Stacking Info and Working Hours */}
            <div className="flex flex-col gap-8 h-full">
              {/* <ContactInfo /> */}
              <WorkingHours />
              
            </div>

            {/* Right Column: Contact Form */}
            <div className="h-full">
              <ContactImage/>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Premium Map & Hospital Image Section */}
      <ContactMap />
    </main>
  );
}
