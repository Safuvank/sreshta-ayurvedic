


// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { services } from "@/src/data/services";
// import { ArrowLeft } from "lucide-react";
// import { Container } from "@/src/components/common/Container"; 

// // 1. Next.js 15 requires params to be a Promise
// export default async function ServiceDetailPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   // 2. Await the slug
//   const { slug } = await params;

//   // 3. Find the matching service in your data
//   const service = services.find((s) => s.slug === slug);

//   // 4. If someone types a bad URL
//   if (!service) {
//     notFound();
//   }

//   // 5. Render the page using your elegant theme colors (#2F5D50, #C9A86A)
//   return (
//     <main className="min-h-screen bg-white pt-8 pb-20">
//       {/* Replaced the margin div with your Container component */}
//       <Container>
        
//         {/* Back Button */}
//         <Link
//           href="/services"
//           className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-[#C9A86A] uppercase hover:text-[#2F5D50] transition-colors mb-12"
//         >
//           <ArrowLeft className="w-4 h-4" />
//           Back to Services
//         </Link>

//         <div className="grid lg:grid-cols-2 gap-16 items-start">
//           {/* Left Column: Image */}
//           <div className="relative h-[400px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden bg-[#F8F5EF]">
//             <Image
//               src={service.image}
//               alt={service.title}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>

//           {/* Right Column: Content */}
//           <div className="flex flex-col justify-center h-full">
//             <h1 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6">
//               {service.title}
//             </h1>

//             <p className="text-xl text-gray-500 leading-relaxed mb-10">
//               {/* Fallback to normal description if longDescription doesn't exist */}
//               {service.longDescription || service.description}
//             </p>

//             {/* Optional: Render Benefits if they exist in your data */}
//             {service.benefits && (
//               <div className="mb-12">
//                 <h3 className="text-sm font-bold tracking-widest uppercase text-[#2F5D50] mb-6">
//                   Key Benefits
//                 </h3>
//                 <ul className="space-y-4">
//                   {service.benefits.map((benefit, index) => (
//                     <li
//                       key={index}
//                       className="flex items-center gap-4 text-gray-600"
//                     >
//                       <div className="w-2 h-2 rounded-full bg-[#C9A86A]" />
//                       {benefit}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {/* CTA Button */}
//             <button className="bg-[#2F5D50] text-white px-10 py-5 rounded-2xl w-fit font-medium hover:bg-[#1a3830] transition-colors shadow-lg shadow-[#2F5D50]/20">
//               Book this treatment
//             </button>
//           </div>
//         </div>
//       </Container>
//     </main>
//   );
// }

// // 6. Generate static routes for maximum performance
// export function generateStaticParams() {
//   return services.map((service) => ({
//     slug: service.slug,
//   }));
// }



import { notFound } from "next/navigation";
import { services } from "@/src/data/services";
import { ServiceDetailHero } from "@/src/components/pages/services/services-detail-page/ServiceDetailHero";
// import { AboutCTA } from "@/src/components/pages/about/AboutCTA"; // Optional: Add your CTA to the bottom of detail pages too!

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* 1. The Reusable Details Component */}
      <ServiceDetailHero service={service} />
      
      {/* 2. You can easily add other modular sections here now! */}
      {/* <AboutCTA /> */}
    </main>
  );
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}