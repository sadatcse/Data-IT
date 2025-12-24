import { Link } from 'react-router-dom'; 
import { FaArrowRight } from 'react-icons/fa';
import useTeamData from './../../hooks/useTeamData'; 

const HomeTeam = () => {
    const { data, loading, error } = useTeamData();

    const displayedTeam = [...data]
        .sort((a, b) => a.serial - b.serial)
        .slice(0, 6);

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {displayedTeam.map((member) => (
                        <div 
                            key={member.serial} 
                            className="card bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden group border border-transparent hover:border-blue-soft-2"
                        >
                            {/* Image Section */}
                            <figure className="h-96 w-full overflow-hidden bg-blue-soft-2 relative">
                                {member.photoUrl ? (
                                    <img 
                                        src={member.photoUrl} 
                                        alt={member.name} 
                                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="h-full w-full flex items-center justify-center bg-gray-100 text-gray-400">
                                        No Image
                                    </div>
                                )}
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </figure>

                            {/* Content Section */}
                            <div className="card-body p-5 text-left bg-white">
                                <h3 className="text-lg font-bold text-navy mb-1 leading-tight">
                                    {member.name}
                                </h3>
                                <p className="text-primary font-semibold text-xs uppercase tracking-wide mb-3">
                                    {member.position}
                                </p>
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
