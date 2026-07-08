"use client";

import { Message } from "@/src/app/types/chatbot";

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({
  message,
}: ChatMessageProps) {
  const isBot = message.sender === "bot";

  return (
    <div
      className={`flex ${
        isBot ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
          isBot
            ? "bg-gray-100 text-gray-900"
            : "bg-green-600 text-white"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}