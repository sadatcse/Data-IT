// src/pages/Portfolios.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaLayerGroup } from 'react-icons/fa';
import usePortfolioData from '../hooks/usePortfolio';
import SEO from '../components/SEO/SEO';

const Portfolios = () => {
  const { data, loading, error } = usePortfolioData();

  // --- Loading State ---
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-base-200">
        <div className="flex flex-col items-center gap-4">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p className="text-base-content/70 animate-pulse">Loading amazing projects...</p>
        </div>
      </div>
    );
  }

  // --- Error State ---
  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-base-200 p-4">
        <div role="alert" className="alert alert-error max-w-lg shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Error loading data: {error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* SEO Implementation for Portfolio Listing */}
      <SEO 
        title="Our Portfolio - Custom Software & Web Projects"
        description="Explore Data IT's portfolio of custom software, web applications, and digital marketing success stories. See how we transform businesses with technology."
        keywords="Data IT Portfolio, Software Case Studies, Web Development Projects, App Development Examples, Client Success Stories"
        url="/portfolio"
        // Uses default site OG image if specific one not provided
        siteName="Data IT"
        type="website"
      />

      {/* --- 1. Hero Section --- */}

      {/* Decorative background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/10 blur-3xl rounded-full -z-10"></div>
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800">Our Portfolios</h1>
          <p className="text-sm text-gray-500 mt-2">Home • Portfolios</p>
        </div>
      </div>


      {/* --- 2. Portfolio Grid --- */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          
          {data.map((item) => (
            <div 
              key={item.Serial} 
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group border border-base-200"
            >
              
              {/* Image Area with Zoom Effect */}
              <figure className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={item.image_url}
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 badge badge-primary shadow-lg gap-2 p-3 font-medium">
                  <FaLayerGroup /> {item.category || "Project"}
                </div>
              </figure>

              {/* Content Area */}
              <div className="card-body">
                <h3 className="card-title text-2xl font-bold text-base-content">
                  {item.name}
                </h3>
                
                {/* Description truncated to 3 lines for layout consistency */}
                <p className="text-base-content/70 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Card Footer / Action */}
                <div className="card-actions justify-end mt-6 pt-4 border-t border-base-200">
                  <Link 
                    to={`/project/${item.url_title}`} 
                    className="btn btn-outline btn-primary btn-sm group-hover:btn-active transition-all"
                  >
                    View Case Study <FaArrowRight className="ml-1" />
                  </Link>
                </div>
              </div>

            </div>
          ))}

        </div>
        
        {/* Empty State Check */}
        {data.length === 0 && (
           <div className="text-center py-20 opacity-50">
             <h3 className="text-2xl font-bold">No projects found yet.</h3>
           </div>
        )}
      </section>
    </div>
  );
};

export default Portfolios;