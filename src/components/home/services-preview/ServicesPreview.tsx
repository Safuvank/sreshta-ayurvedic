// import { Container } from "../../common/Container";
// import { SectionHeading } from "../../common/SectionHeading";
// import { ServicePreviewGrid } from "./ServicesPreviewGrid";

// export const ServicesPreview = () => {
//   return (
//     <section className="relative py-10 lg:py-20 bg-white overflow-hidden">
//       {/* Decorative Background Element (Optional - adds premium feel) */}
//       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F8F5EF] rounded-xl blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />

//       <Container>
//         <SectionHeading
//           eyebrow="Our Expertise"
//           title="Holistic Ayurvedic Solutions"
//         />

//         <div className="mt-16 lg:mt-24">
//           <ServicePreviewGrid />
//         </div>
//       </Container>
//     </section>
//   );
// };




import Link from "next/link";
import { Container } from "../../common/Container";
import { SectionHeading } from "../../common/SectionHeading";
import { ServicePreviewGrid } from "./ServicesPreviewGrid";

export const ServicesPreview = () => {
  return (
    <section className="relative py-10 lg:py-20 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F8F5EF] rounded-xl blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />

      <Container>
        <SectionHeading
          eyebrow="Our Expertise"
          title="Holistic Ayurvedic Solutions"
        />

        <div className="mt-16 lg:mt-24">
          {/* Pass the limit prop here */}
          <ServicePreviewGrid limit={3} />
        </div>

        {/* New "View All Services" Button */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/services"
            className="group relative inline-flex items-center justify-center gap-3 bg-[#2F5D50] text-white px-8 py-4 rounded-full font-medium overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10">View All Services</span>
            <div className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-[#1a3830] scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

