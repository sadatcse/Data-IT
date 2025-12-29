import React from 'react';
import { Quote } from 'lucide-react'; // Importing a subtle icon for design framing

const Whatwedo = () => {
    return (
        <section className="relative py-20 md:py-32 bg-gray-50 overflow-hidden">
             {/* --- Decorative Background Elements (Modern subtle blobs) --- */}
             <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-70 pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    
                    {/* LEFT COLUMN: Text Content */}
                    <div>
                        {/* Modern Pill Badge above heading */}
                  

                        <h2 className="text-4xl font-black text-gray-900 uppercase tracking-wide mb-8 relative inline-block">
                            What We Do
                            {/* Accent underline */}
                            <span className="absolute -bottom-2 left-0 w-1/3 h-1.5 bg-primary rounded-full"></span>
                        </h2>

                        <div className="relative">
                             {/* Subtle decorative icon behind text */}
                            <Quote className="absolute -top-6 -left-6 w-16 h-16 text-gray-100 -z-10" />
                            
                            <div className="space-y-6 text-gray-600 text-lg font-normal leading-relaxed md:leading-loose">
                                <p>
                                    <span className="font-bold text-primary text-xl">Data IT</span> is a technology-driven company
                                    focused on building customized digital solutions that help businesses
                                    operate efficiently, scale confidently, and adapt to a rapidly changing
                                    digital landscape.
                                </p>

                                <p>
                                    We specialize in custom software development, web and mobile
                                    applications, business automation systems, and modern digital
                                    platforms tailored to each client’s unique workflow and objectives.
                                </p>

                                <p>
                                    By combining clean architecture, modern frameworks, and intelligent
                                    technologies, we help organizations streamline operations, improve
                                    decision-making, and gain complete control over their data and
                                    processes.
                                </p>

                                <p>
                                    From startups to enterprises, our experience spans multiple industries,
                                    including restaurants, e-commerce, corporate offices, education, and
                                    service-based businesses—delivering reliable, scalable, and
                                    future-ready solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Image with Modern Layered Effect */}
                    <div className="relative">
                        {/* Offset decorative background border */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-indigo-200/20 rounded-3xl transform rotate-3 scale-[1.02] -z-10 blur-sm"></div>
                        
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <img 
                                src="https://digitaldatait.s3.ap-southeast-1.amazonaws.com/What-We-Do-min.jpeg"
                                alt="Data IT Workspace" 
                                className="w-full h-full object-cover aspect-[4/5] lg:aspect-[3/4]"
                            />
                            {/* Subtle overlay gradient for better image integration */}
                            <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Whatwedo;