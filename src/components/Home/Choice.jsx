import React from 'react';

// Actual URLs from the provided context
const TEAM_IMAGE_URL = "https://digitaldatait.s3.ap-southeast-1.amazonaws.com/Datait.jpg";

const Choice = () => {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-base-100">
            {/* --- Background Decorative Blobs (Modern Gradients) --- */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* --- Main Layout: Grid System --- */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
                    
                    {/* Left Column: Content */}
                    <div className="order-2 lg:order-1 flex flex-col items-start text-left">
                        {/* Modern Pill Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Why Choose DataIT
                        </div>

                        {/* Headline with Gradient Accent */}
                        <h2 className="text-4xl md:text-6xl font-black text-base-content mb-6 leading-[1.1] tracking-tight">
                            Exceeding Expectations <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                With Every Delivery.
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-base-content/70 mb-8 leading-relaxed max-w-xl">
                            At DataIT, we present a distinctive choice for <strong className="text-base-content font-semibold">Website Design & Mobile App Development</strong>. We blend creativity with technical precision to offer unparalleled advantages.
                        </p>
                        
                        {/* Modern Button with Hover Arrow */}
                        <a 
                            href="/contact" 
                            className="group btn btn-primary btn-lg rounded-full px-8 text-white bg-primary hover:bg-sky-600 shadow-md transition-all active:scale-95"
                        >
                            Get a Quote
                            {/* SVG Arrow icon */}
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </a>
                    </div>
                    
                    {/* Right Column: Image with Modern Composition */}
                    <div className="order-1 lg:order-2 relative group perspective-1000">
                        {/* Decorative background border/offset */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl transform rotate-3 scale-[1.02] opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
                        
                        {/* Main Image Container */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-base-100 border-4 border-base-100">
                            <img 
                                src={TEAM_IMAGE_URL} 
                                alt="DataIT team collaboration" 
                                className="w-full h-full object-cover min-h-[400px] md:min-h-[500px] transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            
                            {/* Floating "Glass" Badge overlay */}
                            <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/80 dark:bg-black/60 p-4 rounded-xl border border-white/20 shadow-lg flex items-center gap-4">
                                <div className="bg-primary rounded-full p-2">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase text-base-content/60">Success Rate</p>
                                    <p className="text-lg font-bold text-base-content">100% Client Satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- 2. Stats Section (Modern Bento Grid) --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <StatCard number="21" label="Projects Delivered" suffix="+" />
                    <StatCard number="16" label="Happy Customers" suffix="" />
                    <StatCard number="03" label="Global Clients" suffix="" />
                    <StatCard number="01" label="Year of Experience" suffix="+" />
                </div>

            </div>
        </section>
    );
};

// --- Helper Component: Modern StatCard ---
const StatCard = ({ number, label, suffix }) => (
    <div className="group p-6 bg-base-100 rounded-2xl border border-base-200 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 text-center relative overflow-hidden">
        {/* Hover Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10">
            <div className="text-4xl md:text-5xl font-black text-base-content mb-2 group-hover:scale-110 transition-transform duration-300 ease-back-out flex justify-center items-center">
                {number}<span className="text-primary text-3xl ml-1">{suffix}</span>
            </div>
            <p className="text-sm md:text-base font-medium text-base-content/60 uppercase tracking-wide group-hover:text-primary transition-colors">
                {label}
            </p>
        </div>
    </div>
);

export default Choice;