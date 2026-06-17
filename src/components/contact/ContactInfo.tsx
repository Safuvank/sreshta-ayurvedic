import { MapPin, Phone, Mail, MessageCircle, AlertCircle } from "lucide-react";
import { contactInfo } from "@/src/data/contact";

export const ContactInfo = () => {
  return (
    <div className="flex flex-col h-full bg-[#F8F5EF] p-8 md:p-12 rounded-[2.5rem]">
      <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-8">
        Get In Touch
      </h2>
      
      <div className="space-y-8 flex-1">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#2F5D50] shadow-sm flex-shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Hospital Address</h4>
            <p className="mt-2 text-gray-600 leading-relaxed">{contactInfo.hospitalName}<br/>{contactInfo.address}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#2F5D50] shadow-sm flex-shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Contact Numbers</h4>
            <p className="mt-2 text-gray-600">{contactInfo.phone}</p>
            <p className="text-gray-600">{contactInfo.whatsapp} (WhatsApp)</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#2F5D50] shadow-sm flex-shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Email Address</h4>
            <p className="mt-2 text-gray-600">{contactInfo.email}</p>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-white rounded-2xl border border-red-100 flex items-start gap-4">
        <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
        <div>
          <h4 className="font-bold text-gray-900">Emergency Contact</h4>
          <p className="text-gray-600 text-sm mt-1">For urgent medical assistance, please call immediately.</p>
          <p className="font-bold text-red-600 text-lg mt-2">{contactInfo.emergencyPhone}</p>
        </div>
      </div>
    </div>
  );
};