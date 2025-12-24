import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantManagementSystem = () => {
  return (
    <div className="font-sans text-[#25252B] bg-white min-h-screen">

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6 text-sm">
        <ul className="flex flex-wrap gap-2 text-[#1A356A] opacity-70">
          <li><a href="#" className="hover:text-[#056FFD]">Home</a></li>
          <li>/</li>
          <li><a href="#" className="hover:text-[#056FFD]">Software</a></li>
          <li>/</li>
          <li className="font-semibold opacity-100">Restaurant Management System</li>
        </ul>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A356A] leading-tight">
              AI-Powered <br /> Restaurant Management System
            </h1>
            <p className="text-lg leading-relaxed">
              Data IT’s Restaurant Management System is a complete digital solution
              designed to automate POS operations, kitchen workflow, inventory,
              accounting, staff management, and AI-driven business decisions.
            </p>
            <p className="leading-relaxed">
              Built for modern restaurants, cafés, and multi-branch food businesses,
              our system replaces outdated POS software with a smart, connected, and
              predictive platform.
            </p>
            <p className="leading-relaxed">
              From order to profit analysis, every operation is tracked, optimized,
              and improved using real-time data and AI insights.
            </p>
          </div>

  <div className="w-full md:w-1/2 flex justify-center">


    <img
      src="https://digitaldatait.s3.ap-southeast-1.amazonaws.com/Service/RestaurantManagementSystem.jpeg"
      alt="WebDesign And Development"
      className="w-3/4 h-3/4 object-contain"
      loading="lazy"
    />


</div>
        </div>
      </section>

      {/* POS & Operations */}
      <section className="bg-[#EFF0F6] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-10">
            POS & Daily Operations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Advanced POS system with fast billing",
              "Kitchen Display System (KDS)",
              "Menu-wise item deduction from inventory",
              "Expense tracking & cost control",
              "Real-time order & table management",
              "Staff shift & performance management",
              "Menu setup, pricing & availability control",
              "Multi-counter & multi-branch support"
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border hover:border-[#056FFD] transition-all">
                <p className="font-medium text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-12">
            AI-Powered Intelligence (2026 Ready)
          </h2>

          <ul className="space-y-6 max-w-3xl">
            {[
              "AI hot item suggestion system",
              "Daily sales forecast using machine learning",
              "AI Sales Advisor for revenue growth",
              "Menu optimizer based on profit & demand",
              "Customer review insights & sentiment analysis",
              "AI Business Chat for instant insights",
              "AI Purchase Advisor to reduce wastage"
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-3 h-3 mt-2 rounded-full bg-[#056FFD]"></span>
                <span className="text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Reports */}
      <section className="bg-[#CAE9FF] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-10 text-center">
            Advanced Reporting & Analytics
          </h2>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Daily Order Report",
              "Daily Sales Report",
              "Profit & Loss Report",
              "Custom Order Report",
              "Custom Product Sales Report",
              "Daily Counter Report",
              "User Activity Report"
            ].map((report, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="font-medium">{report}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients & Costing */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-12">
            Ingredients, Inventory & Costing
          </h2>

          <ul className="space-y-6 max-w-3xl">
            {[
              "Ingredients master management",
              "Average ingredient cost calculation",
              "Recipe-based ingredient mapping",
              "Menu costing & profit calculation",
              "Ingredient expense tracking",
              "Stock vs sales comparison analysis"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-3 h-3 mt-2 rounded-full bg-[#056FFD]"></span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Data IT */}
      <section className="bg-[#EFF0F6] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-10 text-center">
            Why Choose Data IT Restaurant System
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Built for real restaurant operations",
              "AI-driven decision making",
              "Accurate costing & wastage control",
              "Scalable for single & multi-branch",
              "Cloud-ready & secure architecture",
              "Ongoing support & continuous upgrades"
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
              Ready to Upgrade Your Restaurant Business?
            </h3>
            <p className="text-[#B1DAF8] mt-2">
              Let Data IT build a smart, AI-powered restaurant management solution for you.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-[#056FFD] hover:bg-[#330FEE] transition-all px-10 h-14 rounded-lg font-semibold text-lg shadow-lg inline-flex items-center justify-center"
          >
            Request Demo
          </Link>
        </div>
      </section>

    </div>
  );
};

export default RestaurantManagementSystem;
