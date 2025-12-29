// src/components/Home/Showcase.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Framer Motion
import usePortfolioData from '../../hooks/usePortfolio';

// Create a Motion-enabled Link component
const MotionLink = motion(Link);

const Showcase = () => {
  const { data, loading, error } = usePortfolioData();

  // --- Animation Variants ---
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Stagger cards by 0.2 seconds
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-500">
        <p>Error loading showcase: {error}</p>
      </div>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">
            Our Work
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }} // 4rem = 64px (w-16)
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary mx-auto mt-4"
          ></motion.div>
          
          <p className="mt-6 text-gray-dark max-w-2xl mx-auto">
              Explore our latest portfolio items below.
          </p>
        </motion.div>

        {/* Animated Grid Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {data.slice(0, 6).map((item) => (
            <MotionLink 
              key={item.Serial} 
              to={`/project/${item.url_title}`}
              variants={cardVariants}
              whileHover={{ y: -10 }} // Float up effect on hover
              className="group relative h-[400px] w-full overflow-hidden bg-gray-light shadow-md hover:shadow-xl transition-all duration-300 block rounded-sm"
            >
              <img 
                src={item.image_url}
                alt={item.name} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute bottom-6 left-6 right-6 bg-white p-6 text-center shadow-lg rounded-sm z-10">
                <h3 className="text-xl font-bold text-black mb-1">
                  {item.name}
                </h3>
              </div>
            </MotionLink>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;