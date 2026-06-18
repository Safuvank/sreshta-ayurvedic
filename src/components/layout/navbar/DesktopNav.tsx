"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "./Navigation";
import { NavDropdown } from "./NavDropdown";

export const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-10">
      {navigation.map((item) => {
        if (item.children) {
          return <NavDropdown key={item.label} item={item} />;
        }

        const isActive = pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`relative py-2 text-sm lg:text-base font-medium transition-colors hover:text-[#C9A86A] ${
              isActive ? "text-[#C9A86A]" : "text-white"
            }`}
          >
            {item.label}
            {/* Minimalist Active Indicator under text */}
            {isActive && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#C9A86A] rounded-t-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
};
