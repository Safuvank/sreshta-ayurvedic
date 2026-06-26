// "use client";

// import { motion } from "framer-motion";
// import { ShieldCheck } from "lucide-react";
// import { Container } from "../../common/Container";

// const reasons = [
//   "Highly Experienced Doctors & Vaidyas",
//   "100% Authentic Ayurvedic Treatments",
//   "Modern, Hygienic Facilities",
//   "Deeply Personalized Patient Care",
//   "Proven Clinical Treatment Results",
//   "Compassionate, Patient-Focused Approach",
// ];

// export const WhyChooseUs = () => {
//   return (
//     <section className="py-20 lg:py-32 bg-[#F8F5EF]">
//       <Container>
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
//           <motion.div 
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="font-serif text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
//               Why Patients Choose <br />
//               <span className="italic text-[#2F5D50]">Sreshta Hospital</span>
//             </h2>
//             <p className="text-lg text-gray-600 leading-relaxed mb-8">
//               We merge the profound ancient science of Ayurveda with modern clinical standards, ensuring that you receive the safest, most effective, and deeply transformative healthcare experience possible.
//             </p>
//           </motion.div>

//           <motion.div 
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="grid sm:grid-cols-2 gap-6"
//           >
//             {reasons.map((reason, idx) => (
//               <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
//                 <ShieldCheck className="w-6 h-6 text-[#C9A86A] shrink-0" />
//                 <span className="font-medium text-gray-800">{reason}</span>
//               </div>
//             ))}
//           </motion.div>

//         </div>
//       </Container>
//     </section>
//   );
// };