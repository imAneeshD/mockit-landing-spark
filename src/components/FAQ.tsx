
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How does MockIt work?",
      answer: "MockIt connects you with industry experts for realistic mock interviews. You schedule a session, meet with your interviewer via video call, go through a structured interview process, and receive detailed feedback on your performance."
    },
    {
      question: "What types of interviews do you offer?",
      answer: "We offer technical interviews (coding, system design), behavioral interviews, case studies, and industry-specific interviews for roles in tech, finance, consulting, marketing, and more."
    },
    {
      question: "How are the interviewers qualified?",
      answer: "All our interviewers are verified professionals with extensive experience in hiring and interviewing at top companies. They undergo a rigorous vetting process and continuous training to ensure high-quality sessions."
    },
    {
      question: "Can I choose my interviewer?",
      answer: "Currently not available, but this feature is coming soon! You'll be able to browse interviewer profiles and choose someone who matches your target role and company."
    },
    {
      question: "What if I need to reschedule my interview?",
      answer: "You can reschedule your interview up to 24 hours before your scheduled time. We offer flexible scheduling to accommodate your needs across different time zones."
    },
    {
      question: "How detailed is the feedback?",
      answer: "Our feedback includes a comprehensive written report, video recording of your session (optional), specific scores on different competencies, and actionable recommendations for improvement."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 7-day money-back guarantee for all paid plans. If you're not satisfied with your experience, we'll provide a full refund."
    },
    {
      question: "Can I practice for specific companies?",
      answer: "Absolutely! Our Pro plan includes company-specific interview preparation with interviewers who have experience at your target companies and understand their interview processes."
    }
    ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about MockIt
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-white border border-gray-200 rounded-lg animate-slide-up animate-delay-${index * 50}`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-slide-up animate-delay-400">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <button className="text-primary hover:text-primary/80 font-semibold">
            Contact our support team →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
