
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, ExternalLink } from 'lucide-react';

const Press = () => {
  const pressReleases = [
    {
      id: 1,
      title: "MockIt Raises $10M Series A to Transform Interview Preparation",
      date: "2024-01-20",
      excerpt: "Leading interview preparation platform secures funding to expand AI-powered coaching features.",
      publication: "TechCrunch"
    },
    {
      id: 2,
      title: "How MockIt is Helping Job Seekers Land Dream Jobs",
      date: "2025-01-15",
      excerpt: "Feature story on MockIt's impact on the job search process and candidate success rates.",
      publication: "Forbes"
    },
    {
      id: 3,
      title: "MockIt Named Best Interview Prep Platform of 2024",
      date: "2025-01-15",
      excerpt: "Annual awards recognize MockIt's innovation in career preparation technology.",
      publication: "Product Hunt"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Press & Media</h1>
            <p className="text-xl text-gray-600">Latest news and media coverage about MockIt</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Media Kit</h2>
            <p className="text-gray-600 mb-6">
              Download our media kit for high-resolution logos, company information, and brand guidelines.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-semibold">
              Download Media Kit
            </button>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Coverage</h2>
            {pressReleases.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{article.date}</span>
                      <span className="font-medium">{article.publication}</span>
                    </div>
                  </div>
                  <button className="ml-4 text-primary hover:text-primary/80">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Media Contact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Press Inquiries</h3>
                <p className="text-gray-600">press@mockit.com</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">General Media</h3>
                <p className="text-gray-600">media@mockit.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Press;
