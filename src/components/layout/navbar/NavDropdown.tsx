"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

export const NavDropdown = ({ item }: { item: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Check if active
  const isActive = item.children.some((child: any) => {
    if (child.children)
      return child.children.some((subChild: any) => pathname === subChild.href);
    return pathname === child.href;
  });

  const isMegaMenu = item.children.some((child: any) => child.children);

  // --- REUSABLE PREMIUM LINK COMPONENT ---
  // Added `w-full` and `justify-between` to force the arrow to the exact right edge
  const DropdownLink = ({
    href,
    label,
    isActiveLink,
  }: {
    href: string;
    label: string;
    isActiveLink: boolean;
  }) => (
    <Link
      href={href}
      className={`group flex w-full items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
        isActiveLink
          ? "bg-[#F8F5EF] text-[#6c705d] font-medium"
          : "text-gray-700 hover:bg-[#bfddeb]/80 hover:text-[#26c705d]"
      }`}
    >
      <span className="text-sm font-medium">{label}</span>
      {/* Arrow stays perfectly anchored to the right side */}
      <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#2F5D50]" />
    </Link>
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Top Level Navbar Button */}
      <button
        className={`flex items-center gap-1.5 py-6 text-sm lg:text-base font-medium transition-colors hover:text-[#C9A86A] ${
          isActive ? "text-[#C9A86A]" : "text-black"
        }`}
      >
        {item.label}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#C9A86A]" : "opacity-70"
          }`}
        />
      </button>

      {/* Dropdown Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`absolute top-full mt-0 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex ${
              isMegaMenu ? "-left-[15vw] xl:-left-[10vw] w-max" : "left-0 w-64"
            }`}
          >
            <div
              className={`p-6 md:p-8 w-full ${
                isMegaMenu
                  ? "grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10"
                  : "flex flex-col gap-1"
              }`}
            >
              {item.children.map((child: any) => {
                // --- COLUMN WITH SUB-CHILDREN (e.g., "Our Core", "Services") ---
                if (child.children) {
                  return (
                    <div
                      key={child.label}
                      className="flex flex-col min-w-[240px]"
                    >
                      {/* Column Header */}
                      <h4 className="text-xs font-bold tracking-[0.2em] text-[#C9A86A] uppercase mb-4 border-b border-gray-100 pb-3 px-2">
                        {child.label}
                      </h4>
                      {/* Sub-Links */}
                      <div className="flex flex-col gap-1 w-full">
                        {child.children.map((subChild: any) => (
                          <DropdownLink
                            key={subChild.label}
                            href={subChild.href}
                            label={subChild.label}
                            isActiveLink={pathname === subChild.href}
                          />
                        ))}
                      </div>
                    </div>
                  );
                }

                // --- STANDARD DIRECT LINK (e.g., "Treatments", "Contact", "About") ---
                return (
                  <div
                    key={child.label}
                    className={`w-full ${isMegaMenu ? "flex flex-col min-w-[240px]" : ""}`}
                  >
                    {/* Give Mega Menu single items a "Quick Links" header so heights align */}
                    {isMegaMenu && (
                      <h4 className="text-xs font-bold tracking-[0.2em] text-[#C9A86A] uppercase mb-4 border-b border-gray-100 pb-3 px-2">
                        Quick Links
                      </h4>
                    )}
                    <DropdownLink
                      href={child.href}
                      label={child.label}
                      isActiveLink={pathname === child.href}
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};







