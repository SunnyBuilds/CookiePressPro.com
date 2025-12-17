"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { CategoryTabs } from "@/components/category-tabs"
import { useState } from "react"

const categories = [
  "All Categories",
  "Executive Chairs",
  "Standing Desks",
  "Monitor Arms",
  "Desk Accessories",
  "Lighting",
]

const allProducts = [
  {
    title: "Herman Miller Aeron Ergonomic Office Chair",
    image: "/herman-miller-aeron-office-chair.jpg",
    rating: 9.4,
    category: "Executive Chairs",
    excerpt:
      "The gold standard in ergonomic office seating, offering unparalleled lumbar support and breathability for extended work sessions.",
    slug: "herman-miller-aeron",
  },
  {
    title: "Steelcase Gesture Executive Chair",
    image: "/steelcase-gesture-executive-chair.jpg",
    rating: 9.2,
    category: "Executive Chairs",
    excerpt:
      "Designed for the modern professional who shifts between devices, providing adaptive support for various working postures.",
    slug: "steelcase-gesture",
  },
  {
    title: "Uplift V2 Standing Desk",
    image: "/uplift-standing-desk.jpg",
    rating: 9.0,
    category: "Standing Desks",
    excerpt:
      "Industry-leading height-adjustable desk with exceptional stability and a wide range of customization options.",
    slug: "uplift-v2",
  },
  {
    title: "Fully Jarvis Bamboo Standing Desk",
    image: "/jarvis-bamboo-standing-desk.jpg",
    rating: 8.8,
    category: "Standing Desks",
    excerpt:
      "Sustainable bamboo construction meets precision engineering in this highly customizable standing desk solution.",
    slug: "fully-jarvis",
  },
  {
    title: "Ergotron LX Desk Mount Monitor Arm",
    image: "/ergotron-monitor-arm.jpg",
    rating: 9.1,
    category: "Monitor Arms",
    excerpt:
      "Premium monitor positioning with effortless height, tilt, and rotation adjustments for optimal viewing angles.",
    slug: "ergotron-lx",
  },
  {
    title: "BenQ ScreenBar Halo Monitor Light",
    image: "/benq-screenbar-monitor-light.jpg",
    rating: 8.7,
    category: "Lighting",
    excerpt:
      "Asymmetric optical design eliminates screen glare while providing focused task lighting for productivity.",
    slug: "benq-screenbar",
  },
]

export default function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories")

  const filteredProducts =
    selectedCategory === "All Categories" ? allProducts : allProducts.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <h1 className="font-serif font-bold text-4xl mb-3">Product Reviews</h1>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            Comprehensive, objective reviews of executive office equipment based on extensive hands-on testing and
            ergonomic research.
          </p>
        </div>
      </div>

      <CategoryTabs categories={categories} onCategoryChange={setSelectedCategory} />

      <section className="bg-[#F1F5F9] py-12 flex-1">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? "review" : "reviews"}
            </p>
          </div>
          <div className="grid gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
