import React from 'react';
import { Link } from 'react-router-dom';

const VideoProduction = () => {
  return (
    <div className="font-sans text-[#25252B] bg-white min-h-screen">

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6 text-sm">
        <ul className="flex flex-wrap gap-2 text-[#1A356A] opacity-70">
          <li><a href="#" className="hover:text-[#056FFD]">Home</a></li>
          <li>/</li>
          <li><a href="#" className="hover:text-[#056FFD]">Services</a></li>
          <li>/</li>
          <li className="font-semibold opacity-100">Video Production</li>
        </ul>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A356A] leading-tight">
              Video Production <br /> Services
            </h1>
            <p className="text-lg leading-relaxed">
              Data IT delivers professional video production services that help brands
              communicate stories, promote products, and engage audiences across
              digital platforms with clarity and impact.
            </p>
            <p className="leading-relaxed">
              Video is one of the most powerful tools in modern marketing. Our team
              creates high-quality videos that strengthen brand identity, increase
              engagement, and drive conversions.
            </p>
            <p className="leading-relaxed">
              From concept development to final production, we manage the entire
              process to ensure your message is delivered professionally and
              effectively.
            </p>
          </div>

  <div className="w-full md:w-1/2 flex justify-center">


    <img
      src="https://digitaldatait.s3.ap-southeast-1.amazonaws.com/Service/VideoProduction-min.png"
      alt="WebDesign And Development"
      className="w-3/4 h-3/4 object-contain"
      loading="lazy"
    />


</div>
        </div>
      </section>

      {/* Video Services */}
      <section className="bg-[#EFF0F6] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-10">
            Our Video Production Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Corporate & brand videos",
              "Promotional & marketing videos",
              "Product demo & explainer videos",
              "Social media short-form videos",
              "Motion graphics & animations",
              "Event & documentary coverage",
              "Video editing & post-production",
              "YouTube & digital video optimization"
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

      {/* Production Process */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-12">
            Our Video Production Process
          </h2>

          <ul className="space-y-6 max-w-3xl">
            {[
              "Creative briefing & concept development",
              "Scriptwriting & storyboarding",
              "Video shooting & production planning",
              "Editing, animation & sound design",
              "Client review & revisions",
              "Final delivery & platform optimization"
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
            Why Choose Data IT for Video Production
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Professional storytelling & creative direction",
              "High-quality production standards",
              "Videos optimized for digital marketing",
              "Experienced creative & technical team",
              "Fast turnaround with quality assurance",
              "End-to-end video production support"
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
              Ready to Create Impactful Videos?
            </h3>
            <p className="text-[#B1DAF8] mt-2">
              Let Data IT bring your brand story to life through powerful video content.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-[#056FFD] hover:bg-[#330FEE] transition-all px-10 h-14 rounded-lg font-semibold text-lg shadow-lg inline-flex items-center justify-center"
          >
            Start Video Production
          </Link>
        </div>
      </section>

    </div>
  );
};

export default VideoProduction;
