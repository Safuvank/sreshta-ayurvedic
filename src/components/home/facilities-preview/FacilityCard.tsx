// import Image from "next/image";

// interface FacilityCardProps {
//   title: string;
//   description: string;
//   image: string;
// }

// export const FacilityCard = ({ title, description, image }: FacilityCardProps) => {
//   return (
//     <article className="group overflow-hidden rounded-[2rem] bg-white shadow-sm border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
//       <div className="relative h-64 overflow-hidden">
//         <Image
//           src={image}
//           alt={title}
//           fill
//           className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//         />
//       </div>

//       <div className="p-8">
//         <h4 className="font-serif text-xl text-gray-900 transition-colors duration-300 group-hover:text-[#2F5D50]">
//           {title}
//         </h4>
//         <p className="mt-3 text-gray-600 leading-relaxed">
//           {description}
//         </p>
//       </div>
//     </article>
//   );
// };