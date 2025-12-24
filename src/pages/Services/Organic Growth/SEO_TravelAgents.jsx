import React from 'react';
import { Link } from 'react-router-dom';

const SEO_TravelAgents = () => {
  return (
    <div className="font-sans text-[#25252B] bg-white min-h-screen">

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6 text-sm">
        <ul className="flex flex-wrap gap-2 text-[#1A356A] opacity-70">
          <li><a href="#" className="hover:text-[#056FFD]">Home</a></li>
          <li>/</li>
          <li><a href="#" className="hover:text-[#056FFD]">Services</a></li>
          <li>/</li>
          <li className="font-semibold opacity-100">Travel Agency SEO</li>
        </ul>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A356A] leading-tight">
              SEO Services for <br /> Travel Agencies
            </h1>
            <p className="text-lg leading-relaxed">
              Data IT provides specialized SEO services for travel agencies, tour
              operators, and travel service providers to increase online visibility,
              booking inquiries, and international reach.
            </p>
            <p className="leading-relaxed">
              The travel industry is highly competitive and seasonal. Ranking requires
              destination-based SEO, service-focused content, and local plus global
              search optimization.
            </p>
            <p className="leading-relaxed">
              Our travel agency SEO strategies help you attract high-intent travelers,
              generate booking leads, and grow your brand authority online.
            </p>
          </div>

  <div className="w-full md:w-1/2 flex justify-center">


    <img
      src="https://digitaldatait.s3.ap-southeast-1.amazonaws.com/Service/SEO_TravelAgents-min.jpeg"
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
            Our Travel Agency SEO Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Travel website SEO audit & strategy",
              "Destination-based keyword research",
              "Tour & package page optimization",
              "Local SEO for travel agencies",
              "International SEO & geo-targeting",
              "Technical SEO & site performance",
              "Content strategy for travel blogs",
              "Lead & booking conversion optimization"
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
            Our Travel SEO Process
          </h2>

          <ul className="space-y-6 max-w-3xl">
            {[
              "Market & competitor analysis in travel niche",
              "Keyword targeting for destinations & services",
              "Technical SEO & website optimization",
              "Travel-focused content & page optimization",
              "Authority building & backlink strategy",
              "Performance tracking & booking growth optimization"
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
            Why Choose Data IT for Travel Agency SEO
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Travel industry SEO expertise",
              "Focus on bookings & inquiries",
              "Local and international SEO strategies",
              "Seasonal & destination-based optimization",
              "Transparent reporting & growth tracking",
              "Long-term SEO partnership"
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
              Want More Travel Bookings Online?
            </h3>
            <p className="text-[#B1DAF8] mt-2">
              Let Data IT grow your travel business with proven SEO strategies.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-[#056FFD] hover:bg-[#330FEE] transition-all px-10 h-14 rounded-lg font-semibold text-lg shadow-lg inline-flex items-center justify-center"
          >
            Start Travel SEO
          </Link>
        </div>
      </section>

    </div>
  );
};

export default SEO_TravelAgents;
