import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Doctors | Expert Ayurvedic Physicians | Sreshta Ayurveda Hospital",
  description:
    "Meet the experienced Ayurvedic doctors at Sreshta Ayurveda Hospital. Our physicians provide personalized consultations and authentic Ayurvedic treatments for holistic health and wellness.",

  keywords: [
    "Ayurvedic Doctors",
    "Ayurveda Physicians",
    "Ayurveda Specialists",
    "Sreshta Doctors",
    "Kerala Ayurveda Doctors",
    "Ayurvedic Consultation",
    "Holistic Healthcare",
  ],

  alternates: {
    canonical: "https://www.sreshta.org/doctors",
  },

  openGraph: {
    title: "Our Doctors | Sreshta Ayurveda Hospital",
    description:
      "Meet our team of experienced Ayurvedic physicians dedicated to providing personalized and authentic Ayurvedic healthcare.",
    url: "https://www.sreshta.org/doctors",
    siteName: "Sreshta Ayurveda Hospital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.sreshta.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Doctors at Sreshta Ayurveda Hospital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Doctors | Sreshta Ayurveda Hospital",
    description:
      "Meet our experienced Ayurvedic doctors and book a consultation for personalized treatment.",
    images: ["https://www.sreshta.org/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};