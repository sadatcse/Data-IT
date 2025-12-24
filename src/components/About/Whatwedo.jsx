

const Whatwedo = () => {
    return (
        <section className="py-16 md:py-4 bg-gray-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* LEFT COLUMN: Text Content */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wide">
                            What We Do
                        </h2>

                        <div className="space-y-6 text-gray-dark text-lg font-normal leading-relaxed">
                            <p>
                                <span className="font-semibold text-navy">Data IT</span> is a technology-driven company
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

                    {/* RIGHT COLUMN: Image */}
                    <div className="relative h-full min-h-[400px] lg:min-h-[600px] w-full">
                        <img 
                            src="https://digitaldatait.s3.ap-southeast-1.amazonaws.com/What-We-Do-min.jpeg"
                            alt="Data IT Workspace" 
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg"
                        />
                        <div className="absolute inset-0 rounded-2xl border border-black/5 pointer-events-none"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Whatwedo;
