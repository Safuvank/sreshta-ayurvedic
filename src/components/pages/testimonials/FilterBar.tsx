"use client";

import { Container } from "@/src/components/common/Container";

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const FilterBar = ({ categories, activeCategory, onSelectCategory }: FilterBarProps) => {
  return (
    <section className="sticky top-0 z-40 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-gray-200 py-4 ">
      <Container>
        <div className="flex overflow-x-auto hide-scrollbar gap-3 pb-2 md:pb-0 justify-start md:justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-2xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? "bg-[#2F5D50] text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#2F5D50] hover:text-[#2F5D50]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
};