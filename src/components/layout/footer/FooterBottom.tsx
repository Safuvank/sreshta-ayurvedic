import Link from "next/link";

export const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" border-t border-white/10 pt-8 pb-12">
      <div className="flex flex-col items-center justify-between gap-6 text-sm text-gray-400 md:flex-row">
        
        <p>
          © 2023 - {currentYear} Sreshta-Ayurvedic Way of Advanced Care. All rights reserved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Link href="/privacy-policy" className="transition-colors hover:text-[#C9A86A]">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="transition-colors hover:text-[#C9A86A]">
            Terms & Conditions
          </Link>
          <Link href="/sitemap" className="transition-colors hover:text-[#C9A86A]">
            Sitemap
          </Link>
        </div>

      </div>
    </div>
  );
};