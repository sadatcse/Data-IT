import React from 'react';
import { Link } from 'react-router-dom';

const Partner = () => {
  return (
    // Used bg-blue-600 to match the screenshot's royal blue color.
    // If you have a custom 'primary' color in tailwind.config, you can change this to 'bg-primary'
    <section className="bg-blue-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Text Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Don't wait; Partner with us.
            </h2>
            <p className="mt-2 text-white/90 font-medium">
              Let's Collaborate for Digital Excellence!
            </p>
          </div>

          {/* Button Section */}
          <Link 
            to="/contact" 
            className="group inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-sm text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            Get in Touch Today!
            {/* Simple SVG Chevron Icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Partner;