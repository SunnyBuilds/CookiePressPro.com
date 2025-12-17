import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif font-bold text-4xl mb-6">Editorial Policy</h1>
            <p className="text-sm text-gray-600 mb-8">Last Updated: December 4, 2024</p>

            <div className="prose max-w-none space-y-6 leading-relaxed text-gray-700">
              <p>
                Apex Office Reviews maintains strict editorial independence to ensure our reviews and recommendations
                serve the interests of our readers above all other considerations.
              </p>

              <h2 className="font-serif font-bold text-2xl mt-8 mb-4 text-[#0F172A]">Testing Methodology</h2>
              <p>All products undergo a minimum 90-day evaluation period. Our testing protocol includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Extended use across multiple body types and work environments</li>
                <li>Ergonomic assessment based on established occupational health standards</li>
                <li>Materials analysis and construction quality evaluation</li>
                <li>Comparative performance testing against category competitors</li>
                <li>Long-term durability assessment</li>
              </ul>

              <h2 className="font-serif font-bold text-2xl mt-8 mb-4 text-[#0F172A]">Editorial Independence</h2>
              <p>Our editorial decisions are never influenced by commercial relationships:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Manufacturers cannot purchase positive reviews or guaranteed coverage</li>
                <li>Affiliate relationships do not influence product ratings or recommendations</li>
                <li>Editorial staff are prohibited from accepting gifts or compensation from manufacturers</li>
                <li>All products are evaluated against consistent, objective criteria</li>
              </ul>

              <h2 className="font-serif font-bold text-2xl mt-8 mb-4 text-[#0F172A]">Affiliate Disclosure</h2>
              <p>
                Apex Office Reviews participates in affiliate marketing programs to support our operations. When readers
                purchase products through our links, we may receive a commission. This affiliate relationship:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Does not affect the price paid by the customer</li>
                <li>Does not influence our editorial assessments or ratings</li>
                <li>Is clearly disclosed on all relevant pages</li>
                <li>Supports our ability to conduct independent testing</li>
              </ul>

              <h2 className="font-serif font-bold text-2xl mt-8 mb-4 text-[#0F172A]">Corrections Policy</h2>
              <p>We are committed to accuracy and transparency. If we discover an error in our content:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Corrections are made promptly and noted clearly in the article</li>
                <li>Material errors trigger a review of related content</li>
                <li>Readers can report potential errors through our contact form</li>
              </ul>

              <h2 className="font-serif font-bold text-2xl mt-8 mb-4 text-[#0F172A]">Product Evaluation Criteria</h2>
              <p>Our ratings reflect weighted assessment across multiple factors:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ergonomic performance (35%)</li>
                <li>Build quality and durability (25%)</li>
                <li>Adjustability and customization (20%)</li>
                <li>Value and total cost of ownership (20%)</li>
              </ul>

              <h2 className="font-serif font-bold text-2xl mt-8 mb-4 text-[#0F172A]">Contact</h2>
              <p>Questions regarding our editorial standards should be directed to editorial@apexofficereviews.com.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
