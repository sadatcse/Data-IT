import React from 'react';

const OurMoral = () => {
    const values = [
        {
            title: "Authenticity",
            description: "We believe in honesty and transparency, making it easier to understand our clients’ needs and exceed their expectations."
        },
        {
            title: "Commitment",
            description: "We are fully dedicated to our work and deeply committed to delivering on every promise we make to our clients."
        },
        {
            title: "Clarity & Ownership",
            description: "We work proactively and take full ownership of challenges to deliver the most effective solutions."
        },
        {
            title: "Continuous Improvement",
            description: "We invest in constant learning through on-the-job and off-the-job training, because innovation drives long-term success."
        },
        {
            title: "Teamwork",
            description: "Collaboration and unity are at the heart of our culture, enabling us to achieve more together."
        }
    ];

    return (
        <section className="py-10 md:py-10 bg-gray-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold text-gray-900 uppercase tracking-wide">
                        Our Moral Is Our Foundation
                    </h3>
                  
                    <div className="h-1 w-16 bg-primary mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {values.map((item, index) => (
                        <div 
                            key={index} 
                            className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(30%)] flex flex-col"
                        >
                            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full text-center border-t-4 border-primary flex flex-col justify-center">
                                
                                <h3 className="text-xl font-bold text-navy mb-4">
                                    {item.title}
                                </h3>
                                
                                <p className="text-gray-dark leading-relaxed font-normal">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default OurMoral;
