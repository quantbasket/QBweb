import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CancellationAndRefundPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Compliance Disclaimer */}
      <div className="w-full bg-yellow-100 border-b border-yellow-300 text-yellow-900 text-center py-2 px-4 text-xs sm:text-sm">
        <strong>Disclaimer:</strong> Platform subscription fees are for access to software features only. These payments do not constitute a purchase of any digital asset. All platform points are non-refundable as they have no monetary value.
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
              <p className="text-sm text-gray-500 mb-4">Last updated: August 7, 2025</p>

              <p className="mb-6 text-qb-dark-gray text-lg">
                At Quant Basket, we provide a Software-as-a-Service (SaaS) platform. This policy outlines the procedures for service delivery, subscription cancellation, and the conditions for refunds.
              </p>

              {/* --- Service Delivery --- */}
              <div className="my-6 p-4 bg-gray-50 rounded-lg border border-gray-200 text-base">
                  <h3 className="text-xl font-semibold text-qb-navy mb-2">Service Delivery (Shipping Policy)</h3>
                  <p className="text-qb-dark-gray">
                    <strong>Service Type:</strong> As a Software-as-a-Service (SaaS) platform, our services are delivered digitally. No physical products are shipped.
                  </p>
                  <p className="text-qb-dark-gray mt-2">
                    <strong>Delivery Timeline:</strong> Access to your chosen subscription plan features is granted to your account immediately upon successful payment confirmation. You will receive an email confirmation to your registered email address.
                  </p>
              </div>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">1. Subscription Cancellation</h2>
              <p className="mb-4 text-qb-dark-gray">
                You can cancel your monthly or annual subscription at any time directly from your account settings dashboard.
              </p>
               <ul className="list-disc pl-6 mb-6 text-qb-dark-gray space-y-2">
                <li><strong>Effective Date:</strong> Your cancellation will become effective at the end of your current paid billing period (e.g., at the end of the current month for a monthly plan).</li>
                <li><strong>Continued Access:</strong> You will retain full access to your paid plan's features until the cancellation becomes effective.</li>
                <li><strong>Future Billings:</strong> You will not be charged for any subsequent billing cycles after you cancel.</li>
              </ul>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">2. Refund Policy</h2>
               <ul className="list-disc pl-6 mb-6 text-qb-dark-gray space-y-2">
                <li><strong>7-Day Refund for New Subscribers:</strong> If you are a new, first-time subscriber to a paid plan, you are eligible for a full refund. To qualify, you must cancel your subscription and request the refund within <strong>seven (7) calendar days</strong> of your initial payment.</li>
                <li><strong>No Refunds After 7 Days:</strong> No refunds will be issued for cancellation requests made after this initial 7-day period. We do not offer prorated refunds for partial use of the service.</li>
                <li><strong>Refund Mode:</strong> Approved refunds will be processed back to the <strong>original method of payment</strong> (e.g., credit card, bank account) within 7-10 business days.</li>
                <li><strong>Platform Points Are Non-Refundable:</strong> The non-monetary digital points used for community engagement have no cash value and are not eligible for any form of refund. Subscription payments are for platform access only.</li>
                <li><strong>Technical Errors:</strong> If you were charged due to a verified technical error on our platform and did not receive access to the subscribed services, we will issue a full refund upon verification.</li>
              </ul>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">3. How to Request a Refund</h2>
              <p className="mb-4 text-qb-dark-gray">
                To request a refund within the 7-day eligibility period, please contact our support team at <a href="mailto:support@quantbasket.com" className="text-qb-green hover:underline">support@quantbasket.com</a> with the following details:
              </p>
              <ul className="list-disc pl-6 mb-6 text-qb-dark-gray space-y-2">
                <li>Your registered email address</li>
                <li>The transaction ID or payment receipt</li>
                <li>A clear statement that you are requesting a refund under the 7-day policy</li>
              </ul>
              <p className="mb-4 text-qb-dark-gray">
                Our team will review your request and respond within 3-5 business days.
              </p>
              
              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">4. Important Notes</h2>
                <ul className="list-disc pl-6 mb-6 text-qb-dark-gray space-y-2">
                    <li>This policy applies to subscription fees only.</li>
                    <li>Quant Basket reserves the right to amend this policy at any time. Changes will be posted on this page and will apply to all subscriptions initiated after the date of the change.</li>
                </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CancellationAndRefundPolicy;