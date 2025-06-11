
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Refund Policy</h1>
            <p className="text-lg text-gray-600">Last updated: January 1, 2024</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
            <h2>30-Day Money-Back Guarantee</h2>
            <p>
              We offer a 30-day money-back guarantee for all our services. If you're not satisfied 
              with your experience, we'll provide a full refund.
            </p>

            <h2>Refund Eligibility</h2>
            <p>
              To be eligible for a refund, you must request it within 30 days of your initial purchase. 
              The refund request must include a reason for the refund.
            </p>

            <h2>Processing Time</h2>
            <p>
              Once your refund request is approved, we will process the refund within 5-7 business days. 
              The refund will be credited to your original payment method.
            </p>

            <h2>Non-Refundable Items</h2>
            <p>
              Certain services may not be eligible for refunds, including but not limited to: 
              completed interview sessions that you attended and received feedback for.
            </p>

            <h2>How to Request a Refund</h2>
            <p>
              To request a refund, please contact our support team at support@mockit.com with your 
              order details and reason for the refund request.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about our refund policy, please contact us at support@mockit.com.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
