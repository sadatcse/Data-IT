

const Missionvision = () => {
    return (
        <section className="relative w-full font-sans">
            
            {/* --- Header Overlay Section --- */}
            <div className="absolute top-0 left-0 w-full py-16 text-center z-10 px-4">
                <h3 className="text-3xl font-bold text-white uppercase tracking-wide ">
                    Mission & Vision
                </h3>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                    Our Objectives & Future Direction
                </h2>
            </div>

            {/* --- 50/50 Split Grid --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px]">
                
                {/* === Left Column (Mission) === */}
                <div className="bg-navy-dark pt-48 pb-20 px-8 md:px-16 lg:pr-28 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-white mb-8">
                        Mission
                    </h3>
                    
                    <div className="space-y-6 text-white/90 text-lg leading-relaxed font-normal">
                        <p>
                            Our mission is to empower businesses with intelligent, customized
                            digital solutions that simplify operations, improve efficiency,
                            and accelerate sustainable growth.
                        </p>
                        <p>
                            We aim to eliminate the complexity and misconceptions surrounding
                            digital transformation by delivering clear, reliable, and scalable
                            automation systems built with modern technology.
                        </p>
                        <p>
                            Data IT specializes in building custom software solutions, web and
                            mobile applications, and business management systems tailored to
                            each organization’s unique workflow and goals.
                        </p>
                    </div>
                </div>

                {/* === Right Column (Vision) === */}
                <div className="bg-primary pt-48 pb-20 px-8 md:px-16 lg:pl-28 flex flex-col justify-center text-white">
                    <h3 className="text-3xl font-bold mb-8">
                        Vision
                    </h3>

                    <div className="space-y-6 text-white/90 text-lg leading-relaxed font-normal">
                        <p>
                            Our vision is to become a globally trusted technology partner,
                            recognized for delivering future-ready software solutions that
                            evolve alongside our clients’ businesses.
                        </p>
                        <p>
                            Founded in 2024, Data IT is built on innovation, transparency, and
                            a strong commitment to quality. We strive to set new standards in
                            custom software development by focusing on real business impact
                            rather than generic solutions.
                        </p>
                        <p>
                            We envision a future where businesses operate smarter through
                            AI-driven insights, automation, and data-powered decision-making,
                            all supported by reliable and scalable digital systems.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Missionvision;
