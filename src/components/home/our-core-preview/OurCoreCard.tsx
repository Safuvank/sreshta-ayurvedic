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
}

export const OurCoreCard = ({
  title,
  description,
  image,
  slug,
  className = "",
}: OurCoreCardProps) => {
  return (
    <article className={`flex flex-col gap-5 shrink-0 ${className}`}>
      {/* Image Container */}
      <div className="relative w-full aspect-[4/5] md:aspect-[16/9] rounded-2xl overflow-hidden bg-gray-200">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out hover:scale-105"
          sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3">
        <h3 className="font-serif text-2xl md:text-[1.75rem] text-gray-900 leading-tight">
          {title}
        </h3>

        <p className="text-[15px] text-gray-500 leading-relaxed line-clamp-3 md:line-clamp-4">
          {description}
        </p>

        {/* Updated Route Link */}
        <Link
          href={`/our-core/${slug}`}
          className="group inline-flex items-center gap-2 text-[15px] font-medium text-[#2F5D50] transition-colors hover:text-[#2F5D50] mt-1 w-fit"
        >
          Learn more
          <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};
