// "use client";

// import { useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { ourCoreData } from "@/src/data/specializations-core";
// import { OurCoreCard } from "./OurCoreCard";
// import { Container } from "../../common/Container";

// export const OurCoreCarousel = () => {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   const handleScroll = (direction: "left" | "right") => {
//     if (scrollContainerRef.current) {
//       const container = scrollContainerRef.current;
//       // Find the width of the first card to know exactly how far to scroll
//       const card = container.firstElementChild as HTMLElement;

//       if (card) {
//         // card.offsetWidth + gap (20px or 1.25rem)
//         const scrollAmount = card.offsetWidth + 20;
//         const targetScroll =
//           direction === "left" ? -scrollAmount : scrollAmount;

//         container.scrollBy({ left: targetScroll, behavior: "smooth" });
//       }
//     }
//   };

//   return (
//     <section className="py-12 md:py-24 bg-[#FCFAF5] overflow-hidden">
//       <Container>
//         {/* Section Heading matching the image */}
//         <h2 className="text-[2rem] md:text-5xl font-serif text-gray-900 mb-8 md:mb-16 text-center leading-tight">
//           Conditions supported <br className="block md:hidden" /> by Panchakarma
//         </h2>

//         {/* Carousel Container */}
//         <div
//           ref={scrollContainerRef}
//           className="
//             flex gap-5 md:gap-6
//             overflow-x-auto
//             snap-x snap-mandatory
//             pb-4 md:pb-8
//             /* Hide scrollbar across different browsers */
//             [&::-webkit-scrollbar]:hidden
//             [-ms-overflow-style:none]
//             [scrollbar-width:none]
//           "
//         >
//           {ourCoreData.map((item) => (
//             <OurCoreCard
//               key={item.id}
//               {...item}
//               // w-[85vw] creates the "peek" effect on mobile
//               className="w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center md:snap-start"
//             />
//           ))}
//         </div>

//         {/* Navigation Controls
//           Positioned bottom-left on mobile to match your design image,
//           centered on desktop.
//         */}
//         <div className="flex justify-start md:justify-center items-center gap-4 mt-6 md:mt-2 px-1">
//           <button
//             onClick={() => handleScroll("left")}
//             className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full border border-gray-600 text-gray-800 transition-colors hover:bg-gray-900 hover:border-gray-900 hover:text-white"
//             aria-label="Scroll left"
//           >
//             <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
//           </button>

//           <button
//             onClick={() => handleScroll("right")}
//             className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full border border-gray-600 text-gray-800 transition-colors hover:bg-gray-900 hover:border-gray-900 hover:text-white"
//             aria-label="Scroll right"
//           >
//             <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
//           </button>
//         </div>
//       </Container>
//     </section>
//   );
// };
