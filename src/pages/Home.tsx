import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Target, Rocket } from 'lucide-react';

const Home = () => {
  return (
    <div className="animate-fade-in mt-5">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-bounce-gentle">
            <img
              src="/abdellah-hadid/assets/abdellah.jpg"
              alt="Abdellah Hadid"
              className="w-32 h-32 rounded-full mx-auto mb-5 shadow-lg border-4 border-white"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6 animate-slide-up">
            Hi, I'm <span className="text-primary-600">Abdellah Hadid</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary-600 mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Backend Developer & Rising Entrepreneur
          </p>

          <p className="text-l md:text-xl text-secondary-500 mb-6 font-light italic animate-slide-up" style={{ animationDelay: '0.2s' }}>
            "From backend learner to future tech founder one idea, one line of code at a time."
          </p>
          
          <p className="text-lg text-secondary-700 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            I’m a backend developer passionate about solving real-world problems through technology.
            One issue I’ve noticed is the gap in Morocco’s tourism sector especially in rural areas. Tourists often miss out on authentic local experiences, while small local businesses and guides struggle to be seen. I’m currently exploring the idea of a platform that would connect travelers with trusted locals, artisans, and hidden gems in rural Morocco, making tourism more accessible, meaningful, and beneficial for these communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Link
              to="/journey"
              className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Explore My Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/solution"
              className="inline-flex items-center px-8 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-200 transform hover:scale-105"
            >
              View Solution
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              What You'll Discover
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Follow along as I share the complete entrepreneurial experience, from initial idea to working prototype.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">The Journey</h3>
              <p className="text-secondary-600">
                Discover the story behind my entrepreneurial path, including key milestones and lessons learned.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">The Solution</h3>
              <p className="text-secondary-600">
                Learn about the problem I identified and the innovative solution I developed to address it.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">The Prototype</h3>
              <p className="text-secondary-600">
                Explore the working prototype and see how the solution comes to life through technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;