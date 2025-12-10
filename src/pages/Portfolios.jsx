import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaArrowRight, FaLayerGroup } from 'react-icons/fa'; // Icons for visual flair
import usePortfolioData from '../hooks/usePortfolio';

const Portfolios = () => {
  // We generally don't need 'id' for the full list, but keeping it if you have specific filtering logic later
  // const { id } = useParams(); 
  
  const { data, loading, error } = usePortfolioData();

  // --- Loading State (DaisyUI Spinner) ---
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

  // --- Error State (DaisyUI Alert) ---
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
    <div className="min-h-screen bg-base-200 font-sans">
      
      {/* --- 1. Hero Section --- */}
      <section className=" py-16 md:py-24 shadow-sm relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/10 blur-3xl rounded-full -z-10"></div>

        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-base-content mb-4 tracking-tight">
            Our <span className="text-primary">Portfolios</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Explore our collection custom-built solutions. 
            From innovative apps to stunning web platforms, we deliver excellence.
          </p>
        </div>
      </section>

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
                  src={`/src/assets/Portfolio/${item.image_name}`} 
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
                  {/* Make sure this link matches your App's route structure.
                     Assuming: /project/some-url-title 
                  */}
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