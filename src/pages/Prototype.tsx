import React, { useState } from 'react';
import { Play, Monitor, Smartphone, Tablet, ExternalLink, Code } from 'lucide-react';

const lowFidelityImages = [
  {
    src: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Prototype Wireframe Dashboard',
  },
  {
    src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Prototype Wireframe Automation',
  },
  {
    src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Prototype Wireframe Analytics',
  },
];

const Prototype = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const features = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      description: 'Real-time business overview with key metrics and insights',
    },
    {
      id: 'automation',
      name: 'Automation',
      description: 'Workflow automation tools for repetitive tasks',
    },
    {
      id: 'analytics',
      name: 'Analytics',
      description: 'Comprehensive reporting and data visualization',
    },
    {
      id: 'settings',
      name: 'Settings',
      description: 'User management and system configuration',
    },
  ];

  const techStack = [
    { name: 'React', description: 'Frontend framework for building user interfaces' },
    { name: 'Node.js', description: 'Backend runtime for server-side logic' },
    { name: 'PostgreSQL', description: 'Reliable database for data storage' },
    { name: 'AWS', description: 'Cloud infrastructure for scalability' },
  ];

  return (
    <div className="py-20 animate-fade-in bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <header className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-secondary-900 mb-4">
            Prototype & Product Evolution
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            This prototype represents our Week 11 low-fidelity design, focusing on core workflows and
            user interaction. It highlights essential features to guide further development and
            user testing.
          </p>
        </header>

        {/* Video Showcase */}
        <section className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-secondary-900 mb-6 flex items-center justify-center gap-3">
            <Play className="w-8 h-8 text-primary-600" />
            Live Prototype Walkthrough
          </h2>
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <video
              controls
              className="w-full rounded-lg"
              poster="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="mt-3 text-center text-secondary-600 text-sm italic">
            *This is a placeholder video. Replace with your actual Week 11 prototype demo.*
          </p>
        </section>

        {/* Low-Fidelity Prototype Images */}
        <section className="mb-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-secondary-900 mb-10 text-center">
            Low-Fidelity Prototype Snapshots
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {lowFidelityImages.map(({ src, alt }, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                title={alt}
              >
                <img
                  src={src}
                  alt={alt}
                  className="object-cover w-full h-64 sm:h-56"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Features Tabs */}
        <section className="mb-20 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Interactive Prototype Features
          </h2>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <nav className="flex border-b border-gray-200 px-6">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`py-4 px-4 text-sm font-semibold transition-colors border-b-4 -mb-px focus:outline-none ${
                    activeTab === feature.id
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                  aria-current={activeTab === feature.id ? 'page' : undefined}
                >
                  {feature.name}
                </button>
              ))}
            </nav>

            <div className="p-10 min-h-[280px]">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={activeTab === feature.id ? 'block' : 'hidden'}
                  role="tabpanel"
                >
                  <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
                    {feature.name}
                  </h3>
                  <p className="text-secondary-700 mb-6">{feature.description}</p>

                  <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center shadow-inner">
                    <img
                      src={`https://images.pexels.com/photos/${
                        feature.id === 'dashboard'
                          ? '3184338'
                          : feature.id === 'automation'
                          ? '3184360'
                          : feature.id === 'analytics'
                          ? '3184465'
                          : '3184292'
                      }/pexels-photo-${
                        feature.id === 'dashboard'
                          ? '3184338'
                          : feature.id === 'automation'
                          ? '3184360'
                          : feature.id === 'analytics'
                          ? '3184465'
                          : '3184292'
                      }.jpeg?auto=compress&cs=tinysrgb&w=600`}
                      alt={`${feature.name} interface`}
                      className="max-w-full h-auto rounded-lg shadow-md"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prototype Features Grid */}
        <section className="mb-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-secondary-900 mb-10 text-center">
            Key Prototype Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">User Authentication</h3>
              <p className="text-secondary-600">
                Secure login system with role-based access control.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Data Visualization</h3>
              <p className="text-secondary-600">
                Interactive charts and graphs for business insights.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Workflow Builder</h3>
              <p className="text-secondary-600">Drag-and-drop interface for creating automated processes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Real-time Updates</h3>
              <p className="text-secondary-600">Live data synchronization across all connected devices.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Mobile Responsive</h3>
              <p className="text-secondary-600">Optimized experience across desktop, tablet, and mobile.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">API Integration</h3>
              <p className="text-secondary-600">Connect with popular business tools and services.</p>
            </div>
          </div>
        </section>

        {/* Technical Stack */}
        <section className="bg-secondary-900 text-white p-10 rounded-xl max-w-6xl mx-auto shadow-lg">
          <div className="flex items-center mb-8">
            <Code className="w-9 h-9 mr-4" />
            <h2 className="text-3xl font-bold">Technical Implementation</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-secondary-800 p-5 rounded-lg shadow-inner">
                <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                <p className="text-secondary-300 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-secondary-300 text-lg max-w-3xl mx-auto">
            Built with modern technologies ensuring scalability, performance, and maintainability.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Prototype;
