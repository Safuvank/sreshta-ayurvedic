// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { CalendarCheck, PhoneCall } from "lucide-react";
// import { Container } from "lucide-react";

// export const AboutCTA = () => {
//   return (
//     <section className="py-24 bg-white text-center">
//       <Container>
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-50px" }}
//           transition={{ duration: 0.6 }}
//           className="max-w-3xl mx-auto"
//         >
//           <h2 className="font-serif text-4xl lg:text-5xl text-gray-900 mb-6">
//             Ready To Start Your Healing Journey?
//           </h2>
//           <p className="text-lg text-gray-600 mb-10">
//             Experience personalized Ayurvedic care from our highly experienced specialists. Take the first step towards a balanced, healthier life.
//           </p>

//           <div className="flex flex-wrap justify-center gap-4">
//             <Link
//               href="/contacts"
//               className="group flex items-center gap-2 rounded-full bg-[#2F5D50] px-8 py-4 font-medium text-white transition-all hover:bg-[#24483E] hover:shadow-lg"
//             >
//               <CalendarCheck className="w-5 h-5 transition-transform group-hover:scale-110" />
//               Book Consultation
//             </Link>

//             <Link
//               href="/contacts"
//               className="group flex items-center gap-2 rounded-full border-2 border-[#2F5D50] px-8 py-4 font-medium text-[#2F5D50] transition-all hover:bg-[#2F5D50] hover:text-white"
//             >
//               <PhoneCall className="w-5 h-5 transition-transform group-hover:scale-110" />
//               Contact Us
//             </Link>
//           </div>
//         </motion.div>
//       </Container>
//     </section>
//   );
// };











"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck, PhoneCall } from "lucide-react";
import { Container } from "../../common/Container";

export const AboutCTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-white text-center">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-4xl lg:text-5xl text-[#2F5D50] mb-6">
            Ready To Start Your Healing Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-12 font-light">
            Experience personalized Ayurvedic care from our highly experienced specialists. Take the first step towards a balanced, healthier life.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            
            {/* Animated Primary Button */}
            <Link
              href="/contacts"
              className="group/btn relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-xl border border-[#2F5D50] bg-transparent px-8 py-4 font-medium text-[#2F5D50] transition-all duration-300 hover:text-white hover:border-[#2F5D50] cursor-pointer"
            >
              <span className="absolute inset-0 translate-y-full bg-[#2F5D50] transition-transform duration-300 ease-out group-hover/btn:translate-y-0" />
              <span className="relative z-10 flex items-center gap-2">
                <CalendarCheck className="w-5 h-5" />
                Book Consultation
              </span>
            </Link>

            {/* Subtle Secondary Button */}
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F8F5EF] border border-[#F8F5EF] px-8 py-4 font-medium text-[#2F5D50] transition-all duration-300 hover:bg-gray-100"
            >
              <PhoneCall className="w-5 h-5" />
              Contact Us
            </Link>
            
          </div>
        </motion.div>
      </Container>
    </section>
  );
};