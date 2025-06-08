
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: "Test Your Skill",
      price: "₹0",
      period: "/month",
      description: "Perfect for getting started with interview prep",
      features: [
        "1 mock interview per month",
        "Basic feedback report",
        "Access to community resources",
        "Email support",
        "Standard scheduling"
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline" as const,
      popular: false,
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdP_ISRiZiDzWTuD4A-aWZFcTnf1u4oGqDK7lHdl5xic096vQ/viewform"
    },
    {
      name: "Base Plan",
      price: "₹100",
      period: "/month",
      description: "Ideal for serious job seekers and career changers",
      features: [
        "5 mock interviews per month",
        "Detailed feedback with video recordings",
        "Company-specific interview prep",
        "Resume review and optimization",
        "Priority scheduling",
        "1-on-1 career coaching session",
        "Access to premium resources"
      ],
      buttonText: "Upgrade to Base",
      buttonVariant: "default" as const,
      popular: true,
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeIpQRx1Xfg-xdnKhH2qtCLcHT1t9N1Gn7Xrxg9_O2Zg_zbDQ/viewform"
    },
    {
      name: "Pro Plan",
      price: "₹200",
      period: "/month",
      description: "Complete interview preparation with all rounds covered",
      features: [
        "Get Resume Feedback",
        "MCQ Round",
        "Coding Round",
        "Technical Round",
        "Managerial Round",
        "HR Round",
        "Unlimited mock interviews",
        "Custom interview scenarios"
      ],
      buttonText: "Upgrade to Pro",
      buttonVariant: "outline" as const,
      popular: false,
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc2r7pfpaHMsOkfTAFYPq8DgXBrFkK4ByH6XPpSpWHfVzNzdw/viewform"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your interview preparation needs. Upgrade or downgrade at any time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 transition-transform duration-300 hover:scale-105 animate-slide-up animate-delay-${index * 100} ${
                plan.popular ? 'border-primary' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-full text-sm font-medium">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.buttonVariant}
                className={`w-full h-12 font-semibold ${
                  plan.popular 
                    ? 'bg-primary hover:bg-primary/90 text-white' 
                    : plan.buttonVariant === 'outline' 
                      ? 'border-primary text-primary hover:bg-primary hover:text-white'
                      : ''
                }`}
                onClick={() => window.open(plan.formLink, '_blank')}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ mention */}
        <div className="text-center mt-16 animate-slide-up animate-delay-300">
          <p className="text-gray-600 mb-4">
            Have questions about our pricing? Check out our FAQ section below or contact our support team.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-secondary text-primary rounded-full text-sm font-medium">
            💡 All plans include a 7-day money-back guarantee
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
