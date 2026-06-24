"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { contactInfo } from "@/src/data/contact";

export const QuickContact = () => {
  const cards = [
    { icon: Phone, title: "Call Us", detail: contactInfo.phone, link: `tel:${contactInfo.phone}` },
    { icon: Mail, title: "Email Us", detail: contactInfo.email, link: `mailto:${contactInfo.email}` },
    { icon: MessageCircle, title: "WhatsApp", detail: "Chat With Us", link: `https://wa.me/${contactInfo.whatsapp.replace(/\s+/g, '')}` },
    { icon: MapPin, title: "Location", detail: "View Directions", link: "#map" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 -mt-12 relative z-20">
      {cards.map((card, index) => (
        <motion.a
          key={index}
          href={card.link}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group flex flex-col items-center text-center bg-white p-6 md:p-8 rounded-[2rem] shadow-lg shadow-gray-100 border border-gray-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="w-14 h-14 bg-[#F8F5EF] rounded-full flex items-center justify-center text-[#2F5D50] group-hover:bg-[#2F5D50] group-hover:text-white transition-colors duration-300">
            <card.icon className="w-6 h-6" />
          </div>
          <h3 className="mt-4 font-serif text-xl text-gray-900">{card.title}</h3>
          <p className="mt-2 text-sm md:text-base font-medium text-gray-600 group-hover:text-[#C9A86A] transition-colors">
            {card.detail}
          </p>
        </motion.a>
      ))}
    </div>
  );
};