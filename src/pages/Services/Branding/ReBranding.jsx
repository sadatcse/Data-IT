import React from 'react';
import { Link } from 'react-router-dom';

const ReBranding = () => {
  return (
    <div className="font-sans text-[#25252B] bg-white min-h-screen">

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6 text-sm">
        <ul className="flex flex-wrap gap-2 text-[#1A356A] opacity-70">
          <li><a href="#" className="hover:text-[#056FFD]">Home</a></li>
          <li>/</li>
          <li><a href="#" className="hover:text-[#056FFD]">Services</a></li>
          <li>/</li>
          <li className="font-semibold opacity-100">Rebranding</li>
        </ul>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A356A] leading-tight">
              Rebranding <br /> Services
            </h1>
            <p className="text-lg leading-relaxed">
              Data IT helps businesses reposition, refresh, and redefine their brand
              identity to stay relevant, competitive, and aligned with evolving market
              expectations.
            </p>
            <p className="leading-relaxed">
              Rebranding is not just a visual update. It is a strategic transformation
              that realigns your brand message, identity, and experience with your
              business goals and customer perception.
            </p>
            <p className="leading-relaxed">
              Whether you need a partial refresh or a complete brand overhaul, our
              rebranding solutions are carefully planned to protect brand equity while
              unlocking new growth opportunities.
            </p>
          </div>

  <div className="w-full md:w-1/2 flex justify-center">


    <img
      src="https://digitaldatait.s3.ap-southeast-1.amazonaws.com/Service/ReBranding-min.png"
      alt="WebDesign And Development"
      className="w-3/4 h-3/4 object-contain"
      loading="lazy"
    />


</div>
        </div>
      </section>

      {/* Rebranding Services */}
      <section className="bg-[#EFF0F6] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-10">
            What Our Rebranding Service Includes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Brand audit & performance analysis",
              "Market repositioning strategy",
              "Brand messaging & tone refinement",
              "Logo redesign & visual identity update",
              "Brand guideline redevelopment",
              "Website & digital asset refresh",
              "Internal & external brand alignment",
              "Rebranding launch strategy & support"
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border hover:border-[#056FFD] transition-all"
              >
                <p className="font-medium text-lg">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rebranding Process */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-12">
            Our Rebranding Process
          </h2>

          <ul className="space-y-6 max-w-3xl">
            {[
              "Brand assessment & stakeholder alignment",
              "Customer & market insight analysis",
              "Strategic repositioning & messaging",
              "Creative redesign & visual execution",
              "Brand documentation & training",
              "Launch, monitoring & optimization"
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
            Why Choose Data IT for Rebranding
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Strategic rebranding with minimal business risk",
              "Preservation of existing brand equity",
              "Market-driven and data-backed decisions",
              "Cross-platform brand consistency",
              "Experienced branding & digital teams",
              "End-to-end rebranding execution"
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
              Thinking About Rebranding Your Business?
            </h3>
            <p className="text-[#B1DAF8] mt-2">
              Let Data IT guide your brand transformation with confidence.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-[#056FFD] hover:bg-[#330FEE] transition-all px-10 h-14 rounded-lg font-semibold text-lg shadow-lg inline-flex items-center justify-center"
          >
            Start Rebranding
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ReBranding;
