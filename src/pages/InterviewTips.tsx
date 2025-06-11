
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';

const InterviewTips = () => {
  const tips = [
    {
      category: "Before the Interview",
      items: [
        "Research the company thoroughly - mission, values, recent news",
        "Review the job description and match your skills to requirements",
        "Prepare specific examples using the STAR method",
        "Practice common interview questions out loud",
        "Prepare thoughtful questions to ask the interviewer"
      ]
    },
    {
      category: "During the Interview",
      items: [
        "Arrive 10-15 minutes early",
        "Maintain good eye contact and body language",
        "Listen carefully to questions before answering",
        "Use specific examples to support your answers",
        "Ask clarifying questions if needed"
      ]
    },
    {
      category: "Technical Interviews",
      items: [
        "Practice coding problems on whiteboard or paper",
        "Think out loud during problem-solving",
        "Ask about edge cases and constraints",
        "Test your solution with examples",
        "Discuss time and space complexity"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Interview Tips</h1>
            <p className="text-xl text-gray-600">Essential tips to help you succeed in your next interview</p>
          </div>

          <div className="space-y-8">
            {tips.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.category}</h2>
                <ul className="space-y-3">
                  {section.items.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InterviewTips;
