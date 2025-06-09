import React from 'react';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const Journey = () => {
  const milestones = [
    {
      year: '2020',
      title: 'The Spark',
      description: 'Identified a gap in the market while working as a software engineer. Noticed how small businesses struggled with digital transformation.',
      icon: <Calendar className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      year: '2021',
      title: 'First Steps',
      description: 'Left my corporate job to pursue entrepreneurship full-time. Spent months researching and validating the problem.',
      icon: <MapPin className="w-6 h-6" />,
      color: 'bg-green-500'
    },
    {
      year: '2022',
      title: 'Building & Learning',
      description: 'Developed the first prototype and gathered feedback from potential customers. Learned valuable lessons about product-market fit.',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'bg-purple-500'
    },
    {
      year: '2023',
      title: 'Breakthrough',
      description: 'Achieved significant traction with early adopters. Refined the solution based on real-world usage and feedback.',
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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            My Entrepreneurial Journey
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            From corporate employee to entrepreneur - here's the story of how I discovered my passion 
            for solving real-world problems and building innovative solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-secondary-900 mb-12 text-center">Key Milestones</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                    <div className="flex items-center mb-3">
                      <div className={`w-10 h-10 ${milestone.color} rounded-full flex items-center justify-center text-white mr-3`}>
                        {milestone.icon}
                      </div>
                      <span className="text-2xl font-bold text-primary-600">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">{milestone.title}</h3>
                    <p className="text-secondary-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Lessons */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">Challenges & Lessons Learned</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{challenge.title}</h3>
                <p className="text-secondary-600 mb-4">{challenge.description}</p>
                <div className="bg-primary-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-primary-800">
                    <strong>Lesson:</strong> {challenge.lesson}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

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