import React from 'react';
import {
  AlertCircle,
  CheckCircle,
  MapPin,
  Users,
  BarChart,
  Shield,
  Compass,
  Globe,
  Building2,
} from 'lucide-react';

const Solution = () => {
  // Pain points as context for the problem
  const painPoints = [
    'Tourists miss authentic local experiences',
    'Rural businesses lack digital presence and visibility',
    'Guides and artisans are underutilized due to lack of promotion',
    'Infrastructure and safety gaps deter deeper tourism engagement',
    'Travelers often worry about being misled or overcharged by unverified guides',
  ];

  // Top features with icons and descriptions
  const solutionFeatures = [
    {
      icon: <Compass className="w-8 h-8" />,
      title: 'Verified Local Guides',
      description:
        'Connect travelers with trained and trusted local guides from rural areas to ensure authentic, safe experiences.',
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Authentic Lodging & Experiences',
      description:
        'Promote homestays, crafts, local food, and cultural workshops that reflect the true identity of Moroccan regions.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Digital Access for Rural Communities',
      description:
        'Empower rural hosts and artisans with digital profiles, online booking capabilities, and tools to scale their income.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Trusted Platform with Safety Features',
      description:
        'Provide transparent reviews, offline guides, real-time maps, and SOS alerts to guarantee traveler safety and trust.',
    },
  ];

  return (
    <div className="py-20 animate-fade-in bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Our Solution: <br/>Empowering Rural Moroccan Tourism
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            A tech-driven platform connecting travelers with authentic rural experiences,
            boosting local economies, and ensuring safety and trust for all.
          </p>
        </header>

        {/* Problem Overview */}
        <section className="mb-20">
          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg mb-12 shadow-sm">
            <div className="flex items-center mb-4">
              <AlertCircle className="w-8 h-8 text-red-500 mr-3" />
              <h2 className="text-3xl font-bold text-secondary-900">Problem & Pain Points</h2>
            </div>
            <p className="text-lg text-secondary-700 mb-6">
              Despite Morocco’s rich rural culture, many communities remain disconnected from the tourism economy.
              Tourists miss meaningful cultural experiences, and locals lose potential income and growth.
            </p>
            <ul className="space-y-3 list-disc list-inside text-secondary-700">
              {painPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* How It Works & Target Beneficiaries */}
        <section className="mb-24 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-sm p-12 max-w-6xl">
          <h2 className="flex items-center text-4xl font-extrabold text-secondary-900 mb-12">
            <CheckCircle className="w-12 h-12 text-green-600 mr-4" />
            How Our Platform Works & Who Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {/* How It Works */}
            <div>
              <h3 className="text-2xl font-semibold text-secondary-800 mb-6 border-b-2 border-green-400 pb-2">
                How It Works
              </h3>
              <p className="text-lg text-secondary-700 mb-8 leading-relaxed max-w-xl">
                Our platform bridges curious travelers with authentic Moroccan rural communities,
                enabling meaningful cultural exchanges and economic growth.
              </p>
              <ol className="space-y-6 max-w-xl">
                {[
                  'Local guides, artisans, and hosts create verified digital profiles showcasing their offerings.',
                  'Travelers browse verified listings for lodging, tours, crafts, and cultural workshops.',
                  'Bookings and communications are managed seamlessly on the platform, with integrated offline guides and safety tools.',
                  'Communities gain visibility, increased income, and resources to enhance their offerings sustainably.',
                ].map((step, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold text-lg select-none">
                        {idx + 1}
                      </div>
                    </div>
                    <p className="text-secondary-700 leading-snug">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Target Beneficiaries */}
            <div>
              <h3 className="text-2xl font-semibold text-secondary-800 mb-6 border-b-2 border-green-400 pb-2">
                Target Beneficiaries
              </h3>
              <ul className="space-y-6 max-w-xl">
                {[
                  {
                    title: 'Travelers',
                    description: 'Seeking authentic, safe, and culturally rich experiences.',
                  },
                  {
                    title: 'Local Guides & Artisans',
                    description: 'Looking for digital visibility and increased bookings.',
                  },
                  {
                    title: 'Rural Communities',
                    description: 'Wanting sustainable tourism growth and economic empowerment.',
                  },
                ].map(({ title, description }, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <Users className="w-7 h-7 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary-900 text-lg">{title}</p>
                      <p className="text-secondary-700 leading-snug">{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>


        {/* Top Features & Unique Selling Points */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-secondary-900 text-center mb-12">
            Top Features & What Makes Us Unique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {solutionFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <div className="text-primary-600">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900">{feature.title}</h3>
                </div>
                <p className="text-secondary-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Implementation and Delivery Plan */}
        <section className="bg-white py-16 rounded-2xl shadow-xl border border-primary-200 max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold text-secondary-900 text-center mb-8">
            Implementation & Delivery Roadmap
          </h2>
          <p className="text-secondary-600 text-center max-w-2xl mx-auto mb-12 text-lg">
            Our journey from concept to impact is driven by real community collaboration, phased development, and continuous feedback.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="relative p-6 bg-gradient-to-br from-blue-50 via-blue-100 to-white rounded-xl shadow-md border-t-4 border-blue-500">
              <div className="text-6xl font-bold text-blue-500 mb-4">1</div>
              <h4 className="text-xl font-semibold text-secondary-900 mb-2">Community Research</h4>
              <p className="text-secondary-700 text-sm mb-3">
                Interview rural residents, artisans, and travelers to understand tourism gaps, safety concerns, and community needs.
              </p>
              <div className="h-2 w-full bg-blue-100 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-blue-500"></div>
              </div>
              <p className="text-xs text-right text-blue-600 mt-1">In Progress</p>
            </div>

            <div className="relative p-6 bg-gradient-to-br from-purple-50 via-purple-100 to-white rounded-xl shadow-md border-t-4 border-purple-500">
              <div className="text-6xl font-bold text-purple-500 mb-4">2</div>
              <h4 className="text-xl font-semibold text-secondary-900 mb-2">MVP Prototype</h4>
              <p className="text-secondary-700 text-sm mb-3">
                Build core modules including user profiles, booking systems, offline guides, and certification workflows for guides.
              </p>
              <div className="h-2 w-full bg-purple-100 rounded-full overflow-hidden">
                <div className="h-full w-1/6 bg-purple-500"></div>
              </div>
              <p className="text-xs text-right text-purple-600 mt-1">In Progress</p>
            </div>

            <div className="relative p-6 bg-gradient-to-br from-orange-50 via-orange-100 to-white rounded-xl shadow-md border-t-4 border-orange-500">
              <div className="text-6xl font-bold text-orange-500 mb-4">3</div>
              <h4 className="text-xl font-semibold text-secondary-900 mb-2">Pilot Launch & Feedback</h4>
              <p className="text-secondary-700 text-sm mb-3">
                Deploy the platform in selected rural regions, collect traveler and community feedback, and improve features accordingly.
              </p>
              <div className="h-2 w-full bg-orange-100 rounded-full overflow-hidden"></div>
              <p className="text-xs text-right text-orange-600 mt-1">Idea</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Solution;
