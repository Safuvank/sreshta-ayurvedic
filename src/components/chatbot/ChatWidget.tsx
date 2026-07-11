"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatWindow from "./ChatWindow";
import { Message, defaultSuggestedQuestions } from "@/src/data/chatbot";
import { MessageSquare } from "lucide-react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const [currentSuggestions, setCurrentSuggestions] = useState<string[]>(
    defaultSuggestedQuestions,
  );

  const handleSend = async (text: string) => {
    const userMessage: Message = { id: Date.now(), sender: "user", text };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await response.json();

      const botMessage: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text: data.reply,
      };
      setMessages((prev) => [...prev, botMessage]);

      if (data.relatedQuestions) {
        setCurrentSuggestions(data.relatedQuestions);
      }
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text: "Sorry, I'm having trouble connecting right now. Please call us at +91 80758 70435.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-[5%] right-[5%] z-[9999] flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <div className="pointer-events-auto origin-bottom-right w-full sm:w-auto">
            <ChatWindow
              messages={messages}
              isTyping={isTyping}
              currentSuggestions={currentSuggestions}
              onClose={() => setIsOpen(false)}
              onSend={handleSend}
            />
          </div>
        )}
      </AnimatePresence>

      {/* Button Wrapper with 'group' class to trigger tooltip */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="group relative mt-4 pointer-events-auto"
      >
        {/* Tooltip */}
        <div className="absolute -top-14 right-0 hidden sm:block bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-xl shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none whitespace-nowrap border border-gray-100">
          Chat with bot
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-gray-100 rotate-45" />
        </div>

        {/* Action Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#2F5D50] text-white shadow-[0_8px_30px_rgb(47,93,80,0.4)] cursor-pointer"
        >
          <MessageSquare size={26} className="sm:w-7 sm:h-7" />
        </motion.button>
      </motion.div>
    </div>
  );
}
