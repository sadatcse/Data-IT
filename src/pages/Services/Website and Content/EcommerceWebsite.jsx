import React from 'react';
import { Link } from 'react-router-dom';

const EcommerceWebsite = () => {
  return (
    <div className="font-sans text-[#25252B] bg-white min-h-screen">

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6 text-sm">
        <ul className="flex flex-wrap gap-2 text-[#1A356A] opacity-70">
          <li><a href="#" className="hover:text-[#056FFD]">Home</a></li>
          <li>/</li>
          <li><a href="#" className="hover:text-[#056FFD]">Services</a></li>
          <li>/</li>
          <li className="font-semibold opacity-100">E-commerce Website Development</li>
        </ul>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A356A] leading-tight">
              E-commerce Website <br /> Development Services
            </h1>
            <p className="text-lg leading-relaxed">
              Data IT builds high-performance, conversion-focused e-commerce websites
              that help businesses sell more, manage operations efficiently, and scale
              confidently in competitive digital markets.
            </p>
            <p className="leading-relaxed">
              From product management and secure checkout to inventory, order tracking,
              and analytics—our e-commerce solutions are designed to deliver seamless
              customer experiences and complete business control.
            </p>
            <p className="leading-relaxed">
              Whether you are launching a new online store or upgrading an existing
              platform, we deliver fully customized e-commerce systems tailored to your
              brand, audience, and growth strategy.
            </p>
          </div>

    <div className="w-full md:w-1/2 flex justify-center">


    <img
      src="https://digitaldatait.s3.ap-southeast-1.amazonaws.com/Service/EcommerceWebsite-min.png"
      alt="WebDesign And Development"
      className="w-3/4 h-3/4 object-contain"
      loading="lazy"
    />


</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#EFF0F6] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-10">
            Powerful Features for Online Growth
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Custom product & category management",
              "Secure payment gateway integration",
              "Order, shipping & customer tracking",
              "Inventory & stock management",
              "Discounts, coupons & promotions",
              "SEO-optimized product pages",
              "Mobile-responsive shopping experience",
              "Admin dashboard with sales analytics"
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border hover:border-[#056FFD] transition-all"
              >
                <p className="font-medium text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-12">
            Our E-commerce Development Process
          </h2>

          <ul className="space-y-6 max-w-3xl">
            {[
              "Business & product strategy planning",
              "UX/UI design focused on conversion",
              "Custom e-commerce development",
              "Payment, shipping & API integrations",
              "Testing for performance & security",
              "Launch, training & ongoing support"
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
            Why Choose Data IT for E-commerce?
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "100% custom e-commerce solutions",
              "Conversion-focused UI & UX design",
              "Secure and scalable architecture",
              "SEO-friendly structure from day one",
              "Easy-to-manage admin panel",
              "Long-term technical support & growth"
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
              Ready to Launch Your Online Store?
            </h3>
            <p className="text-[#B1DAF8] mt-2">
              Let’s build an e-commerce platform that sells, scales, and succeeds.
            </p>
          </div>
          <Link
                      to="/contact">
          <button className="bg-[#056FFD] hover:bg-[#330FEE] transition-all px-10 h-14 rounded-lg font-semibold text-lg shadow-lg">
            Get a Free Consultation
          </button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default EcommerceWebsite;
