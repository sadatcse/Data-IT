import React from 'react';
// Using react-icons as requested previously
import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

// --- Helper Component: TestimonialCard ---
const TestimonialCard = ({ name, role, image, review, rating }) => {
    
    // Helper to render stars based on numeric rating
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} className="text-yellow-400" />);
            } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-gray-300" />);
            }
        }
        return stars;
    };

    return (
        // Style matched to ProcessCard: bg-white, rounded-xl, shadow-lg, border-t-4 border-primary
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col border-t-4 border-primary h-full">
            
            {/* Quote Icon - Matched to CheckCircle style (text-primary) */}
            <FaQuoteLeft className="w-8 h-8 text-primary mb-4 opacity-30" />
            
            {/* Review Text - Matched to ProcessCard description (text-gray-dark) */}
            <p className="text-gray-dark leading-relaxed italic mb-6 flex-grow">
                "{review}"
            </p>

            {/* Rating */}
            <div className="flex gap-1 mb-6">
                {renderStars(rating)}
            </div>

            {/* User Profile Section */}
            <div className="flex items-center mt-auto border-t border-gray-200 pt-4">
                {/* DaisyUI Avatar with Primary Ring */}
                <div className="avatar">
                    <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt={name} />
                    </div>
                </div>
                
                <div className="ml-4">
                    <h4 className="text-lg font-semibold text-black">
                        {name}
                    </h4>
                    <p className="text-sm text-gray-dark">
                        {role}
                    </p>
                </div>
            </div>
        </div>
    );
};

// --- Main Component: Testimonial ---
const Testimonial = () => {
    const reviews = [
        {
            id: 1,
            name: "ABUL KALAM AZAD ",
            role: "Managing Director of Multigym premium & Apiz Global",
            image: "https://digitaldatait.s3.ap-southeast-1.amazonaws.com/abulkalam.png",
            rating: 5,
      review: "Their web design and development service transformed our online presence. The site is fast, modern, and perfectly aligned with our brand. The team worked with real dedication and delivered far beyond our expectations."
        },
        {
            id: 2,
            name: "Dr Sadik Khan",
            role: "Associate Professor of Jackson State University ",
            image: "https://digitaldatait.s3.ap-southeast-1.amazonaws.com/sadik.png",
            rating: 4.5,
        review: "Professional, detail-oriented, and extremely reliable. They followed every guideline we provided and delivered a clean, responsive website. The entire process—from planning to deployment—was smooth and timely."
        },
        {
            id: 3,
            name: "Mufakkharul Islam Khasru",
            role: "Managing Director of Finlay Properties Limited",
            image: "https://digitaldatait.s3.ap-southeast-1.amazonaws.com/Mufakkharul.png",
            rating: 5,
            review: "Outstanding work! They built a high-quality website with strong UI/UX and excellent performance. The team truly understood our business needs and delivered a professional digital platform that added real value."
        }
    ];

    return (
        // Section wrapper mapped to bg-gray-light
        <section className="py-16 md:py-24 bg-gray-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header - Exact match to ProcessSection header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl font-extrabold text-black tracking-tight">
                        Client Testimonials
                    </h2>
                    {/* Decorative Line - bg-primary */}
                    <div className="h-1 w-16 bg-primary mx-auto mt-3 rounded-full"></div>
                    <p className="mt-4 text-xl text-gray-dark">
                        Feedback from our valued partners
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <TestimonialCard 
                            key={review.id}
                            {...review}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;