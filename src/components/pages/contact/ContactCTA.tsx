"use client";

import { PhoneCall, MessageCircle } from "lucide-react";
import { Container } from "../../common/Container";
import { contactInfo } from "@/src/data/contact";

export const ContactCTA = () => {
  return (
    <section className="bg-[#2F5D50] py-20 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl lg:text-5xl text-white leading-tight">
            Need Immediate Assistance?
          </h2>
          <p className="mt-6 text-lg text-gray-200">
            Our Ayurvedic specialists are ready to help. Reach out to us directly for urgent inquiries or immediate appointment bookings.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${contactInfo.phone}`}
              className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-[#2F5D50] transition-all hover:bg-gray-50 hover:shadow-lg"
            >
              <PhoneCall className="w-5 h-5 transition-transform group-hover:scale-110" />
              Call Now
            </a>

            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/\s+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm px-8 py-4 text-white transition-all hover:bg-[#25b83b] hover:border-[#25b83b]"
            >
              <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};