
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Businesschanger = () => {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* LEFT COLUMN: Text Content */}
                    <div>
                        {/* Badge */}
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-soft-2 text-primary font-semibold text-sm mb-6">
                            Customer Centric
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6 tracking-tight leading-tight">
                            Driving Real Business Change Through Technology
                        </h2>

                        {/* Body Text */}
                        <p className="text-lg text-gray-dark mb-6 leading-relaxed font-normal">
                            At Data IT, we design and build intelligent digital solutions that 
                            bridge the gap between business challenges and modern technology. 
                            Our approach focuses on clarity, automation, and measurable impact.
                        </p>
                        <p className="text-lg text-gray-dark mb-8 leading-relaxed font-normal">
                            Every solution we deliver goes beyond technical execution—it transforms 
                            the way you operate, helping you scale faster, work smarter, and stay 
                            competitive in an evolving digital landscape.
                        </p>

                        {/* Primary Button */}
                  <Link
  to="/technology-transformation"
  className="group inline-flex items-center justify-center px-8 py-3 text-white text-base font-semibold rounded-lg shadow-md bg-sky-500 hover:bg-sky-600 transition-all duration-300"
>
  Read More
  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
</Link>
                    </div>

                    {/* RIGHT COLUMN: Image */}
                    <div className="relative">
                        {/* Decorative Background Blob */}
                        <div className="absolute -top-4 -right-4 w-2/3 h-2/3 bg-blue-soft/30 rounded-full blur-3xl -z-10"></div>

                        {/* Main Image */}
                        <img 
                            src="https://digitaldatait.s3.ap-southeast-1.amazonaws.com/Driving-Real.png"
                            alt="Team driving business transformation" 
                            className="rounded-xl shadow-lg w-full object-cover h-[400px] md:h-[500px]"
                        />
                        
                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-12 bg-white p-6 rounded-xl shadow-xl border-l-4 border-primary hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="text-4xl font-bold text-navy">98%</div>
                                <div className="text-sm text-gray-dark font-medium leading-tight">
                                    Client <br/> Satisfaction
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Businesschanger;
