"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface OurCoreCardProps {
  id?: number | string;
  title: string;
  description: string;
  image: string;
  slug: string;
  className?: string;
  isDarkTheme?: boolean;
}

export const OurCoreCard = ({
  title,
  description,
  image,
  slug,
  className = "",
  isDarkTheme = false,
}: OurCoreCardProps) => {
  return (
    <article
      className={`group flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-300  ${className} ${
        isDarkTheme
          ? "border-white/10 bg-white/5 hover:shadow-black/20"
          : "border-gray-200 bg-white hover:shadow-gray-200/50"
      }`}
    >
      {/* Top Image Container */}
      <Link
        href={`/our-core/${slug}`}
        className="relative w-full aspect-[4/3] block overflow-hidden bg-gray-100"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-[#2F5D50]/0 transition-colors duration-500 group-hover:bg-[#2F5D50]/20 mix-blend-multiply" />
      </Link>

      {/* Bottom Content Container */}
      <div className="flex flex-col flex-1 p-6">
        <Link href={`/our-core/${slug}`}>
          <h3
            className={`font-serif text-xl lg:text-2xl leading-tight mb-3 transition-colors ${
              isDarkTheme
                ? "text-white group-hover:text-[#C9A86A]"
                : "text-gray-900 group-hover:text-[#2F5D50]"
            }`}
          >
            {title}
          </h3>
        </Link>

        <p
          className={`text-[14px] lg:text-[15px] leading-relaxed line-clamp-3 mb-6 flex-1 ${
            isDarkTheme ? "text-white/70 font-light" : "text-gray-500"
          }`}
        >
          {description}
        </p>

        {/* Dynamic Route Link */}
        <Link
          href={`/our-core/${slug}`}
          className={`inline-flex items-center gap-2 text-[14px] font-medium transition-colors w-fit ${
            isDarkTheme
              ? "text-[#C9A86A] hover:text-white"
              : "text-[#2F5D50] hover:text-[#1A362E]" // Changed color to #2F5D50 here
          }`}
        >
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};
