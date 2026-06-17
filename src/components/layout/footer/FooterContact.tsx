import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const FooterContact = () => {
  return (
    <div>
      <h4 className="font-serif text-xl text-white mb-6">Contact Us</h4>

      <div className="space-y-5">
        <div className="flex items-start gap-4 text-gray-300 group">
          <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#C9A86A]" />
          <span className="leading-relaxed transition-colors group-hover:text-white">
            Sreshta Ayurvedic Hospital,<br />
            Kochi, Kerala, India
          </span>
        </div>

        <div className="flex items-center gap-4 text-gray-300 group">
          <Phone className="h-5 w-5 flex-shrink-0 text-[#C9A86A]" />
          <a href="tel:+919999999999" className="transition-colors group-hover:text-[#C9A86A]">
            +91 99999 99999
          </a>
        </div>

        <div className="flex items-center gap-4 text-gray-300 group">
          <Mail className="h-5 w-5 flex-shrink-0 text-[#C9A86A]" />
          <a href="mailto:info@sreshta.com" className="transition-colors group-hover:text-[#C9A86A]">
            info@sreshta.com
          </a>
        </div>

        <div className="flex items-start gap-4 text-gray-300 group">
          <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C9A86A]" />
          <span className="transition-colors group-hover:text-white">
            Mon - Sat: 9:00 AM - 6:00 PM<br />
            <span className="text-sm text-gray-400">Sunday: Emergency Only</span>
          </span>
        </div>
      </div>
    </div>
  );
};