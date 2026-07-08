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
<div className="fixed bottom-24 right-6 z-[9999] flex h-[600px] w-[380px] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
    <ChatHeader onClose={onClose} />

      <ChatMessages messages={messages} />

      <ChatInput onSend={onSend} />
    </div>
  );
}
