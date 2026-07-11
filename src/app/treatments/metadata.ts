import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ayurvedic Treatments | Traditional Healing | Sreshta Ayurveda Hospital",

  description:
    "Explore authentic Ayurvedic treatments at Sreshta Ayurveda Hospital. We provide personalized therapies, Panchakarma, pain management, rejuvenation, detoxification, and holistic care for various health conditions.",

  keywords: [
    "Ayurvedic Treatments",
    "Panchakarma Treatment",
    "Ayurveda Therapy",
    "Traditional Ayurveda",
    "Holistic Healing",
    "Natural Treatment",
    "Pain Management",
    "Detox Therapy",
    "Rejuvenation Therapy",
    "Kerala Ayurveda",
  ],

  alternates: {
    canonical: "https://www.sreshta.org/treatments",
  },

  openGraph: {
    title: "Ayurvedic Treatments | Sreshta Ayurveda Hospital",
    description:
      "Discover authentic Ayurvedic treatments designed to restore balance, promote wellness, and support long-term health through personalized care.",
    url: "https://www.sreshta.org/treatments",
    siteName: "Sreshta Ayurveda Hospital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.sreshta.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ayurvedic Treatments at Sreshta Ayurveda Hospital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ayurvedic Treatments | Sreshta Ayurveda Hospital",
    description:
      "Explore traditional Ayurvedic therapies and holistic treatment plans for better health and wellness.",
    images: ["https://www.sreshta.org/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};