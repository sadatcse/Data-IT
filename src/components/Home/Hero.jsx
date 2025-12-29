// src/components/Home/Hero.jsx
import React from 'react';
import { Lightbulb, Award, BarChart2 } from 'lucide-react'; 
import HeroImage from '../../assets/Hero1.png'; // Ensure path is correct
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Motion

// --- Animation Variants ---

// Text content sliding in from the left
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.2, // Stagger text elements
      delayChildren: 0.3 
    } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

// Cards sliding up from the bottom with stagger
const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.8 // Wait for hero text to finish
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

// --- Helper Component: FeatureCard ---
const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    variants={cardVariants}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="bg-white p-6 shadow-xl rounded-lg flex flex-col items-center text-center z-20 h-full border-b-4 border-transparent hover:border-primary transition-all duration-300"
  >
    <div className="text-primary mb-3">
      <Icon className="w-8 h-8" /> 
    </div>
    <h3 className="text-lg md:text-xl font-bold text-black mb-2">
      {title}
    </h3>
    <p className="text-sm text-gray-600 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

// --- Helper Component: HeroContent ---
const HeroContent = () => (
  <motion.div 
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="relative z-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full pb-10 md:pb-0"
  >
    {/* Main Title */}
    <motion.h1 
      variants={itemVariants}
      className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-black tracking-tight leading-tight mb-4 md:mb-6 drop-shadow-sm"
    >
      Digital Solutions for <br /> 
      <span className="text-primary">Business Growth</span>
    </motion.h1>
    
    {/* Subtitle */}
    <motion.p 
      variants={itemVariants}
      className="text-base sm:text-lg md:text-xl text-gray-800 font-medium mb-6 md:mb-8 max-w-lg leading-relaxed"
    >
      We work for your data and help improve your business with tailored strategies and expert insights.
    </motion.p>
    
    {/* CTA Button */}
    <motion.div 
      variants={itemVariants}
      className="flex flex-col sm:flex-row gap-4"
    >
      <Link 
        to="/contact" 
      >
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary bg-primary hover:bg-sky-600 border-none text-white shadow-lg shadow-sky-500/30 normal-case text-base px-8 h-12 min-h-0 rounded-md flex items-center justify-center w-full sm:w-auto"
        >
          Request Consultation
        </motion.button>
      </Link>
    </motion.div>
  </motion.div>
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

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-transparent md:hidden"></div>
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent"></div>

        {/* 2. Hero Content (Animated) */}
        <HeroContent />
      </div>
      
      {/* 3. Feature Cards Wrapper (Animated) */}
      <div className="relative px-4 sm:px-6 lg:px-8 -mt-20 md:absolute md:-bottom-16 md:left-0 md:right-0 z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={cardContainerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {featureData.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* 4. Spacers */}
      <div className="hidden md:block h-24"></div> 
      <div className="block md:hidden h-12"></div>
    </section>
  );
};

export default Hero;