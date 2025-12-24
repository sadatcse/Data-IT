const AboutDataIT = () => {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wide">
          Your trusted partner in digital transformation
        </h2>
        <div className="h-1 w-16 mt-4 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* --- LEFT COLUMN: Image & Shape --- */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative mt-10 md:mt-0">
          
          {/* The Image Container */}
          <div className="relative z-10">
            <img 
              src="https://digitaldatait.s3.ap-southeast-1.amazonaws.com/about+chang.png" 
              alt="Data IT Team Member" 
              className="w-96 h-96 md:w-72 md:h-72 object-cover rounded-full shadow-lg"
            />
          </div>

          {/* The Blue Semi-Circle Shape */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[10%] w-[120%] max-w-[400px] h-48 bg-primary rounded-b-full -z-0"></div>
        </div>

        {/* --- RIGHT COLUMN: Content --- */}
        <div className="w-full md:w-1/2 text-left">
        
          <h2 className="text-5xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Building custom digital solutions for modern businesses
          </h2>
      
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            At Data IT, we understand that every business operates differently. That’s why we don’t believe in one-size-fits-all products. We design and develop fully customized software, web applications, and digital platforms that align perfectly with your business goals—helping you automate operations, gain control, and grow with confidence in the digital era.
          </p>

          <ul className="space-y-4">
            <ListItem text="Custom Web Design & Development with smart dashboards" />
            <ListItem text="Scalable E-Commerce Platforms for B2B and B2C businesses" />
            <ListItem text="Performance-driven Digital Marketing & Brand Growth solutions" />
          </ul>
        </div>

      </div>
    </section>
  );
};

// Helper component for the checkmark list items
const ListItem = ({ text }) => (
  <li className="flex items-start gap-3">
    <svg 
      className="w-6 h-6 text-primary flex-shrink-0 mt-1" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <span className="text-gray-700 text-base">{text}</span>
  </li>
);

export default AboutDataIT;
