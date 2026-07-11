

// "use client";

// import { Message } from "@/src/app/types/chatbot";

// interface ChatMessageProps {
//   message: Message;
// }

// export default function ChatMessage({ message }: ChatMessageProps) {
//   const isBot = message.sender === "bot";

//   return (
//     <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
//       <div
//         className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-4 py-2.5 text-[15px] sm:text-sm break-words ${
//           isBot
//             ? "bg-gray-100 text-gray-900"
//             : "bg-green-600 text-white"
//         }`}
//       >
//         {message.text}
//       </div>
//     </div>
//   );
// }


"use client";

import { Message } from "@/src/data/chatbot";

export default function ChatMessage({ message }: { message: Message }) {
  const isBot = message.sender === "bot";

  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-5 py-3.5 text-[14px] sm:text-[15px] leading-relaxed shadow-sm whitespace-pre-wrap ${
          isBot
            ? "rounded-tl-sm bg-white border border-gray-100 text-gray-800"
            : "rounded-tr-sm bg-[#2F5D50] text-white"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}