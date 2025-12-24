import React from 'react';
import { Link } from 'react-router-dom';

const RiceMillManagementSystem = () => {
  return (
    <div className="font-sans text-[#25252B] bg-white min-h-screen">

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6 text-sm">
        <ul className="flex flex-wrap gap-2 text-[#1A356A] opacity-70">
          <li><a href="#" className="hover:text-[#056FFD]">Home</a></li>
          <li>/</li>
          <li><a href="#" className="hover:text-[#056FFD]">Software</a></li>
          <li>/</li>
          <li className="font-semibold opacity-100">Rice Mill Management System</li>
        </ul>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A356A] leading-tight">
              Rice Mill <br /> Management ERP System
            </h1>
            <p className="text-lg leading-relaxed">
              Data IT’s Rice Mill Management System is a powerful, industry-specific ERP
              designed for Bangladesh’s rice mills — including Chatal, Semi-Auto, and
              Auto Rice Mills.
            </p>
            <p className="leading-relaxed">
              This system digitizes the entire rice milling lifecycle — from paddy
              procurement and production to inventory, accounting, and sales —
              ensuring transparency, accuracy, and profitability.
            </p>
            <p className="leading-relaxed">
              Built with real mill operations in mind, it eliminates khata-based
              accounting, reduces loss, and provides real-time business insights.
            </p>
          </div>

   <div className="w-full md:w-1/2 flex justify-center">


    <img
      src="https://digitaldatait.s3.ap-southeast-1.amazonaws.com/Service/RiceMillManagementSystem-min.png"
      alt="WebDesign And Development"
      className="w-3/4 h-3/4 object-contain"
      loading="lazy"
    />


</div>
        </div>
      </section>

      {/* Procurement & Gate Control */}
      <section className="bg-[#EFF0F6] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-10">
            Paddy Procurement & Gate Control
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Gate entry & digital weighbridge integration",
              "Moisture content & refraction deduction system",
              "Supplier, farmer & aratdar management",
              "Advance (Dadan) & commission tracking",
              "Purchase bill & settlement management",
              "Vendor performance & quality history",
              "Multiple procurement channel support",
              "Government & private procurement handling"
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border hover:border-[#056FFD] transition-all">
                <p className="font-medium text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production & Milling */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-12">
            Production & Milling Operations
          </h2>

          <ul className="space-y-6 max-w-4xl">
            {[
              "Chatal process management (soaking, boiling, sun drying)",
              "Auto rice mill process tracking (dryer, husker, polisher)",
              "Batch-wise production & yield calculation",
              "Handling loss & shrinkage management",
              "Machine running hours & maintenance logs",
              "Broken rice, head rice & reject tracking",
              "Degree of milling (DOM) control",
              "Blending recipe & premium rice handling"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-3 h-3 mt-2 rounded-full bg-[#056FFD]"></span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Inventory & By-Products */}
      <section className="bg-[#CAE9FF] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-10 text-center">
            Inventory, By-Products & Costing
          </h2>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Raw paddy, WIP & finished rice inventory",
              "Rice bran (kura) FIFO & expiry alert system",
              "Husk (tush) sales & internal fuel usage",
              "Gunny bag (bosta) inventory tracking",
              "Warehouse, godown & stack management",
              "Stock aging & lot-wise tracking",
              "Cost per kg calculation (COGS)",
              "Stock vs sales comparison"
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales & Accounting */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-12">
            Sales, Distribution & Accounting
          </h2>

          <ul className="space-y-6 max-w-4xl">
            {[
              "Sales invoice & delivery order (DO) system",
              "Customer credit limit & outstanding control",
              "Truck challan & gate exit management",
              "Double-entry accounting system",
              "Aratdar ledger & commission settlement",
              "Real-time profit & loss reporting",
              "Batch-wise cost & margin analysis",
              "Cash, bank & expense management"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-3 h-3 mt-2 rounded-full bg-[#056FFD]"></span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HR & Payroll */}
      <section className="bg-[#EFF0F6] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-10 text-center">
            HR, Labor & Payroll Management
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Piece-rate labor payroll (chatal system)",
              "Labor gang & sardar management",
              "Staff attendance & salary structure",
              "Shift-based workforce tracking",
              "Role-based user access control",
              "Activity logs & audit trail"
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Data IT */}
      <section className="bg-[#CAE9FF] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-10 text-center">
            Why Choose Data IT Rice Mill ERP
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Designed specifically for Bangladesh rice mills",
              "Supports chatal, semi-auto & auto mills",
              "Accurate yield & loss control",
              "Handles aratdar & dadan complexity",
              "Scalable, secure & cloud-ready",
              "On-site training & long-term support"
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
              Ready to Digitize Your Rice Mill?
            </h3>
            <p className="text-[#B1DAF8] mt-2">
              Let Data IT implement a complete rice mill ERP tailored to your operation.
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

export default RiceMillManagementSystem;
