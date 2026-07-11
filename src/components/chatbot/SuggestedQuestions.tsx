"use client";

interface SuggestedQuestionsProps {
  questions: string[];
  onSelect: (q: string) => void;
}

export default function SuggestedQuestions({ questions, onSelect }: SuggestedQuestionsProps) {
  return (
    <div className="flex w-full flex-wrap gap-2 pt-1">
      {questions.map((q, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(q)}
          className="rounded-full border border-gray-200 bg-white px-4 py-2 text-[13px] font-medium text-[#2F5D50] shadow-sm transition-all hover:border-[#2F5D50] hover:bg-[#2F5D50]/5 active:scale-95 text-left"
        >
          {q}
        </button>
      ))}
    </div>
  );
}