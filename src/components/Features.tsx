
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

          {/* Right side - Visual/Stats */}
          <div className="animate-slide-up animate-delay-200">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                MockIt by the Numbers
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                  <div className="text-gray-600">Interviews Conducted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success mb-2">95%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-600">Expert Interviewers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success mb-2">4.9/5</div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-secondary rounded-lg">
                <p className="text-center text-gray-700 font-medium">
                  "MockIt helped me land my dream job at Google. The feedback was incredibly detailed and actionable."
                </p>
                <p className="text-center text-sm text-gray-600 mt-2">
                  - Sarah K., Software Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
