import React from 'react';
import { AlertCircle, CheckCircle, Zap, Users, BarChart, Shield } from 'lucide-react';

const Solution = () => {
  const problemPoints = [
    'Small businesses struggle with outdated manual processes',
    'Lack of technical expertise to implement digital solutions',
    'High costs of custom software development',
    'Time-consuming administrative tasks reducing productivity'
  ];

  const solutionFeatures = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Automated Workflows',
      description: 'Streamline repetitive tasks with intelligent automation that saves hours of manual work.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'User-Friendly Interface',
      description: 'Intuitive design that requires no technical expertise, making it accessible to all team members.'
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Real-Time Analytics',
      description: 'Get insights into your business performance with comprehensive dashboards and reports.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security ensuring your business data is always protected and accessible.'
    }
  ];

  return (
    <div className="py-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            The Solution
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Bridging the gap between complex business needs and simple, effective technology solutions.
          </p>
        </div>

        {/* Problem Section */}
        <div className="mb-20">
          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg mb-12">
            <div className="flex items-center mb-4">
              <AlertCircle className="w-8 h-8 text-red-500 mr-3" />
              <h2 className="text-3xl font-bold text-secondary-900">The Problem</h2>
            </div>
            <p className="text-lg text-secondary-700 mb-6">
              After working with dozens of small businesses, I discovered a recurring pattern: 
              companies were losing valuable time and money due to inefficient processes and 
              lack of proper digital tools.
            </p>
            <ul className="space-y-3">
              {problemPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-secondary-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Problem Visualization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Before: Manual Processes</h3>
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Manual business processes"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-secondary-600">
                Businesses relying on spreadsheets, paper forms, and manual data entry, 
                leading to errors and inefficiency.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">After: Digital Transformation</h3>
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Digital business processes"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-secondary-600">
                Streamlined digital workflows that automate tasks and provide 
                real-time insights for better decision making.
              </p>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg mb-12">
          <div className="flex items-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
            <h2 className="text-3xl font-bold text-secondary-900">My Solution</h2>
          </div>
          <p className="text-lg text-secondary-700 mb-6">
            I developed <strong>BusinessFlow Pro</strong> - a comprehensive digital platform that transforms 
            how small businesses manage their operations. It's designed to be powerful yet simple, 
            affordable yet feature-rich.
          </p>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-secondary-900 mb-3">Core Philosophy</h3>
            <p className="text-secondary-700">
              "Technology should empower businesses, not complicate them. Every feature should solve 
              a real problem and be accessible to users regardless of their technical background."
            </p>
          </div>
        </div>

        {/* Solution Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutionFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <div className="text-primary-600">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900">{feature.title}</h3>
              </div>
              <p className="text-secondary-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Impact Section */}
        <div className="bg-gradient-to-r from-primary-600 to-blue-600 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Expected Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">75%</div>
              <p>Reduction in manual tasks</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50%</div>
              <p>Time saved on admin work</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">90%</div>
              <p>User satisfaction rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;