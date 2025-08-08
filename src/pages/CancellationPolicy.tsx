import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CancellationAndRefundPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">
            Cancellation & Refund Policy
          </h1>
          <p className="text-xl text-gray-200">
            Clear and fair terms for our digital asset services
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-br from-qb-soft-gray to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-l-qb-green">
              <h2 className="text-4xl font-bold mb-2 text-qb-navy">Cancellation & Refund Policy – QuantBasket</h2>

              <p className="mb-6 text-qb-dark-gray text-lg">
                At QuantBasket, we aim to provide clear, transparent, and fair terms for all our users. Because our products involve digital assets, tokenized portfolios, and community-based projects.
              </p>

              {/* --- New Section for Delivery and Return Summary --- */}
              <div className="my-6 p-4 bg-gray-50 rounded-lg border border-gray-200 text-base">
                  <p className="text-qb-dark-gray">
                    <strong>Service Delivery:</strong> As a SaaS platform, our services are delivered digitally and are accessible immediately in your account upon successful payment during the trial period.
                  </p>
                  <p className="text-qb-dark-gray mt-2">
                    <strong>Returns:</strong> Due to the digital nature of our service, we do not offer returns. This policy outlines the specific terms for cancellations and refund eligibility.
                  </p>
              </div>
              {/* --- End of New Section --- */}

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">1. Cancellations</h2>
              <p className="mb-4 text-qb-dark-gray">
                <strong>Before Purchase:</strong> You may cancel any order or subscription before making the payment.
              </p>
              <p className="mb-4 text-qb-dark-gray">
                <strong>After Purchase:</strong> Once your purchase is confirmed and access rights are issued, cancellations are not possible and are irreversible in nature.
              </p>
              <p className="mb-4 text-qb-dark-gray">
                <strong>Pre-Launch Products:</strong> If you’ve pre-ordered or subscribed to a future product/service, you may request cancellation up to 7 days before launch for a full refund.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">2. Refunds</h2>
               <ul className="list-disc pl-6 mb-6 text-qb-dark-gray space-y-2">
                <li><strong>Service Subscriptions:</strong> Monthly/annual service subscriptions can be refunded on a pro-rata basis if cancelled within the first 7 days of the Trial period.</li>
                <li><strong>Technical Errors:</strong> If a transaction fails due to a verified technical issue on our side and no subscription is delivered, we will issue a full refund in the original payment method.</li>
                <li><strong>Fraud or Unauthorized Activity:</strong> We will investigate any reports of unauthorized transactions. Verified cases will be refunded in accordance with applicable laws.</li>
              </ul>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">3. How to Request a Refund</h2>
              <p className="mb-4 text-qb-dark-gray">
                To request a refund or cancellation (where applicable), contact our support team at <a href="mailto:support@quantbasket.com" className="text-qb-green hover:underline">support@quantbasket.com</a> with:
              </p>
              <ul className="list-disc pl-6 mb-6 text-qb-dark-gray space-y-2">
                <li>Your transaction ID</li>
                <li>Date of purchase</li>
                <li>Reason for the request</li>
              </ul>
              <p className="mb-4 text-qb-dark-gray">
                We will respond within 5–7 business days.
              </p>

              <h2 className="text-3xl font-semibold mb-4 text-qb-navy">4. Important Notes</h2>
              <ul className="list-disc pl-6 mb-6 text-qb-dark-gray space-y-2">
                <li>Refund eligibility may vary based on your country’s consumer protection laws.</li>
                <li>QuantBasket reserves the right to amend this policy at any time to comply with legal and business requirements.</li>
              </ul>
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

export default CancellationAndRefundPolicy;