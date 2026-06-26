"use client";

import { Clock } from "lucide-react";
import { workingHours } from "@/src/data/contact";

export const WorkingHours = () => {
  return (
    <div className="bg-[#1F3D35] rounded-2xl lg:rounded-2xl shadow-[0_20px_60px_-15px_rgba(47,93,80,0.2)] p-8 md:p-12 lg:p-14 relative overflow-hidden flex flex-col justify-center h-full w-full">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A86A] opacity-10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-8 lg:mb-10">
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#C9A86A] shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Working Hours
          </h2>
        </div>

        <div className="space-y-4">
          {workingHours.map((schedule, index) => (
            <div
              key={index}
              className={`flex justify-between items-center pb-4 ${
                index !== workingHours.length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              <span className="font-light text-gray-300 text-sm sm:text-base">
                {schedule.day}
              </span>
              <span
                className={`text-sm font-medium tracking-wide ${
                  schedule.time.includes("Closed")
                    ? "text-red-400"
                    : "text-[#C9A86A]"
                }`}
              >
                {schedule.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
