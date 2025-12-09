import React from 'react';
import Slider from 'react-slick';
import clientLogos from '../../assets/client'; // auto-imports all PNGs

const Client = () => {
    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 5 } },
            { breakpoint: 600, settings: { slidesToShow: 3 } }
        ]
    };

    return (
        <div className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                        Trusted By Fast-Moving Tech Teams
                    </h2>
                    <h3 className="mt-2 text-xl font-medium text-gray-500 dark:text-gray-400">
                        From Startups to Global Enterprises
                    </h3>
                </div>

                <div className="mx-auto max-w-7xl">
                    <Slider {...sliderSettings} className="logo-strip">
                        {clientLogos.map((logo, index) => (
                            <div key={index} className="px-4 py-2 outline-none">
                                <div className="flex justify-center items-center h-full">
                                    <img
                                        src={logo}
                                        alt={`Client Logo ${index + 1}`}
                                        className="h-12 sm:h-14 w-auto object-contain p-2 
                                                   filter grayscale opacity-75 
                                                   hover:grayscale-0 hover:opacity-100 
                                                   transition duration-500 ease-in-out cursor-pointer"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Client;
