import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Using FontAwesome check circle

const Industries = () => {
  // Data extracted directly from your screenshot
  const industryList = [
    "Asbestos Abatement Contractor",
    "Excavation Work",
    "Fire Protection Contractor",
    "Health & Wellness",
    "Accounting",
    "Fencing Contractor",
    "Flower Shop",
    "Home Remodeling",
    "Advertising Agency",
    "Financial Advisor",
    "Glass and Glazing Contractor",
    "Hotel Booking",
    "Agriculture",
    "Immigration Consulting",
    "Hazardous Substance Removal",
    "HVAC",
    "Insurance",
    "Jewelry",
    "Architecture Website",
    "Animal Pet Website",
    "Business Website",
    "Banking Website",
    "Manufacturing Website",
    "Automobile Website",
    "Marketing Website"
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* text-gray-900 changed to text-black */}
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
            Our Affordable Website Design & Development Services <br className="hidden md:block" />
             And Marketing Are Suitable For The Following Industries.
          </h2>
          {/* Blue Divider - using bg-primary */}
          <div className="flex justify-center gap-1 mt-4">
             <div className="h-1 w-2 bg-primary rounded-full"></div>
             <div className="h-1 w-16 bg-primary rounded-full"></div>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-8">
          {industryList.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300"
            >
              {/* Icon - using text-primary */}
              <FaCheckCircle className="text-primary flex-shrink-0 text-lg" />
              
              {/* Text - text-gray-700 changed to text-gray-dark */}
              <span className="text-gray-dark font-medium text-sm md:text-base">
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;