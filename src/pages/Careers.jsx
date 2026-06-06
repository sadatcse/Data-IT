import React, { useState } from 'react';
import SEO from '../components/SEO/SEO';
import Swal from 'sweetalert2';
import { Briefcase, MapPin, Clock, Star, Gift, CheckCircle, ChevronDown, Send } from 'lucide-react';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resumeLink: '',
    coverLetter: ''
  });

  const [activeJobIndex, setActiveJobIndex] = useState(null);

  const jobs = [
    {
      title: "Senior Frontend Engineer (React)",
      department: "Software Engineering",
      location: "Dhaka, BD (Hybrid)",
      type: "Full-Time",
      experience: "3-5 years",
      description: "We are looking for a Senior Frontend Developer to lead the development of complex React/Vite-based web applications, ensuring high performance, responsive layouts, and excellent user experience.",
      requirements: [
        "Strong proficiency in JavaScript/ES6+, React, Hooks, Context API, and state managers like Redux or Zustand.",
        "Deep understanding of HTML5, Tailwind CSS, DaisyUI, and responsive design systems.",
        "Experience with modern build tools like Vite, Webpack, and ESLint.",
        "Familiarity with clean architecture, performance optimization, and SEO best practices."
      ],
      responsibilities: [
        "Develop clean, modular, and maintainable React components.",
        "Collaborate with product managers and UI/UX designers to translate Figma designs into pixel-perfect code.",
        "Optimize web applications for maximum speed, compatibility, and responsiveness.",
        "Mentor junior and mid-level frontend developers."
      ]
    },
    {
      title: "Backend Engineer (Node.js)",
      department: "Software Engineering",
      location: "Dhaka, BD (Hybrid / Remote)",
      type: "Full-Time",
      experience: "2-4 years",
      description: "We are seeking a Backend Engineer with expertise in Node.js, Express, and databases (MongoDB/PostgreSQL) to build secure, scalable, and high-performance RESTful APIs.",
      requirements: [
        "Solid experience with Node.js, Express, and JavaScript/TypeScript.",
        "Strong knowledge of database design, querying, and optimization (MongoDB, Mongoose, PostgreSQL, SQL).",
        "Experience implementing JWT authentication, OAuth, and API security headers.",
        "Familiarity with cloud platforms (AWS, DigitalOcean) and Docker containerization is a plus."
      ],
      responsibilities: [
        "Design, build, and maintain robust and secure RESTful backend APIs.",
        "Optimize database queries and system performance for high-volume transactions.",
        "Integrate third-party services (payment gateways, EmailJS, SMS APIs).",
        "Participate in code reviews and architectural planning sessions."
      ]
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing & SEO",
      location: "Dhaka, BD (On-site)",
      type: "Full-Time",
      experience: "2+ years",
      description: "Join our marketing team to build, execute, and monitor digital campaigns, search engine optimization (SEO) plans, and social media marketing (SMM) strategies for international and local clients.",
      requirements: [
        "Proven experience in SEO, Social Media Marketing, and Paid Ad Campaigns (Google, Facebook, LinkedIn).",
        "Expertise in analytical tools (Google Analytics, Search Console, Ahrefs, SEMrush).",
        "Strong content writing, copywriting, and communication skills in English.",
        "Ability to build growth strategies and detailed weekly performance reports."
      ],
      responsibilities: [
        "Manage end-to-end SEO (On-page, Off-page, Local SEO) campaigns for clients.",
        "Design, launch, and monitor paid ads on social channels to hit conversion goals.",
        "Create, curate, and schedule highly engaging content for brand pages.",
        "Track client campaigns metrics and present actionable insights."
      ]
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleApplyClick = (jobTitle) => {
    setFormData({
      ...formData,
      position: jobTitle
    });
    const element = document.getElementById('apply-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API Submission
    Swal.fire({
      title: 'Application Received!',
      text: `Thank you, ${formData.name}. We have received your application for the ${formData.position} role. Our HR team will contact you soon.`,
      icon: 'success',
      confirmButtonColor: '#056FFD'
    });
    // Reset Form
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      resumeLink: '',
      coverLetter: ''
    });
  };

  return (
    <div className="font-sans text-[#25252B] bg-white min-h-screen">
      <SEO 
        title="Careers | Join Our Team - Data IT"
        description="Build your career at Data IT. We are hiring talented React frontend developers, Node backend developers, and marketing experts. Apply today to join our team in Dhaka."
        keywords="Careers Data IT, IT Jobs Bangladesh, Software Developer Jobs Dhaka, Hire React Developers, Node.js Backend Jobs, Digital Marketing Careers"
        url="/careers"
        siteName="Data IT"
        type="website"
      />

      {/* Hero Header */}
      <section className="relative bg-[#14223D] text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/50 via-gray-950/80 to-slate-950"></div>
        {/* Decorative Grid Patterns */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#056FFD]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <span className="bg-[#056FFD]/25 border border-[#056FFD]/50 text-[#60A5FA] text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
            Join Our Mission
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-6 leading-tight tracking-tight">
            Shape the Future <br className="hidden md:inline" /> of <span className="text-[#60A5FA]">Digital Innovation</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mt-6 font-normal leading-relaxed">
            At Data IT, we build custom solutions that empower businesses worldwide. We believe in autonomy, excellence, and constant growth.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a 
              href="#openings-section" 
              className="bg-[#056FFD] hover:bg-[#330FEE] text-white font-bold px-8 py-3.5 rounded-xl transition duration-300 shadow-lg"
            >
              Explore Openings
            </a>
            <a 
              href="#apply-form-section" 
              className="border border-gray-400 hover:bg-white/10 text-white font-bold px-8 py-3.5 rounded-xl transition duration-300"
            >
              General Application
            </a>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A356A]">Our Core Culture</h2>
            <p className="text-gray-600 mt-4 text-base">
              We strive to build a workspace that inspires people to experiment, innovate, and create high-impact software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg border border-gray-100 transition duration-300">
              <div className="p-3 bg-blue-50 text-blue-500 rounded-xl w-fit mb-6">
                <Star size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Ownership & Autonomy</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We trust our team. You have full ownership of your products and the creative freedom to deploy solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg border border-gray-100 transition duration-300">
              <div className="p-3 bg-emerald-50 text-emerald-500 rounded-xl w-fit mb-6">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Commitment to Quality</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We don't take shortcuts. We build production-ready systems that scale, keeping code quality and aesthetics at the core.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg border border-gray-100 transition duration-300">
              <div className="p-3 bg-purple-50 text-purple-500 rounded-xl w-fit mb-6">
                <Gift size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Continuous Learning</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Technology is constantly changing. We sponsor courses, encourage learning spikes, and foster continuous professional skill growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perks and Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A356A]">Perks & Benefits</h2>
            <p className="text-gray-600 mt-4">
              We invest in our people so they can perform at their best. Here is what we offer:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Competitive Salary", desc: "Industry-standard pay with performance reviews and increments." },
              { title: "Festival Bonuses", desc: "Two festival bonuses per year and festive celebration treats." },
              { title: "Flexible Work Hours", desc: "Enjoy flexibility with Core hours focus, supporting work-life balance." },
              { title: "Learning Allowance", desc: "Books, online certifications, and courses paid by the company." },
              { title: "Snacks & Premium Coffee", desc: "Unlimited premium coffee, fresh juices, and snacks in office." },
              { title: "Team Outings", desc: "Annual retreats, weekend getaways, and monthly team dinners." }
            ].map((perk, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl hover:bg-gray-50 transition duration-200">
                <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-sky-50 flex items-center justify-center text-sky-500 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{perk.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings Accordion */}
      <section id="openings-section" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A356A]">Current Job Openings</h2>
            <p className="text-gray-600 mt-4">
              Explore our current open roles and select the position you want to apply for.
            </p>
          </div>

          <div className="space-y-4">
            {jobs.map((job, idx) => {
              const isOpen = activeJobIndex === idx;
              return (
                <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-300">
                  {/* Header */}
                  <button 
                    onClick={() => setActiveJobIndex(isOpen ? null : idx)}
                    className="w-full text-left p-6 md:p-8 flex justify-between items-start md:items-center gap-4 hover:bg-gray-50 transition duration-200"
                  >
                    <div className="space-y-2">
                      <span className="text-xs font-semibold bg-[#EFF0F6] text-[#056FFD] px-2.5 py-1 rounded-md">
                        {job.department}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-gray-800">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 font-medium">
                        <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                        <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                        <span className="flex items-center gap-1"><Briefcase size={14} /> {job.experience}</span>
                      </div>
                    </div>
                    <div className={`p-2 rounded-full border transition duration-300 ${isOpen ? 'bg-sky-500 text-white border-sky-500' : 'text-gray-400 bg-white border-gray-200'}`}>
                      <ChevronDown size={20} className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </button>

                  {/* Body Details */}
                  {isOpen && (
                    <div className="px-6 pb-8 md:px-8 border-t border-gray-100 pt-6 space-y-6 animate-fadeIn">
                      <div>
                        <h4 className="font-bold text-[#1A356A] mb-2 text-sm uppercase tracking-wider">About the Role</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{job.description}</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#1A356A] mb-2 text-sm uppercase tracking-wider">Required Skills & Experience</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm leading-relaxed">
                          {job.requirements.map((req, rIdx) => (
                            <li key={rIdx}>{req}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#1A356A] mb-2 text-sm uppercase tracking-wider">Key Responsibilities</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm leading-relaxed">
                          {job.responsibilities.map((resp, rpIdx) => (
                            <li key={rpIdx}>{resp}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-gray-100 flex justify-end">
                        <button
                          onClick={() => handleApplyClick(job.title)}
                          className="bg-[#056FFD] hover:bg-[#330FEE] text-white font-bold px-6 py-2.5 rounded-lg text-sm shadow-md transition duration-200"
                        >
                          Apply For This Position
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form-section" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-2xl bg-gray-50 border border-gray-200 p-8 md:p-12 rounded-3xl shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A356A]">Join the Team</h2>
            <p className="text-gray-600 mt-2 text-sm">
              Submit the form below, and we'll evaluate your application within 3 business days.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Select Position*</label>
              <select
                name="position"
                required
                value={formData.position}
                onChange={handleInputChange}
                className="select select-bordered w-full border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-12 bg-white"
              >
                <option value="">-- Choose Position --</option>
                {jobs.map((job, i) => (
                  <option key={i} value={job.title}>{job.title}</option>
                ))}
                <option value="General Internship">General Internship (Tech/Marketing)</option>
                <option value="Unsolicited Application">General Application (Other)</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Full Name*</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input input-bordered w-full border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address*</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input input-bordered w-full border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number*</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+880 1700-000000"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input input-bordered w-full border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Resume URL Link*</label>
                <input
                  type="url"
                  name="resumeLink"
                  required
                  placeholder="Link to Google Drive / LinkedIn PDF"
                  value={formData.resumeLink}
                  onChange={handleInputChange}
                  className="input input-bordered w-full border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Cover Letter / Message*</label>
              <textarea
                name="coverLetter"
                required
                rows="4"
                placeholder="Briefly describe why you are a great fit for this role..."
                value={formData.coverLetter}
                onChange={handleInputChange}
                className="textarea textarea-bordered w-full border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white h-32"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#056FFD] hover:bg-[#330FEE] text-white font-bold py-3.5 px-6 rounded-xl transition duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              <Send size={18} /> Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Careers;