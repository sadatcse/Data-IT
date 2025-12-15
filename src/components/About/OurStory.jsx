import React from 'react';

// The Fake JSON Data
const Data = [
  {

    image: "https://www.ebl.com.bd/assets/aboutus/directors/Showkat_Ali_Chowdhury.webp"
  },
  {

    image: "https://www.ebl.com.bd/assets/aboutus/directors/Anis_Ahmed.webp"
  },
  {

    image: "https://www.ebl.com.bd/assets/aboutus/directors/Salina-Ali.webp"
  },
  {

    image: "https://www.ebl.com.bd/assets/aboutus/directors/K_J_S_Banu.webp"
  }
];

const OurStory = () => {
  return (
    <section className="w-full py-20 px-6 bg-[#fdfdfd]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-16">
        
        {/* --- LEFT COLUMN: Image Collage --- */}
        {/* We use a grid with 2 columns to create the scattered masonry look */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6 relative">
          
          {/* Column 1: Shifted slightly up */}
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
               <img 
                 src={Data[0].image} 
                 alt={Data[0].name} 
                 className="w-full h-48 object-cover"
               />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
               <img 
                 src={Data[1].image} 
                 alt={Data[1].name} 
                 className="w-full h-64 object-cover"
               />
            </div>
          </div>

          {/* Column 2: Shifted down (marginTop) to create the offset effect */}
          <div className="flex flex-col gap-6 mt-12">
            <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
               <img 
                 src={Data[2].image} 
                 alt={Data[2].name} 
                 className="w-full h-64 object-cover"
               />
            </div>
            {/* The small bottom image */}
            <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
               <img 
                 src={Data[3].image} 
                 alt={Data[3].name} 
                 className="w-full h-40 object-cover"
               />
            </div>
          </div>

        </div>

        {/* --- RIGHT COLUMN: Text Content --- */}
        <div className="w-full lg:w-1/2 pt-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Our Story
          </h2>
          
          <div className="text-gray-600 space-y-6 text-lg leading-relaxed">
            <p>
              Data IT started as a visionary project in 2024 to solve a critical problem 
              our founders were experiencing — the lack of truly customized digital 
              solutions for growing businesses. What began as a small initiative 
              quickly gained traction, evolving into a full-service technology partner 
              serving clients across industries.
            </p>
            
            <p>
              The team was initially just a few passionate developers working on 
              projects they believed in. Steadily, we grew into a dedicated workforce 
              committed to transparency and excellence. Today, we are proud to offer 
              tailored software that helps organizations take on any challenge.
            </p>

            <p>
              All that to say, we are a product-led company built to help our customers 
              get off the ground and grow. Our team is an optimistic and gratitude-filled 
              group of experts dedicated to creating products our customers will love.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurStory;