// import type { Metadata } from "next";
// import { Inter, Playfair_Display } from "next/font/google";
// import "./globals.css";
// import { Navbar } from "../components/layout/navbar/Navbar";
// import { Footer } from "../components/layout/footer/Footer";
// import { WhatsAppButton } from "../components/common/WhatsappButton";
// import ChatWidget from "../components/chatbot/ChatWidget";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-body",
// });

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   variable: "--font-heading",
// });

// export const metadata: Metadata = {
//   title: "Sreshta-Ayurvedic Way of Advanced Care",
//   description: "ayurvedic way of advanced care",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
//       <body className="min-h-screen flex flex-col">
//         <Navbar />
//         {children}
//         <Footer/>
//         <ChatWidget />
//         <WhatsAppButton/>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import { Navbar } from "../components/layout/navbar/Navbar";
import { Footer } from "../components/layout/footer/Footer";
import { WhatsAppButton } from "../components/common/WhatsappButton";
import ChatWidget from "../components/chatbot/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sreshta.org"),

  title: {
    default: "Sreshta Ayurveda Hospital",
    template: "%s | Sreshta Ayurveda Hospital",
  },

  description:
    "Sreshta Multi Speciality Ayurveda Hospital offers authentic Ayurvedic treatments, Panchakarma therapies, expert consultations, and holistic healthcare in Kerala.",

  keywords: [
    "Ayurveda Hospital",
    "Panchakarma",
    "Ayurveda Kerala",
    "Ayurvedic Treatment",
    "Ayurvedic Clinic",
    "Orthopaedic Ayurveda",
    "Skin Disease Treatment",
    "Lifestyle Diseases",
    "Sreshta Ayurveda",
  ],

  authors: [
    {
      name: "Sreshta Ayurveda Hospital",
    },
  ],

  creator: "Sreshta Ayurveda Hospital",

  publisher: "Sreshta Ayurveda Hospital",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.sreshta.org",
    siteName: "Sreshta Ayurveda Hospital",
    title: "Sreshta Ayurveda Hospital",
    description:
      "Authentic Ayurvedic treatments and holistic healthcare in Kerala.",
    images: [
      {
        url: "/images/seo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sreshta Ayurveda Hospital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sreshta Ayurveda Hospital",
    description: "Authentic Ayurvedic treatments and holistic healthcare.",
    images: ["/images/seo/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />

        <ChatWidget />

        <WhatsAppButton />
      </body>
    </html>
  );
}
