// "use client";

// import { motion } from "framer-motion";

// interface FloatingButtonProps {
//   onClick: () => void;
// }

// export default function FloatingButton({ onClick }: FloatingButtonProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.5, y: 50 }}
//       animate={{ opacity: 1, scale: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: 1.2 }} // Slightly delayed after WhatsApp icon
//       className="fixed bottom-[35%] right-[5%] groupfixed  z-[9999] flex flex-col items-end group pointer-events-auto "
//     >
//       {/* Tooltip that appears on hover */}
//       <div className="absolute -top-12 right-0 bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-xl shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none whitespace-nowrap border border-gray-100">
//         Chat with AI
//         {/* Tooltip Arrow */}
//         <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-gray-100 rotate-45" />
//       </div>

//       <button
//         onClick={onClick}
//         aria-label="Open chat"
//         // Change bg-[#0A5C36] to match your brand's primary color
//         className="relative flex items-center justify-center w-14 h-14 bg-[#0A5C36] text-white rounded-full shadow-[0_10px_30px_-10px_rgba(10,92,54,0.6)] transition-transform duration-300 hover:scale-110 hover:bg-[#08472a] cursor-pointer"
//       >
//         {/* Continuous Pulse Animation Ring (Matches WhatsApp) */}
//         <motion.div
//           animate={{
//             scale: [1, 1.4, 1],
//             opacity: [0.5, 0, 0.5],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           // The border color matches the button background
//           className="absolute inset-0 rounded-full border-2 border-[#0A5C36]"
//         />

//         {/* Chatbot SVG Icon */}
//         <svg
//           viewBox="0 0 24 24"
//           width="26"
//           height="26"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="relative z-10 mt-[2px]"
//         >
//           <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
//           <line x1="9" y1="10" x2="15" y2="10" />
//           <line x1="9" y1="14" x2="15" y2="14" />
//         </svg>
//       </button>
//     </motion.div>
//   );
// }


"use client";

import { motion } from "framer-motion";

interface FloatingButtonProps {
  onClick: () => void;
}

export default function FloatingButton({ onClick }: FloatingButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      // Fixed the broken class and added responsive positioning
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] flex flex-col items-end group pointer-events-auto"
    >
      {/* Tooltip that appears on hover (Hidden on mobile to prevent clipping) */}
      <div className="absolute -top-12 right-0 hidden sm:block bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-xl shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none whitespace-nowrap border border-gray-100">
        Chat with AI
        {/* Tooltip Arrow */}
        <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-gray-100 rotate-45" />
      </div>

      <button
        onClick={onClick}
        aria-label="Open chat"
        className="relative flex items-center justify-center w-14 h-14 bg-[#0A5C36] text-white rounded-full shadow-[0_10px_30px_-10px_rgba(10,92,54,0.6)] transition-transform duration-300 hover:scale-110 hover:bg-[#08472a] cursor-pointer"
      >
        {/* Continuous Pulse Animation Ring */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full border-2 border-[#0A5C36]"
        />

        {/* Chatbot SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10 mt-[2px]"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <line x1="9" y1="10" x2="15" y2="10" />
          <line x1="9" y1="14" x2="15" y2="14" />
        </svg>
      </button>
    </motion.div>
  );
}