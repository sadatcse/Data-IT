import React from 'react';

// Actual URLs from the provided context
const TEAM_IMAGE_URL = "https://www.dataitsolutions.com/wp-content/uploads/2024/01/Choose-DataIT.jpg";
const ACCENT_COLOR_CLASS = "text-[#4285F4]"; // A specific shade of blue for the header accent
const BUTTON_COLOR_CLASS = "bg-[#4285F4] hover:bg-blue-600 border-[#4285F4]"; // Specific blue for the button

// --- Helper Component: StatCard ---
const StatCard = ({ number, label, accentClass }) => (
    <div className="text-center p-4">
        {/* Number is dark gray */}
        <div className="text-5xl font-extrabold text-gray-900 mb-1">
            {number}
        </div>
        {/* Label is the light blue accent color */}
        <p className={`text-lg font-medium ${accentClass}`}> 
            {label}
        </p>
    </div>
);

// --- Main Component: Choice ---
const Choice = () => {
    return (
        // Main Container: Using a subtle gray background to match the screenshots' hue
        <section className="bg-white-50 py-16 md:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* --- 1. Top Section: Headline, Text, Image --- */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16 lg:mb-20">
                    
                    {/* Left Side: Text and CTA */}
                    <div className="lg:w-1/2 order-2 lg:order-1">
                        {/* Accent text using the custom blue color */}
                        <p className={`text-lg font-semibold uppercase tracking-wider mb-3 ${ACCENT_COLOR_CLASS}`}>
                            CHOOSE DATAIT, CHOOSE EXCELLENCE
                        </p>
                        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Exceeding Expectations with Every Delivery
                        </h2>
                        <p className="text-xl text-gray-700 mb-8">
                            At DataIT , we present a distinctive choice for **Website Design and Mobile App Development**. We offer unparalleled advantages and a track record of success.
                        </p>
                        
                        {/* CTA Button: Uses the custom blue color */}
                        <a 
                            href="/quote" 
                            className={`btn btn-lg ${BUTTON_COLOR_CLASS} text-white font-bold px-10 shadow-lg transition duration-300`}
                        >
                            Get a Quote
                        </a>
                    </div>
                    
                    {/* Right Side: Image with Blue Overlay and rounded corners */}
                    <div className="lg:w-1/2 order-1 lg:order-2 relative shadow-2xl overflow-hidden rounded-xl">
                        
                        {/* Blue/Gradient Overlay Simulation: Matches the image's overall blue tone */}
                        <div className="absolute inset-0 bg-blue-600 opacity-60 z-20 rounded-xl"></div> 
                        
                        {/* The Team Image */}
                        <img 
                            src={TEAM_IMAGE_URL} 
                            alt="DataIT team members collaborating in the office" 
                            className="w-full h-full object-cover relative z-10 rounded-xl"
                            style={{ minHeight: '400px', mixBlendMode: 'multiply' }} 
                        />
                    </div>
                </div>

                {/* --- Separator Line --- */}
                <hr className="my-10 border-gray-200" />

                {/* --- 2. Bottom Section: Statistics/Metrics --- */}
                <div className="flex flex-wrap justify-around items-center pt-8">
                    {/* The label color is passed to the StatCard */}
                    <StatCard number="21" label="Project Delivered" accentClass={ACCENT_COLOR_CLASS} />
                    <StatCard number="16" label="Happy customers" accentClass={ACCENT_COLOR_CLASS} />
                    <StatCard number="3" label="Global Client" accentClass={ACCENT_COLOR_CLASS} />
                    <StatCard number="1" label="Number of years" accentClass={ACCENT_COLOR_CLASS} />
                </div>


            </div>
            
            {/* --- Decorative Background Shape (Curved/Swoosh) --- */}
            {/* The subtle, large, rounded shapes in the background, set to a slightly lighter gray */}
            <div className="absolute -bottom-40 -left-60 w-[500px] h-[500px] bg-white rounded-full opacity-50 hidden md:block z-0"></div>
            <div className="absolute -top-60 -right-60 w-[600px] h-[600px] bg-white rounded-full opacity-50 hidden md:block z-0"></div>
        </section>
    );
};

export default Choice;