import React from 'react';
import { Link } from 'react-router-dom';

const SEO_Local = () => {
  return (
    <div className="font-sans text-[#25252B] bg-white min-h-screen">

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6 text-sm">
        <ul className="flex flex-wrap gap-2 text-[#1A356A] opacity-70">
          <li><a href="#" className="hover:text-[#056FFD]">Home</a></li>
          <li>/</li>
          <li><a href="#" className="hover:text-[#056FFD]">Services</a></li>
          <li>/</li>
          <li className="font-semibold opacity-100">Local SEO</li>
        </ul>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A356A] leading-tight">
              Local SEO <br /> Services
            </h1>
            <p className="text-lg leading-relaxed">
              Data IT helps local businesses dominate search results in their target
              locations by increasing visibility on Google Search, Google Maps, and
              local discovery platforms.
            </p>
            <p className="leading-relaxed">
              Local SEO ensures your business appears when potential customers search
              for products or services near them. It is one of the most effective ways
              to generate high-intent leads.
            </p>
            <p className="leading-relaxed">
              Our local SEO strategies are designed to bring real customers to your
              business—online and offline.
            </p>
          </div>

  <div className="w-full md:w-1/2 flex justify-center">


    <img
      src="https://digitaldatait.s3.ap-southeast-1.amazonaws.com/Service/SEO_Local-min.png"
      alt="WebDesign And Development"
      className="w-3/4 h-3/4 object-contain"
      loading="lazy"
    />


</div>
        </div>
      </section>

      {/* Local SEO Services */}
      <section className="bg-[#EFF0F6] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-10">
            Our Local SEO Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Local SEO audit & strategy",
              "Google Business Profile optimization",
              "Local keyword research & targeting",
              "NAP consistency & citation management",
              "On-page local SEO optimization",
              "Local content & landing pages",
              "Review generation & reputation management",
              "Local performance tracking & reporting"
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

      {/* Local SEO Process */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-12">
            Our Local SEO Process
          </h2>

          <ul className="space-y-6 max-w-3xl">
            {[
              "Local market & competitor analysis",
              "Google Business Profile setup & optimization",
              "Location-based keyword mapping",
              "Website & local landing page optimization",
              "Citation building & review strategy",
              "Monitoring, reporting & continuous optimization"
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
            Why Choose Data IT for Local SEO
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Proven local SEO strategies",
              "Focus on calls, visits & real leads",
              "Deep understanding of local search behavior",
              "Transparent reporting & KPIs",
              "Ethical, white-hat SEO practices",
              "Long-term local growth support"
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
              Want More Local Customers?
            </h3>
            <p className="text-[#B1DAF8] mt-2">
              Let Data IT put your business on top of local search results.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-[#056FFD] hover:bg-[#330FEE] transition-all px-10 h-14 rounded-lg font-semibold text-lg shadow-lg inline-flex items-center justify-center"
          >
            Start Local SEO
          </Link>
        </div>
      </section>

    </div>
  );
};

export default SEO_Local;
