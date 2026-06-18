// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { navigation } from "./Navigation";
// import { Button } from "../../common/Button";

// export const MobileNav = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);

//   const closeNav = () => {
//     setIsOpen(false);
//     setOpenDropdown(null);
//     setOpenSubDropdown(null);
//   };

//   return (
//     <div className="lg:hidden flex items-center relative z-[101]">
//       <button
//         onClick={() => setIsOpen(true)}
//         className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white shadow-sm"
//       >
//         <Menu className="w-5 h-5" />
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <>
//             {/* Blur Backdrop */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 w-screen h-[100dvh] bg-black/40 z-[99] backdrop-blur-sm"
//               onClick={closeNav}
//             />

//             {/* Premium Drawer */}
//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//               className="fixed right-0 top-0 h-[100dvh] w-[90vw] max-w-sm bg-white z-[100] shadow-2xl flex flex-col"
//             >
//               <div className="p-6 flex justify-between items-center border-b border-gray-100">
//                 {/* <span className="text-sm font-bold tracking-[0.2em] text-[#C9A86A] uppercase">
//                   Menu
//                 </span> */}
//                 <button
//                   onClick={closeNav}
//                   className="p-2 text-gray-400 hover:text-[#1F3D35] hover:bg-gray-100 rounded-full transition-colors"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>
//               </div>

//               <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-2">
//                 {navigation.map((item) => (
//                   <div key={item.label} className="border-b border-gray-50 pb-2">
//                     {item.children ? (
//                       <div className="flex flex-col">
//                         <button
//                           onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
//                           className="flex justify-between items-center py-4 text-xl text-[#1F3D35] w-full text-left"
//                         >
//                           {item.label}
//                           <ChevronDown className={`w-5 h-5 transition-transform text-[#C9A86A] ${openDropdown === item.label ? "rotate-180" : ""}`} />
//                         </button>

