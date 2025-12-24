import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Youtube, 
  BarChart, 
  Mail, 
  Code, 
  PenTool, 
  Search, 
  MousePointer, 
  FileText, 
  Smartphone,
  ChevronDown
} from 'lucide-react';

const SocialMediaPage = () => {
  // Brand Colors mapped to arbitrary Tailwind values for strict adherence
  const colors = {
    white: 'bg-white',
    grayLight: 'bg-[#EFF0F6]',
    blueSoft: 'bg-[#B1DAF8]',
    blueSoft2: 'bg-[#CAE9FF]',
    blueMain: 'text-[#056FFD]',
    bgBlueMain: 'bg-[#056FFD]',
    blueStrong: 'hover:bg-[#330FEE]',
    navyDark: 'bg-[#14223D]',
    textNavy: 'text-[#1A356A]',
    textGrayDark: 'text-[#25252B]',
    borderBlueMain: 'border-[#056FFD]',
  };

  return (
    <div className={`font-sans ${colors.textGrayDark} bg-white min-h-screen`}>
      
      {/* --- Breadcrumbs --- */}
      <div className="container mx-auto px-4 py-6 text-sm">
        <div className="breadcrumbs">
          <ul className="text-[#1A356A] opacity-70">
            <li><a href="#" className="hover:text-[#056FFD] transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-[#056FFD] transition-colors">Social Media</a></li>
            <li><span className="font-semibold text-[#1A356A] opacity-100">Social Media Management</span></li>
          </ul>
        </div>
      </div>

      {/* --- Section 1: Hero / Intro --- */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          {/* Left: Illustration Placeholder (Brand Compliant) */}
          <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
            <div className={`relative w-full max-w-md h-80 ${colors.blueSoft2} rounded-xl flex items-center justify-center border-2 border-dashed border-white shadow-md`}>
              <span className={`${colors.textNavy} font-semibold text-center z-10`}>
                [Corporate Imagery]
                <br/>
                <span className="text-sm font-normal opacity-80">Team Collaboration / Office</span>
              </span>
              {/* Brand Abstract Shapes */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#B1DAF8] rounded-full opacity-40 blur-2xl"></div>
              <div className="absolute bottom-6 right-6 w-32 h-32 bg-[#056FFD] rounded-full opacity-10 blur-2xl"></div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2 space-y-6 order-1 md:order-2">
            <h1 className={`text-4xl md:text-5xl font-bold ${colors.textNavy} leading-tight`}>
              Social Media Management in <br />
              <span className={colors.blueMain}>Dhaka, Bangladesh</span>
            </h1>
            
            <h2 className={`text-xl font-semibold ${colors.textNavy}`}>'Social Media Management Services'</h2>
            
            <p className="leading-relaxed">
              Social media management is the process of creating and managing your online interactions and content across social media platforms such as Facebook, Instagram, Twitter, YouTube, LinkedIn, and many more.
            </p>
            
            <p className="leading-relaxed">
              It helps your business achieve better results as social media management distributes your brand across social platforms that <span className={`font-semibold ${colors.textNavy}`}>people around the globe are familiar with.</span>
            </p>
            
            <p className="leading-relaxed">
              Social media management is more than just posting updates on your business social profile. It includes running campaigns in the means of engaging with your target audience and expanding your reach and visibility in the public eye.
            </p>

            <p className={`text-sm opacity-75 pt-2 italic`}>
              To do so Data IT provides expert Social Media Management Services. Below is a list of things we can do for you.
            </p>
          </div>
        </div>
      </section>

      {/* --- Section 2: Platform Selection (Gray Light Background) --- */}
      <section className={`${colors.grayLight} py-20`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            
            {/* Right: Illustration Placeholder */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className={`relative w-full max-w-md h-80 bg-white rounded-xl shadow-md flex items-center justify-center border border-[#CAE9FF]`}>
                 <span className={`${colors.blueMain} font-semibold text-center`}>
                  [Illustration: Analytics & Growth]
                </span>
              </div>
            </div>

            {/* Left: Content */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className={`text-3xl font-bold ${colors.textNavy}`}>
                Selecting the Right Social Media Platform
              </h2>
              
              <p className="leading-relaxed">
                Before you put together a good strategy that allows for a strong base of followers and brand awareness you need to consider which social media platforms are for your business.
              </p>
              
              <p className="leading-relaxed">
                To do so we provide Social Media Management on different platforms according to your needs.
              </p>

              <p className={`font-semibold ${colors.textNavy}`}>Commonly, we provide services on platforms such as:</p>

              {/* Strict Monochrome Icon List */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {[
                  { name: 'Facebook', icon: <Facebook size={20} /> },
                  { name: 'Instagram', icon: <Instagram size={20} /> },
                  { name: 'LinkedIn', icon: <Linkedin size={20} /> },
                  { name: 'Twitter', icon: <Twitter size={20} /> },
                  { name: 'Youtube', icon: <Youtube size={20} /> },
                ].map((platform) => (
                  <li key={platform.name} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-transparent hover:border-[#056FFD] transition-all">
                    <span className={colors.blueMain}>{platform.icon}</span>
                    <span className="font-medium">{platform.name}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-sm opacity-60 mt-4">
                * We can manage other specialized platforms upon request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Methodology (White Background) --- */}
      <section className="bg-white py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-16">
            
            {/* Left Column: Process List */}
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className={`text-3xl md:text-4xl font-bold ${colors.textNavy}`}>
                How Do We Work for You?
              </h2>
              
              <ul className="space-y-5">
                {[
                  "Set meaningful social marketing goals",
                  "Research your target audience",
                  "Establish your most important metrics",
                  "Analyze your competition",
                  "Create and curate engaging content",
                  "Publish content with all best practices",
                  "Promote content",
                  "Analyze social media marketing efforts"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    {/* Custom Bullet: Blue Main */}
                    <div className={`mt-1.5 w-3 h-3 min-w-[12px] rounded-full ${colors.bgBlueMain} group-hover:scale-110 transition-transform`}></div>
                    <span className="text-lg leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Radial Diagram (Brand Colors Only) */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-[360px] h-[360px] md:w-[450px] md:h-[450px] flex items-center justify-center">
                
                {/* Dashed Ring */}
                <svg className="absolute w-full h-full text-[#CAE9FF] animate-[spin_60s_linear_infinite]">
                  <circle cx="50%" cy="50%" r="35%" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
                </svg>

                {/* Center Core */}
                <div className={`relative z-10 w-36 h-36 rounded-full bg-white border-4 ${colors.borderBlueMain} flex flex-col items-center justify-center shadow-lg text-center p-4`}>
                  <span className={`${colors.textNavy} font-bold text-lg leading-tight`}>DIGITAL<br/>MARKETING</span>
                </div>

                {/* Nodes: Strictly Monochrome Icons */}
                {[
                  { label: "ANALYTICS", pos: "top-0 left-1/2 -translate-x-1/2", icon: <BarChart /> },
                  { label: "EMAIL", pos: "top-[15%] right-[15%]", icon: <Mail /> },
                  { label: "WEB DEV", pos: "top-1/2 -right-4 -translate-y-1/2", icon: <Code /> },
                  { label: "BRANDING", pos: "bottom-[15%] right-[15%]", icon: <PenTool /> },
                  { label: "SEO", pos: "bottom-0 left-1/2 -translate-x-1/2", icon: <Search /> },
                  { label: "PPC", pos: "bottom-[15%] left-[15%]", icon: <MousePointer /> },
                  { label: "CONTENT", pos: "top-1/2 -left-4 -translate-y-1/2", icon: <FileText /> },
                  { label: "SOCIAL", pos: "top-[15%] left-[15%]", icon: <Smartphone /> }
                ].map((node, i) => (
                  <div key={i} className={`absolute ${node.pos} flex flex-col items-center group cursor-default`}>
                    <div className={`w-14 h-14 rounded-full bg-white border-2 border-[#EFF0F6] ${colors.blueMain} flex items-center justify-center shadow-md group-hover:border-[#056FFD] group-hover:text-[#056FFD] transition-all duration-300 z-20`}>
                      {React.cloneElement(node.icon, { size: 24 })}
                    </div>
                    <span className={`text-[11px] font-bold ${colors.textNavy} mt-2 uppercase tracking-wide bg-white px-1`}>{node.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Info Card: Brand Accents */}
          <div className="relative max-w-5xl mx-auto mt-12">
            <div className="bg-white rounded-xl shadow-md p-8 md:p-12 relative z-10 border border-[#EFF0F6]">
              <p className="text-center leading-relaxed text-[#1A356A] font-medium">
                We begin by identifying the optimal social media platform for your specific brand. For B2B enterprises, we leverage LinkedIn for corporate engagement; for B2C brands, we utilize Facebook, Twitter, and Instagram to maximize consumer interaction and audience growth.
              </p>
            </div>
            {/* Decorative Corner: Blue Main */}
            <div className="absolute -bottom-2 -left-2 w-16 h-16 border-l-[8px] border-b-[8px] border-[#056FFD] rounded-bl-xl z-0"></div>
            {/* Decorative Corner: Navy */}
            <div className="absolute -top-2 -right-2 w-16 h-16 border-t-[8px] border-r-[8px] border-[#1A356A] rounded-tr-xl z-0"></div>
          </div>
        </div>
      </section>

      {/* --- Section 4: FAQ (Blue Soft 2 Background) --- */}
      <section className={`${colors.blueSoft2} py-20`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold ${colors.textNavy} text-center mb-12`}>
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* FAQ Item 1 (Open Style) */}
            <div className="collapse collapse-arrow bg-white rounded-xl shadow-sm">
              <input type="radio" name="my-accordion-2" defaultChecked /> 
              <div className={`collapse-title text-lg font-semibold ${colors.textNavy}`}>
                Give me a little understanding of digital marketing?
              </div>
              <div className="collapse-content border-t border-[#EFF0F6]">
                <p className="pt-4 leading-relaxed">
                  Digital marketing is the collective effort of business development, marketing, and technology teams utilizing digital channels, devices, and online funnels to communicate with prospective audiences efficiently.
                </p>
              </div>
            </div>

            {/* Other FAQ Items */}
            {[
              "Advantages of digital marketing over traditional marketing",
              "What are the common categories of digital marketing?",
              "What exactly does a digital marketer do?",
              "Can I do my own digital marketing?",
              "Working with Agency vs. Hiring In-house?"
            ].map((question, idx) => (
              <div key={idx} className="collapse collapse-arrow bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <input type="radio" name="my-accordion-2" /> 
                <div className={`collapse-title text-lg font-medium ${colors.textNavy}`}>
                  {question}
                </div>
                <div className="collapse-content border-t border-[#EFF0F6]">
                  <p className="pt-4">Contact our team for a detailed breakdown of this topic.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 5: Footer / CTA (Navy Dark) --- */}
      <section className={`${colors.navyDark} text-white py-16 mt-0`}>
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-3xl font-bold tracking-tight">Thrive Growth Insider</h3>
            <p className="text-[#B1DAF8] opacity-90 text-lg font-light">
              Join the business club (1k+ members) for monthly insights.
            </p>
          </div>
          
          <button className={`btn border-none ${colors.bgBlueMain} text-white font-semibold px-10 h-14 rounded-lg capitalize text-lg hover:bg-[#330FEE] shadow-lg`}>
            Get a Free Consultation
          </button>
        </div>
      </section>

    </div>
  );
};

export default SocialMediaPage;