
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "Google",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=100&h=100&fit=crop&crop=face",
      content: "MockIt was a game-changer for my interview prep. The feedback was incredibly detailed and helped me identify areas I never knew I needed to work on. Landed my dream job at Google!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager",
      company: "Meta",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "The expert interviewers really knew their stuff. They asked the exact type of questions I faced in my actual interviews. The company-specific insights were invaluable.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Data Scientist",
      company: "Netflix",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "I was nervous about transitioning into data science, but MockIt's career coaching and technical interview prep gave me the confidence I needed. Highly recommend!",
      rating: 5
    },
    {
      name: "David Park",
      role: "UX Designer",
      company: "Airbnb",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "The design portfolio review and mock design challenges were spot-on. The feedback helped me restructure my entire portfolio presentation strategy.",
      rating: 5
    },
    {
      name: "Rachel Kim",
      role: "Marketing Manager",
      company: "Stripe",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
      content: "MockIt helped me prepare for behavioral questions I hadn't even considered. The STAR method coaching was particularly helpful for structuring my responses.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "DevOps Engineer",
      company: "AWS",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      content: "The technical depth of the mock interviews was impressive. It really felt like the real thing, which made my actual interviews feel much easier in comparison.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-secondary/20 via-white to-success/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of professionals who have landed their dream jobs with MockIt's help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up animate-delay-${index * 100}`}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm font-medium text-primary">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-xl animate-slide-up animate-delay-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Trusted by Top Companies
            </h3>
            <p className="text-gray-600">
              Our community members work at leading organizations worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            <div className="text-lg font-bold text-gray-600">Google</div>
            <div className="text-lg font-bold text-gray-600">Meta</div>
            <div className="text-lg font-bold text-gray-600">Netflix</div>
            <div className="text-lg font-bold text-gray-600">Airbnb</div>
            <div className="text-lg font-bold text-gray-600">Stripe</div>
            <div className="text-lg font-bold text-gray-600">AWS</div>
            <div className="text-lg font-bold text-gray-600">Microsoft</div>
            <div className="text-lg font-bold text-gray-600">Apple</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
