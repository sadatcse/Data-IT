// ProcessSection.js
import React from 'react';
import { CheckCircle } from 'lucide-react'; // Using lucide-react for the checkmark icon

// --- Helper Component: ProcessCard ---
const ProcessCard = ({ title, description }) => (
  // Updated: Replaced 'border-indigo-500' with 'border-primary'
  // bg-white kept as per rules
  <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center border-t-4 border-primary">
    {/* Checkmark Icon */}
    {/* Updated: Replaced 'text-indigo-500' with 'text-primary' */}
    <CheckCircle className="w-8 h-8 text-primary mb-4" /> 
    
    <h3 className="text-xl font-semibold text-black mb-3">
      {title}
    </h3>
    <p className="text-gray-dark leading-relaxed">
      {description}
    </p>
  </div>
);


// --- Main Component: ProcessSection ---
function ProcessSection() {
  const processSteps = [
    {
      title: 'Explore',
      description: "In the beginning, we dive deep into your project. We use smart strategies and careful analysis to uncover the best ways to help your idea blossom into a successful solution.",
    },
    {
      title: 'Plan',
      description: "Every concept needs a solid foundation. We use top tools and methods to outline a roadmap for a thriving solution.",
    },
    {
      title: 'Design',
      description: "Our experienced designers take the stage. They thoroughly analyze your concept and create a user-friendly design strategy. This ensures your end-users will love the result.",
    },
    {
      title: 'Develop',
      description: "The world of web and app development is vast and always changing. We stay updated on the latest trends and incorporate them into the development process.",
    },
    {
      title: 'Launch',
      description: "We use our expertise and follow app store guidelines to successfully launch your apps.",
    },
    {
      title: 'Delivery',
      description: "We're committed to meeting strict deadlines. Our teams ensure on-time delivery without ever sacrificing quality.",
    },
  ];

  return (
    // bg-gray-50 mapped to bg-gray-light
    <section className="py-16 md:py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl font-extrabold text-black tracking-tight">
            Our Process
          </h2>
          {/* Updated: Replaced 'bg-indigo-500' with 'bg-primary' */}
          <div className="h-1 w-16 bg-primary mx-auto mt-3 rounded-full"></div>
          <p className="mt-4 text-xl text-gray-dark">
            Six Steps to Achieving Your Vision
          </p>
        </div>

        {/* The 2x3 Grid of Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <ProcessCard 
              key={index}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;