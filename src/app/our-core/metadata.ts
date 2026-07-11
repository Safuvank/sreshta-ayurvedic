import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Core | Sreshta Ayurveda Hospital",
  description:
    "Explore Sreshta Ayurveda Hospital's specialized Ayurvedic treatments for orthopaedic, neurological, gastrointestinal, skin, gynecological, respiratory, ENT, eye, urological, and lifestyle diseases.",

  keywords: [
    "Ayurveda Specializations",
    "Ayurvedic Treatments",
    "Orthopaedic Ayurveda",
    "Neurological Ayurveda",
    "Skin Disease Ayurveda",
    "Panchakarma",
    "Kerala Ayurveda",
    "Natural Healing",
  ],

  alternates: {
    canonical: "https://www.sreshta.org/our-core",
  },

  openGraph: {
    title: "Our Core Specializations | Sreshta Ayurveda Hospital",
    description:
      "Discover our expert Ayurvedic specializations and personalized treatment approaches for a wide range of health conditions.",
    url: "https://www.sreshta.org/our-core",
    siteName: "Sreshta Ayurveda Hospital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.sreshta.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sreshta Ayurveda Hospital Specializations",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Core Specializations | Sreshta Ayurveda Hospital",
    description:
      "Explore our specialized Ayurvedic treatments and holistic healthcare services.",
    images: ["https://www.sreshta.org/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};