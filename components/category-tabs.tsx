"use client"

import { useState } from "react"

interface CategoryTabsProps {
  categories: string[]
  onCategoryChange?: (category: string) => void
}

export function CategoryTabs({ categories, onCategoryChange }: CategoryTabsProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0])

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category)
    onCategoryChange?.(category)
  }

  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex gap-8 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`
                py-4 px-2 font-semibold text-sm whitespace-nowrap transition-colors
                ${
                  activeCategory === category
                    ? "text-[#0F172A] border-b-2 border-[#0F172A]"
                    : "text-gray-500 hover:text-gray-700"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
