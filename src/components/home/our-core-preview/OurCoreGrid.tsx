
"use client";



import { motion } from "framer-motion";

import { ourCoreData } from "@/src/data/specializations-core"; // Adjust path

import { OurCoreCard } from "./OurCoreCard";



interface OurCoreGridProps {

  limit?: number;

  isDarkTheme?: boolean; // 1. ADD THIS LINE

}



export const OurCoreGrid = ({ limit, isDarkTheme = false }: OurCoreGridProps) => { // 2. DESTRUCTURE IT HERE

  const displayedItems = limit ? ourCoreData.slice(0, limit) : ourCoreData;



  return (

    <div className="

      flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4

      md:grid md:grid-cols-2 md:overflow-x-visible md:snap-none md:pb-0 md:mx-0 md:px-0

      gap-6 lg:gap-x-12 lg:gap-y-12

      [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']

    ">

      {displayedItems.map((item, index) => (

        <motion.div

          key={item.id}

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true, margin: "-50px" }}

          transition={{ duration: 0.7, delay: index * 0.1 }}

          className="w-[85vw] shrink-0 snap-center md:w-auto md:shrink-1"

        >

          {/* 3. PASS IT DOWN TO THE CARD */}

          <OurCoreCard {...item} isDarkTheme={isDarkTheme} />

        </motion.div>

      ))}

    </div>

  );

};



