const OurStory = () => {
  const storyImage = "https://digitaldatait.s3.ap-southeast-1.amazonaws.com/Our+Story.jpeg";

  return (
    <section className="w-full py-20 px-6 bg-[#fdfdfd]">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wide">
          Our Story
        </h2>
        <div className="h-1 w-16 bg-primary mt-4 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">
        
        {/* --- LEFT COLUMN: Single Image --- */}
        <div className="w-full lg:w-1/2">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img 
              src={storyImage} 
              alt="Our Story - Team collaboration" 
              className="w-full h-auto lg:h-full max-h-[650px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* --- RIGHT COLUMN: Text Content --- */}
        <div className="w-full lg:w-1/2 lg:pt-4">
          <div className="text-gray-600 space-y-6 text-lg leading-relaxed">
            
            <p>
              Data IT began as a visionary initiative in 2024, driven by a real challenge 
              our founders faced—the absence of truly customized digital solutions for 
              growing businesses. What started as a small idea quickly gained momentum, 
              evolving into a full-service technology partner serving clients across 
              multiple industries.
            </p>
            
            <p>
              In the beginning, our team consisted of a few passionate developers working 
              on projects they genuinely believed in. Over time, we grew into a dedicated 
              workforce built on transparency, trust, and technical excellence. Today, 
              we proudly deliver tailored software solutions that empower organizations 
              to overcome complex challenges.
            </p>

            <p>
              At our core, we are a product-led company focused on helping businesses get 
              off the ground and scale with confidence. Our team is an optimistic, 
              purpose-driven group of experts committed to building products our customers 
              truly love and rely on.
            </p>

            <p>
              We believe in long-term partnerships rather than short-term projects, 
              ensuring every solution we build grows alongside our clients’ ambitions. 
              Innovation guides our process, but real-world business impact defines our 
              success. At Data IT, our greatest achievement is seeing our customers move 
              forward with clarity, control, and confidence.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default OurStory;
