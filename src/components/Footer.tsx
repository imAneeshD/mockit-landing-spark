
import { Star, Users, Calendar, Book } from 'lucide-react';
import { useState } from 'react';
import TestYourSkillForm from './forms/TestYourSkillForm';

const Footer = () => {
  const [showTestForm, setShowTestForm] = useState(false);

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "How It Works", href: "#how-it-works" },
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Testimonials", href: "#testimonials" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Interview Tips", href: "/interview-tips" },
        { name: "Career Blog", href: "/career-blog" },
        { name: "Resume Templates", href: "/resume-templates" },
        { name: "Salary Guide", href: "/salary-guide" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help-center" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "Refund Policy", href: "/refund-policy" }
      ]
    }
  ];

  return (
    <>
      <footer className="bg-gray-900 text-white">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <div className="text-2xl font-bold text-white mb-4">MockIt</div>
              <p className="text-gray-400 mb-6 max-w-sm">
                Ace your next job interview with expert-led mock interviews and personalized feedback.
              </p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-gray-400 text-sm">4.9/5 from 2,500+ reviews</span>
              </div>

              <div className="flex space-x-4">
                <button 
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                  onClick={() => setShowTestForm(true)}
                >
                  Get Started Free
                </button>
              </div>
            </div>

            {/* Footer sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Stats section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-primary mr-2" />
                  <span className="text-2xl font-bold text-white">10,000+</span>
                </div>
                <div className="text-gray-400 text-sm">Interviews Conducted</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-success mr-2" />
                  <span className="text-2xl font-bold text-white">95%</span>
                </div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="w-5 h-5 text-primary mr-2" />
                  <span className="text-2xl font-bold text-white">500+</span>
                </div>
                <div className="text-gray-400 text-sm">Expert Interviewers</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Book className="w-5 h-5 text-success mr-2" />
                  <span className="text-2xl font-bold text-white">24/7</span>
                </div>
                <div className="text-gray-400 text-sm">Available Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 MockIt v2.0.0. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy</a>
                <a href="/terms-of-service" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Test Your Skill Form */}
      {showTestForm && <TestYourSkillForm onClose={() => setShowTestForm(false)} />}
    </>
  );
};

export default Footer;
