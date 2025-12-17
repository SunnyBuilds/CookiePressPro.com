import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const guides = [
  {
    title: "The Executive's Guide to Ergonomic Office Setup",
    excerpt:
      "Evidence-based recommendations for configuring your workspace to reduce fatigue and improve productivity across extended work sessions.",
    date: "December 1, 2024",
    slug: "ergonomic-setup-guide",
  },
  {
    title: "Corporate Procurement: How to Evaluate Office Furniture ROI",
    excerpt:
      "A financial framework for assessing the long-term value of ergonomic furniture investments, including productivity metrics and health cost considerations.",
    date: "November 27, 2024",
    slug: "furniture-roi-guide",
  },
  {
    title: "Remote Work Technology Stack: Essential Tools for Distributed Teams",
    excerpt:
      "Comprehensive analysis of communication, collaboration, and productivity tools for executive leadership in remote work environments.",
    date: "November 22, 2024",
    slug: "remote-work-stack",
  },
]

export default function GuidesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <h1 className="font-serif font-bold text-4xl mb-3">Research & Guides</h1>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            In-depth analysis and practical guidance on workplace ergonomics, productivity optimization, and technology
            adoption.
          </p>
        </div>
      </div>

      <section className="bg-white py-12 flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl space-y-8">
            {guides.map((guide) => (
              <article key={guide.slug} className="border-b border-gray-200 pb-8 last:border-0">
                <time className="text-xs text-[#64748B] uppercase tracking-wide font-semibold">{guide.date}</time>
                <h2 className="font-serif font-bold text-3xl mt-3 mb-4">
                  <Link href={`/guides/${guide.slug}`} className="hover:text-[#2563EB] transition-colors">
                    {guide.title}
                  </Link>
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">{guide.excerpt}</p>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="text-[#2563EB] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Read Guide
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
