import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif font-bold text-4xl mb-6">About Apex Office Reviews</h1>

            <div className="prose max-w-none space-y-6 leading-relaxed text-gray-700">
              <p>
                Apex Office Reviews was founded in 2019 by a team of ergonomic specialists, industrial designers, and
                business technology journalists committed to providing objective, evidence-based analysis of executive
                office equipment.
              </p>

              <h2 className="font-serif font-bold text-2xl mt-8 mb-4 text-[#0F172A]">Our Mission</h2>
              <p>
                We believe that informed purchasing decisions require comprehensive, unbiased information. Our mission
                is to serve corporate procurement managers, executives, and remote professionals by conducting rigorous
                testing and analysis of office ergonomics and productivity tools.
              </p>

              <h2 className="font-serif font-bold text-2xl mt-8 mb-4 text-[#0F172A]">Editorial Standards</h2>
              <p>
                Every product reviewed undergoes a minimum 90-day testing period across multiple users and work
                environments. Our evaluation methodology incorporates:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ergonomic assessment based on peer-reviewed occupational health research</li>
                <li>Materials analysis and durability testing</li>
                <li>Long-term comfort evaluation across 8+ hour work sessions</li>
                <li>Build quality inspection and manufacturing standards review</li>
                <li>Value analysis including total cost of ownership calculations</li>
              </ul>

              <h2 className="font-serif font-bold text-2xl mt-8 mb-4 text-[#0F172A]">Editorial Independence</h2>
              <p>
                While we participate in affiliate programs to support our operations, all editorial decisions remain
                independent of commercial relationships. Products are never guaranteed positive reviews, and our ratings
                reflect objective performance against established criteria. We decline manufacturer influence over
                editorial content and maintain clear separation between advertising and editorial functions.
              </p>

              <h2 className="font-serif font-bold text-2xl mt-8 mb-4 text-[#0F172A]">Our Team</h2>
              <p>
                Our editorial staff includes certified ergonomic assessment specialists, former corporate procurement
                professionals, and journalists with expertise in business technology. This multidisciplinary approach
                ensures our reviews address both the technical performance and practical business considerations
                relevant to our audience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
