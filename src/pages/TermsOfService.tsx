import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Compliance Disclaimer */}
      <div className="w-full bg-yellow-100 border-b border-yellow-300 text-yellow-900 text-center py-2 px-4 text-xs sm:text-sm">
        <strong>Disclaimer:</strong> All tokens on this platform are for community engagement and recognition only. They hold no monetary value, are not tradable, and are not Virtual Digital Assets or cryptocurrencies.
      </div>
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-200">
            Important terms and conditions for using our platform.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-br from-qb-soft-gray to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-l-qb-blue">
              <h2 className="text-4xl font-bold mb-6 text-qb-navy">Terms of Service for Quant Basket</h2>

              <p className="mb-6 text-qb-dark-gray text-lg">
                Welcome to Quant Basket! These Terms of Service ("Terms") govern your use of the Quant Basket website, platform, and services that provide tools for community engagement, member recognition, and analytics through the use of non-monetary digital tokens (collectively, the "Service"). By accessing or using our Service, you agree to be bound by these Terms.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">1. Acceptance of Terms</h2>
              <p className="mb-6 text-qb-dark-gray">
                By creating an account or using the Service, you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree, you may not use the Service.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">2. Eligibility</h2>
              <p className="mb-6 text-qb-dark-gray">
                You must be at least 18 years old to use the Service. By using the Service, you represent and warrant that you meet this age requirement. The Service is intended for use in compliance with Indian law.
              </p>

              {/* New Explicit Section as Requested */}
              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">3. Nature of Platform Tokens</h2>
              <p className="mb-4 text-qb-dark-gray">
                You explicitly acknowledge and agree to the following regarding all tokens, coins, or other digital items issued on the Quant Basket platform:
              </p>
              <ul className="list-disc pl-6 mb-6 text-qb-dark-gray space-y-2">
                <li><strong>Non-Financial Purpose:</strong> Tokens are for community engagement, educational use, member recognition, or access to non-financial benefits within the platform only.</li>
                <li><strong>No Monetary Value:</strong> Tokens do not represent any monetary value, currency, or financial instrument. Quant Basket does not offer them for sale, and they are not redeemable for cash or any other currency from us or any third party.</li>
                <li><strong>Not a Virtual Digital Asset (VDA):</strong> The tokens are not Virtual Digital Assets (VDAs) or cryptocurrencies as defined under Indian law or any other jurisdiction. They are not designed or intended to be used as a medium of exchange or a store of value.</li>
                <li><strong>Non-Tradable:</strong> Tokens are not tradable, transferable for value, or exchangeable on any secondary market, exchange, or with other users. The platform does not facilitate any such activity.</li>
              </ul>
              <p className="mb-6 text-qb-dark-gray">
                The Service is a community and educational platform, not an investment, financial, or trading platform.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">4. Your Account</h2>
              <ul className="list-disc pl-6 mb-6 text-qb-dark-gray space-y-2">
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You agree to provide accurate and complete information when creating your account.</li>
                <li>You must notify us immediately of any unauthorized use of your account.</li>
              </ul>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">5. Use of the Service</h2>
              <h3 className="text-2xl font-medium mb-3 text-qb-navy">5.1 Permitted Use:</h3>
              <p className="mb-4 text-qb-dark-gray">
                You may use the Service only for lawful, non-commercial, community-building purposes and in accordance with these Terms.
              </p>
              <h3 className="text-2xl font-medium mb-3 text-qb-navy">5.2 Prohibited Conduct:</h3>
              <p className="mb-4 text-qb-dark-gray">
                You agree not to engage in any prohibited activities, including attempting to assign monetary value to tokens, attempting to trade tokens, illegal activities, fraud, or interfering with the Service's operation.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">6. Disclaimers and Limitation of Liability</h2>
              <p className="mb-4 text-qb-dark-gray">
                The Service is provided "as is" and "as available" without warranties of any kind. We do not provide financial, legal, investment, or tax advice. Any content on the platform is for informational and educational purposes only.
              </p>
              <p className="mb-6 text-qb-dark-gray">
                In no event shall Quant Basket be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use the Service.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">7. Intellectual Property</h2>
              <p className="mb-6 text-qb-dark-gray">
                All intellectual property rights in the Service are owned by Quant Basket or its licensors.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">8. Termination</h2>
              <p className="mb-6 text-qb-dark-gray">
                We may terminate or suspend your access to the Service at our sole discretion if you violate these Terms. However, where feasible, we will provide prior notice through your registered email.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">9. Governing Law</h2>
              <p className="mb-6 text-qb-dark-gray">
                These Terms shall be governed by and construed in accordance with the laws of India, and any disputes will be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">10. Changes to These Terms</h2>
              <p className="mb-6 text-qb-dark-gray">
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and by sending an email to our registered users.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">11. Contact Us</h2>
              <p className="mb-4 text-qb-dark-gray">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mb-8 text-qb-dark-gray">
                <strong>Email:</strong> support@quantbasket.com
              </p>

              <p className="text-sm text-gray-500">
                Last updated: July 25, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;