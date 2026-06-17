import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/layout/navbar/Navbar";
import { Footer } from "../components/layout/footer/Footer";
import { WhatsAppButton } from "../components/common/WhatsappButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Sreshta-Ayurvedic Way of Advanced Care",
  description: "ayurvedic way of advanced care",
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
        {children}
        <Footer/>
        <WhatsAppButton/>
      </body>
    </html>
  );
}