//                         <AnimatePresence>
//                           {openDropdown === item.label && (
//                             <motion.div
//                               initial={{ height: 0, opacity: 0 }}
//                               animate={{ height: "auto", opacity: 1 }}
//                               exit={{ height: 0, opacity: 0 }}
//                               className="overflow-hidden flex flex-col gap-2 pl-4 border-l-2 border-[#C9A86A]/20 ml-2 mb-4"
//                             >
//                               {item.children.map((child: any) => (
//                                 <div key={child.label}>
//                                   {child.children ? (
//                                     <>
//                                       <button
//                                         onClick={() => setOpenSubDropdown(openSubDropdown === child.label ? null : child.label)}
//                                         className="flex justify-between items-center py-3 text-base font-medium text-gray-700 w-full text-left"
//                                       >
//                                         {child.label}
//                                         <ChevronDown className={`w-4 h-4 transition-transform text-gray-400 ${openSubDropdown === child.label ? "rotate-180" : ""}`} />
//                                       </button>
//                                       <AnimatePresence>
//                                         {openSubDropdown === child.label && (
//                                           <motion.div
//                                             initial={{ height: 0, opacity: 0 }}
//                                             animate={{ height: "auto", opacity: 1 }}
//                                             exit={{ height: 0, opacity: 0 }}
//                                             className="overflow-hidden flex flex-col gap-2 pl-4 border-l border-gray-200 ml-2 mt-1"
//                                           >
//                                             {child.children.map((subChild: any) => (
//                                               <Link
//                                                 key={subChild.label}
//                                                 href={subChild.href}
//                                                 onClick={closeNav}
//                                                 className="py-2 text-sm text-gray-500 hover:text-[#2F5D50]"
//                                               >
//                                                 {subChild.label}
//                                               </Link>
//                                             ))}
//                                           </motion.div>
//                                         )}
//                                       </AnimatePresence>
//                                     </>
//                                   ) : (
//                                     <Link
//                                       href={child.href}
//                                       onClick={closeNav}
//                                       className="block py-3 text-base font-medium text-gray-700 hover:text-[#2F5D50]"
//                                     >
//                                       {child.label}
//                                     </Link>
//                                   )}
//                                 </div>
//                               ))}
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     ) : (
//                       <Link
//                         href={item.href as string}
//                         onClick={closeNav}
//                         className="block py-4 text-xl text-[#1F3D35] hover:text-[#C9A86A]"
//                       >
//                         {item.label}
//                       </Link>
//                     )}
//                   </div>
//                 ))}
//               </div>

//               {/* Bottom Sticky Action Area */}
//               <div className="p-6 bg-[#FAFAFA] border-t border-gray-100">
//                 <Button className="w-full justify-center bg-[#1F3D35] text-white hover:bg-[#C9A86A]">
//                   Book Consultation
//                 </Button>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ChevronDown } from "lucide-react"; // Removed 'Menu' from imports
// import { navigation } from "./Navigation"; // Adjust path to your data file
// import { Button } from "../../common/Button"; // Adjust path if needed

// export const MobileNav = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);

//   const closeNav = () => {
//     setIsOpen(false);
//     setOpenDropdown(null);
//     setOpenSubDropdown(null);
//   };

//   return (
//     <div className="lg:hidden flex items-center relative z-[101]">

//       {/* --- MODERN PREMIUM MENU TRIGGER --- */}
//       <button
//         onClick={() => setIsOpen(true)}
//         className="group flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white shadow-sm hover:bg-white/20 transition-all duration-300"
//       >
//         {/* <span className="text-xs font-bold tracking-[0.15em] uppercase mt-[1px]">
//           Menu
//         </span> */}
//         {/* Custom Asymmetrical Animated Icon */}
//         <div className="flex flex-col items-end gap-[5px]">
//           <span className="w-5 h-[2px] bg-white rounded-full transition-all duration-300 group-hover:w-4" />
//           <span className="w-3 h-[2px] bg-white rounded-full transition-all duration-300 group-hover:w-5" />
//         </div>
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <>
//             {/* Blur Backdrop */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 w-screen h-[100dvh] bg-black/40 z-[99] backdrop-blur-sm"
//               onClick={closeNav}
//             />

//             {/* Premium Drawer */}
//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//               className="fixed right-0 top-0 h-[100dvh] w-[90vw] max-w-sm bg-white z-[100] shadow-2xl flex flex-col"
//             >
//               <div className="p-6 flex justify-between items-center border-b border-gray-100">
//                 <span className="text-sm font-bold tracking-[0.2em] text-[#C9A86A] uppercase">
//                   Menu
//                 </span>
//                 <button
//                   onClick={closeNav}
//                   className="p-2 text-gray-400 hover:text-[#1F3D35] hover:bg-gray-100 rounded-full transition-colors"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>
//               </div>

//               <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-2">
//                 {navigation.map((item) => (
//                   <div key={item.label} className="border-b border-gray-50 pb-2">
//                     {item.children ? (
//                       <div className="flex flex-col">
//                         <button
//                           onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
//                           className="flex justify-between items-center py-4 text-xl text-[#1F3D35] w-full text-left"
//                         >
//                           {item.label}
//                           <ChevronDown className={`w-5 h-5 transition-transform text-[#C9A86A] ${openDropdown === item.label ? "rotate-180" : ""}`} />
//                         </button>

//                         <AnimatePresence>
//                           {openDropdown === item.label && (
//                             <motion.div
//                               initial={{ height: 0, opacity: 0 }}
//                               animate={{ height: "auto", opacity: 1 }}
//                               exit={{ height: 0, opacity: 0 }}
//                               className="overflow-hidden flex flex-col gap-2 pl-4 border-l-2 border-[#C9A86A]/20 ml-2 mb-4"
//                             >
//                               {item.children.map((child: any) => (
//                                 <div key={child.label}>
//                                   {child.children ? (
//                                     <>
//                                       <button
//                                         onClick={() => setOpenSubDropdown(openSubDropdown === child.label ? null : child.label)}
//                                         className="flex justify-between items-center py-3 text-base font-medium text-gray-700 w-full text-left"
//                                       >
//                                         {child.label}
//                                         <ChevronDown className={`w-4 h-4 transition-transform text-gray-400 ${openSubDropdown === child.label ? "rotate-180" : ""}`} />
//                                       </button>
//                                       <AnimatePresence>
//                                         {openSubDropdown === child.label && (
//                                           <motion.div
//                                             initial={{ height: 0, opacity: 0 }}
//                                             animate={{ height: "auto", opacity: 1 }}
//                                             exit={{ height: 0, opacity: 0 }}
//                                             className="overflow-hidden flex flex-col gap-2 pl-4 border-l border-gray-200 ml-2 mt-1"
//                                           >
//                                             {child.children.map((subChild: any) => (
//                                               <Link
//                                                 key={subChild.label}
//                                                 href={subChild.href}
//                                                 onClick={closeNav}
//                                                 className="py-2 text-sm text-gray-500 hover:text-[#2F5D50]"
//                                               >
//                                                 {subChild.label}
//                                               </Link>
//                                             ))}
//                                           </motion.div>
//                                         )}
//                                       </AnimatePresence>
//                                     </>
//                                   ) : (
//                                     <Link
//                                       href={child.href}
//                                       onClick={closeNav}
//                                       className="block py-3 text-base font-medium text-gray-700 hover:text-[#2F5D50]"
//                                     >
//                                       {child.label}
//                                     </Link>
//                                   )}
//                                 </div>
//                               ))}
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     ) : (
//                       <Link
//                         href={item.href as string}
//                         onClick={closeNav}
//                         className="block py-4 text-xl text-[#1F3D35] hover:text-[#C9A86A]"
//                       >
//                         {item.label}
//                       </Link>
//                     )}
//                   </div>
//                 ))}
//               </div>

//               {/* Bottom Sticky Action Area */}
//               <div className="p-6 bg-[#FAFAFA] border-t border-gray-100">
//                 <Button className="w-full justify-center bg-[#1F3D35] text-white hover:bg-[#C9A86A]">
//                   Book Consultation
//                 </Button>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { navigation } from "./Navigation"; // Adjust path to your data file

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
        className={`fixed top-5 right-4 md:right-8 z-[101] flex items-center justify-center w-11 h-11 backdrop-blur-md border rounded-xl shadow-sm transition-all duration-500 ${
          isOpen
            ? "bg-[#1F3D35]/5 border-[#1F3D35]/10 text-[#1F3D35]"
            : "bg-white/10 border-white/20 text-white hover:bg-white/20"
        }`}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {/* Custom Asymmetrical Morphing Lines */}
        <div className="flex flex-col items-end justify-center gap-[5px] w-5 h-4 relative">
          <motion.span
            animate={
              isOpen
                ? { rotate: 45, y: 4, width: "20px" }
                : { rotate: 0, y: 0, width: "20px" }
            }
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`h-[2px] rounded-full transition-colors duration-500 ${isOpen ? "bg-[#1F3D35]" : "bg-white"}`}
          />
          <motion.span
            animate={
              isOpen
                ? { rotate: -45, y: -3, width: "20px" }
                : { rotate: 0, y: 0, width: "12px" }
            }
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`h-[2px] rounded-full transition-colors duration-500 ${isOpen ? "bg-[#1F3D35]" : "bg-white"}`}
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
                  width={140}
                  height={35}
                  priority
                  className="object-contain opacity-90"
                />
              </Link>
            </div>

            {/* Scrollable Links Container */}
            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-2 max-w-md mx-auto w-full">
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
            <div className="p-6 bg-[#FAFAFA] border-t border-gray-100 flex justify-center">
              <div className="max-w-md w-full">
                {/* UPDATED ELEMENT BELOW: Replaced custom component with HTML5 button 
                  and stripped any active hover modifications to retain precise coloring.
                */}
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
