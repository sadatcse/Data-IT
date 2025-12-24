import React from 'react';
import useTeamData from '../../hooks/useTeamData';
import NoImage from '../../assets/NoImage.png';

const Team = () => {
  const { data: teamMembers, loading, error } = useTeamData();

  // Function to handle image fallback
  const handleImageError = (e) => {
    e.target.src = NoImage;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px] bg-white">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px] bg-gray-light px-4">
        <div className="alert shadow-md max-w-md bg-white border-l-4 border-blue-main">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-blue-main shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span className="text-gray-dark font-medium uppercase text-sm tracking-wide">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gray-light py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Our Professional Team
          </h2>
         <div className="relative flex justify-center items-center mb-6">
    <div className="h-1 w-24 bg-blue-main rounded-full scale-x-100 transition-transform duration-1000"></div>
  </div>
          <p className="text-gray-dark max-w-2xl mx-auto text-lg leading-relaxed">
            Data IT is powered by a group of industry experts focused on 
            delivering trustworthy and technology-driven excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.serial} 
              className="group card bg-white shadow-md rounded-xl overflow-hidden border border-transparent hover:border-blue-soft transition-all duration-300"
            >
              {/* Image Container */}
              <figure className="relative h-80 bg-blue-soft-2 overflow-hidden">
                <img 
                  src={member.photoUrl} 
                  alt={member.name} 
                  onError={handleImageError}
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
                
                {/* <div className="pt-4 border-t border-gray-light">
                  <button className="btn btn-sm btn-outline border-blue-main text-blue-main hover:bg-blue-main hover:border-blue-main hover:text-white rounded-lg px-6">
                    Details
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;