
import { Lightbulb, Award, BarChart2 } from 'lucide-react'; 
import HeroImage from '../../assets/Hero1.png'; // Ensure path is correct
import { Link } from 'react-router-dom';

// --- Helper Component: FeatureCard ---
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 shadow-xl rounded-lg flex flex-col items-center text-center z-20 h-full border-b-4 border-transparent hover:border-primary transition-all duration-300">
    <div className="text-primary mb-3">
      <Icon className="w-8 h-8" /> 
    </div>
    <h3 className="text-lg md:text-xl font-bold text-black mb-2">
      {title}
    </h3>
    <p className="text-sm text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);

// --- Helper Component: HeroContent ---
const HeroContent = () => (
  <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full pb-10 md:pb-0">
    {/* Main Title: Smaller on mobile, Large on Desktop */}
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-black tracking-tight leading-tight mb-4 md:mb-6 drop-shadow-sm">
      Digital Solutions for <br /> 
      <span className="text-primary">Business Growth</span>
    </h1>
    
    {/* Subtitle */}
    <p className="text-base sm:text-lg md:text-xl text-gray-800 font-medium mb-6 md:mb-8 max-w-lg leading-relaxed">
      We work for your data and help improve your business with tailored strategies and expert insights.
    </p>
    
    {/* CTA Button */}
    <div className="flex flex-col sm:flex-row gap-4">
     <Link 
        to="/contact" 
        className="btn btn-primary bg-primary hover:bg-sky-600 border-none text-white shadow-lg shadow-sky-500/30 normal-case text-base px-8 h-12 min-h-0 rounded-md flex items-center justify-center"
      >
        Request Consultation
      </Link>
      {/* Optional Secondary Button for Mobile balance */}
      {/* <button className="btn btn-outline normal-case text-base px-8 h-12 min-h-0 rounded-md sm:hidden">Learn More</button> */}
    </div>
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
    <section className="relative w-full">
      {/* 1. Background Image and Content Wrapper */}
      {/* Height is auto on very small screens to fit content, fixed on larger */}
      <div className="relative w-full min-h-[550px] md:h-[700px] flex items-center">
        
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={HeroImage} 
            alt="Business meeting" 
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Dark overlay for base contrast */}
          <div className="absolute inset-0 bg-navy-dark/40 mix-blend-multiply"></div>
        </div>

        {/* Gradient Overlays - Responsive Directions */}
        {/* Mobile: Gradient from Top (White) to Bottom (Transparent) to make top text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-transparent md:hidden"></div>
        
        {/* Desktop: Gradient from Left (White) to Right (Transparent) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent"></div>

        {/* 2. Hero Content */}
        <HeroContent />
      </div>
      
      {/* 3. Feature Cards Wrapper */}
      {/* MOBILE LAYOUT: Relative positioning. Pushed up by negative margin (-mt-20). 
         This ensures the cards take up real space in the DOM so they don't overlap the next section.
         
         DESKTOP LAYOUT: Absolute positioning. Pushed down to hang off the edge.
      */}
      <div className="relative px-4 sm:px-6 lg:px-8 -mt-20 md:absolute md:-bottom-16 md:left-0 md:right-0 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
      
      {/* 4. Desktop Spacer */}
      {/* Only needed on desktop to reserve space for the absolute cards hanging at the bottom */}
      <div className="hidden md:block h-24"></div> 
      
      {/* Mobile Spacer (Optional) */}
      {/* Adds a little breathing room after the cards on mobile before the next section starts */}
      <div className="block md:hidden h-12"></div>
    </section>
  );
};

export default Hero;