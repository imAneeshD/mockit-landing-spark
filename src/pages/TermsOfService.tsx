
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

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

          <div className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using MockIt's services, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>

            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily use MockIt's services for personal, non-commercial 
              transitory viewing only.
            </p>

            <h2>Service Availability</h2>
            <p>
              We strive to maintain high availability of our services but cannot guarantee uninterrupted 
              access due to maintenance, updates, or unforeseen circumstances.
            </p>

            <h2>User Responsibilities</h2>
            <p>
              Users are responsible for maintaining the confidentiality of their account information 
              and for all activities that occur under their account.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              MockIt shall not be liable for any indirect, incidental, special, consequential, or 
              punitive damages resulting from your use of the service.
            </p>

            <h2>Contact Information</h2>
            <p>
              Questions about the Terms of Service should be sent to us at legal@mockit.com.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
