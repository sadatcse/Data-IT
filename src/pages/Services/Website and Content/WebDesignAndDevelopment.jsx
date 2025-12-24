import React from 'react';
import { Link } from 'react-router-dom';

const WebDesignAndDevelopment = () => {
  return (
    <div className="font-sans text-[#25252B] bg-white min-h-screen">

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6 text-sm">
        <ul className="flex flex-wrap gap-2 text-[#1A356A] opacity-70">
          <li><a href="#" className="hover:text-[#056FFD]">Home</a></li>
          <li>/</li>
          <li><a href="#" className="hover:text-[#056FFD]">Services</a></li>
          <li>/</li>
          <li className="font-semibold opacity-100">Web Design & Development</li>
        </ul>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A356A] leading-tight">
              Web Design & Development <br /> Services
            </h1>
            <p className="text-lg leading-relaxed">
              Data IT designs and develops modern, responsive, and high-performing
              websites that strengthen your brand presence, engage users, and convert
              visitors into customers.
            </p>
            <p className="leading-relaxed">
              We combine clean UI/UX design with robust development to ensure your
              website not only looks professional but also delivers speed, security,
              and seamless performance across all devices.
            </p>
            <p className="leading-relaxed">
              Whether you need a corporate website, service platform, or a scalable
              web application, our solutions are fully customized to match your
              business goals and target audience.
            </p>
          </div>

  <div className="w-full md:w-1/2 flex justify-center">


    <img
      src="https://digitaldatait.s3.ap-southeast-1.amazonaws.com/Service/WebDesignAndDevelopment-min.png"
      alt="WebDesign And Development"
      className="w-3/4 h-3/4 object-contain"
      loading="lazy"
    />


</div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="bg-[#EFF0F6] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-10">
            What We Deliver
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Custom website design aligned with your brand",
              "Mobile-first and fully responsive layouts",
              "Fast-loading, SEO-friendly architecture",
              "Secure and scalable frontend & backend",
              "CMS and admin panel integration",
              "Performance optimization & analytics setup"
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border hover:border-[#056FFD] transition-all"
              >
                <p className="font-medium text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design & Development Process */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-12">
            Our Design & Development Process
          </h2>

          <ul className="space-y-6 max-w-3xl">
            {[
              "Requirement analysis & business understanding",
              "UI/UX wireframing and visual design",
              "Frontend & backend development",
              "Content integration & SEO setup",
              "Cross-browser & device testing",
              "Deployment, training & ongoing support"
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-3 h-3 mt-2 rounded-full bg-[#056FFD]"></span>
                <span className="text-lg">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Data IT */}
      <section className="bg-[#CAE9FF] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-10 text-center">
            Why Choose Data IT
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Custom-designed websites — no templates",
              "Modern UI/UX with business focus",
              "SEO-optimized structure from day one",
              "Secure, scalable, and maintainable code",
              "Clear communication & timely delivery",
              "Long-term maintenance & support"
            ].map((reason, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#14223D] text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-3xl font-bold">
              Ready to Build a High-Impact Website?
            </h3>
            <p className="text-[#B1DAF8] mt-2">
              Let’s design and develop a website that represents your business perfectly.
            </p>
          </div>
           <Link
            to="/contact">
          <button className="bg-[#056FFD] hover:bg-[#330FEE] transition-all px-10 h-14 rounded-lg font-semibold text-lg shadow-lg">
            Request a Free Consultation
          </button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default WebDesignAndDevelopment;
