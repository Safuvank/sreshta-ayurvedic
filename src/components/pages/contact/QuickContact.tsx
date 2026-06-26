"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { contactInfo } from "@/src/data/contact";
import { Container } from "../../common/Container";

// Custom WhatsApp SVG Icon to match the sizing of Lucide icons
const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export const QuickContact = () => {
  const cards = [
    {
      icon: Phone,
      title: "Call Us",
      detail: contactInfo.phone,
      link: `tel:${contactInfo.phone}`,
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: contactInfo.email,
      link: `mailto:${contactInfo.email}`,
    },
    {
      icon: WhatsappIcon, // Replaced MessageCircle with the new WhatsappIcon
      title: "WhatsApp",
      detail: "Chat With Us",
      link: `https://wa.me/${contactInfo.whatsapp.replace(/\s+/g, "")}`,
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "View Directions",
      link: "#map",
    },
  ];

  return (
    <div className="relative z-20 -mt-20 sm:-mt-24 mb-20">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {cards.map((card, index) => (
            <motion.a
              key={index}
              href={card.link}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group block relative p-6 md:p-8 bg-[#254A40] rounded-2xl border border-white/10 shadow-2xl hover:border-[#C9A86A]/50 transition-colors duration-500 overflow-hidden"
            >
              {/* Permanent Gold Highlight Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#C9A86A] to-transparent" />

              <div className="flex justify-between items-start mb-8">
                {/* Elegant translucent icon container */}
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#C9A86A] group-hover:bg-[#C9A86A] group-hover:text-[#2F5D50] transition-colors duration-500">
                  <card.icon className="w-5 h-5" />
                </div>

                {/* Elegant Action Arrow */}
                <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-[#C9A86A] transition-colors duration-500" />
              </div>

              <div>
                <h3 className="font-serif text-xl text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base font-light text-gray-300 group-hover:text-white transition-colors duration-500">
                  {card.detail}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </div>
  );
};
