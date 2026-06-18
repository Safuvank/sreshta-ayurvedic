import Link from "next/link";
import { ChevronRight } from "lucide-react";

const services = [
  { label: "Ayurveda Therapies", href: "/services/ayurveda-therapies" },
  { label: "Beauty Therapies", href: "/services/beauty-therapies" },
  { label: "Yoga Sessions", href: "/services/yoga" },
  { label: "Counselling", href: "/services/counselling" },
  { label: "Wellness Packages", href: "/services/packages" },
  { label: "Ayurvedic Pharmacy", href: "/services/pharmacy" },
];

export const FooterServices = () => {
  return (
    <div>
      <h4 className=" text-xl text-white mb-6">Our Services</h4>

      <ul className="space-y-3.5">
        {services.map((service) => (
          <li key={service.label}>
            <Link
              href={service.href}
              className="group flex items-center text-gray-300 transition-colors duration-300 hover:text-[#C9A86A]"
            >
              <ChevronRight className="mr-2 h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 text-[#C9A86A]" />
              <span className="-ml-6 transition-all duration-300 group-hover:ml-0">
                {service.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};