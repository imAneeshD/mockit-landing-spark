
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/4f66c731-e0c8-44ba-a498-03671c00a5e6.png" 
              alt="MockIt Logo" 
              className="h-8 w-8 mr-3"
            />
            <div className="text-2xl font-bold text-primary">MockIt</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Sign In
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdP_ISRiZiDzWTuD4A-aWZFcTnf1u4oGqDK7lHdl5xic096vQ/viewform', '_blank')}
            >
              Book Mock Interview
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full border-primary text-primary">
                  Sign In
                </Button>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdP_ISRiZiDzWTuD4A-aWZFcTnf1u4oGqDK7lHdl5xic096vQ/viewform', '_blank')}
                >
                  Book Mock Interview
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
