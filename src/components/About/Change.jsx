import React from 'react';

const AboutDataIT = () => {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* --- LEFT COLUMN: Image & Shape --- */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative mt-10 md:mt-0">
          
          {/* The Image Container */}
          <div className="relative z-10">
            <img 
              src="https://digitaldatait.s3.ap-southeast-1.amazonaws.com/about+chang.png" 
              alt="Data IT Team Member" 
              className="w-96 h-96 md:w-72 md:h-72 object-cover rounded-full shadow-lg"
            />
          </div>

          {/* The Blue Semi-Circle Shape */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[10%] w-[120%] max-w-[400px] h-48 bg-[#0099ff] rounded-b-full -z-0"></div>
        </div>

        {/* --- RIGHT COLUMN: Content --- */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your trusted partner in digital growth.
          </h2>
          
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            We understand that every business operates differently. That's why we don't offer "one size fits all" products. Instead, we are dedicated to delivering customized software solutions that perfectly match your business needs, helping you streamline operations and succeed in the modern digital world.
          </p>

          <ul className="space-y-4">
            <ListItem text="Web Design & Development with professional dashboards" />
            <ListItem text="Custom E-Commerce Platforms for B2B and B2C" />
            <ListItem text="Digital Marketing & Branding to grow your presence" />
          </ul>
        </div>

      </div>
    </section>
  );
};

// Helper component for the checkmark list items
const ListItem = ({ text }) => (
  <li className="flex items-start gap-3">
    {/* Custom Green Checkmark SVG */}
    <svg 
      className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <span className="text-gray-700 text-base">{text}</span>
  </li>
);

export default AboutDataIT;