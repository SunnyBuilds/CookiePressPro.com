import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif font-bold text-4xl mb-6">Terms of Service</h1>
            <p className="text-sm text-gray-600 mb-8">Last Updated: December 4, 2024</p>

            <div className="prose max-w-none space-y-6 leading-relaxed text-gray-700">
              <p>
                Please read these Terms of Service ("Terms") carefully before using the Apex Office Reviews website. By
                accessing or using our website, you agree to be bound by these Terms.
              </p>

              <h2 className="font-serif font-bold text-2xl mt-8 mb-4 text-[#0F172A]">Use of Website</h2>
              <p>You may use our website for lawful purposes only. You agree not to use the website:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>In any way that violates any applicable federal, state, local, or international law</li>
                <li>To transmit any unsolicited or unauthorized advertising or promotional material</li>
                <li>To impersonate or attempt to impersonate Apex Office Reviews or another user</li>
                <li>To engage in any conduct that restricts or inhibits anyone's use of the website</li>
              </ul>

              <h2 className="font-serif font-bold text-2xl mt-8 mb-4 text-[#0F172A]">Intellectual Property Rights</h2>
              <p>
                The website and its entire contents, features, and functionality (including but not limited to all
                information, software, text, displays, images, and the design, selection, and arrangement thereof) are
                owned by Apex Office Reviews and are protected by copyright, trademark, and other intellectual property
                laws.
              </p>

              <h2 className="font-serif font-bold text-2xl mt-8 mb-4 text-[#0F172A]">Editorial Content Disclaimer</h2>
              <p>
                Our reviews and recommendations are based on our independent editorial assessment. While we conduct
                thorough testing and research, individual experiences may vary. We make no warranties or representations
                about the accuracy or completeness of the content provided on the website.
              </p>

              <h2 className="font-serif font-bold text-2xl mt-8 mb-4 text-[#0F172A]">Affiliate Relationships</h2>
              <p>
                Apex Office Reviews participates in affiliate marketing programs. When you click on certain links and
                make a purchase, we may receive a commission. This does not affect the price you pay, and all editorial
                recommendations are made independently of commercial relationships.
              </p>

              <h2 className="font-serif font-bold text-2xl mt-8 mb-4 text-[#0F172A]">Limitation of Liability</h2>
              <p>
                In no event shall Apex Office Reviews, its directors, employees, or agents be liable for any indirect,
                incidental, special, consequential, or punitive damages arising out of or related to your use of the
                website.
              </p>

              <h2 className="font-serif font-bold text-2xl mt-8 mb-4 text-[#0F172A]">Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United States, without
                regard to its conflict of law provisions.
              </p>

              <h2 className="font-serif font-bold text-2xl mt-8 mb-4 text-[#0F172A]">Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by
                posting the new Terms on this page with an updated effective date.
              </p>

              <h2 className="font-serif font-bold text-2xl mt-8 mb-4 text-[#0F172A]">Contact Information</h2>
              <p>
                Questions about these Terms should be sent to us through our contact form or emailed to
                legal@apexofficereviews.com.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
