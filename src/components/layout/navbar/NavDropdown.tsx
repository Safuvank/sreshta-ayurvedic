// // "use client";

// // import { useState } from "react";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { ChevronDown, ChevronRight } from "lucide-react";

// // export const NavDropdown = ({ item }: { item: any }) => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const pathname = usePathname();

// //   // Check if any child route (or nested sub-child route) is active
// //   const isActive = item.children.some((child: any) => {
// //     if (child.children) {
// //       return child.children.some((subChild: any) => pathname === subChild.href);
// //     }
// //     return pathname === child.href;
// //   });

// //   return (
// //     <div
// //       className="relative"
// //       onMouseEnter={() => setIsOpen(true)}
// //       onMouseLeave={() => setIsOpen(false)}
// //     >
// //       <button
// //         className={`flex items-center gap-1 py-2 transition-colors ${
// //           isActive || isOpen
// //             ? "text-white"
// //             : "text-white"
// //         }`}
// //       >
// //         {item.label}
// //         <ChevronDown
// //           className={`w-4 h-4 transition-transform duration-200 ${
// //             isOpen ? "rotate-180" : ""
// //           }`}
// //         />
// //       </button>

// //       <AnimatePresence>
// //         {isOpen && (
// //           <motion.div
// //             initial={{ opacity: 0, y: 10 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: 10 }}
// //             transition={{ duration: 0.2 }}
// //             className="absolute top-full left-0 mt-3 w-72 rounded-2xl bg-white shadow-xl p-3 flex flex-col gap-1 border border-gray-100"
// //           >
// //             {item.children.map((child: any) => {
// //               // If the child has its own children, render a nested dropdown (Flyout)
// //               if (child.children) {
// //                 return (
// //                   <NestedDropdown
// //                     key={child.label}
// //                     child={child}
// //                     pathname={pathname}
// //                   />
// //                 );
// //               }

// //               // Otherwise, render a standard link
// //               const isChildActive = pathname === child.href;
// //               return (
// //                 <Link
// //                   key={child.label}
// //                   href={child.href}
// //                   className={`px-4 py-2.5 rounded-xl transition-all ${
// //                     isChildActive
// //                       ? "bg-[#F8F5EF] border-b text-[#2F5D50] font-medium"
// //                       : "text-gray-600 hover:bg-[#F8F5EF]/50 hover:text-[#2F5D50]"
// //                   }`}
// //                 >
// //                   {child.label}
// //                 </Link>
// //               );
// //             })}
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // };

// // // Sub-component for the nested flyout menu
// // const NestedDropdown = ({ child, pathname }: { child: any; pathname: string }) => {
// //   const [isSubOpen, setIsSubOpen] = useState(false);
// //   const isSubActive = child.children.some(
// //     (subChild: any) => pathname === subChild.href
// //   );

// //   return (
// //     <div
// //       className="relative"
// //       onMouseEnter={() => setIsSubOpen(true)}
// //       onMouseLeave={() => setIsSubOpen(false)}
// //     >
// //       <button
// //         className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl transition-all ${
// //           isSubActive || isSubOpen
// //             ? "bg-[#F8F5EF] text-[#2F5D50] font-medium"
// //             : "text-gray-600 hover:bg-[#F8F5EF]/50 hover:text-[#2F5D50]"
// //         }`}
// //       >
// //         {child.label}
// //         <ChevronRight
// //           className={`w-4 h-4 text-gray-400 transition-transform ${
// //             isSubOpen ? "translate-x-1 text-[#2F5D50]" : ""
// //           }`}
// //         />
// //       </button>

// //       <AnimatePresence>
// //         {isSubOpen && (
// //           <motion.div
// //             initial={{ opacity: 0, x: 10, y: -10 }}
// //             animate={{ opacity: 1, x: 0, y: 0 }}
// //             exit={{ opacity: 0, x: 10, y: -10 }}
// //             transition={{ duration: 0.2 }}
// //             className="absolute top-0 left-full ml-1 w-64 rounded-2xl bg-white shadow-xl p-3 flex flex-col gap-1 border border-gray-100"
// //           >
// //             {child.children.map((subChild: any) => {
// //               const isLinkActive = pathname === subChild.href;
// //               return (
// //                 <Link
// //                   key={subChild.label}
// //                   href={subChild.href}
// //                   className={`px-4 py-2.5 rounded-xl transition-all ${
// //                     isLinkActive
// //                       ? "bg-[#F8F5EF] text-[#2F5D50] font-medium"
// //                       : "text-gray-600 hover:bg-[#F8F5EF]/50 hover:text-[#2F5D50]"
// //                   }`}
// //                 >
// //                   {subChild.label}
// //                 </Link>
// //               );
// //             })}
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // };




// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, ArrowRight,Sparkles } from "lucide-react";

// export const NavDropdown = ({ item }: { item: any }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   // Check if any child route (or nested sub-child route) is active
//   const isActive = item.children.some((child: any) => {
//     if (child.children) {
//       return child.children.some((subChild: any) => pathname === subChild.href);
//     }
//     return pathname === child.href;
//   });

//   // Determine if this dropdown should be a wide Mega Menu (has nested columns)
//   const isMegaMenu = item.children.some((child: any) => child.children);

//   return (
//     <div
//       className="relative"
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => setIsOpen(false)}
//     >
//       <button
//         className={`flex items-center gap-1 py-6 transition-colors ${
//           isActive || isOpen ? "text-white" : "text-gray-300 hover:text-white"
//         }`}
//       >
//         {item.label}
//         <ChevronDown
//           className={`w-4 h-4 transition-transform duration-300 ${
//             isOpen ? "rotate-180 text-white" : "text-gray-400"
//           }`}
//         />
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 15, scale: 0.98 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 10, scale: 0.98 }}
//             transition={{ duration: 0.2, ease: "easeOut" }}
//             className={`absolute top-full mt-2 rounded-[1.5rem] bg-[#0A0A0A] border border-white/10 shadow-2xl overflow-hidden flex ${
//               isMegaMenu ? "-left-48 lg:-left-64 w-max" : "left-0 w-64"
//             }`}
//           >
            
//             {/* LEFT SIDE: Links Area */}
//             <div
//               className={`p-8 ${
//                 isMegaMenu
//                   ? "grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-10"
//                   : "flex flex-col gap-2"
//               }`}
//             >
//               {item.children.map((child: any, index: number) => {
                
//                 // --- MEGA MENU COLUMN ---
//                 if (child.children) {
//                   return (
//                     <div key={child.label} className="flex flex-col min-w-[180px]">
//                       <h4 className="text-[11px] font-semibold tracking-[0.15em] text-gray-500 uppercase mb-5">
//                         {child.label}
//                       </h4>
//                       <div className="flex flex-col gap-4">
//                         {child.children.map((subChild: any, subIndex: number) => {
//                           const isSubActive = pathname === subChild.href;
//                           // Generate dynamic colors for icons to mimic the Velt UI
//                           // const colors = ["bg-purple-500", "bg-blue-500", "bg-emerald-500", "bg-amber-500", "bg-rose-500"];
//                           // const dotColor = colors[(index + subIndex) % colors.length];

//                           return (
//                             <Link
//                               key={subChild.label}
//                               href={subChild.href}
//                               className={`group flex items-center gap-3 text-sm transition-all duration-300 ${
//                                 isSubActive ? "text-white font-medium" : "text-gray-400 hover:text-white"
//                               }`}
//                             >
//                               <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center group-hover:bg-white/[0.08] transition-colors">
//                                 <div className={`w-2 h-2 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]`} />
//                               </div>
//                               {subChild.label}
//                             </Link>
//                           );
//                         })}
//                       </div>
//                     </div>
//                   );
//                 }

//                 // --- STANDARD LINK (Inside Mega Menu or Standard Dropdown) ---
//                 const isChildActive = pathname === child.href;
//                 return (
//                   <Link
//                     key={child.label}
//                     href={child.href}
//                     className={`group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
//                       isChildActive
//                         ? "bg-white/10 text-white"
//                         : "text-gray-400 hover:bg-white/[0.05] hover:text-white"
//                     } ${isMegaMenu ? "col-span-1" : ""}`}
//                   >
//                     <span className="flex items-center gap-3 text-sm font-medium">
//                       {isMegaMenu && (
//                         <Sparkles className="w-4 h-4 text-[#C9A86A]" />
//                       )}
//                       {child.label}
//                     </span>
//                     {!isMegaMenu && (
//                       <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
//                     )}
//                   </Link>
//                 );
//               })}
//             </div>

