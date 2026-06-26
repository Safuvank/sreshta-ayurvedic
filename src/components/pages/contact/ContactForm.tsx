

// // "use client";

// // import { Send } from "lucide-react";

// // export const ContactForm = () => {
// //   return (
// //     <div className="bg-white p-8 md:p-12 lg:p-14 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(47,93,80,0.08)] border border-gray-100">
// //       <h3 className="font-serif text-3xl md:text-4xl text-[#2F5D50] mb-3">Book a Consultation</h3>
// //       <p className="text-gray-500 mb-10 font-light">Fill out the form below and our care team will get back to you shortly.</p>

// //       <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //           <div className="space-y-2">
// //             <label className="text-sm font-medium text-gray-700 ml-1">Full Name</label>
// //             <input 
// //               type="text" 
// //               placeholder="John Doe"
// //               className="w-full px-5 py-4 rounded-2xl bg-[#F8F5EF]/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A86A]/50 focus:border-[#C9A86A] transition-all font-light"
// //             />
// //           </div>
// //           <div className="space-y-2">
// //             <label className="text-sm font-medium text-gray-700 ml-1">Phone Number</label>
// //             <input 
// //               type="tel" 
// //               placeholder="+91 XXXXX XXXXX"
// //               className="w-full px-5 py-4 rounded-2xl bg-[#F8F5EF]/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A86A]/50 focus:border-[#C9A86A] transition-all font-light"
// //             />
// //           </div>
// //         </div>

// //         <div className="space-y-2">
// //           <label className="text-sm font-medium text-gray-700 ml-1">Email Address</label>
// //           <input 
// //             type="email" 
// //             placeholder="john@example.com"
// //             className="w-full px-5 py-4 rounded-2xl bg-[#F8F5EF]/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A86A]/50 focus:border-[#C9A86A] transition-all font-light"
// //           />
// //         </div>

// //         <div className="space-y-2">
// //           <label className="text-sm font-medium text-gray-700 ml-1">Treatment Interested In</label>
// //           <select className="w-full px-5 py-4 rounded-2xl bg-[#F8F5EF]/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A86A]/50 focus:border-[#C9A86A] transition-all text-gray-600 font-light appearance-none">
// //             <option value="">Select a treatment...</option>
// //             <option value="panchakarma">Panchakarma Detox</option>
// //             <option value="orthopedic">Orthopedic Care</option>
// //             <option value="lifestyle">Lifestyle Disease Management</option>
// //             <option value="rejuvenation">Rejuvenation Therapy</option>
// //             <option value="other">General Consultation / Other</option>
// //           </select>
// //         </div>

// //         <div className="space-y-2">
// //           <label className="text-sm font-medium text-gray-700 ml-1">Your Message</label>
// //           <textarea 
// //             rows={4}
// //             placeholder="Tell us briefly about your condition or inquiry..."
// //             className="w-full px-5 py-4 rounded-2xl bg-[#F8F5EF]/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A86A]/50 focus:border-[#C9A86A] transition-all resize-none font-light"
// //           ></textarea>
// //         </div>

// //         <div className="pt-4">
// //           <button 
// //             type="submit"
// //             className="group/btn relative overflow-hidden flex w-full items-center justify-center gap-2 rounded-2xl border border-[#2F5D50] bg-transparent px-8 py-4 font-medium text-[#2F5D50] transition-all duration-300 hover:text-white"
// //           >
// //             <span className="absolute inset-0 translate-y-full bg-[#2F5D50] transition-transform duration-300 ease-out group-hover/btn:translate-y-0" />
// //             <span className="relative z-10 flex items-center gap-2">
// //               Submit Request
// //               <Send className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
// //             </span>
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };


// "use client";

// import { Send } from "lucide-react";

// export const ContactForm = () => {
//   return (
//     <div className="bg-white p-8 md:p-12 lg:p-14 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(47,93,80,0.08)] border border-gray-100">
//       <h3 className="font-serif text-3xl md:text-4xl text-[#2F5D50] mb-3">Book a Consultation</h3>
//       <p className="text-gray-500 mb-10 font-light">Fill out the form below and our care team will get back to you shortly.</p>

//       <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="space-y-2">
//             <label className="text-sm font-medium text-gray-700 ml-1">Full Name</label>
//             <input 
//               type="text" 
//               placeholder="John Doe"
//               className="w-full px-5 py-4 rounded-2xl bg-[#F8F5EF]/50 border border-gray-200 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:black focus:border-[#C9A86A] transition-all font-light"
//             />
//           </div>
//           <div className="space-y-2">
//             <label className="text-sm font-medium text-gray-700 ml-1">Phone Number</label>
//             <input 
//               type="tel" 
//               placeholder="+91 XXXXX XXXXX"
//               className="w-full px-5 py-4 rounded-2xl bg-[#F8F5EF]/50 border border-gray-200 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C9A86A]/50 focus:border-[#C9A86A] transition-all font-light"
//             />
//           </div>
//         </div>

//         <div className="space-y-2">
//           <label className="text-sm font-medium text-gray-700 ml-1">Email Address</label>
//           <input 
//             type="email" 
//             placeholder="john@example.com"
//             className="w-full px-5 py-4 rounded-2xl bg-[#F8F5EF]/50 border border-gray-200 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C9A86A]/50 focus:border-[#C9A86A] transition-all font-light"
//           />
//         </div>

//         <div className="space-y-2">
//           <label className="text-sm font-medium text-gray-700 ml-1">Treatment Interested In</label>
//           <select className="w-full px-5 py-4 rounded-2xl bg-[#F8F5EF]/50 border border-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-[#C9A86A]/50 focus:border-[#C9A86A] transition-all font-light appearance-none">
//             <option value="" className="text-gray-500">Select a treatment...</option>
//             <option value="panchakarma">Panchakarma Detox</option>
//             <option value="orthopedic">Orthopedic Care</option>
//             <option value="lifestyle">Lifestyle Disease Management</option>
//             <option value="rejuvenation">Rejuvenation Therapy</option>
//             <option value="other">General Consultation / Other</option>
//           </select>
//         </div>

//         <div className="space-y-2">
//           <label className="text-sm font-medium text-gray-700 ml-1">Your Message</label>
//           <textarea 
//             rows={4}
//             placeholder="Tell us briefly about your condition or inquiry..."
//             className="w-full px-5 py-4 rounded-2xl bg-[#F8F5EF]/50 border border-gray-200 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C9A86A]/50 focus:border-[#C9A86A] transition-all resize-none font-light"
//           ></textarea>
//         </div>

//         <div className="pt-4">
//           <button 
//             type="submit"
//             className="group/btn relative overflow-hidden flex w-full items-center justify-center gap-2 rounded-2xl border border-[#2F5D50] bg-transparent px-8 py-4 font-medium text-[#2F5D50] transition-all duration-300 hover:text-white"
//           >
//             <span className="absolute inset-0 translate-y-full bg-[#2F5D50] transition-transform duration-300 ease-out group-hover/btn:translate-y-0" />
//             <span className="relative z-10 flex items-center gap-2">
//               Submit Request
//               <Send className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
//             </span>
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };