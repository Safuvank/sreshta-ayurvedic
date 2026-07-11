// "use client";

// import { X } from "lucide-react";

// interface ChatHeaderProps {
//   onClose: () => void;
// }

// export default function ChatHeader({
//   onClose,
// }: ChatHeaderProps) {
//   return (
//     <div className="flex items-center justify-between border-b bg-green-600 p-4 text-white">
//       <div>
//         <h2 className="font-semibold">
//           Sreshta Assistant
//         </h2>

//         <p className="text-sm opacity-80">
//           Online
//         </p>
//       </div>

//       <button onClick={onClose}>
//         <X />
//       </button>
//     </div>
//   );
// }



"use client";

import { X, Sparkles } from "lucide-react";

export default function ChatHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="relative z-10 flex items-center justify-between bg-white/80 backdrop-blur-md px-5 py-4 border-b border-gray-100 shadow-sm">
      <div className="flex items-center gap-3.5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2F5D50]/10 text-[#2F5D50]">
          <Sparkles size={18} />
        </div>
        <div>
          <h2 className="font-semibold text-gray-900 text-sm sm:text-base tracking-tight">Sreshta Assistant</h2>
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#2F5D50] font-semibold tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2F5D50] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2F5D50]"></span>
            </span>
            Online
          </div>
        </div>
      </div>
      <button 
        onClick={onClose}
        className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-colors"
      >
        <X size={20} />
      </button>
    </div>
  );
}