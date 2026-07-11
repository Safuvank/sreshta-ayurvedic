import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sreshta Ayurveda Hospital",
  description:
    "Learn about Sreshta Ayurveda Hospital, our mission, vision, values, experienced doctors, and commitment to authentic Ayurvedic healthcare and holistic healing.",

  keywords: [
    "About Sreshta Ayurveda",
    "Ayurveda Hospital",
    "Ayurvedic Doctors",
    "Kerala Ayurveda",
    "Holistic Healing",
    "Traditional Ayurveda",
  ],

  alternates: {
    canonical: "https://www.sreshta.org/about",
  },

  openGraph: {
    title: "About Sreshta Ayurveda Hospital",
    description:
      "Discover the story, mission, vision, and healthcare philosophy of Sreshta Ayurveda Hospital.",
    url: "https://www.sreshta.org/about",
    siteName: "Sreshta Ayurveda Hospital",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.sreshta.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Sreshta Ayurveda Hospital",
      },
    ],
  },

//   twitter: {
//     card: "summary_large_image",
//     title: "About Sreshta Ayurveda Hospital",
//     description:
//       "Learn about Sreshta Ayurveda Hospital and our commitment to authentic Ayurvedic care.",
//     images: ["https://www.sreshta.org/og-image.jpg"],
//   },

  robots: {
    index: true,
    follow: true,
  },
};
