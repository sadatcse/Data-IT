import React from 'react';
import { Link } from 'react-router-dom';

const SEO_Ecommerce = () => {
  return (
    <div className="font-sans text-[#25252B] bg-white min-h-screen">

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6 text-sm">
        <ul className="flex flex-wrap gap-2 text-[#1A356A] opacity-70">
          <li><a href="#" className="hover:text-[#056FFD]">Home</a></li>
          <li>/</li>
          <li><a href="#" className="hover:text-[#056FFD]">Services</a></li>
          <li>/</li>
          <li className="font-semibold opacity-100">E-commerce SEO</li>
        </ul>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A356A] leading-tight">
              E-commerce SEO <br /> Services
            </h1>
            <p className="text-lg leading-relaxed">
              Data IT provides data-driven e-commerce SEO services designed to increase
              product visibility, attract high-intent buyers, and drive sustainable
              online sales growth.
            </p>
            <p className="leading-relaxed">
              Ranking an e-commerce website is more complex than traditional SEO.
              It requires technical optimization, structured data, category-level
              strategy, and continuous performance tracking.
            </p>
            <p className="leading-relaxed">
              Our e-commerce SEO solutions are built to improve search rankings,
              product discovery, conversion rate, and long-term revenue.
            </p>
          </div>

  <div className="w-full md:w-1/2 flex justify-center">


    <img
      src="https://digitaldatait.s3.ap-southeast-1.amazonaws.com/Service/SEO_Ecommerce-min.png"
      alt="WebDesign And Development"
      className="w-3/4 h-3/4 object-contain"
      loading="lazy"
    />


</div>
        </div>
      </section>

      {/* SEO Services */}
      <section className="bg-[#EFF0F6] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-10">
            Our E-commerce SEO Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "E-commerce SEO audit & strategy",
              "Product & category keyword research",
              "On-page product optimization",
              "Technical SEO for e-commerce platforms",
              "Site speed & Core Web Vitals optimization",
              "Structured data & schema implementation",
              "Content optimization for product pages",
              "Conversion-focused SEO improvements"
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

      {/* SEO Process */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-12">
            Our E-commerce SEO Process
          </h2>

          <ul className="space-y-6 max-w-3xl">
            {[
              "E-commerce site audit & competitor analysis",
              "Keyword mapping for products & categories",
              "Technical fixes & performance optimization",
              "Product content & metadata optimization",
              "Authority building & internal linking",
              "Tracking, reporting & continuous optimization"
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
            Why Choose Data IT for E-commerce SEO
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "SEO strategies built specifically for online stores",
              "Focus on revenue, not just traffic",
              "Deep understanding of e-commerce platforms",
              "Technical & content SEO expertise",
              "Transparent reporting & KPI tracking",
              "Long-term SEO growth partnership"
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
              Want More Sales from Organic Search?
            </h3>
            <p className="text-[#B1DAF8] mt-2">
              Let Data IT grow your e-commerce revenue with proven SEO strategies.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-[#056FFD] hover:bg-[#330FEE] transition-all px-10 h-14 rounded-lg font-semibold text-lg shadow-lg inline-flex items-center justify-center"
          >
            Start E-commerce SEO
          </Link>
        </div>
      </section>

    </div>
  );
};

export default SEO_Ecommerce;
