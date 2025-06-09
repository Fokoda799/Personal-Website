import React from 'react';
import { ThumbsUp, ThumbsDown, Lightbulb, Target, BookOpen } from 'lucide-react';

const Reflection = () => {
  const successes = [
    {
      title: 'User-Centered Design',
      description: 'Focusing on real user needs led to intuitive interfaces and high satisfaction rates.',
      impact: 'Users could navigate the system without training, reducing onboarding time by 60%.'
    },
    {
      title: 'Iterative Development',
      description: 'Regular feedback cycles allowed for continuous improvement and feature refinement.',
      impact: 'Each iteration brought measurable improvements in user engagement and functionality.'
    },
    {
      title: 'Technical Architecture',
      description: 'Choosing scalable technologies from the start enabled smooth growth and feature additions.',
      impact: 'The system handled 10x user growth without major architectural changes.'
    }
  ];

  const challenges = [
    {
      title: 'Feature Scope Creep',
      description: 'Initial enthusiasm led to trying to solve too many problems at once.',
      lesson: 'Focus on core features first. Additional features can be added based on user feedback.'
    },
    {
      title: 'Market Timing',
      description: 'Some features were developed before the market was ready to adopt them.',
      lesson: 'Validate market readiness alongside technical feasibility.'
    },
    {
      title: 'Resource Management',
      description: 'Underestimated the time and resources needed for comprehensive testing.',
      lesson: 'Always allocate sufficient time for testing and quality assurance.'
    }
  ];

  const insights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Problem-Solution Fit',
      content: 'The most important factor is ensuring your solution truly addresses a painful problem that people are willing to pay to solve.'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Continuous Learning',
      content: 'Every interaction with users, every piece of feedback, and every challenge is a learning opportunity that shapes the product.'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation Balance',
      content: 'Innovation should solve real problems, not create complexity. The best solutions are often elegantly simple.'
    }
  ];

  return (
    <div className="py-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Reflections & Insights
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Honest reflections on the entrepreneurial journey, including what worked well, 
            what didn't, and the valuable lessons learned along the way.
          </p>
        </div>

        {/* What Worked Well */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <ThumbsUp className="w-8 h-8 text-green-500 mr-3" />
            <h2 className="text-3xl font-bold text-secondary-900">What Worked Well</h2>
          </div>
          
          <div className="space-y-6">
            {successes.map((success, index) => (
              <div key={index} className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{success.title}</h3>
                <p className="text-secondary-700 mb-4">{success.description}</p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm font-medium text-green-800">
                    <strong>Impact:</strong> {success.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Lessons */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <ThumbsDown className="w-8 h-8 text-red-500 mr-3" />
            <h2 className="text-3xl font-bold text-secondary-900">Challenges & Lessons</h2>
          </div>
          
          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{challenge.title}</h3>
                <p className="text-secondary-700 mb-4">{challenge.description}</p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm font-medium text-red-800">
                    <strong>Lesson Learned:</strong> {challenge.lesson}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">Key Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">{insight.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">{insight.title}</h3>
                <p className="text-secondary-600">{insight.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Growth */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-6 text-center">Personal Growth</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-secondary-700 mb-6">
              This entrepreneurial journey has been transformative on both professional and personal levels. 
              Beyond building a product, I've developed resilience, learned to embrace uncertainty, 
              and discovered the importance of staying connected to the problem you're solving.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Skills Developed</h3>
                <ul className="space-y-2 text-secondary-600">
                  <li>• Product management and user research</li>
                  <li>• Technical leadership and architecture</li>
                  <li>• Customer development and validation</li>
                  <li>• Financial planning and resource management</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Mindset Shifts</h3>
                <ul className="space-y-2 text-secondary-600">
                  <li>• From perfectionism to iteration</li>
                  <li>• From feature-focused to problem-focused</li>
                  <li>• From individual work to team collaboration</li>
                  <li>• From fear of failure to learning from setbacks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Future Applications */}
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-secondary-900 mb-4">Applying These Lessons</h3>
          <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
            These insights will guide future projects and decisions. The most valuable lesson is that 
            entrepreneurship is not just about building products—it's about solving real problems for 
            real people while continuously learning and adapting along the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reflection;