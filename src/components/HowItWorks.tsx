
import { Calendar, Users, Star } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: Calendar,
      title: "Schedule Your Session",
      description: "Choose from available time slots that fit your schedule. Select the type of interview and industry focus.",
      color: "bg-primary"
    },
    {
      step: 2,
      icon: Users,
      title: "Meet Your Expert",
      description: "Connect with experienced professionals from top companies who understand your target role.",
      color: "bg-success"
    },
    {
      step: 3,
      icon: Star,
      title: "Get Detailed Feedback",
      description: "Receive comprehensive feedback on your performance with actionable insights and improvement tips.",
      color: "bg-primary"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How MockIt Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get job-ready in three simple steps. Our streamlined process makes interview preparation efficient and effective.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={step.step} 
                className={`text-center animate-slide-up animate-delay-${index * 200}`}
              >
                <div className="relative mb-6">
                  <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-900 shadow-lg">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-slide-up animate-delay-400">
          <div className="inline-flex items-center px-6 py-3 bg-secondary text-primary rounded-full text-sm font-medium mb-4">
            🚀 Ready to get started?
          </div>
          <div className="space-x-4">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </button>
            <button className="text-primary hover:text-primary/80 font-medium">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
