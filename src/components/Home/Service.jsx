import React from 'react';
import { 
    Laptop, 
    PanelsTopLeft, 
    Megaphone, 
    Briefcase, 
    UserCircle2, 
    RefreshCcw, 
    SearchCheck, 
    FolderKanban 
} from 'lucide-react';


const services = [
    { 
        icon: Laptop, 
        title: 'Web Design & Development', 
        description: 'We create responsive, fast, and visually stunning websites tailored to strengthen your business presence.'
    },
    { 
        icon: PanelsTopLeft, 
        title: 'Custom Web Application Development', 
        description: 'From dashboards to enterprise-grade systems, we build secure and scalable custom web applications.'
    },
    { 
        icon: Megaphone, 
        title: 'Social Media Marketing', 
        description: 'Boost your brand visibility and engagement with strategic and creative social media marketing campaigns.'
    },
    { 
        icon: Briefcase, 
        title: 'Corporate Branding', 
        description: 'We design professional brand identities that reflect your company’s values, personality, and mission.'
    },
    { 
        icon: UserCircle2, 
        title: 'Personal Branding', 
        description: 'We help individuals build a powerful online presence with impactful personal branding strategies.'
    },
    { 
        icon: RefreshCcw, 
        title: 'Re Branding', 
        description: 'Transform your brand with a fresh and modern identity that aligns with your business goals and audience.'
    },
    { 
        icon: SearchCheck, 
        title: 'Professional SEO', 
        description: 'Rank higher, get more traffic, and dominate your niche with our data-driven SEO optimization services.'
    },
    { 
        icon: FolderKanban, 
        title: 'Others ', 
        description: 'We also offer premium video production and PR solutions to elevate your brand and maximize reach.' 
    },
];

const Service = () => {
    return (

        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                

                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                        Explore Our Extensive Service Portfolio
                    </h2>

                    <div className="h-1 w-16 bg-primary mx-auto mt-3 rounded-full"></div>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        At DataIT , we specialize in delivering top-notch web design and mobile app development services through our comprehensive service portfolio.
                    </p>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon; 
                        
                        return (
           
                            <div 
                                key={index} 
                                className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col text-center"
                            >
                                
                                {/* Icon Area */}
                                {/* Using 'text-primary' for the accent color */}
                                <div className="text-4xl text-primary mb-4 mx-auto">
                                    <Icon className="w-10 h-10" /> 
                                </div>
                                
                                {/* Title */}
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {service.title}
                                </h3>
                                
                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Service;