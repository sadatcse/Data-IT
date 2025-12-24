import React from 'react';
import { Link } from 'react-router-dom';

const PRAgency = () => {
  return (
    <div className="font-sans text-[#25252B] bg-white min-h-screen">

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6 text-sm">
        <ul className="flex flex-wrap gap-2 text-[#1A356A] opacity-70">
          <li><a href="#" className="hover:text-[#056FFD]">Home</a></li>
          <li>/</li>
          <li><a href="#" className="hover:text-[#056FFD]">Services</a></li>
          <li>/</li>
          <li className="font-semibold opacity-100">PR Agency</li>
        </ul>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A356A] leading-tight">
              PR Agency <br /> & Brand Reputation Services
            </h1>
            <p className="text-lg leading-relaxed">
              Data IT provides strategic public relations services to help businesses,
              founders, and brands build credibility, manage reputation, and maintain
              a strong public image across digital and traditional media channels.
            </p>
            <p className="leading-relaxed">
              Public relations is about trust, visibility, and influence. Our PR
              strategies ensure your message reaches the right audience with clarity
              and authority.
            </p>
            <p className="leading-relaxed">
              From media coverage to crisis management, we help protect and elevate
              your brand reputation in competitive markets.
            </p>
          </div>

    <div className="w-full md:w-1/2 flex justify-center">


    <img
      src="https://digitaldatait.s3.ap-southeast-1.amazonaws.com/Service/PRAgency-min.png"
      alt="WebDesign And Development"
      className="w-3/4 h-3/4 object-contain"
      loading="lazy"
    />


</div>
        </div>
      </section>

      {/* PR Services */}
      <section className="bg-[#EFF0F6] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-10">
            Our Public Relations Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "PR strategy & brand positioning",
              "Media relations & press coverage",
              "Press release writing & distribution",
              "Online reputation management",
              "Crisis communication management",
              "Founder & executive PR",
              "Brand storytelling & thought leadership",
              "PR analytics & performance reporting"
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

      {/* PR Process */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-12">
            Our PR Process
          </h2>

          <ul className="space-y-6 max-w-3xl">
            {[
              "Brand & reputation assessment",
              "Audience & media mapping",
              "Message development & storytelling",
              "Media outreach & publication placement",
              "Monitoring & sentiment analysis",
              "Reporting & reputation optimization"
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
            Why Choose Data IT as Your PR Partner
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Strategic, reputation-focused PR approach",
              "Strong media & digital outreach network",
              "Ethical and transparent PR practices",
              "Experience with corporate & startup brands",
              "Data-driven reporting & insights",
              "Long-term brand reputation management"
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
              Need Professional PR & Reputation Management?
            </h3>
            <p className="text-[#B1DAF8] mt-2">
              Let Data IT protect and grow your brand reputation.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-[#056FFD] hover:bg-[#330FEE] transition-all px-10 h-14 rounded-lg font-semibold text-lg shadow-lg inline-flex items-center justify-center"
          >
            Get PR Consultation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default PRAgency;
