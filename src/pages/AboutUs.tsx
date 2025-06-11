
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, Target, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About MockIt</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to help job seekers ace their interviews and land their dream jobs through expert-led mock interviews and personalized feedback.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To democratize interview preparation and help every job seeker build confidence for their career journey.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Team</h3>
              <p className="text-gray-600">
                Experienced professionals from top companies who understand what it takes to succeed in interviews.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Impact</h3>
              <p className="text-gray-600">
                Over 10,000 successful interviews conducted with a 95% success rate in helping candidates land jobs.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                MockIt was founded with a simple belief: every job seeker deserves the opportunity to present their best self during interviews. We recognized that interview skills are rarely taught, yet they're crucial for career success.
              </p>
              <p className="mb-4">
                Our platform connects job seekers with experienced professionals who provide realistic mock interviews and actionable feedback. We've helped thousands of candidates overcome interview anxiety, improve their communication skills, and ultimately land their dream jobs.
              </p>
              <p>
                Whether you're a recent graduate, career changer, or experienced professional, MockIt is here to support your journey to interview success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
