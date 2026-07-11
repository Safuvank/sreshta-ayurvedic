import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ayurvedic Services | Holistic Healthcare | Sreshta Ayurveda Hospital",
  description:
    "Explore the comprehensive Ayurvedic services at Sreshta Ayurveda Hospital, including Panchakarma, preventive care, rejuvenation therapies, pain management, lifestyle consultations, and personalized treatment plans.",

  keywords: [
    "Ayurvedic Services",
    "Panchakarma",
    "Ayurveda Treatment",
    "Ayurveda Therapy",
    "Holistic Healthcare",
    "Natural Healing",
    "Wellness Programs",
    "Preventive Healthcare",
    "Kerala Ayurveda",
  ],

  alternates: {
    canonical: "https://www.sreshta.org/services",
  },

  openGraph: {
    title: "Ayurvedic Services | Sreshta Ayurveda Hospital",
    description:
      "Discover authentic Ayurvedic therapies and holistic healthcare services tailored to your individual wellness needs.",
    url: "https://www.sreshta.org/services",
    siteName: "Sreshta Ayurveda Hospital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.sreshta.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ayurvedic Services at Sreshta Ayurveda Hospital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ayurvedic Services | Sreshta Ayurveda Hospital",
    description:
      "Explore our Ayurvedic treatments, Panchakarma therapies, and holistic healthcare services.",
    images: ["https://www.sreshta.org/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};