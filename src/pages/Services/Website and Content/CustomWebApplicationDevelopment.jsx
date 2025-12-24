import React from 'react';
import { Link } from 'react-router-dom';

const CustomWebApplicationDevelopment = () => {
  return (
    <div className="font-sans text-[#25252B] bg-white min-h-screen">

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6 text-sm">
        <ul className="flex flex-wrap gap-2 text-[#1A356A] opacity-70">
          <li><a href="#" className="hover:text-[#056FFD]">Home</a></li>
          <li>/</li>
          <li><a href="#" className="hover:text-[#056FFD]">Services</a></li>
          <li>/</li>
          <li className="font-semibold opacity-100">Custom Web Application Development</li>
        </ul>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A356A] leading-tight">
              Custom Web Application Development
            </h1>
            <p className="text-lg leading-relaxed">
              Data IT delivers secure, scalable, and fully customized web applications
              designed to match your business workflow, operational needs, and long-term
              growth strategy.
            </p>
            <p className="leading-relaxed">
              We do not build generic systems. Every web application we develop is crafted
              from scratch—focused on performance, usability, and measurable business
              outcomes.
            </p>
            <p className="leading-relaxed">
              Whether you are a startup, SME, or enterprise, our custom web applications
              help you automate processes, centralize data, and gain real-time control
              over your business operations.
            </p>
          </div>

    <div className="w-full md:w-1/2 flex justify-center">


    <img
      src="https://digitaldatait.s3.ap-southeast-1.amazonaws.com/Service/CustomWebApplicationDevelopment-min.png"
      alt="WebDesign And Development"
      className="w-3/4 h-3/4 object-contain"
      loading="lazy"
    />


</div>
        </div>
      </section>

      {/* What We Build */}
      <section className="bg-[#EFF0F6] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-10">
            What We Build for Your Business
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Custom business management systems",
              "Admin dashboards & control panels",
              "CRM & customer management platforms",
              "Inventory, billing & reporting systems",
              "Multi-branch & role-based applications",
              "API-driven & cloud-ready web platforms"
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

      {/* Development Process */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-12">
            Our Development Process
          </h2>

          <ul className="space-y-6 max-w-3xl">
            {[
              "Business requirement analysis & system planning",
              "UX/UI wireframing and workflow design",
              "Custom development using modern frameworks",
              "Secure database & API integration",
              "Testing, optimization, and performance tuning",
              "Deployment, training, and ongoing support"
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
              "100% custom-built applications — no templates",
              "Business-first, technology-driven approach",
              "Secure, scalable, and future-ready systems",
              "Clear communication & transparent delivery",
              "Long-term support and system optimization",
              "Experience across multiple industries"
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
              Ready to Build Your Custom Web Application?
            </h3>
            <p className="text-[#B1DAF8] mt-2">
              Let’s create a system that works exactly the way your business needs.
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

export default CustomWebApplicationDevelopment;
