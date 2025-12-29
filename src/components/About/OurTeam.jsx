// src/components/Home/HomeTeam.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import Motion
import useTeamData from './../../hooks/useTeamData'; 

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
      staggerChildren: 0.15 // Cards appear one after another
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

const HomeTeam = () => {
    const { data, loading, error } = useTeamData();

    const displayedTeam = [...data]
        .sort((a, b) => a.serial - b.serial)
        .slice(0, 4);

    if (loading) {
        return (
            <section className="bg-gray-light py-24 flex justify-center items-center min-h-[400px]">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </section>
        );
    }

    if (error) {
        return <div className="text-center text-red-500 py-10">Error: {error}</div>;
    }

    return (
        <section className="bg-gray-light py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Animated Header */}
                <motion.div 
                    className="text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={headerVariants}
                >
                    <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wide">
                        Meet the People Behind Data IT
                    </h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: 64 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-1 bg-primary mx-auto mt-4 rounded-full"
                    ></motion.div>
                </motion.div>

                {/* Animated Grid */}
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={gridContainerVariants}
                >
                    {displayedTeam.map((member) => (
                        <motion.div 
                            key={member.serial} 
                            variants={cardVariants}
                            whileHover={{ y: -10 }} // Lift effect on hover
                            className="group card bg-white shadow-md rounded-xl overflow-hidden border border-transparent hover:border-blue-soft transition-all duration-300"
                        >
                            {/* Image Container */}
                            <figure className="relative h-80 bg-blue-soft-2 overflow-hidden">
                                <img 
                                    src={member.photoUrl} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Subtle Brand Overlay */}
                                <div className="absolute inset-0 bg-navy-dark opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </figure>

                            {/* Card Content */}
                            <div className="card-body p-6 text-center">
                                <h3 className="text-xl font-bold text-navy leading-tight">
                                    {member.name}
                                </h3>
                                <p className="text-blue-main font-medium text-sm mt-1 mb-4">
                                    {member.position}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Animated Show More Button */}
                <motion.div 
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <Link 
                        to="/team" 
                        className="btn bg-sky-500 hover:bg-sky-600 text-white border-none rounded-lg px-8 gap-2 group"
                    >
                        Meet Our Full Team
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

            </div>
        </section>
    );
};

export default HomeTeam;