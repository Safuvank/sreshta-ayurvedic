"use client";

import Image from "next/image";
import { CalendarClock, GraduationCap, Stethoscope, Sparkles } from "lucide-react";
import { Doctor } from "@/src/data/doctors";

export const DoctorCard = ({
  name,
  designation,
  specialization,
  experience,
  qualifications,
  description,
  image,
}: Doctor) => {
  return (
    <article className="group flex h-full flex-col bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(31,61,53,0.12)] transition-all duration-300">
      
      {/* Top Image Section with Padding */}
      <div className="relative p-3 pb-0">
        <div className="relative h-[280px] w-full overflow-hidden rounded-[1.5rem] bg-[#F8F5EF]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          
          {/* Floating Experience Badge (Modern Glassmorphism) */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-white/20 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A86A]" />
            <span className="text-xs font-bold text-[#1F3D35] tracking-wide">
              {experience}
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        
        {/* Header: Designation & Name */}
        <div className="mb-5">
          <span className="text-xs font-bold tracking-[0.15em] text-[#C9A86A] uppercase mb-2 block">
            {designation}
          </span>
          <h3 className="font-serif text-2xl lg:text-[26px] leading-tight text-gray-900 group-hover:text-[#2F5D50] transition-colors duration-300">
            {name}
          </h3>
        </div>

        {/* Structured Data Rows (Highly scannable) */}
        <div className="flex flex-col gap-3 mb-6">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 bg-[#F8F5EF] p-1.5 rounded-lg shrink-0">
              <Stethoscope className="w-4 h-4 text-[#2F5D50]" />
            </div>
            <p className="text-sm text-gray-600 leading-snug">
              <strong className="text-gray-900 font-semibold block mb-0.5">Specializes in</strong>
              {specialization}
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-0.5 bg-[#F8F5EF] p-1.5 rounded-lg shrink-0">
              <GraduationCap className="w-4 h-4 text-[#2F5D50]" />
            </div>
            <p className="text-sm text-gray-600 leading-snug">
              <strong className="text-gray-900 font-semibold block mb-0.5">Credentials</strong>
              {qualifications}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-8">
          {description}
        </p>

        {/* Action Button */}
        <div className="mt-auto">
          <button
            className="
              w-full flex items-center justify-center gap-2 rounded-xl 
              bg-[#F8F5EF] px-6 py-4 font-semibold text-[#1F3D35] 
              transition-all duration-300 
              hover:bg-[#1F3D35] hover:text-white hover:shadow-md
              active:scale-[0.98]
            "
          >
            <CalendarClock className="w-5 h-5" />
            <span>Book Appointment</span>
          </button>
        </div>
        
      </div>
    </article>
  );
};