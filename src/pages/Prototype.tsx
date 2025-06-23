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

  const techStack = [
    {
      name: "React Native",
      description: "Cross-platform mobile framework enabling performant, native-like experiences on iOS and Android."
    },
    {
      name: "Node.js + Express",
      description: "High-performance backend REST API server optimized for scalability and asynchronous processing."
    },
    {
      name: "GraphQL",
      description: "Flexible, efficient API layer allowing clients to request exactly the data they need."
    },
    {
      name: "PostgreSQL",
      description: "Robust, scalable relational database ensuring ACID compliance and complex queries support."
    },
    {
      name: "Redis",
      description: "In-memory data store used for caching, session management, and real-time data synchronization."
    },
    {
      name: "AWS (EC2, S3, RDS, Lambda)",
      description: "Cloud infrastructure powering scalable deployment, storage, and serverless functions."
    },
    {
      name: "Kubernetes",
      description: "Container orchestration platform enabling automated deployment, scaling, and management of microservices."
    },
    {
      name: "Figma",
      description: "Collaborative design tool enabling prototyping and design handoff with pixel-perfect precision."
    },
    {
      name: "Jest + Detox",
      description: "Comprehensive testing suite covering unit, integration, and end-to-end testing for app reliability."
    },
    {
      name: "CI/CD Pipelines",
      description: "Automated build, test, and deployment workflows to ensure rapid and safe product delivery."
    },
    {
      name: "Firebase Analytics & Crashlytics",
      description: "Real-time user behavior tracking and crash reporting to maintain app quality at scale."
    },
    {
      name: "OAuth 2.0 & JWT",
      description: "Industry-standard authentication and authorization mechanisms for secure user access."
    }
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
            <iframe
              className="w-full h-[450px] rounded-lg"
              src="https://drive.google.com/file/d/1nn-7R0nbDKvx3A7zg9NJp_2VASJ8ZdbO/preview"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Prototype Walkthrough Video"
            ></iframe>
          </div>

          <p className="mt-3 text-center text-secondary-600 text-sm italic">
            *This video showcases the main flow of the tourism app prototype.*
          </p>
        </section>



        {/* Figma Interactive Prototype */}
        <section className="mb-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Interactive Figma Prototype
          </h2>

          <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-xl overflow-hidden border border-gray-300 h-[700px]">
            <iframe
              title="Tourism App Prototype"
              className="h-full m-auto"
              src="https://embed.figma.com/proto/GWvEnW8Vicvo5hHR8vYmnk/Tourism-app?node-id=206-2403&p=f&scaling=scale-down&content-scaling=fixed&page-id=50%3A1963&starting-point-node-id=206%3A2403&embed-host=share"
              allowFullScreen
            ></iframe>
          </div>

          <p className="text-sm text-center text-gray-500 mt-4 italic">
            *Click through the screens to explore the full tourism app prototype.*
          </p>
        </section>

        {/* Tourism App Features Grid */}
        <section className="mb-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-secondary-900 mb-10 text-center">
            Key Tourism App Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Interactive Maps</h3>
              <p className="text-secondary-600">
                Detailed maps with points of interest, routes, and offline access.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Personalized Itineraries</h3>
              <p className="text-secondary-600">
                Customizable trip plans based on user preferences and interests.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Local Experience Recommendations</h3>
              <p className="text-secondary-600">
                Curated suggestions for restaurants, tours, and activities nearby.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Real-time Weather Updates</h3>
              <p className="text-secondary-600">
                Up-to-date weather forecasts to help plan your day effectively.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Multi-language Support</h3>
              <p className="text-secondary-600">
                User interface and content available in multiple languages for global travelers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Booking Integration</h3>
              <p className="text-secondary-600">
                Seamless booking of hotels, flights, and tours directly within the app.
              </p>
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
            This technology stack is carefully chosen to ensure scalability, performance, and maintainability for a high-traffic mobile application expected to serve over one million users worldwide once developed by our expert team.
          </p>
        </section>

      </div>
    </div>
  );
};

export default Prototype;
