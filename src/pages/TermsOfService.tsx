
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText, CheckCircle, AlertTriangle, Shield, Scale } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-600">Last updated: January 1, 2024</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-0">Acceptance of Terms</h2>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">By using MockIt's services, you agree to:</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Be bound by these terms and conditions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Comply with all applicable laws and regulations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Use our services in good faith and for their intended purpose</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-0">Use License</h2>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">We grant you a limited license to:</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Access and use MockIt's platform for personal interview preparation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Participate in mock interview sessions with our certified interviewers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Download and use feedback reports for your professional development</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4 font-semibold text-red-600">You may NOT:</p>
                  <ul className="space-y-3 text-gray-700 mt-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Share your account credentials with others</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Record sessions without explicit permission</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Use our services for commercial purposes without authorization</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-0">Service Availability</h2>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>We aim for 99.9% uptime but cannot guarantee uninterrupted service</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Scheduled maintenance will be communicated in advance when possible</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Service may be temporarily unavailable due to technical issues or updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>We reserve the right to modify or discontinue features with notice</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-0">User Responsibilities</h2>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Maintain the security and confidentiality of your account credentials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Provide accurate and up-to-date information in your profile</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Treat our interviewers and staff with respect and professionalism</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Report any technical issues or inappropriate behavior promptly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Accept responsibility for all activities under your account</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Scale className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-0">Limitation of Liability</h2>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                  <p className="text-gray-700 mb-4">MockIt's liability is limited as follows:</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>We are not liable for indirect, incidental, or consequential damages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Our total liability will not exceed the amount you paid for services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>We do not guarantee specific interview outcomes or job placement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Services are provided "as is" without warranties of any kind</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Questions about Terms?</h3>
                <p className="text-gray-700">
                  Contact our legal team at <span className="text-primary font-semibold">mockit@rediffmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
