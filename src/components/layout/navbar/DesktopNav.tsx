"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "./Navigation";
import { NavDropdown } from "./NavDropdown";

export const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-12 text-white">
      {navigation.map((item) => {
        if (item.children) {
          return <NavDropdown key={item.label} item={item} />;
        }

        const isActive = pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`py-2 ${
              isActive
                ? "text-white border-b border-white font-medium"
                : "text-white"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};
