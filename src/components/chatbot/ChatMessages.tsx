// "use client";

// import { useEffect, useRef } from "react";
// import ChatMessage from "./ChatMessage";
// import { Message } from "@/src/app/types/chatbot";

// interface ChatMessagesProps {
//   messages: Message[];
// }

// export default function ChatMessages({ messages }: ChatMessagesProps) {
//   const bottomRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({
//       behavior: "smooth",
//     });
//   }, [messages]);

//   return (
//     <div className="flex-1 overflow-y-auto p-4 space-y-4">
//       {messages.map((message) => (
//         <ChatMessage key={message.id} message={message} />
//       ))}

//       <div ref={bottomRef} />
//     </div>
//   );
// }