//             {/* RIGHT SIDE: Featured Panel (Only visible if Mega Menu) */}
//             {/* {isMegaMenu && (
//               <div className="hidden lg:flex flex-col justify-center w-[320px] bg-white/[0.02] border-l border-white/10 p-8 relative overflow-hidden">
//                 {/* Decorative background glow */}
//                 {/* <div className="absolute top-0 right-0 w-64 h-64 bg-[#2F5D50]/20 rounded-full blur-[80px] pointer-events-none" />

//                 <div className="w-full h-40 bg-[#0A0A0A] rounded-xl mb-6 border border-white/10 relative flex items-center justify-center shadow-inner overflow-hidden group">
//                    <div className="absolute inset-0 bg-[url('/images/hospital-exterior.jpg')] bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-110" />
//                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
//                    <span className="relative z-10 px-3 py-1 bg-black/60 backdrop-blur-md rounded-md text-[10px] font-bold tracking-widest uppercase text-white border border-white/20">
//                      Premium Facility
//                    </span>
//                 </div> */}
                
//                 {/* <h4 className="text-white font-medium mb-2 text-lg">Advanced Ayurvedic Care</h4>
//                 <p className="text-sm text-gray-500 mb-6 leading-relaxed">
//                   Personalize your holistic wellness experience with our dedicated experts and authentic therapies.
//                 </p>
                
//                 <div className="flex gap-3 relative z-10">
//                   <Link 
//                     href="/about"
//                     className="flex-1 text-center px-4 py-2.5 text-xs font-semibold bg-white/[0.05] text-white border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
//                   >
//                     Learn More
//                   </Link>
//                   <Link 
//                     href="/contact"
//                     className="flex-1 text-center px-4 py-2.5 text-xs font-semibold bg-[#2F5D50] text-white rounded-lg hover:bg-[#24483E] shadow-lg shadow-[#2F5D50]/20 transition-all"
//                   >
//                     Book Demo
//                   </Link>
//                 </div>
//               </div>
//             )} */}
            
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };



"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

export const NavDropdown = ({ item }: { item: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = item.children.some((child: any) => {
    if (child.children) return child.children.some((subChild: any) => pathname === subChild.href);
    return pathname === child.href;
  });

  const isMegaMenu = item.children.some((child: any) => child.children);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex items-center gap-1.5 py-6 text-sm lg:text-base font-medium transition-colors hover:text-[#C9A86A] ${
          isActive ? "text-[#C9A86A]" : "text-white"
        }`}
      >
        {item.label}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#C9A86A]" : "opacity-70"
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`absolute top-full mt-0 bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex ${
              isMegaMenu ? "-left-[200px] w-max max-w-[800px]" : "left-0 w-64"
            }`}
          >
            <div
              className={`p-8 ${
                isMegaMenu
                  ? "grid grid-cols-2 md:grid-cols-3 gap-10"
                  : "flex flex-col gap-2"
              }`}
            >
              {item.children.map((child: any) => {
                
                // --- MEGA MENU COLUMN ---
                if (child.children) {
                  return (
                    <div key={child.label} className="flex flex-col min-w-[200px]">
                      <h4 className="text-xs font-bold tracking-[0.2em] text-[#C9A86A] uppercase mb-4 border-b border-gray-100 pb-2">
                        {child.label}
                      </h4>
                      <div className="flex flex-col gap-2">
                        {child.children.map((subChild: any) => {
                          const isSubActive = pathname === subChild.href;
                          return (
                            <Link
                              key={subChild.label}
                              href={subChild.href}
                              className={`group flex items-center text-sm transition-all duration-300 py-1.5 ${
                                isSubActive ? "text-[#2F5D50] font-semibold" : "text-gray-600 hover:text-[#2F5D50] hover:translate-x-1"
                              }`}
                            >
                              {subChild.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                // --- STANDARD LINK ---
                const isChildActive = pathname === child.href;
                return (
                  <div key={child.label} className={isMegaMenu ? "flex flex-col min-w-[200px]" : ""}>
                     {isMegaMenu && (
                        <h4 className="text-xs font-bold tracking-[0.2em] text-[#C9A86A] uppercase mb-4 border-b border-gray-100 pb-2">
                          Quick Links
                        </h4>
                     )}
                    <Link
                      href={child.href}
                      className={`group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                        isChildActive
                          ? "bg-[#F8F5EF] text-[#2F5D50] font-medium"
                          : "text-gray-700 hover:bg-[#F8F5EF]/60 hover:text-[#2F5D50]"
                      }`}
                    >
                      <span className="text-sm font-medium">{child.label}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#2F5D50]" />
                    </Link>
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