import Image from "next/image";
import { contactInfo } from "@/src/data/contact";
import { Container } from "../home/Hero/Container";

export const ContactMap = () => {
  return (
    <section id="map" className="py-24 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Premium Hospital Image */}
          <div className="relative h-[400px] lg:h-[600px] w-full rounded-r-[3rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/ayurfacility.jpg" // Add your actual image
              alt="Sreshta Ayurvedic Hospital Exterior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          </div>

          {/* Right: Google Map iframe */}
          <div className="pr-4 lg:pr-8 pl-4 lg:pl-0">
            <h3 className="font-serif text-3xl md:text-4xl text-gray-900 mb-8">
              Find Us <span className="text-[#C9A86A] italic">Easily</span>
            </h3>
            <div className="relative h-[400px] lg:h-[480px] w-full rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100">
              <iframe
                src={contactInfo.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
