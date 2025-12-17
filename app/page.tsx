import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const topPicks = [
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
]

const latestResearch = [
  {
    title: "The Science of Ergonomic Seating: What Corporate Buyers Need to Know",
    date: "December 3, 2024",
    excerpt:
      "Our comprehensive analysis of peer-reviewed ergonomic studies reveals the key factors that determine long-term comfort and productivity in executive seating.",
    slug: "ergonomic-seating-science",
  },
  {
    title: "Standing Desk ROI: A Financial Analysis for Corporate Procurement",
    date: "December 1, 2024",
    excerpt:
      "We examined five years of workplace productivity data to quantify the return on investment for height-adjustable desking solutions.",
    slug: "standing-desk-roi",
  },
  {
    title: "Monitor Arms vs. Desk Mounts: A Comparative Study",
    date: "November 28, 2024",
    excerpt:
      "An objective evaluation of monitor positioning systems, including installation complexity, adjustability, and long-term durability.",
    slug: "monitor-arms-comparison",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="font-serif font-bold text-5xl mb-6 leading-tight text-balance text-foreground">
              Independent Reviews of Executive Office Equipment
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Evidence-based analysis of ergonomic furniture, productivity tools, and business technology. Our editorial
              team conducts rigorous testing to help executives and procurement managers make informed decisions.
            </p>
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-colors"
            >
              Browse All Reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif font-bold text-3xl text-foreground">Top Picks for 2024</h2>
            <Link href="/reviews" className="text-accent font-semibold hover:underline flex items-center gap-1">
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid gap-6">
            {topPicks.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Research Section */}
      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-serif font-bold text-3xl mb-8 text-foreground">Latest Research & Analysis</h2>
          <div className="grid gap-6">
            {latestResearch.map((article) => (
              <article key={article.slug} className="border-b border-border pb-6 last:border-0">
                <time className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">{article.date}</time>
                <h3 className="font-serif font-bold text-2xl mt-2 mb-3">
                  <Link href={`/articles/${article.slug}`} className="hover:text-accent transition-colors text-foreground">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">{article.excerpt}</p>
                <Link
                  href={`/articles/${article.slug}`}
                  className="text-accent font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Read Article
                  <ArrowRight className="w-3 h-3" />
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
