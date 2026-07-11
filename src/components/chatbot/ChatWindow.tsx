"use client";

import { motion } from "framer-motion";
import ChatHeader from "./ChatHeader";
import WelcomeCard from "./WelcomeCard";
import QuickQuestionGrid from "./QuickQuestionGrid";
import ChatConversation from "./ChatConversation";
import ChatInput from "./ChatInput";
import { Message } from "@/src/data/chatbot";

interface ChatWindowProps {
  messages: Message[];
  isTyping: boolean;
  currentSuggestions: string[]; // <-- 1. Added to props interface
  onClose: () => void;
  onSend: (text: string) => void;
}

export default function ChatWindow({ 
  messages, 
  isTyping, 
  currentSuggestions, // <-- 2. Destructured here so the component can use it
  onClose, 
  onSend 
}: ChatWindowProps) {
  const hasStartedChat = messages.length > 0;

  return (
    <motion.div
     initial={{ opacity: 0, y: 40, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  exit={{ opacity: 0, y: 40, scale: 0.95 }}
  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed sm:absolute bottom-0 right-0 sm:bottom-20 sm:right-6 flex h-[85dvh] sm:h-[550px] w-full sm:w-[350px] flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl bg-gray-50 shadow-[0_0_40px_rgba(0,0,0,0.15)] border border-gray-100/50"
    >
      <ChatHeader onClose={onClose} />

      <div className="flex-1 overflow-y-auto scroll-smooth bg-gray-50">
        {!hasStartedChat ? (
          <div className="flex h-full flex-col p-5 sm:p-6">
            <WelcomeCard />
            <div className="mt-auto pt-4">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400 px-1">Common Questions</p>
              <QuickQuestionGrid onSelect={onSend} />
            </div>
          </div>
        ) : (
          <ChatConversation 
            messages={messages} 
            isTyping={isTyping} 
            suggestions={currentSuggestions} // <-- 3. Now it successfully passes it down!
            onSend={onSend} 
          />
        )}
      </div>

      <div className="bg-white border-t border-gray-100 p-4 pb-safe shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
        <ChatInput onSend={onSend} />
      </div>
    </motion.div>
  );
}