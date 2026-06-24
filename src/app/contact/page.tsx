import { Container } from "@/src/components/common/Container";
import { ContactHero } from "@/src/components/pages/contact/ContactHero";
import { QuickContact } from "@/src/components/pages/contact/QuickContact";
import { ContactInfo } from "@/src/components/pages/contact/ContactInfo";
import { ContactForm } from "@/src/components/pages/contact/ContactForm";
import { ContactMap } from "@/src/components/pages/contact/ContactMap";
// import { WorkingHours } from "@/src/components/contact/WorkingHours";
import { ContactCTA } from "@/src/components/pages/contact/ContactCTA";

export const metadata = {
  title: "Contact Us | Sreshta Ayurvedic Hospital",
  description: "Reach out to Sreshta Ayurvedic Hospital for consultations, appointments, and holistic treatment inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Area */}
      <ContactHero />

      {/* 2. Floating Quick Contact Cards */}
      <section className="bg-white pb-24">
        <Container>
          <QuickContact />
        </Container>
      </section>

      {/* 3. Main Split Section: Info + Form */}
      <section className="bg-white pb-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </Container>
      </section>

      {/* 4. Premium Map & Hospital Image Section */}
      <ContactMap />

      {/* 5. Working Hours */}
      {/* <WorkingHours /> */}

      {/* 6. Final Conversion CTA */}
      <ContactCTA />
    </main>
  );
}