import React from 'react';
import { Link } from 'react-router-dom';

const PersonalBranding = () => {
  return (
    <div className="font-sans text-[#25252B] bg-white min-h-screen">

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6 text-sm">
        <ul className="flex flex-wrap gap-2 text-[#1A356A] opacity-70">
          <li><a href="#" className="hover:text-[#056FFD]">Home</a></li>
          <li>/</li>
          <li><a href="#" className="hover:text-[#056FFD]">Services</a></li>
          <li>/</li>
          <li className="font-semibold opacity-100">Personal Branding</li>
        </ul>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A356A] leading-tight">
              Personal Branding <br /> Services
            </h1>
            <p className="text-lg leading-relaxed">
              Data IT helps professionals, founders, executives, and creators build
              strong personal brands that communicate authority, credibility, and
              long-term value in the digital space.
            </p>
            <p className="leading-relaxed">
              Personal branding is how people perceive you before they ever meet you.
              We shape your digital presence to reflect your expertise, values, and
              professional identity across platforms.
            </p>
            <p className="leading-relaxed">
              From positioning and messaging to content and visibility, our personal
              branding solutions are designed to help you stand out with clarity and
              confidence.
            </p>
          </div>

  <div className="w-full md:w-1/2 flex justify-center">


    <img
      src="https://digitaldatait.s3.ap-southeast-1.amazonaws.com/Service/PersonalBranding-min.png"
      alt="WebDesign And Development"
      className="w-3/4 h-3/4 object-contain"
      loading="lazy"
    />


</div>
        </div>
      </section>

      {/* Personal Branding Services */}
      <section className="bg-[#EFF0F6] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-10">
            What We Offer in Personal Branding
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Personal brand strategy & positioning",
              "Professional profile optimization",
              "Content strategy & storytelling",
              "Social media presence & growth",
              "Personal website & portfolio design",
              "Visual identity for personal brands",
              "Thought leadership & authority building",
              "Reputation & online presence management"
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

      {/* Branding Process */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-12">
            Our Personal Branding Process
          </h2>

          <ul className="space-y-6 max-w-3xl">
            {[
              "Personal discovery & goal alignment",
              "Audience & industry research",
              "Brand messaging & positioning framework",
              "Visual and content identity creation",
              "Platform setup & optimization",
              "Ongoing growth, monitoring & refinement"
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
            Why Choose Data IT for Personal Branding
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Tailored branding for individuals, not templates",
              "Professional storytelling & positioning",
              "Experience with founders & executives",
              "Platform-specific branding strategies",
              "Clear communication & measurable growth",
              "Long-term personal brand support"
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
              Ready to Build a Powerful Personal Brand?
            </h3>
            <p className="text-[#B1DAF8] mt-2">
              Let Data IT help you stand out with confidence and clarity.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-[#056FFD] hover:bg-[#330FEE] transition-all px-10 h-14 rounded-lg font-semibold text-lg shadow-lg inline-flex items-center justify-center"
          >
            Start Personal Branding
          </Link>
        </div>
      </section>

    </div>
  );
};

export default PersonalBranding;
