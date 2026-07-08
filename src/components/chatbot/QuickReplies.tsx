interface QuickRepliesProps {
  questions: string[];
  onSelect: (question: string) => void;
}

export default function QuickReplies({
  questions,
  onSelect,
}: QuickRepliesProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {questions.map((question) => (
        <button
          key={question}
          onClick={() => onSelect(question)}
          className="rounded-full border border-green-600 px-3 py-1 text-sm text-green-600 transition hover:bg-green-600 hover:text-white"
        >
          {question}
        </button>
      ))}
    </div>
  );
}