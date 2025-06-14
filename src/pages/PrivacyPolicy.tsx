
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Eye, Lock, Users, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">Last updated: January 1, 2024</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Eye className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-0">Information We Collect</h2>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Personal information you provide when creating an account (name, email, phone number)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Professional information including resume, job preferences, and career goals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Interview session data including recordings, feedback, and performance metrics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Usage data and analytics to improve our services</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-0">How We Use Your Information</h2>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Provide and maintain our mock interview services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Match you with appropriate interviewers and customize your experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Generate personalized feedback and performance reports</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Communicate with you about your sessions and account</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Improve our platform and develop new features</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-0">Information Sharing</h2>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4 font-semibold">We DO NOT sell or trade your personal information. We may share information only in these limited circumstances:</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>With your consent or at your direction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>With our interviewers to conduct your sessions (limited to necessary information only)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>To comply with legal obligations or protect our rights</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>With service providers who assist us in operating our platform (under strict confidentiality agreements)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Lock className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-0">Data Security</h2>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Industry-standard encryption for data in transit and at rest</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Regular security audits and vulnerability assessments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Secure access controls and authentication measures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Limited access to personal data on a need-to-know basis</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-0">Contact Us</h2>
                </div>
                <div className="bg-primary/10 p-6 rounded-lg">
                  <p className="text-gray-700">
                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <p className="text-primary font-semibold mt-2">mockit@rediffmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
