
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Search, HelpCircle, MessageCircle, Book } from 'lucide-react';
import { Input } from '@/components/ui/input';

const HelpCenter = () => {
  const categories = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics of using MockIt",
      articles: 12
    },
    {
      icon: MessageCircle,
      title: "Mock Interviews",
      description: "Everything about booking and conducting interviews",
      articles: 8
    },
    {
      icon: HelpCircle,
      title: "Technical Support",
      description: "Troubleshooting and technical issues",
      articles: 15
    }
  ];

  const popularArticles = [
    "How to book your first mock interview",
    "What to expect during a mock interview session",
    "How to reschedule or cancel an interview",
    "Understanding your feedback report",
    "Tips for getting the most out of your session"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
            <p className="text-xl text-gray-600 mb-8">Find answers to your questions and get the help you need</p>
            
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Search for help..." 
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer">
                <category.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <span className="text-sm text-gray-500">{category.articles} articles</span>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Popular Articles</h2>
            <ul className="space-y-4">
              {popularArticles.map((article, index) => (
                <li key={index}>
                  <a href="#" className="text-primary hover:text-primary/80 hover:underline">
                    {article}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Still need help?</h2>
            <p className="text-gray-600 mb-6">Can't find what you're looking for? Our support team is here to help.</p>
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold">
              Contact Support
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpCenter;
