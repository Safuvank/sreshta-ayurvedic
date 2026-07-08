// "use client";

// import { useState } from "react";
// import { Send } from "lucide-react";

// interface ChatInputProps {
//   onSend: (text: string) => void;
// }

// export default function ChatInput({ onSend }: ChatInputProps) {
//   const [text, setText] = useState("");

//   const handleSend = () => {
//     if (!text.trim()) return;

//     onSend(text);

//     setText("");
//   };

//   return (
//     <div className="flex items-center gap-2 border-t p-3">
//       <input
//         type="text"
//         placeholder="Type your message..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         onKeyDown={(e) => {
//           if (e.key === "Enter") {
//             handleSend();
//           }
//         }}
//         className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder:text-gray-400 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500"
//       />

//       <button
//         onClick={handleSend}
//         className="rounded-xl bg-green-600 p-3 text-white"
//       >
//         <Send size={18} />
//       </button>
//     </div>
//   );
// }




"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSend: (text: string) => void;
}

export default function ChatInput({ onSend }: ChatInputProps) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
  
    <div className="flex items-center gap-2 border-t bg-white p-3 pb-safe">
      <input
        type="text"
        placeholder="Type your message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
        // Replaced text-sm with text-base to prevent iOS Auto-Zoom
        className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 sm:py-2 text-base sm:text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500"
      />

      <button
        onClick={handleSend}
        className="rounded-xl bg-green-600 p-3 text-white transition-colors hover:bg-green-700"
      >
        <Send size={18} />
      </button>
    </div>
  );
}