// Hero.js
import React from 'react';
import { Lightbulb, Award, BarChart2 } from 'lucide-react'; // Icons for the feature cards

// Assuming the image you uploaded is saved as '../../assets/HeroImage.jpg'
// I've renamed the import for clarity, but you should use your actual file path.
import HeroImage from '../../assets/Hero1.png'; 

// --- Helper Component: FeatureCard ---
const FeatureCard = ({ icon: Icon, title, description }) => (
  // Positioning 'relative' is crucial for stacking the cards on the section break
  <div className="bg-white p-6 md:p-8 shadow-xl rounded-lg flex flex-col items-center text-center z-10">
    <div className="text-primary mb-4">
      {/* Dynamic Icon */}
      <Icon className="w-8 h-8" /> 
    </div>
    <h3 className="text-xl font-semibold text-black mb-2">
      {title}
    </h3>
    <p className="text-sm text-gray-dark">
      {description}
    </p>
  </div>
);

// --- Helper Component: HeroContent ---
const HeroContent = () => (
  <div className="relative z-10 text-left max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
    {/* Main Title */}
    <h1 className="text-5xl md:text-6xl font-extrabold text-black tracking-tight leading-tight mb-4">
      Digital Solutions for <br className="hidden md:inline" /> 
      Business Growth
    </h1>
    
    {/* Subtitle/Tagline */}
    <p className="text-xl text-gray-dark mb-8 max-w-xl">
      We work for your data and help improve your business.
    </p>
    
    {/* Call to Action Button */}
    {/* Uses 'btn' and 'btn-primary' classes from daisyUI */}
    <button className="btn btn-lg btn-primary bg-sky-500 hover:bg-sky-600 shadow-lg shadow-primary/50 normal-case text-base tracking-wide">
      Request Consultation
    </button>
  </div>
);


// --- Main Component: Hero ---
const Hero = () => {
  const featureData = [
    { 
      icon: Lightbulb, 
      title: 'Tailored Solutions', 
      description: 'Crafting precise and innovative solutions.' 
    },
    { 
      icon: Award, 
      title: 'Tech Experts', 
      description: 'Mastering technology with excellence.' 
    },
    { 
      icon: BarChart2, 
      title: 'Savings & Success', 
      description: 'Creating cost-effective, impactful solutions.' 
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* 1. Background Image and Overlay */}
      <div className="relative h-[600px] md:h-[700px] w-full">
        <img 
          src={HeroImage} 
          alt="Business meeting around a table" 
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        
        {/* Grayscale/Blue Overlay for Text Readability */}
        <div className="absolute inset-0 bg-navy-dark opacity-60"></div>
        
        {/* Gradient Fade (matches the original image) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/10 to-transparent"></div>


        {/* 2. Hero Content (Text and Button) */}
        <div className="absolute inset-0 flex items-center pt-24 md:pt-0">
          <HeroContent />
        </div>
      </div>
      
      {/* 3. Feature Cards (Positioned over the bottom of the section) */}
      <div className="absolute -bottom-20 md:-bottom-16 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featureData.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Adds space below the hero to account for the cards */}
      <div className="h-24 md:h-16"></div> 
    </section>
  );
};

export default Hero;