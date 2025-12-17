import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const comparisons = [
  {
    title: "Herman Miller Aeron vs. Steelcase Gesture: Executive Chair Comparison",
    excerpt:
      "A comprehensive side-by-side analysis of two premium ergonomic chairs, examining build quality, adjustability, and long-term value.",
    date: "December 2, 2024",
    slug: "aeron-vs-gesture",
  },
  {
    title: "Standing Desk Showdown: Uplift V2 vs. Fully Jarvis",
    excerpt:
      "We compare the two most popular height-adjustable desks across stability, customization options, and price-to-performance ratio.",
    date: "November 29, 2024",
    slug: "uplift-vs-jarvis",
  },
  {
    title: "Monitor Arms: Ergotron vs. Humanscale Technical Comparison",
    excerpt:
      "Engineering analysis of premium monitor positioning systems, evaluating weight capacity, adjustment mechanisms, and installation complexity.",
    date: "November 25, 2024",
    slug: "monitor-arms-comparison",
  },
]

export default function ComparisonsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <h1 className="font-serif font-bold text-4xl mb-3">Product Comparisons</h1>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            Side-by-side technical analysis of competing products to help you make informed purchasing decisions.
          </p>
        </div>
      </div>

      <section className="bg-white py-12 flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl space-y-8">
            {comparisons.map((comparison) => (
              <article key={comparison.slug} className="border-b border-gray-200 pb-8 last:border-0">
                <time className="text-xs text-[#64748B] uppercase tracking-wide font-semibold">{comparison.date}</time>
                <h2 className="font-serif font-bold text-3xl mt-3 mb-4">
                  <Link href={`/comparisons/${comparison.slug}`} className="hover:text-[#2563EB] transition-colors">
                    {comparison.title}
                  </Link>
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">{comparison.excerpt}</p>
                <Link
                  href={`/comparisons/${comparison.slug}`}
                  className="text-[#2563EB] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Read Comparison
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
