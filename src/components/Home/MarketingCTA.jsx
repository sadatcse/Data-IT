import React from 'react';
import { Link } from 'react-router-dom';

const MarketingCTA = () => {
  return (
    // Updated gradient to use primary and primary-focus
    <section className="bg-gradient-to-r from-primary to-blue-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Text Content: Focused on Growth & ROI */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Ready to Dominate Your Market?
            </h2>
            <p className="mt-2 text-white/90 font-medium text-lg">
              Unlock your brand's potential with data-driven marketing strategies.
            </p>
          </div>

          {/* Button Section */}
          <Link 
            to="/contact" 
            className="group inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-bold rounded-sm text-white hover:bg-white hover:text-primary transition-all duration-300 shadow-lg"
          >
            Get Your Free Audit
            {/* Chart/Graph Icon for Marketing Context */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default MarketingCTA;