// import { Clock } from "lucide-react";
// import { workingHours } from "@/src/data/contact";
// import { Container } from "lucide-react";

// export const WorkingHours = () => {
//   return (
//     <section className="py-20 bg-[#84672d]">
//       <Container>
//         <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-xl shadow-gray-100/50">
//           <div className="text-center mb-12">
//             <div className="w-16 h-16 bg-[#F8F5EF] rounded-full flex items-center justify-center text-[#C9A86A] mx-auto mb-6">
//               <Clock className="w-8 h-8" />
//             </div>
//             <h2 className="font-serif text-3xl md:text-4xl text-gray-900">
//               Working Hours
//             </h2>
//             <p className="mt-4 text-gray-600">
//               Plan your visit according to our schedule.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
//             {workingHours.map((schedule, index) => (
//               <div
//                 key={index}
//                 className={`flex justify-between items-center pb-4 ${
//                   index !== workingHours.length - 1 &&
//                   index !== workingHours.length - 2
//                     ? "border-b border-gray-100"
//                     : "border-b md:border-0 border-gray-100"
//                 }`}
//               >
//                 <span className="font-medium text-gray-800">
//                   {schedule.day}
//                 </span>
//                 <span
//                   className={`text-sm font-medium ${schedule.time.includes("Closed") ? "text-red-500" : "text-[#2F5D50]"}`}
//                 >
//                   {schedule.time}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };
