import React from 'react';

// The image URL provided
const IMAGE_URL = "https://brainstation-23.com/wp-content/uploads/2025/10/ctaimg-1.webp";

const Join = () => {
    return (
        // Main container: Dark background, padding, and centered content
        <div className="bg-[#1b2a47] py-20 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Content Wrapper: Flex layout for text (left) and image (right) */}
                <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
                    
                    {/* Left Side: Text and CTA Button */}
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <h2 className="text-5xl md:text-6xl font-semibold mb-4 leading-tight">
                            Join Our Team
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            We always welcome talented professionals to strengthen our team.
                        </p>
                        
                        {/* CTA Button using DaisyUI 'btn' and 'btn-info' classes */}
                        <a 
                            href="/careers" // Replace with the actual link
                            className="btn btn-info text-white font-bold px-8 py-3 rounded-md transition duration-300"
                        >
                            Visit Career
                        </a>
                    </div>
                    
                    {/* Right Side: Image Container */}
                    <div className="lg:w-1/2 p-4 bg-white rounded-lg shadow-2xl">
                         {/* The inner image card style mimicking the screenshot's framing */}
                        <figure className="rounded-lg overflow-hidden">
                            <img 
                                src={IMAGE_URL} 
                                alt="A team of professionals smiling and collaborating" 
                                className="w-full h-full object-cover"
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join;