import Link from "next/link";
// Import from react-icons instead of lucide-react
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

export const FooterBrand = () => {
  return (
    <div className="flex flex-col pr-0 lg:pr-8">
      {/* Replace with your actual Logo/SVG if needed */}
      <Link href="/" className="inline-block">
        <h3 className="font-serif text-4xl text-white tracking-wide">
          Sreshta
        </h3>
        <span className="text-xs text-[#C9A86A] tracking-[0.3em] uppercase mt-1 block">
          Ayurvedic Hospital
        </span>
      </Link>

      <p className="mt-6 text-gray-300 leading-relaxed">
        Providing authentic Ayurvedic healthcare, personalized treatments, and holistic wellness solutions designed to restore balance and grant you a healthier life.
      </p>

      {/* Social Icons - Now using react-icons */}
      <div className="mt-8 flex gap-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-300 transition-all duration-300 hover:bg-[#C9A86A] hover:text-white"
        >
          <FaFacebookF size={18} />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-300 transition-all duration-300 hover:bg-[#C9A86A] hover:text-white"
        >
          <FaInstagram size={18} />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-300 transition-all duration-300 hover:bg-[#C9A86A] hover:text-white"
        >
          <FaTwitter size={18} />
        </a>

        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-300 transition-all duration-300 hover:bg-[#C9A86A] hover:text-white"
        >
          <FaYoutube size={18} />
        </a>
      </div>
    </div>
  );
};