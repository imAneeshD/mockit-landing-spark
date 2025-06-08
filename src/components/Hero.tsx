
import { Button } from '@/components/ui/button';
import { Star, Users, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-white to-success/10">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(79,70,229,0.05)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-success/10 text-success rounded-full text-sm font-medium mb-6">
              ✨ Join 10,000+ successful candidates
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Ace Your Next 
              <span className="text-primary block">Job Interview</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Get personalized mock interviews with industry experts, receive detailed feedback, 
              and land your dream job with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 h-auto font-semibold"
              >
                Book Free Mock Interview
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4 h-auto font-semibold"
              >
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span>4.9/5 from 2,500+ reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-success" />
                <span>95% success rate</span>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative animate-slide-up animate-delay-200">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 animate-float">
              {/* Mock video call interface */}
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-white text-sm">Mock Interview Session</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/20 rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-2"></div>
                    <div className="text-white text-sm">You</div>
                  </div>
                  <div className="bg-success/20 rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-success rounded-full mx-auto mb-2"></div>
                    <div className="text-white text-sm">Expert</div>
                  </div>
                </div>
              </div>
              
              {/* Feedback preview */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Interview Score</span>
                  <span className="text-success font-bold">87/100</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Communication</span>
                    <span className="text-success">Excellent</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Technical Skills</span>
                    <span className="text-primary">Good</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Problem Solving</span>
                    <span className="text-success">Excellent</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-success text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse">
              Live Feedback
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              <Calendar className="w-4 h-4 inline mr-2" />
              Next Available: Today
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
