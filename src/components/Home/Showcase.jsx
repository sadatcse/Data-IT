import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link
import usePortfolioData from '../../hooks/usePortfolio'; 

const Showcase = () => {
  const { data, loading, error } = usePortfolioData();

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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Work
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mt-4"></div>
          
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
             Explore our latest portfolio items below.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.slice(0, 6).map((item) => (
            /* 2. Changed div to Link and added 'to' prop */
            <Link 
              key={item.Serial} 
              to={`/project/${item.url_title}`}
              className="group relative h-[400px] w-full overflow-hidden bg-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 block"
            >
              <img 
                src={`/src/assets/Portfolio/${item.image_name}`} 
                alt={item.name} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-6 left-6 right-6 bg-white p-6 text-center shadow-lg rounded-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {item.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;