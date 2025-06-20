import React from 'react';
import { ThumbsUp, ThumbsDown, Lightbulb, Target, BookOpen } from 'lucide-react';

const Reflection = () => {
  const successes = [
    {
      title: 'User Research Foundation',
      description:
        'Conducting early interviews and online surveys helped shape the problem definition and understand user pain points.',
      impact:
        'This gave me clarity on who the real beneficiaries are and what features should matter most in the MVP.'
    },
    {
      title: 'Structured Planning',
      description:
        'Using business model canvases and journey mapping early in the process made it easier to organize tasks and identify risks.',
      impact:
        'It allowed me to build a clear roadmap without feeling overwhelmed by feature overload or unclear priorities.'
    },
    {
      title: 'Feedback-Driven Ideation',
      description:
        'Even at the concept stage, feedback from peers and mentors helped me refine the solution.',
      impact:
        'Several assumptions were corrected early, saving time that would’ve been wasted building the wrong thing.'
    }
  ];

  const challenges = [
    {
      title: 'Defining a Focused Problem',
      description:
        'Initially, I tried to address multiple user segments and problems at once, making the solution feel scattered.',
      lesson:
        'I learned to zoom in on one specific problem and user group to build a stronger value proposition.'
    },
    {
      title: 'Lack of Real User Access',
      description:
        'In the early weeks, I struggled to reach actual potential users for feedback, relying too much on assumptions.',
      lesson:
        'Now I prioritize continuous user discovery before writing any code or designing screens.'
    },
    {
      title: 'Estimating Time and Resources',
      description:
        'I underestimated how much planning and research would be needed before even starting a prototype.',
      lesson:
        'Proper scoping and time-boxing during planning are critical even before development begins.'
    }
  ];

  const insights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Clarity is Everything',
      content:
        'Getting extremely clear on the problem, user persona, and goals before building anything makes every decision easier.'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Feedback Over Perfection',
      content:
        'Even planning documents and mockups are better when shared early. Feedback can turn weak ideas into strong ones.'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Simplicity Wins',
      content:
        'The best solutions are simple, focused, and easy to understand. Complexity often hides unclear thinking.'
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
            Honest reflections on the early stages of my entrepreneurial journey — including
            what I’ve learned so far through planning, research, and feedback.
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
              Though the product is still in the planning phase, this process has already shaped
              how I think, build, and prioritize. I’ve become more comfortable with ambiguity,
              open to changing direction based on new information, and more confident in
              problem-first thinking.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Skills Developed</h3>
                <ul className="space-y-2 text-secondary-600">
                  <li>• User research and interview design</li>
                  <li>• Business model design and value proposition mapping</li>
                  <li>• Hypothesis testing and assumption validation</li>
                  <li>• Early-stage planning and roadmapping</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Mindset Shifts</h3>
                <ul className="space-y-2 text-secondary-600">
                  <li>• From solution-first to problem-first thinking</li>
                  <li>• From trying to impress to trying to validate</li>
                  <li>• From building fast to learning fast</li>
                  <li>• From perfection to progress</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Future Applications */}
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-secondary-900 mb-4">Applying These Lessons</h3>
          <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
            The journey ahead includes building the prototype, testing the MVP, and eventually
            launching. But thanks to the clarity, research, and feedback I’ve already gathered,
            I feel well-prepared to take those next steps with purpose and confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reflection;
