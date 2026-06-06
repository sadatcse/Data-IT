// src/components/Home/Hero.jsx
import React from 'react';
import { Lightbulb, Award, BarChart2 } from 'lucide-react'; 
import HeroImage from '../../assets/Hero1.png'; // Ensure path is correct
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Motion

// --- Animation Variants ---

// Floating animation for cards
const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const revealVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

// --- Helper Component: FeatureCard ---
const FeatureCard = ({ icon: Icon, title, description, index }) => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={revealVariant}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -15, transition: { duration: 0.3 } }}
    className="bg-white p-8 shadow-2xl rounded-2xl flex flex-col items-center text-center z-20 h-full border border-gray-100 hover:border-primary/30 transition-all duration-300 group"
  >
    <motion.div 
      animate={floatingAnimation}
      transition={{ delay: index * 0.2 }}
      className="bg-sky-50 p-4 rounded-xl text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300"
    >
      <Icon className="w-8 h-8" /> 
    </motion.div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">
      {title}
    </h3>
    <p className="text-sm text-gray-600 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

// --- Helper Component: HeroContent ---
const HeroContent = () => (
  <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full pb-10 md:pb-0">
    <motion.h1 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-black tracking-tight leading-tight mb-4 md:mb-6 drop-shadow-sm"
    >
      Digital Solutions for <br /> 
      <span className="text-primary">Business Growth</span>
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-lg sm:text-xl md:text-2xl text-gray-800 font-medium mb-8 md:mb-10 max-w-xl leading-relaxed"
    >
      We work for your data and help improve your business with tailored strategies and expert insights.
    </motion.p>
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="flex flex-col sm:flex-row gap-4"
    >
      <Link to="/contact" className="w-full sm:w-auto">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary bg-primary hover:bg-sky-600 border-none text-white shadow-xl shadow-sky-500/20 normal-case text-lg px-10 h-14 min-h-0 rounded-xl flex items-center justify-center w-full"
        >
          Request Consultation
        </motion.button>
      </Link>
    </motion.div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featureData.map((feature, index) => (
              <FeatureCard 
                key={index}
                index={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* 4. Spacers */}
      <div className="hidden md:block h-24"></div> 
      <div className="block md:hidden h-12"></div>
    </section>
  );
};

export default Hero;