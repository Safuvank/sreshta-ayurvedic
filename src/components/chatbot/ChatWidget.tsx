"use client";

import { useState } from "react";
import FloatingButton from "./FloatingButton";
import ChatWindow from "./ChatWindow";
import { Message } from "@/src/app/types/chatbot";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      text: "Hello 👋 Welcome to Sreshta Ayurveda Hospital. How may I assist you today\n\nYou can ask me about:\n• Consultation timings\n• Appointments\n• Doctors\n• Treatments\n• Panchakarma\n• Contact details\n• Hospital location?",
    },
  ]);

  const handleSend = async (text: string) => {
    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text,
    };

    // Show the user's message immediately
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      const data = await response.json();

      const botMessage: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text: data.reply,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text: "Sorry, something went wrong. Please try again later.",
      };

      setMessages((prev) => [...prev, errorMessage]);

      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <div className="pointer-events-auto">
        <FloatingButton onClick={() => setIsOpen(true)} />

        {isOpen && (
          <ChatWindow
            messages={messages}
            onClose={() => setIsOpen(false)}
            onSend={handleSend}
          />
        )}
      </div>
    </div>
  );
}
