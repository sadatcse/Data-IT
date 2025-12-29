// src/components/Home/Service.jsx
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
import { motion } from 'framer-motion'; // Import Motion

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

// --- Animation Variants ---
const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15 // Cards appear one after another
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.5, ease: "easeOut" } 
    }
};

const Service = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Animated Header */}
                <motion.div 
                    className="text-center mb-12 md:mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={headerVariants}
                >
                    <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                        Explore Our Extensive Service Portfolio
                    </h2>

                    <div className="h-1 w-16 bg-primary mx-auto mt-3 rounded-full"></div>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        At DataIT , we specialize in delivering top-notch web design and mobile app development services through our comprehensive service portfolio.
                    </p>
                </motion.div>

                {/* Animated Grid */}
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    {services.map((service, index) => {
                        const Icon = service.icon; 
                        
                        return (
                            <motion.div 
                                key={index} 
                                variants={cardVariants}
                                whileHover={{ y: -10 }} // Lift effect on hover
                                className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col text-center border-t-4 border-transparent hover:border-primary"
                            >
                                {/* Icon Area */}
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
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Service;