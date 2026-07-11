import { HospitalFacilities } from "../components/home/about-preview/HospitalFacilities";
import Hero from "../components/home/Hero/Hero";
import { ServicesPreview } from "../components/home/services-preview/ServicesPreview";
import { TestimonialsPreview } from "../components/home/testimonial-old-design/TestimonialsPreview";
import { TreatmentsPreview } from "../components/home/treatment-preview/TreatmentsPreview";
import { ConsultationCTA } from "../components/home/consultation-cta/ConsultationCTA";
import { OurCoreSection } from "../components/home/our-core-preview/OurCoreSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sreshta Ayurveda Hospital | Authentic Ayurvedic Care & Holistic Healing",
  description:
    "Sreshta Ayurveda Hospital offers authentic Ayurvedic treatments for orthopaedic, neurological, gastrointestinal, skin, gynecological, respiratory, ENT, eye, urological, and lifestyle diseases. Experience holistic healing with expert Ayurvedic doctors.",

  keywords: [
    "Ayurveda Hospital",
    "Ayurvedic Treatment",
    "Kerala Ayurveda",
    "Sreshta Ayurveda",
    "Holistic Healing",
    "Ayurvedic Doctors",
    "Panchakarma",
    "Natural Healing",
  ],

  alternates: {
    canonical: "https://www.sreshta.org",
  },

  openGraph: {
    title: "Sreshta Ayurveda Hospital",
    description:
      "Experience authentic Ayurveda with personalized treatments and holistic healing from experienced Ayurvedic doctors.",
    url: "https://www.sreshta.org",
    siteName: "Sreshta Ayurveda Hospital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.sreshta.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sreshta Ayurveda Hospital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sreshta Ayurveda Hospital",
    description:
      "Authentic Ayurvedic treatments with expert care and holistic healing.",
    images: ["https://www.sreshta.org/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <HospitalFacilities />
      <ServicesPreview />
      <TreatmentsPreview />
      <OurCoreSection />
      <TestimonialsPreview />
      <ConsultationCTA />
    </main>
  );
}
