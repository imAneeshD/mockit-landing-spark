
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

const CareerBlog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Common Interview Mistakes and How to Avoid Them",
      excerpt: "Learn about the most frequent pitfalls candidates face during interviews and practical strategies to overcome them.",
      author: "Admin",
      date: "2025-01-15",
      readTime: "5 min read",
      category: "Interview Tips"
    },
    {
      id: 2,
      title: "How to Research a Company Before Your Interview",
      excerpt: "A comprehensive guide to researching potential employers and using that knowledge to stand out in interviews.",
      author: "Admin",
      date: "2025-01-15",
      readTime: "7 min read",
      category: "Preparation"
    },
    {
      id: 3,
      title: "Salary Negotiation: Getting What You're Worth",
      excerpt: "Master the art of salary negotiation with proven strategies and real-world examples from successful candidates.",
      author: "Admin",
      date: "2025-01-15",
      readTime: "6 min read",
      category: "Career Growth"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Career Blog</h1>
            <p className="text-xl text-gray-600">Expert insights, tips, and strategies for career success</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="flex items-center text-primary hover:text-primary/80 font-medium">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CareerBlog;
