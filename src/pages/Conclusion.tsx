import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Calendar, Rocket, Heart, Star } from 'lucide-react';

const Conclusion = () => {
  const achievements = [
    { metric: '6 months', description: 'From idea to working prototype' },
    { metric: '50+', description: 'User interviews conducted' },
    { metric: '3', description: 'Major iterations based on feedback' },
    { metric: '95%', description: 'User satisfaction in testing' }
  ];

  const nextSteps = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Product Launch',
      description: 'Preparing for beta launch with select customers',
      timeline: 'Q2 2024'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Feature Expansion',
      description: 'Adding advanced analytics and AI-powered insights',
      timeline: 'Q3 2024'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Community Building',
      description: 'Creating a community of small business owners',
      timeline: 'Q4 2024'
    }
  ];

  return (
    <div className="py-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Conclusion & Next Steps
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Reflecting on the journey so far and looking ahead to the exciting opportunities 
            that lie ahead in this entrepreneurial adventure.
          </p>
        </div>

        {/* Journey Summary */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Journey Summary</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold mb-2">{achievement.metric}</div>
                  <p className="text-blue-100">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">Key Takeaways</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="prose prose-lg max-w-none text-secondary-700">
              <p className="text-xl leading-relaxed mb-6">
                This entrepreneurial journey has been one of the most challenging and rewarding 
                experiences of my life. It's taught me that building a successful product isn't 
                just about having a great idea—it's about understanding your users, iterating 
                based on feedback, and staying resilient through the inevitable ups and downs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">What I've Learned</h3>
                  <ul className="space-y-2">
                    <li>• Customer feedback is invaluable and should drive decisions</li>
                    <li>• Simple solutions often work better than complex ones</li>
                    <li>• Persistence and adaptability are crucial for success</li>
                    <li>• Building relationships is as important as building products</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">What's Next</h3>
                  <ul className="space-y-2">
                    <li>• Launch beta version with early adopters</li>
                    <li>• Continue iterating based on user feedback</li>
                    <li>• Explore partnerships with complementary services</li>
                    <li>• Share learnings with the entrepreneurial community</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">What's Next</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nextSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">{step.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{step.title}</h3>
                <p className="text-secondary-600 mb-4">{step.description}</p>
                <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                  {step.timeline}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-secondary-900 to-primary-900 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm always excited to connect with fellow entrepreneurs, potential collaborators, 
            or anyone interested in the journey of building something meaningful.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:alex@example.com"
              className="inline-flex items-center px-8 py-3 bg-white text-secondary-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Mail className="mr-2 w-5 h-5" />
              Get in Touch
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-secondary-900 transition-colors"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule a Chat
            </a>
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">Thank You for Following Along</h3>
            <p className="text-lg text-secondary-700 mb-8">
              Thank you for taking the time to learn about my entrepreneurial journey. 
              Whether you're an aspiring entrepreneur, a fellow founder, or someone curious 
              about the startup world, I hope my story has provided valuable insights or inspiration.
            </p>
            
            <Link
              to="/"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-lg"
            >
              Back to Home
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;