"use client";

import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import SuggestedQuestions from "./SuggestedQuestions";
import { Message } from "@/src/data/chatbot"; // Adjust path if necessary

// 1. Add suggestions to the props interface
interface ChatConversationProps {
  messages: Message[];
  isTyping: boolean;
  suggestions: string[]; // <-- Added here
  onSend: (text: string) => void;
}

export default function ChatConversation({ 
  messages, 
  isTyping, 
  suggestions, // <-- 2. Destructure it here so the component can use it
  onSend 
}: ChatConversationProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Adding a tiny delay ensures the auto-scroll triggers after the new pills render
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages, isTyping, suggestions]);

  return (
    <div className="flex flex-col gap-4 p-5">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      
      {isTyping && (
        <div className="flex justify-start">
          <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-white border border-gray-100 px-4 py-3 shadow-sm">
            <div className="h-2 w-2 animate-bounce rounded-full bg-[#2F5D50]/40" style={{ animationDelay: "0ms" }} />
            <div className="h-2 w-2 animate-bounce rounded-full bg-[#2F5D50]/60" style={{ animationDelay: "150ms" }} />
            <div className="h-2 w-2 animate-bounce rounded-full bg-[#2F5D50]" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      )}

      {/* 3. Now suggestions is defined and works perfectly here! */}
      {!isTyping && suggestions && suggestions.length > 0 && (
        <div className="mt-2 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <SuggestedQuestions questions={suggestions} onSelect={onSend} />
        </div>
      )}

      <div ref={bottomRef} className="h-2" />
    </div>
  );
}