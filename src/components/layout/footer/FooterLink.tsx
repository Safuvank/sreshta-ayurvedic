import Link from "next/link";
import { ChevronRight } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Treatments", href: "/treatments" },
  { label: "Wellness Services", href: "/services" },
  { label: "Meet Our Doctors", href: "/doctors" },
  { label: "Patient Testimonials", href: "/testimonials" },
];

export const FooterLinks = () => {
  return (
    <div>
      <h4 className=" text-xl text-white mb-6">Quick Links</h4>

      <ul className="space-y-3.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group flex items-center text-gray-300 transition-colors duration-300 hover:text-[#C9A86A]"
            >
              <ChevronRight className="mr-2 h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 text-[#C9A86A]" />
              <span className="-ml-6 transition-all duration-300 group-hover:ml-0">
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};