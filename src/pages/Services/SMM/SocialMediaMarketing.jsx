import React from 'react';
import { Link } from 'react-router-dom';

const SocialMediaMarketing = () => {
  return (
    <div className="font-sans text-[#25252B] bg-white min-h-screen">

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6 text-sm">
        <ul className="flex flex-wrap gap-2 text-[#1A356A] opacity-70">
          <li><a href="#" className="hover:text-[#056FFD]">Home</a></li>
          <li>/</li>
          <li><a href="#" className="hover:text-[#056FFD]">Digital Marketing</a></li>
          <li>/</li>
          <li className="font-semibold opacity-100">Social Media Marketing</li>
        </ul>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A356A] leading-tight">
              Social Media Marketing <br /> That Drives Real Growth
            </h1>
            <p className="text-lg leading-relaxed">
              Data IT provides result-driven Social Media Marketing services designed
              to increase brand awareness, customer engagement, and measurable
              business growth across major social platforms.
            </p>
            <p className="leading-relaxed">
              We don’t believe in random posting. Every campaign is backed by strategy,
              analytics, audience research, and continuous optimization.
            </p>
            <p className="leading-relaxed">
              From startups to enterprises, we help businesses turn social media into a
              powerful revenue and branding channel.
            </p>
          </div>

  <div className="w-full md:w-1/2 flex justify-center">


    <img
      src="https://digitaldatait.s3.ap-southeast-1.amazonaws.com/Service/SocialMediaMarketing-min.jpeg"
      alt="WebDesign And Development"
      className="w-3/4 h-3/4 object-contain"
      loading="lazy"
    />


</div>
        </div>
      </section>

      {/* Platforms */}
      <section className="bg-[#EFF0F6] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-10">
            Platforms We Manage
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Facebook business page & ads management",
              "Instagram content & story marketing",
              "LinkedIn B2B brand & lead generation",
              "YouTube video promotion & growth",
              "Twitter (X) brand engagement",
              "Custom platform strategy based on audience"
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

      {/* Strategy */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-12">
            Our Social Media Strategy
          </h2>

          <ul className="space-y-6 max-w-3xl">
            {[
              "Audience research & buyer persona creation",
              "Content calendar & posting schedule",
              "Creative design & copywriting",
              "Hashtag & trend analysis",
              "Paid campaign planning & optimization",
              "Daily performance monitoring",
              "A/B testing for ads & creatives",
              "Monthly analytics & reporting"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-3 h-3 mt-2 rounded-full bg-[#056FFD]"></span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Paid Ads */}
      <section className="bg-[#CAE9FF] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-10 text-center">
            Paid Social Media Advertising
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Facebook & Instagram Ads",
              "Lead generation campaigns",
              "Website traffic & conversion ads",
              "Remarketing & retargeting ads",
              "Custom audience & lookalike targeting",
              "Budget optimization for maximum ROI"
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Data IT */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-10 text-center">
            Why Choose Data IT for Social Media Marketing
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Result-oriented marketing approach",
              "Creative + data-driven strategy",
              "Transparent reporting & analytics",
              "Industry-specific campaign planning",
              "Dedicated account management",
              "Scalable solutions for growth"
            ].map((reason, idx) => (
              <div key={idx} className="bg-[#EFF0F6] p-6 rounded-lg shadow-sm">
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
              Ready to Grow Your Brand on Social Media?
            </h3>
            <p className="text-[#B1DAF8] mt-2">
              Let Data IT create and manage high-performing social media campaigns for your business.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-[#056FFD] hover:bg-[#330FEE] transition-all px-10 h-14 rounded-lg font-semibold text-lg shadow-lg inline-flex items-center justify-center"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default SocialMediaMarketing;
