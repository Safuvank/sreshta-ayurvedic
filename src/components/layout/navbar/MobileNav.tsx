

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { navigation } from "./Navigation"; 

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);

  // --- BACKGROUND SCROLL LOCK LOGIC ---
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeNav = () => {
    setIsOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  };

  return (
    <div className="lg:hidden flex items-center">
      {/* --- ICON-ONLY INTERACTIVE TRIGGER --- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-5 right-4 md:right-8 z-[101] flex items-center justify-center w-11 h-11 backdrop-blur-md border rounded-xl transition-all duration-500 ${
          isOpen
            ? "bg-white/10 backdrop-blur-md border border-white/20 shadow-sm"
            : "bg-white/30 backdrop-blur-lg border border-white/40 shadow-md hover:bg-white/40"
        }`}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <div className="flex flex-col items-end justify-center gap-[5px] w-5 h-4 relative">
          <motion.span
            animate={
              isOpen
                ? { rotate: 45, y: 4, width: "20px" }
                : { rotate: 0, y: 0, width: "20px" }
            }
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-[2px] rounded-full bg-[#1F3D35] transition-transform"
          />
          <motion.span
            animate={
              isOpen
                ? { rotate: -45, y: -3, width: "20px" }
                : { rotate: 0, y: 0, width: "12px" }
            }
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-[2px] rounded-full bg-[#1F3D35] transition-transform"
          />
        </div>
      </button>

      {/* --- FULL SCREEN OVERLAY MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 w-full h-[100dvh] bg-white z-[100] flex flex-col pt-24 overflow-hidden"
          >
            {/* --- MATCHED LOGO ELEMENT --- */}
            <div className="fixed top-5 left-4 md:left-8 z-[102] h-11 flex items-center">
              <Link href="/" onClick={closeNav} className="flex items-center">
                <Image
                  src="/images/sreshta-logo-color.png"
                  alt="Sreshta Logo"
                  width={160}
                  height={40}
                  priority
                  className="object-contain opacity-90"
                />
              </Link>
            </div>

            {/* Scrollable Links Container */}
            {/* FIXED: Removed max-w-md and mx-auto. Updated padding to px-4 md:px-8 to align with logo & top button */}
            <div className="flex-1 overflow-y-auto px-4 md:px-8 py-8 flex flex-col gap-2 w-full">
              {navigation.map((item) => (
                <div key={item.label} className="border-b border-gray-100 pb-2">
                  {item.children ? (
                    <div className="flex flex-col">
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.label ? null : item.label,
                          )
                        }
                        className="flex justify-between items-center py-4 text-2xl text-[#1F3D35] w-full text-left group"
                      >
                        <span className="transition-colors">{item.label}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform text-[#C9A86A] duration-300 ${openDropdown === item.label ? "rotate-180" : ""}`}
                        />
                      </button>

                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden flex flex-col gap-1 pl-4 border-l-2 border-[#C9A86A]/30 ml-1 mb-4 mt-1"
                          >
                            {item.children.map((child: any) => (
                              <div key={child.label}>
                                {child.children ? (
                                  <>
                                    <button
                                      onClick={() =>
                                        setOpenSubDropdown(
                                          openSubDropdown === child.label
                                            ? null
                                            : child.label,
                                        )
                                      }
                                      className="flex justify-between items-center py-3 text-base font-medium text-gray-700 w-full text-left"
                                    >
                                      <span>{child.label}</span>
                                      <ChevronDown
                                        className={`w-4 h-4 transition-transform text-gray-400 duration-300 ${openSubDropdown === child.label ? "rotate-180" : ""}`}
                                      />
                                    </button>

                                    <AnimatePresence>
                                      {openSubDropdown === child.label && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{
                                            height: "auto",
                                            opacity: 1,
                                          }}
                                          exit={{ height: 0, opacity: 0 }}
                                          className="overflow-hidden flex flex-col gap-2 pl-4 border-l border-gray-200 ml-1 mt-1 pb-2"
                                        >
                                          {child.children.map(
                                            (subChild: any) => (
                                              <Link
                                                key={subChild.label}
                                                href={subChild.href}
                                                onClick={closeNav}
                                                className="py-2 text-sm text-gray-500 hover:text-[#2F5D50] transition-colors"
                                              >
                                                {subChild.label}
                                              </Link>
                                            ),
                                          )}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </>
                                ) : (
                                  <Link
                                    href={child.href}
                                    onClick={closeNav}
                                    className="block py-3 text-base font-medium text-gray-700 hover:text-[#2F5D50] transition-colors"
                                  >
                                    {child.label}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href as string}
                      onClick={closeNav}
                      className="block py-4 text-2xl text-[#1F3D35] transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Booking Panel */}
            {/* FIXED: Match padding here as well so the container aligns properly */}
            <div className="px-4 md:px-8 py-6 bg-[#FAFAFA] border-t border-gray-100 flex justify-center">
              <div className="w-full">
                <button className="w-full flex items-center justify-center bg-[#0b2f25] text-white py-4 rounded-xl shadow-md font-medium text-base transition-none hover:bg-[#0b2f25] hover:text-white active:bg-[#0b2f25] focus:outline-none">
                  Book Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};





