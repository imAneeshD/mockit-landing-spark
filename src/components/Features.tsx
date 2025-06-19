
import { Check, Star, Users, Calendar, Book } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Interviewers",
      description: "Practice with industry professionals from top companies including FAANG, startups, and established corporations.",
      benefits: ["Real industry experience", "Company-specific insights", "Current market trends"]
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Book sessions that fit your schedule with 24/7 availability across different time zones.",
      benefits: ["Same-day availability", "Reschedule easily", "Multiple time zones"]
    },
    {
      icon: Star,
      title: "Detailed Feedback",
      description: "Get comprehensive analysis of your performance with actionable insights and improvement strategies.",
      benefits: ["Video recordings", "Written feedback", "Score breakdown"]
    },
    {
      icon: Book,
      title: "Resume & Career Tips",
      description: "Access our library of career resources, resume templates, and insider tips from hiring managers.",
      benefits: ["ATS-optimized templates", "Industry-specific guides", "Salary negotiation tips"]
    }
  ];

  function setShowTestForm(arg0: boolean): void {
    throw new Error('Function not implemented.');
  }

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-secondary/30 via-white to-success/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive interview preparation tools and expert guidance to help you land your dream job.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left side - Features list */}
          <div className="space-y-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={feature.title} 
                  className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up animate-delay-${index * 100}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <Check className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
            {/* Right side - Success Journey */}
            <div className="animate-slide-up animate-delay-200">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Your Path to Success
              </h3>
              
              <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary">1</span>
                </div>
                <div>
                <h4 className="font-semibold text-gray-900">Book a Session</h4>
                <p className="text-sm text-gray-600">Choose your preferred time and interviewer</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-success/5 rounded-lg">
                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-success">2</span>
                </div>
                <div>
                <h4 className="font-semibold text-gray-900">Practice Interview</h4>
                <p className="text-sm text-gray-600">Get real interview experience</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary">3</span>
                </div>
                <div>
                <h4 className="font-semibold text-gray-900">Receive Feedback</h4>
                <p className="text-sm text-gray-600">Get detailed insights and improve</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-success/5 rounded-lg">
                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-success">4</span>
                </div>
                <div>
                <h4 className="font-semibold text-gray-900">Land Your Dream Job</h4>
                <p className="text-sm text-gray-600">Ace your real interviews</p>
                </div>
              </div>
              </div>
                <div className="mt-8 text-center">
                <button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Start Your Journey
                </button>
                </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
