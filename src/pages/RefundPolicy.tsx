
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CreditCard, Clock, XCircle, MessageSquare, Mail } from 'lucide-react';

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

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <CreditCard className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-0">Refund Eligibility</h2>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">You may be eligible for a refund under these conditions:</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Technical issues on our end prevented you from accessing your scheduled session</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Interviewer failed to show up for your scheduled session</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Service quality was significantly below our standards (subject to review)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Cancellation made at least 24 hours before your scheduled session</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-0">Processing Time</h2>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Review Process:</strong> 2-3 business days to evaluate your refund request</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Approval Notification:</strong> Email confirmation once request is approved</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Refund Processing:</strong> 5-7 business days to your original payment method</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Bank Processing:</strong> Additional 1-3 business days depending on your bank</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <XCircle className="w-6 h-6 text-red-500 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-0">Non-Refundable Items</h2>
                </div>
                <div className="bg-red-50 border-l-4 border-red-400 p-6">
                  <p className="text-gray-700 mb-4 font-semibold">The following are NOT eligible for refunds:</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Completed interview sessions where you attended and received feedback</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Sessions missed due to your absence or late cancellation (less than 24 hours)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Subscription fees after the first billing cycle</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Downloaded materials or reports you've already accessed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Services rendered more than 30 days ago</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <MessageSquare className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-0">How to Request a Refund</h2>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">1</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Contact Support</h4>
                        <p className="text-gray-700">Email us at support@mockit.com with "Refund Request" in the subject line</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">2</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Provide Details</h4>
                        <p className="text-gray-700">Include your order number, session details, and reason for the refund request</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">3</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Wait for Review</h4>
                        <p className="text-gray-700">Our team will review your request and respond within 2-3 business days</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">4</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Receive Confirmation</h4>
                        <p className="text-gray-700">If approved, you'll receive confirmation and the refund will be processed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-0">Need Help?</h3>
                </div>
                <p className="text-gray-700">
                  Have questions about our refund policy or need assistance? Our support team is here to help!
                </p>
                <p className="text-primary font-semibold mt-2">support@mockit.com</p>
                <p className="text-gray-600 text-sm mt-1">Response time: Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
