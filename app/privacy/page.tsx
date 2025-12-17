import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif font-bold text-4xl mb-6">Privacy Policy</h1>
            <p className="text-sm text-gray-600 mb-8">Last Updated: December 4, 2024</p>

            <div className="prose max-w-none space-y-6 leading-relaxed text-gray-700">
              <p>
                Apex Office Reviews ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>

              <h2 className="font-serif font-bold text-2xl mt-8 mb-4 text-[#0F172A]">Information We Collect</h2>
              <p>
                We may collect information about you in a variety of ways. The information we may collect on the site
                includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Data:</strong> Name, email address, and contact information you voluntarily provide
                  when contacting us.
                </li>
                <li>
                  <strong>Analytics Data:</strong> Information about your device, browsing actions, and usage patterns
                  collected through cookies and similar technologies.
                </li>
                <li>
                  <strong>Affiliate Link Data:</strong> When you click on product links, we may receive information
                  about the referral.
                </li>
              </ul>

              <h2 className="font-serif font-bold text-2xl mt-8 mb-4 text-[#0F172A]">Use of Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide customer service</li>
                <li>Improve our website and editorial content</li>
                <li>Analyze site usage and optimize user experience</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="font-serif font-bold text-2xl mt-8 mb-4 text-[#0F172A]">Disclosure of Your Information</h2>
              <p>We do not sell or rent your personal information to third parties. We may share information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers who assist in operating our website</li>
                <li>Analytics partners to understand site usage</li>
                <li>Law enforcement when required by legal process</li>
              </ul>

              <h2 className="font-serif font-bold text-2xl mt-8 mb-4 text-[#0F172A]">
                Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and store certain
                information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                sent.
              </p>

              <h2 className="font-serif font-bold text-2xl mt-8 mb-4 text-[#0F172A]">Third-Party Websites</h2>
              <p>
                Our website may contain links to third-party websites, including affiliate product links. We are not
                responsible for the privacy practices of these external sites.
              </p>

              <h2 className="font-serif font-bold text-2xl mt-8 mb-4 text-[#0F172A]">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us through our contact form or email us
                at privacy@apexofficereviews.com.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
