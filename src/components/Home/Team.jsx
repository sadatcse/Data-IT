import React from 'react';

const Team = () => {
    return (
        // Main Container: Uses the same dark background color and centers the content
        <div className="bg-[#1b2a47] py-24 sm:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                {/* Inner Content Card (Mimics the slightly separated box effect in the image) */}
                <div className="bg-[#1e304f] p-10 sm:p-16 rounded-xl shadow-2xl">
                    
                    {/* Title */}
                    <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4 leading-snug">
                        Ready to Scale Your Team?
                    </h2>
                    
                    {/* Description */}
                    <p className="text-lg text-white opacity-80 mb-10 max-w-2xl mx-auto">
                        Let's discuss how our resource augmentation and AI-powered 
                        development can accelerate your project delivery.
                    </p>
                    
                    {/* CTA Button using DaisyUI 'btn' and 'btn-info' classes */}
                    <a 
                        href="/schedule" // Replace with the actual scheduling link
                        className="btn btn-info text-white font-bold text-lg px-10 py-3 rounded-md transition duration-300"
                    >
                        Schedule a Call
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Team;