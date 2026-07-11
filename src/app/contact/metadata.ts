import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Sreshta Ayurveda Hospital",
  description:
    "Get in touch with Sreshta Ayurveda Hospital. Book an appointment, enquire about Ayurvedic treatments, or contact our team by phone, email, or WhatsApp.",

  keywords: [
    "Contact Sreshta Ayurveda",
    "Book Ayurveda Appointment",
    "Ayurveda Hospital Contact",
    "Ayurvedic Consultation",
    "Kerala Ayurveda Hospital",
    "Ayurvedic Doctor Appointment",
  ],

  alternates: {
    canonical: "https://www.sreshta.org/contact",
  },

  openGraph: {
    title: "Contact Sreshta Ayurveda Hospital",
    description:
      "Contact our team to book an appointment or learn more about our Ayurvedic treatments and healthcare services.",
    url: "https://www.sreshta.org/contact",
    siteName: "Sreshta Ayurveda Hospital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.sreshta.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Sreshta Ayurveda Hospital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Sreshta Ayurveda Hospital",
    description:
      "Book your consultation or contact Sreshta Ayurveda Hospital for expert Ayurvedic care.",
    images: ["https://www.sreshta.org/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};