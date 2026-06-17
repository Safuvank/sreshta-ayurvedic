import Link from "next/link";
import Image from "next/image"; // Import Image from next/image
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

export const FooterBrand = () => {
  return (
    <div className="flex flex-col pr-0 lg:pr-8">
      
      {/* Actual Logo Image */}
      <Link href="/" className="inline-block">
        <div className="relative w-[180px] h-[60px]"> {/* Adjust width/height container as needed */}
          <Image
            src="/images/sreshta-logo.png" // Replace with your actual logo path
            alt="Sreshta Ayurvedic Hospital Logo"
            fill
            className="object-contain object-left"
            priority // Helps load the logo faster
          />
        </div>
      </Link>

      {/* <p className="mt-6 text-gray-300 leading-relaxed">
        Providing authentic Ayurvedic healthcare, personalized treatments, and holistic wellness solutions designed to restore balance and grant you a healthier life.
      </p> */}

      {/* Social Icons */}
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