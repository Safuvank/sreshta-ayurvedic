"use client";

import { X } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
}

export default function ChatHeader({
  onClose,
}: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b bg-green-600 p-4 text-white">
      <div>
        <h2 className="font-semibold">
          Sreshta Assistant
        </h2>

        <p className="text-sm opacity-80">
          Online
        </p>
      </div>

      <button onClick={onClose}>
        <X />
      </button>
    </div>
  );
}