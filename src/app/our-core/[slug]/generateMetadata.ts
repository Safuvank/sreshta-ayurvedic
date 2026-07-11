// import type { Metadata } from "next";
// import { ourCoreData } from "@/src/data/specializations-core";

// const BASE_URL = "https://www.sreshta.org";

// type Props = {
//   params: Promise<{
//     slug: string;
//   }>;
// };

// export async function generateMetadata({
//   params,
// }: Props): Promise<Metadata> {
//   const { slug } = await params;

//   const specialization = ourCoreData.find(
//     (item) => item.slug === slug
//   );

//   if (!specialization) {
//     return {
//       title: "Treatment Not Found | Sreshta Ayurveda Hospital",
//       description: "The requested treatment page could not be found.",
//     };
//   }

//   return {
//     title: `${specialization.title} | Ayurvedic Treatment | Sreshta Ayurveda Hospital`,

//     description: specialization.description,

//     keywords: [
//       specialization.title,
//       "Ayurvedic Treatment",
//       "Kerala Ayurveda",
//       "Holistic Healing",
//       "Natural Medicine",
//     ],

//     alternates: {
//       canonical: `${BASE_URL}/our-core/${specialization.slug}`,
//     },

//     openGraph: {
//       title: `${specialization.title} | Sreshta Ayurveda Hospital`,
//       description: specialization.description,
//       url: `${BASE_URL}/our-core/${specialization.slug}`,
//       siteName: "Sreshta Ayurveda Hospital",
//       type: "article",
//       locale: "en_IN",
//       images: [
//         {
//           url: specialization.image,
//           width: 1200,
//           height: 630,
//           alt: specialization.title,
//         },
//       ],
//     },

//     twitter: {
//       card: "summary_large_image",
//       title: specialization.title,
//       description: specialization.description,
//       images: [specialization.image],
//     },

//     robots: {
//       index: true,
//       follow: true,
//     },
//   };
// }