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
              <p className="text-sm text-gray-500 mb-4">Last updated: August 7, 2025</p>

              <p className="mb-6 text-qb-dark-gray text-lg">
                Welcome to Quant Basket! These Terms of Service ("Terms") govern your use of the Quant Basket website, platform, and software-as-a-service that provides tools for community engagement through the use of non-monetary digital points (collectively, the "Service"). By accessing or using our Service, you agree to be bound by these Terms.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">1. Acceptance of Terms</h2>
              <p className="mb-6 text-qb-dark-gray">
                By creating an account or using the Service, you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree, you may not use the Service.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">2. Eligibility</h2>
              <p className="mb-6 text-qb-dark-gray">
                You must be at least 18 years old to use the Service. By using the Service, you represent and warrant that you meet this age requirement. The Service is intended for use in compliance with the laws of India.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">3. Nature and Use of Platform Points</h2>
              <p className="mb-4 text-qb-dark-gray">
                You explicitly acknowledge and agree to the following regarding all points, coins, credits, or other digital units issued on the Quant Basket platform:
              </p>
              <ul className="list-disc pl-6 mb-6 text-qb-dark-gray space-y-3">
                <li><strong>Solely for Engagement:</strong> The digital units are designed exclusively for community engagement, member recognition, and to unlock features or benefits within the platform. They serve as a tool to measure and reward participation.</li>
                <li><strong>No Monetary Value:</strong> The digital units have no cash, monetary, or fiat value. They are not currency or a financial instrument of any kind. Quant Basket does not offer them for sale, and they cannot be redeemed for cash from us or any third party.</li>
                <li><strong>Not a Virtual Digital Asset (VDA):</strong> The digital units are not VDAs, cryptocurrencies, securities, or any form of financial asset as defined under Indian law or any other jurisdiction. They are not intended for investment, speculation, or financial gain.</li>
                <li><strong>Strictly Non-Tradable and Non-Transferable:</strong> The digital units cannot be sold, traded, bartered, or exchanged for cash, other digital units, or any other value outside of the Quant Basket platform. The platform does not facilitate any such activity, and any attempt to do so is a direct violation of these Terms.</li>
              </ul>
              <p className="mb-6 text-qb-dark-gray">
                Quant Basket is a community engagement platform, NOT an investment, financial, or trading platform.
              </p>
              
              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">4. Acceptable Use Policy</h2>
              <ul className="list-disc pl-6 mb-6 text-qb-dark-gray space-y-2">
                <li>You agree to use the Service only for lawful, non-commercial, community-building purposes.</li>
                <li>You are expressly prohibited from:
                    <ul className="list-decimal pl-6 mt-2 space-y-1">
                        <li>Attempting to assign monetary value to platform points.</li>
                        <li>Attempting to sell, trade, or transfer points to other users or third parties.</li>
                        <li>Using the Service for any illegal activities, including fraud or money laundering.</li>
                        <li>Interfering with the Service's operation or security.</li>
                    </ul>
                </li>
                 <li>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
              </ul>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">5. Disclaimers and Limitation of Liability</h2>
              <p className="mb-4 text-qb-dark-gray">
                The Service is provided "as is" and "as available" without warranties of any kind. We do not provide financial, legal, investment, or tax advice. Any content on the platform is for informational and community engagement purposes only.
              </p>
              <p className="mb-6 text-qb-dark-gray">
                To the fullest extent permitted by law, Quant Basket shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use the Service.
              </p>
              
              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">6. Termination</h2>
              <p className="mb-6 text-qb-dark-gray">
                We reserve the right to terminate or suspend your access to the Service at our sole discretion, without prior notice, for any violation of these Terms, especially any attempt to trade or monetize platform points.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">7. Governing Law</h2>
              <p className="mb-6 text-qb-dark-gray">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
              </p>
              
              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">8. Changes to These Terms</h2>
              <p className="mb-6 text-qb-dark-gray">
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and, where feasible, by sending an email to our registered users.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">9. Contact Us</h2>
              <p className="mb-8 text-qb-dark-gray">
                If you have any questions about these Terms, please contact us at: <strong>support@quantbasket.com</strong>
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