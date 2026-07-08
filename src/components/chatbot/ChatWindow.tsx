"use client";

import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { Message } from "@/src/app/types/chatbot";

interface ChatWindowProps {
  messages: Message[];
  onClose: () => void;
  onSend: (text: string) => void;
}

export default function ChatWindow({
  messages,
  onClose,
  onSend,
}: ChatWindowProps) {
  return (
    <div 
      className="fixed z-[9999] flex flex-col overflow-hidden bg-white shadow-2xl transition-all duration-300
      /* Mobile layout (Bottom sheet) */
      bottom-0 right-0 w-full h-[85dvh] rounded-t-3xl 
      /* Desktop/Laptop layout (Floating box) */
      sm:bottom-24 sm:right-6 sm:h-[600px] sm:w-[380px] sm:rounded-3xl"
    >
      <ChatHeader onClose={onClose} />
      <ChatMessages messages={messages} />
      <ChatInput onSend={onSend} />
    </div>
  );
}