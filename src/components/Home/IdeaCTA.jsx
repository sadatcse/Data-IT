import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa'; // Ensure you have react-icons installed

const IdeaCTA = () => {
  return (
    // Replaced 'bg-blue-600' with 'bg-primary'
    <section className="bg-primary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Text Content: Matches the 'Do you have an idea' image */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Do you have an idea in mind?
            </h2>
            <p className="mt-2 text-white/90 font-medium text-lg">
              Leverage our expertise to turn your concept into reality!
            </p>
          </div>

          {/* Button Section: Kept the template structure but updated text/icon */}
          <Link 
            to="/contact" 
            // Replaced hover:text-blue-600 with hover:text-primary
            className="group inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-bold rounded-sm text-white hover:bg-white hover:text-primary transition-all duration-300 shadow-lg"
          >
            Contact Us
            {/* Chevron Icon matched to the image */}
            <FaChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

        </div>
      </div>
    </section>
  );
};

export default IdeaCTA;