import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Sreshta Ayurveda Hospital",

  description:
    "Explore the Sreshta Ayurveda Hospital gallery featuring our treatment rooms, facilities, Ayurvedic therapies, wellness environment, and patient care experience.",

  keywords: [
    "Sreshta Ayurveda Gallery",
    "Ayurveda Hospital Photos",
    "Ayurvedic Treatment Gallery",
    "Hospital Facilities",
    "Ayurveda Centre",
    "Kerala Ayurveda",
    "Wellness Centre",
    "Ayurveda Clinic Images",
  ],

  alternates: {
    canonical: "https://www.sreshta.org/gallery",
  },

  openGraph: {
    title: "Gallery | Sreshta Ayurveda Hospital",
    description:
      "Take a visual tour of Sreshta Ayurveda Hospital, our facilities, therapies, and healing environment.",
    url: "https://www.sreshta.org/gallery",
    siteName: "Sreshta Ayurveda Hospital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.sreshta.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sreshta Ayurveda Hospital Gallery",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gallery | Sreshta Ayurveda Hospital",
    description:
      "View photos of our Ayurvedic hospital, facilities, therapies, and healing spaces.",
    images: ["https://www.sreshta.org/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};