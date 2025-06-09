import React, { useState } from 'react';
import { Play, Monitor, Smartphone, Tablet, ExternalLink, Code } from 'lucide-react';

const Prototype = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const features = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      description: 'Real-time business overview with key metrics and insights'
    },
    {
      id: 'automation',
      name: 'Automation',
      description: 'Workflow automation tools for repetitive tasks'
    },
    {
      id: 'analytics',
      name: 'Analytics',
      description: 'Comprehensive reporting and data visualization'
    },
    {
      id: 'settings',
      name: 'Settings',
      description: 'User management and system configuration'
    }
  ];

  const techStack = [
    { name: 'React', description: 'Frontend framework for building user interfaces' },
    { name: 'Node.js', description: 'Backend runtime for server-side logic' },
    { name: 'PostgreSQL', description: 'Reliable database for data storage' },
    { name: 'AWS', description: 'Cloud infrastructure for scalability' }
  ];

  return (
    <div className="py-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            The Prototype
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            See BusinessFlow Pro in action - a fully functional prototype that demonstrates 
            the core features and user experience.
          </p>
        </div>

        {/* Demo Video Section */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-secondary-900">Live Demo</h2>
              <div className="flex space-x-2">
                <Monitor className="w-6 h-6 text-gray-400" />
                <Tablet className="w-6 h-6 text-gray-400" />
                <Smartphone className="w-6 h-6 text-gray-400" />
              </div>
            </div>
            
            <div className="relative bg-gray-900 rounded-lg overflow-hidden">
              <div className="aspect-video flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="BusinessFlow Pro Dashboard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <button className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full transition-colors">
                    <Play className="w-8 h-8" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <p className="text-secondary-600">
                Watch a 3-minute walkthrough of the main features
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                View Full Demo <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Prototype */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">Interactive Features</h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(feature.id)}
                    className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === feature.id
                        ? 'border-primary-600 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {feature.name}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="p-8">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`${activeTab === feature.id ? 'block' : 'hidden'}`}
                >
                  <h3 className="text-xl font-semibold text-secondary-900 mb-4">{feature.name}</h3>
                  <p className="text-secondary-600 mb-6">{feature.description}</p>
                  
                  <div className="bg-gray-100 rounded-lg p-6 min-h-64 flex items-center justify-center">
                    <img 
                      src={`https://images.pexels.com/photos/${
                        feature.id === 'dashboard' ? '3184338' :
                        feature.id === 'automation' ? '3184360' :
                        feature.id === 'analytics' ? '3184465' : '3184292'
                      }/pexels-photo-${
                        feature.id === 'dashboard' ? '3184338' :
                        feature.id === 'automation' ? '3184360' :
                        feature.id === 'analytics' ? '3184465' : '3184292'
                      }.jpeg?auto=compress&cs=tinysrgb&w=600`}
                      alt={`${feature.name} interface`}
                      className="max-w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">Prototype Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">User Authentication</h3>
              <p className="text-secondary-600">Secure login system with role-based access control</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">Data Visualization</h3>
              <p className="text-secondary-600">Interactive charts and graphs for business insights</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">Workflow Builder</h3>
              <p className="text-secondary-600">Drag-and-drop interface for creating automated processes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">Real-time Updates</h3>
              <p className="text-secondary-600">Live data synchronization across all connected devices</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">Mobile Responsive</h3>
              <p className="text-secondary-600">Optimized experience across desktop, tablet, and mobile</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">API Integration</h3>
              <p className="text-secondary-600">Connect with popular business tools and services</p>
            </div>
          </div>
        </div>

        {/* Technical Stack */}
        <div className="bg-secondary-900 text-white p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <Code className="w-8 h-8 mr-3" />
            <h2 className="text-2xl font-bold">Technical Implementation</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-secondary-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                <p className="text-secondary-300 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-secondary-300">
              Built with modern technologies for scalability, performance, and maintainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prototype;