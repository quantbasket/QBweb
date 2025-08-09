import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Compliance Disclaimer */}
      <div className="w-full bg-yellow-100 border-b border-yellow-300 text-yellow-900 text-center py-2 px-4 text-xs sm:text-sm">
        <strong>Disclaimer:</strong> Quant Basket is a community engagement platform. We do not offer, sell, or facilitate trading of any financial assets or Virtual Digital Assets.
      </div>
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-200">
            How we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-br from-qb-soft-gray to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-l-qb-green">
              <h2 className="text-4xl font-bold mb-6 text-qb-navy">Privacy Policy for Quant Basket</h2>
              <p className="text-sm text-gray-500 mb-4">Last updated: August 7, 2025</p>

              <p className="mb-6 text-qb-dark-gray text-lg">
                This Privacy Policy describes how Quant Basket ("we," "us," or "our") collects, uses, and discloses your information when you use our website and our software-as-a-service for community engagement (the "Service").
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">1. Information We Collect</h2>
              <h3 className="text-2xl font-medium mb-3 text-qb-navy">1.1 Information You Provide:</h3>
              <ul className="list-disc pl-6 mb-6 text-qb-dark-gray space-y-2">
                <li><strong>Account Information:</strong> Your name, email address, and password (hashed). When you sign in with Google OAuth, we collect your name and email address as provided by Google.</li>
                <li><strong>Community Information:</strong> Details you provide when setting up your community, such as community name and rules for your points system.</li>
                <li><strong>Payment Information:</strong> When you subscribe to a paid plan, our third-party payment processor collects your payment card information. We do not store this information on our servers.</li>
                <li><strong>Communication Information:</strong> Any information you provide when you contact our support team.</li>
              </ul>

              <h3 className="text-2xl font-medium mb-3 text-qb-navy">1.2 Automatically Collected Information:</h3>
              <ul className="list-disc pl-6 mb-6 text-qb-dark-gray space-y-2">
                <li><strong>Usage Data:</strong> We collect information about how you interact with our Service, such as features used, pages viewed, and time spent on the platform.</li>
                <li><strong>Device Information:</strong> We collect your IP address, browser type, and operating system to help diagnose problems and secure the Service.</li>
              </ul>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">2. How We Use Your Information</h2>
              <p className="mb-4 text-qb-dark-gray">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-qb-dark-gray space-y-2">
                <li>Provide, operate, maintain, and improve our Service.</li>
                <li>Process your subscription payments and manage your account.</li>
                <li>Communicate with you, including sending service-related emails and responding to support requests.</li>
                <li>Monitor and analyze usage to improve user experience.</li>
                <li>Enhance the security of our Service and prevent fraud.</li>
              </ul>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">3. How We Share Your Information</h2>
              <ul className="list-disc pl-6 mb-6 text-qb-dark-gray space-y-2">
                <li><strong>With Service Providers:</strong> We share information with third-party vendors who perform services on our behalf, such as payment processing (e.g., Stripe, PayU, Razorpay), cloud hosting (e.g., AWS, Azure), and analytics.</li>
                <li><strong>For Legal Reasons:</strong> We may disclose your information if required by law, subpoena, or other legal process, or if we believe in good faith that disclosure is necessary to protect our rights, your safety, or the safety of others.</li>
                <li><strong>With Your Consent:</strong> We may share your information for any other purpose with your explicit consent.</li>
              </ul>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">4. Your Rights and Choices</h2>
              <p className="mb-4 text-qb-dark-gray">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-6 text-qb-dark-gray space-y-2">
                <li>You can access and update your account information at any time through your profile settings.</li>
                <li>You can opt-out of marketing communications by following the unsubscribe link in our emails.</li>
                <li>You can request the deletion of your account and associated data by contacting us, subject to our legal and contractual obligations to retain certain information.</li>
              </ul>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">5. Data Security</h2>
              <p className="mb-6 text-qb-dark-gray">
                We implement robust security measures, including encryption and access controls, to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee its absolute security.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">6. Changes to This Policy</h2>
              <p className="mb-6 text-qb-dark-gray">
                We may update this Privacy Policy periodically. We will notify you of any significant changes by posting the new policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">7. Contact Us</h2>
              <p className="mb-8 text-qb-dark-gray">
                If you have any questions, please email us at: <strong>support@quantbasket.com</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;