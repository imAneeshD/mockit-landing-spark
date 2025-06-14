
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-white to-success/10">
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center mb-8 hover:opacity-80 transition-opacity">
          <img 
            src="/lovable-uploads/4f66c731-e0c8-44ba-a498-03671c00a5e6.png" 
            alt="MockIt Logo" 
            className="w-[50px] h-[40px] mr-3"
          />
          <div className="text-2xl font-bold text-primary">MockIt</div>
        </Link>

        {/* Coming Soon Content */}
        <div className="bg-white rounded-2xl shadow-2xl p-12 animate-slide-up">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 rounded-full p-4">
              <Clock className="w-12 h-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Demo Coming Soon!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            We're working hard to bring you an amazing demo experience. 
            Our interactive demo will showcase how MockIt can help you ace your next job interview.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              asChild
              size="lg" 
              className="bg-primary hover:bg-primary/90"
            >
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Bell className="w-4 h-4 mr-2" />
              Notify Me When Ready
            </Button>
          </div>

          <div className="text-sm text-gray-500">
            In the meantime, you can book a free mock interview to get started!
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
