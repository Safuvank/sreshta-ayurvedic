"use client";

import { quickQuestions } from "@/src/data/chatbot";

export default function QuickQuestionGrid({ onSelect }: { onSelect: (q: string) => void }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {quickQuestions.map((item, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(item.query)}
          className="flex flex-col items-start gap-2 rounded-xl bg-white p-4 border border-gray-100 shadow-sm transition-all hover:border-[#2F5D50]/30 hover:shadow-md active:scale-95 text-left"
        >
          <span className="text-2xl">{item.icon}</span>
          <span className="text-sm font-medium text-gray-700 leading-snug">{item.text}</span>
        </button>
      ))}
    </div>
  );
}