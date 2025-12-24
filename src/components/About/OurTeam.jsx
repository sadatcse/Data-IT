import { Link } from 'react-router-dom'; 
import { FaArrowRight } from 'react-icons/fa';
import useTeamData from './../../hooks/useTeamData'; 

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
        <section className="bg-gray-light py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wide">
                        Meet the People Behind Data IT
                    </h2>
                    <div className="h-1 w-16 bg-primary mx-auto mt-4 rounded-full"></div>
             
                </div>

                {/* Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayedTeam.map((member) => (
            <div 
              key={member.serial} 
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
                
                {/* <div className="pt-4 border-t border-gray-light">
                  <button className="btn btn-sm btn-outline border-blue-main text-blue-main hover:bg-blue-main hover:border-blue-main hover:text-white rounded-lg px-6">
                    Details
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>

                {/* Show More Button */}
                <div className="text-center mt-12">
                    <Link 
                        to="/team" 
                        className="btn bg-sky-500 hover:bg-sky-600 text-white border-none rounded-lg px-8 gap-2 group"
                    >
                        Meet Our Full Team
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default HomeTeam;
