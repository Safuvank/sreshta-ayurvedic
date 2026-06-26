// import { MapPin, Phone, Mail, AlertCircle } from "lucide-react";
// import { contactInfo } from "@/src/data/contact";

// export const ContactInfo = () => {
//   return (
//     <div className="flex flex-col h-full bg-white p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm">
//       <h2 className="font-serif text-3xl md:text-4xl text-[#2F5D50] mb-10">
//         Direct <span className="italic text-[#C9A86A]">Contact</span>
//       </h2>

//       <div className="space-y-8 flex-1">
//         <div className="flex gap-5 group">
//           <div className="w-14 h-14 rounded-2xl bg-[#F8F5EF] flex items-center justify-center text-[#2F5D50] flex-shrink-0 group-hover:bg-[#2F5D50] group-hover:text-[#C9A86A] transition-colors duration-300">
//             <MapPin className="w-6 h-6" />
//           </div>
//           <div>
//             <h4 className="font-serif text-xl text-gray-900 mb-2">
//               Hospital Address
//             </h4>
//             <p className="text-gray-500 font-light leading-relaxed">
//               {contactInfo.hospitalName}
//               <br />
//               {contactInfo.address}
//             </p>
//           </div>
//         </div>

//         <div className="flex gap-5 group">
//           <div className="w-14 h-14 rounded-2xl bg-[#F8F5EF] flex items-center justify-center text-[#2F5D50] flex-shrink-0 group-hover:bg-[#2F5D50] group-hover:text-[#C9A86A] transition-colors duration-300">
//             <Phone className="w-6 h-6" />
//           </div>
//           <div>
//             <h4 className="font-serif text-xl text-gray-900 mb-2">
//               Contact Numbers
//             </h4>
//             <p className="text-gray-500 font-light">{contactInfo.phone}</p>
//             <p className="text-gray-500 font-light">
//               {contactInfo.whatsapp}{" "}
//               <span className="text-xs uppercase tracking-wider text-[#C9A86A] ml-1">
//                 WhatsApp
//               </span>
//             </p>
//           </div>
//         </div>

//         <div className="flex gap-5 group">
//           <div className="w-14 h-14 rounded-2xl bg-[#F8F5EF] flex items-center justify-center text-[#2F5D50] flex-shrink-0 group-hover:bg-[#2F5D50] group-hover:text-[#C9A86A] transition-colors duration-300">
//             <Mail className="w-6 h-6" />
//           </div>
//           <div>
//             <h4 className="font-serif text-xl text-gray-900 mb-2">
//               Email Address
//             </h4>
//             <p className="text-gray-500 font-light">{contactInfo.email}</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-12 p-6 bg-red-50/50 rounded-2xl border border-red-100 flex items-start gap-4">
//         <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
//         <div>
//           <h4 className="font-bold text-gray-900">Emergency Contact</h4>
//           <p className="text-gray-500 font-light text-sm mt-1">
//             For urgent medical assistance, please call immediately.
//           </p>
//           {/* <p className="font-serif text-red-600 text-2xl mt-2">{contactInfo.emergenc  yPhone}</p> */}
//         </div>
//       </div>
//     </div>
//   );
// };
