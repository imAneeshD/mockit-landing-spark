
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Download, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResumeTemplates = () => {
  const templates = [
    {
      id: 1,
      name: "Professional Classic",
      description: "Clean and traditional layout perfect for corporate roles",
      rating: 4.8,
      downloads: 2500,
      category: "Professional"
    },
    {
      id: 2,
      name: "Modern Creative",
      description: "Contemporary design with subtle creative elements",
      rating: 4.9,
      downloads: 1800,
      category: "Creative"
    },
    {
      id: 3,
      name: "Tech Specialist",
      description: "Optimized for software developers and IT professionals",
      rating: 4.7,
      downloads: 3200,
      category: "Technology"
    },
    {
      id: 4,
      name: "Executive Leadership",
      description: "Sophisticated template for senior management positions",
      rating: 4.8,
      downloads: 1200,
      category: "Executive"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Resume Templates</h1>
            <p className="text-xl text-gray-600">Professional resume templates to help you stand out</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {templates.map((template) => (
              <div key={template.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400">Template Preview</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                    {template.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm text-gray-600">{template.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{template.name}</h3>
                <p className="text-gray-600 mb-4">{template.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{template.downloads} downloads</span>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResumeTemplates;
