
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { TrendingUp, DollarSign, MapPin, Briefcase } from 'lucide-react';

const SalaryGuide = () => {
  const salaryData = [
    {
      role: "Software Engineer",
      experience: "Entry Level (0-2 years)",
      salary: "$70,000 - $95,000",
      location: "National Average",
      growth: "+8%"
    },
    {
      role: "Product Manager",
      experience: "Mid Level (3-5 years)",
      salary: "$110,000 - $140,000",
      location: "National Average",
      growth: "+12%"
    },
    {
      role: "Data Scientist",
      experience: "Senior Level (5+ years)",
      salary: "$130,000 - $180,000",
      location: "National Average",
      growth: "+15%"
    },
    {
      role: "UX Designer",
      experience: "Mid Level (3-5 years)",
      salary: "$85,000 - $115,000",
      location: "National Average",
      growth: "+10%"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Salary Guide</h1>
            <p className="text-xl text-gray-600">Know your worth with comprehensive salary data and market insights</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">$95K</h3>
              <p className="text-gray-600">Average Salary</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <TrendingUp className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">+11%</h3>
              <p className="text-gray-600">Annual Growth</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50</h3>
              <p className="text-gray-600">Cities Covered</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Briefcase className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">200+</h3>
              <p className="text-gray-600">Job Roles</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900">Popular Roles</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salary Range</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {salaryData.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.experience}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.salary}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-success font-medium">{item.growth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SalaryGuide;
