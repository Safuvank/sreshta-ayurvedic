"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigation } from "./Navigation";
import { Button } from "../../common/Button";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);

  // Helper function to close everything
  const closeNav = () => {
    setIsOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  };

  return (
    <div className="lg:hidden flex items-center">
      <button onClick={() => setIsOpen(true)} className="text-[#2F5D50] p-2">
        <Menu className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              // FIXED: Added brackets to z-[99] and explicitly set width/height
              className="fixed top-0 left-0 w-screen h-[100dvh] bg-black/20 z-[99] backdrop-blur-sm"
              onClick={closeNav}
            />

            {/* Slide Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              // FIXED: Added brackets to z-[100] and changed bottom-0 to h-[100dvh]
              className="fixed right-0 top-0 h-[100dvh] w-[85vw] max-w-sm bg-white z-[100] shadow-2xl overflow-y-auto"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-serif text-[#2F5D50]">
                    Menu
                  </span>
                  <button
                    onClick={closeNav}
                    className="p-2 text-gray-500 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-4 flex-1">
                  {navigation.map((item) => (
                    <div key={item.label}>
                      {item.children ? (
                        <div className="flex flex-col gap-2">
                          {/* First Level Dropdown Button */}
                          <button
                            onClick={() =>
                              setOpenDropdown(
                                openDropdown === item.label ? null : item.label
                              )
                            }
                            className="flex justify-between items-center py-2 text-lg font-medium text-gray-800 w-full"
                          >
                            {item.label}
                            <ChevronDown
                              className={`w-5 h-5 transition-transform ${
                                openDropdown === item.label
                                  ? "rotate-180 text-[#2F5D50]"
                                  : ""
                              }`}
                            />
                          </button>

                          <AnimatePresence>
                            {openDropdown === item.label && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden flex flex-col gap-3 pl-4 border-l-2 border-[#F8F5EF]"
                              >
                                {item.children.map((child: any) => (
                                  <div key={child.label}>
                                    {/* Second Level Dropdown Condition */}
                                    {child.children ? (
                                      <div className="flex flex-col gap-2">
                                        <button
                                          onClick={() =>
                                            setOpenSubDropdown(
                                              openSubDropdown === child.label
                                                ? null
                                                : child.label
                                            )
                                          }
                                          className="flex justify-between items-center py-1.5 text-base font-medium text-gray-700 w-full"
                                        >
                                          {child.label}
                                          <ChevronDown
                                            className={`w-4 h-4 transition-transform ${
                                              openSubDropdown === child.label
                                                ? "rotate-180 text-[#2F5D50]"
                                                : ""
                                            }`}
                                          />
                                        </button>
                                        
                                        <AnimatePresence>
                                          {openSubDropdown === child.label && (
                                            <motion.div
                                              initial={{ height: 0, opacity: 0 }}
                                              animate={{ height: "auto", opacity: 1 }}
                                              exit={{ height: 0, opacity: 0 }}
                                              className="overflow-hidden flex flex-col gap-2 pl-4 border-l-2 border-gray-100 mt-1"
                                            >
                                              {child.children.map((subChild: any) => (
                                                <Link
                                                  key={subChild.label}
                                                  href={subChild.href}
                                                  onClick={closeNav}
                                                  className="py-1.5 text-sm text-gray-500 hover:text-[#2F5D50]"
                                                >
                                                  {subChild.label}
                                                </Link>
                                              ))}
                                            </motion.div>
                                          )}
                                        </AnimatePresence>
                                      </div>
                                    ) : (
                                      /* Standard First Level Link */
                                      <Link
                                        href={child.href}
                                        onClick={closeNav}
                                        className="block py-1.5 text-base text-gray-600 hover:text-[#2F5D50]"
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
                        /* Standard Top Level Link */
                        <Link
                          href={item.href as string}
                          onClick={closeNav}
                          className="block py-2 text-lg font-medium text-gray-800 hover:text-[#2F5D50]"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100">
                  <Button className="w-full justify-center">
                    Book Consultation
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};