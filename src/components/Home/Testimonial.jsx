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
            
            {/* Review Text - Matched to ProcessCard description (text-gray-600) */}
            <p className="text-gray-600 leading-relaxed italic mb-6 flex-grow">
                "{review}"
            </p>

            {/* Rating */}
            <div className="flex gap-1 mb-6">
                {renderStars(rating)}
            </div>

            {/* User Profile Section */}
            <div className="flex items-center mt-auto border-t border-gray-100 pt-4">
                {/* DaisyUI Avatar with Primary Ring */}
                <div className="avatar">
                    <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt={name} />
                    </div>
                </div>
                
                <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                        {name}
                    </h4>
                    <p className="text-sm text-gray-500">
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
            name: "Sarah Johnson",
            role: "Marketing Director",
            image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
            rating: 5,
            review: "We used smart strategies to implement this, and the results were instant. Ideally, this is the best solution we've found."
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Software Engineer",
            image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
            rating: 4.5,
            review: "The development process was smooth. The team followed strict guidelines and the delivery was exactly on time without sacrificing quality."
        },
        {
            id: 3,
            name: "Emily Davis",
            role: "Freelance Designer",
            image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
            rating: 5,
            review: "Every concept needs a solid foundation, and this tool provided exactly that. It's user-friendly and the design strategy is flawless."
        }
    ];

    return (
        // Section wrapper matched to ProcessSection (py-16 md:py-24 bg-gray-50)
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header - Exact match to ProcessSection header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                        Client Testimonials
                    </h2>
                    {/* Decorative Line - bg-primary */}
                    <div className="h-1 w-16 bg-primary mx-auto mt-3 rounded-full"></div>
                    <p className="mt-4 text-xl text-gray-600">
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