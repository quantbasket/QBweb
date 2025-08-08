import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CancellationAndRefundPolicy = () => {
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
            Cancellation & Refund Policy
          </h1>
          <p className="text-xl text-gray-200">
            Clear and fair terms for our platform subscription services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-br from-qb-soft-gray to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-l-qb-green">
              <h2 className="text-4xl font-bold mb-2 text-qb-navy">Cancellation & Refund Policy – Quant Basket</h2>

              <p className="mb-6 text-qb-dark-gray text-lg">
                At Quant Basket, we aim to provide clear and transparent terms for our subscription-based services. This policy outlines the procedures for canceling your subscription and the conditions under which a refund may be issued.
              </p>

              {/* --- Service Delivery and Return Summary --- */}
              <div className="my-6 p-4 bg-gray-50 rounded-lg border border-gray-200 text-base">
                  <p className="text-qb-dark-gray">
                    <strong>Service Delivery:</strong> As a Software-as-a-Service (SaaS) platform, our services are delivered digitally. Access to paid plan features is granted to your account immediately upon successful subscription payment.
                  </p>
                  <p className="text-qb-dark-gray mt-2">
                    <strong>No Returns:</strong> Due to the immediate and digital nature of our service, we do not offer returns on subscriptions. This policy outlines the specific terms for cancellations and refund eligibility instead.
                  </p>
              </div>
              {/* --- End of Section --- */}

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">1. Subscription Cancellation</h2>
              <p className="mb-4 text-qb-dark-gray">
                You can cancel your monthly or annual subscription at any time through your account settings. 
              </p>
               <ul className="list-disc pl-6 mb-6 text-qb-dark-gray space-y-2">
                <li>Your cancellation will take effect at the end of your current paid billing period.</li>
                <li>You will continue to have access to the features of your paid plan until the end of the billing period.</li>
                <li>You will not be charged for any subsequent billing cycles after cancellation.</li>
              </ul>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">2. Refund Policy</h2>
               <ul className="list-disc pl-6 mb-6 text-qb-dark-gray space-y-2">
                <li><strong>7-Day Refund for New Subscribers:</strong> If you are a new, first-time subscriber to a paid plan, you are eligible for a full refund provided you cancel your subscription and request the refund within seven (7) calendar days of your initial payment.</li>
                <li><strong>No Refunds After 7 Days:</strong> No refunds will be issued for cancellation requests made after the initial 7-day period. We do not offer prorated refunds for partial use of the service during a billing period.</li>
                <li><strong>Platform Tokens:</strong> The non-monetary community and engagement tokens on our platform have no cash value and are not eligible for any form of refund.</li>
                <li><strong>Technical Errors:</strong> If you are charged due to a verified technical error on our platform but do not receive access to the subscribed services, we will issue a full refund to the original payment method upon verification.</li>
                <li><strong>Fraud or Unauthorized Activity:</strong> We will investigate any reports of unauthorized transactions. Verified cases will be refunded in accordance with applicable laws.</li>
              </ul>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">3. How to Request a Refund</h2>
              <p className="mb-4 text-qb-dark-gray">
                To request a refund under the terms above, please contact our support team at <a href="mailto:support@quantbasket.com" className="text-qb-green hover:underline">support@quantbasket.com</a> with the following information:
              </p>
              <ul className="list-disc pl-6 mb-6 text-qb-dark-gray space-y-2">
                <li>Your registered email address</li>
                <li>The transaction ID or receipt from your payment</li>
                <li>The date of your initial purchase</li>
                <li>The reason for your refund request</li>
              </ul>
              <p className="mb-4 text-qb-dark-gray">
                Our team will review your request and respond within 5–7 business days.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">4. Important Notes</h2>
              <ul className="list-disc pl-6 mb-6 text-qb-dark-gray space-y-2">
                <li>Refund eligibility is determined at the sole discretion of Quant Basket, in accordance with this policy.</li>
                <li>Quant Basket reserves the right to amend this policy at any time. Any changes will be posted on this page.</li>
              </ul>
              <p className="mb-8 text-qb-dark-gray">
                For any questions, please email us at: <strong>support@quantbasket.com</strong>
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

export default CancellationAndRefundPolicy;