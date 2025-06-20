import React from 'react';
import { Calendar, MapPin, TrendingUp, Award } from 'lucide-react';
import ProblemSection from '../components/ProblemSection';
import { useInView } from '../hooks/useInView';

const Journey = () => {
  const milestones = [
  {
    year: '2020',
    title: 'The Beginning',
    description:
      "Curiosity about how video games work sparked my journey into programming. After high school, I couldn’t join university, so I taught myself through YouTube, camps, and online tutorials.",
    icon: <Calendar className="w-6 h-6" />,
    color: 'bg-blue-500'
  },
  {
    year: '2023',
    title: 'The Spark',
    description:
      "The ALX program shaped me into a backend developer and gave me hands-on project experience. It also ignited my entrepreneurial mindset and showed me the power of tech to solve real problems.",
    icon: <MapPin className="w-6 h-6" />,
    color: 'bg-green-500'
  },
  {
    year: '2024',
    title: 'Building & Learning',
    description:
      "I co-founded Forsalink (job-matching for graduates) and SoonerSage (accessibility tool for the deaf). These prototypes taught me how to build, lead, and solve problems with real users.",
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'bg-purple-500'
  },
  {
    year: '2025',
    title: 'Rural Morocco Focus',
    description:
      "I’m exploring a platform to support rural Moroccan tourism by connecting travelers with local guides, artisans, and hidden experiences — bringing visibility to overlooked communities.",
    icon: <Award className="w-6 h-6" />,
    color: 'bg-orange-500'
  }
];


  const challenges = [
    {
      title: 'Financial Uncertainty',
      description: 'Learning to manage finances without a steady paycheck while investing in the business.',
      lesson: 'Importance of financial planning and having multiple revenue streams.'
    },
    {
      title: 'Technical Hurdles',
      description: 'Overcoming complex technical challenges while building the prototype.',
      lesson: 'The value of persistence and seeking help from the community.'
    },
    {
      title: 'Market Validation',
      description: 'Ensuring the solution truly addresses a real problem that people will pay for.',
      lesson: 'Customer feedback is invaluable and should drive product decisions.'
    }
  ];

  return (
    <div className="py-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            My Entrepreneurial Journey
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            From backend learner to entrepreneur - here's the story of how I discovered my passion 
            for solving real-world problems and building innovative solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-secondary-900 mb-12 text-center">Key Milestones</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            
            {milestones.map((milestone, index) => {
              const [ref, inView] = useInView({
                threshold: 0.1,
                triggerOnce: true, // Optional: animate only once per card
              });
              return (
                <div
                  ref={typeof ref === 'function' || (ref && typeof ref === 'object') ? ref : undefined}
                  key={index}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}  transform transition-all duration-700 ease-in-out
          ${inView ? 'opacity-100 -translate-y-20' : 'opacity-0 translate-y-0'}`}>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                      <div className="flex items-center mb-3">
                        <div className={`w-10 h-10 ${milestone.color} rounded-full flex items-center justify-center text-white mr-3`}>
                          {milestone.icon}
                        </div>
                        <span className="text-2xl font-bold text-primary-600">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-secondary-900 mb-2">{milestone.title}</h3>
                      <p className="text-secondary-600 text-center">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Challenges & Lessons */}
        <ProblemSection />

        {/* Personal Note */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-50 to-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-secondary-900 mb-4">The Journey Continues</h3>
          <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
            Every challenge has been a learning opportunity, and every setback has made me stronger. 
            The entrepreneurial journey is not just about building a business—it's about personal growth, 
            resilience, and the satisfaction of creating something meaningful.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Journey;