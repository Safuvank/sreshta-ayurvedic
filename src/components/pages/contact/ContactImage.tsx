"use client";

import Image from "next/image";

export const ContactImage = () => {
  return (
    <div className="relative w-full min-h-[400px] lg:min-h-full rounded-2xl lg:rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden h-full">
      <Image
        src="/images/about/sreshta.png" // Replace with your desired image path
        alt="Sreshta Ayurvedic Hospital Exterior"
        fill
        className="object-cover"
      />
      {/* Optional subtle overlay to ensure the image sits perfectly in the design */}
      <div className="absolute inset-0 bg-black/5 mix-blend-multiply pointer-events-none" />
    </div>
  );
};
