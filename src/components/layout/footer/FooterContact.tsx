import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const FooterContact = () => {
  return (
    <div>
      <h4 className="font-serif text-xl text-white mb-6">Contact Us</h4>

      <div className="space-y-5">
        
        {/* Address */}
        <div className="flex items-start gap-4 text-gray-300 group">
          <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#C9A86A]" />
          <span className="leading-relaxed transition-colors group-hover:text-white">
            32/1815 Guruvayurappan College,<br />
            PO Pokkunnu, Kozhikkode, 673014
          </span>
        </div>

        {/* Phone Numbers (Stacked using flex-col) */}
        <div className="flex items-start gap-4 text-gray-300">
          <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-[#C9A86A]" />
          <div className="flex flex-col gap-1.5">
            <a href="tel:+918921518790" className="transition-colors hover:text-[#C9A86A]">
              +91 8921518790
            </a>
            <a href="tel:+918714110578" className="transition-colors hover:text-[#C9A86A]">
              +91 8714110578
            </a>
          </div>
        </div>

        {/* Emails (Stacked using flex-col) */}
        <div className="flex items-start gap-4 text-gray-300">
          <Mail className="mt-1 h-5 w-5 shrink-0 text-[#C9A86A]" />
          <div className="flex flex-col gap-1.5">
            <a href="mailto:sreshtacalicut@gmail.com" className="transition-colors hover:text-[#C9A86A]">
              sreshtacalicut@gmail.com
            </a>
            <a href="mailto:contact@sreshta.org" className="transition-colors hover:text-[#C9A86A]">
              contact@sreshta.org
            </a>
          </div>
        </div>

        {/* Working Hours */}
        {/* <div className="flex items-start gap-4 text-gray-300 group">
          <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C9A86A]" />
          <span className="transition-colors group-hover:text-white">
            {/* Mon - Sat: 9:00 AM - 6:00 PM<br /> */}
            {/* <span className="text-sm text-gray-400">Sunday: Emergency Only</span>
          </span>
        </div> */} 
        
      </div>
    </div>
  );
};