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

  isDarkTheme?: boolean; // 1. ADD THIS LINE

}



export const OurCoreCard = ({

  title,

  description,

  image,

  slug,

  className = "",

  isDarkTheme = false, // 2. DESTRUCTURE IT HERE WITH A DEFAULT

}: OurCoreCardProps) => {

  return (

    <article

      className={`flex flex-col sm:flex-row items-start gap-5 lg:gap-6 pb-8 border-b h-full ${className} ${

        isDarkTheme ? "border-white/10" : "border-gray-200/80"

      }`}

    >

     

      {/* Image Container */}

      <div className="relative w-full sm:w-[140px] lg:w-[180px] shrink-0 aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 group cursor-pointer">

        <Link href={`/our-core/${slug}`}>

          <Image

            src={image}

            alt={title}

            fill

            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"

            sizes="(max-width: 768px) 85vw, 180px"

          />

          <div className="absolute inset-0 bg-[#2F5D50]/0 transition-colors duration-500 group-hover:bg-[#2F5D50]/10 mix-blend-multiply" />

        </Link>

      </div>



      {/* Content */}

      <div className="flex flex-col justify-center flex-1 h-full">

        <Link href={`/our-core/${slug}`}>

          <h3 className={`font-serif text-xl lg:text-2xl leading-tight mb-3 transition-colors ${

            isDarkTheme ? "text-white hover:text-[#C9A86A]" : "text-gray-900 hover:text-[#2F5D50]"

          }`}>

            {title}

          </h3>

        </Link>



        <p className={`text-[14px] lg:text-[15px] leading-relaxed line-clamp-3 mb-4 ${

          isDarkTheme ? "text-white/70 font-light" : "text-gray-500"

        }`}>

          {description}

        </p>



        {/* Dynamic Route Link */}

        <Link

          href={`/our-core/${slug}`}

          className={`group inline-flex items-center gap-2 text-[14px] font-medium transition-colors mt-auto w-fit ${

            isDarkTheme ? "text-[#C9A86A] hover:text-white" : "text-[#8B2E42] hover:text-[#2F5D50]"

          }`}

        >

          Learn More

          <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />

        </Link>

      </div>

    </article>

  );

};



