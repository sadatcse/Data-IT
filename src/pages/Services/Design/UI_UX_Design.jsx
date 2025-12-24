import React from 'react';
import { Link } from 'react-router-dom';

const UI_UX_Design = () => {
  return (
    <div className="font-sans text-[#25252B] bg-white min-h-screen">

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6 text-sm">
        <ul className="flex flex-wrap gap-2 text-[#1A356A] opacity-70">
          <li><a href="#" className="hover:text-[#056FFD]">Home</a></li>
          <li>/</li>
          <li><a href="#" className="hover:text-[#056FFD]">Services</a></li>
          <li>/</li>
          <li className="font-semibold opacity-100">UI/UX Design</li>
        </ul>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A356A] leading-tight">
              UI / UX Design <br /> Services
            </h1>
            <p className="text-lg leading-relaxed">
              Data IT designs intuitive, user-centered, and conversion-focused UI/UX
              experiences that help businesses engage users, improve usability, and
              maximize product performance.
            </p>
            <p className="leading-relaxed">
              Great design is not just about appearance—it is about how users interact
              with your product. Our UI/UX solutions focus on clarity, simplicity, and
              seamless user journeys.
            </p>
            <p className="leading-relaxed">
              From web platforms to mobile applications, we design interfaces that
              align business goals with user needs.
            </p>
          </div>

  <div className="w-full md:w-1/2 flex justify-center">


    <img
      src="https://digitaldatait.s3.ap-southeast-1.amazonaws.com/Service/UI_UX_Design-min.png"
      alt="WebDesign And Development"
      className="w-3/4 h-3/4 object-contain"
      loading="lazy"
    />


</div>
        </div>
      </section>

      {/* UI/UX Services */}
      <section className="bg-[#EFF0F6] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-10">
            Our UI / UX Design Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "User research & persona development",
              "Information architecture & user flows",
              "Wireframing & interactive prototyping",
              "UI design systems & visual guidelines",
              "Mobile & web interface design",
              "Usability testing & design validation",
              "Design handoff for development",
              "UX optimization & product improvement"
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

      {/* Design Process */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-12">
            Our UI / UX Design Process
          </h2>

          <ul className="space-y-6 max-w-3xl">
            {[
              "Product discovery & user research",
              "User journey mapping & UX strategy",
              "Wireframes & clickable prototypes",
              "Visual UI design & brand alignment",
              "User testing & feedback iteration",
              "Design delivery & ongoing UX support"
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
            Why Choose Data IT for UI / UX Design
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "User-first, business-driven design approach",
              "Experienced UI/UX designers",
              "Designs optimized for conversion & usability",
              "Scalable design systems for growth",
              "Seamless collaboration with developers",
              "Continuous UX improvement support"
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
              Ready to Design Better User Experiences?
            </h3>
            <p className="text-[#B1DAF8] mt-2">
              Let Data IT design interfaces your users will love.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-[#056FFD] hover:bg-[#330FEE] transition-all px-10 h-14 rounded-lg font-semibold text-lg shadow-lg inline-flex items-center justify-center"
          >
            Start UI / UX Design
          </Link>
        </div>
      </section>

    </div>
  );
};

export default UI_UX_Design;
