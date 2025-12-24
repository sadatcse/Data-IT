import { FaRocket, FaUserTie, FaTasks, FaCogs } from 'react-icons/fa';

const Benefits = () => {
    const benefitsData = [
        {
            title: "Fast Project Kickoff",
            description: "Our teams can be onboarded quickly and operate independently to plan, execute, and deliver results without delays.",
            icon: <FaRocket />
        },
        {
            title: "Expert Engineering Team",
            description: "Our continuous hiring process ensures access to highly skilled engineers with real-world project experience.",
            icon: <FaUserTie />
        },
        {
            title: "End-to-End Ownership",
            description: "From planning to delivery, we take full responsibility for project execution, quality control, and team management.",
            icon: <FaTasks />
        },
        {
            title: "Operational Efficiency",
            description: "Our cost-effective solutions help you optimize operations, reduce overhead, and stay competitive without sacrificing quality.",
            icon: <FaCogs />
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-navy uppercase tracking-wide">
                        Benefits of Working With Data IT
                    </h2>
                    <div className="h-1 w-16 bg-primary mx-auto mt-4 rounded-full"></div>
                </div>

                {/* 2x2 Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {benefitsData.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            
                            {/* Icon Container */}
                            <div className="w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center text-4xl text-primary mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-primary mb-4">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-dark leading-relaxed max-w-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Benefits;
