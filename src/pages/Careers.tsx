
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const openings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Join our engineering team to build the next generation of interview preparation tools."
    },
    {
      id: 2,
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Help design intuitive and beautiful user experiences for our platform."
    },
    {
      id: 3,
      title: "Interview Coach",
      department: "Operations",
      location: "New York, NY",
      type: "Part-time",
      description: "Guide candidates through mock interviews and provide expert feedback."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
            <p className="text-xl text-gray-600">Help us transform how people prepare for interviews</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
              <p className="text-gray-600">Work with talented individuals who are passionate about helping others succeed.</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">We believe in work-life balance and offer flexible working arrangements.</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Remote-First</h3>
              <p className="text-gray-600">Join our distributed team and work from anywhere in the world.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Open Positions</h2>
            {openings.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <Button className="bg-primary hover:bg-primary/90">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
