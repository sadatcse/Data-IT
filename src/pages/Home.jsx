// src/pages/Home.jsx
import React from 'react';
import SEO from '../components/SEO/SEO';

import ProcessSection from '../components/Home/Process';
import Hero from '../components/Home/Hero';
import Service from '../components/Home/Service';
import Choice from '../components/Home/Choice';
import Testimonial from '../components/Home/Testimonial';
import Showcase from '../components/Home/Showcase';
import Partner from '../components/Home/Partner';
import MarketingCTA from '../components/Home/MarketingCTA';
import IdeaCTA from '../components/Home/IdeaCTA';
import FAQ from '../components/Home/FAQ';
import Industries from '../components/Home/Industries';
import Youridea from '../components/Home/Youridea';
// import Client from '../components/Home/Client';
// import Join from '../components/Home/Join';

const Home = () => {
    return (
        <div>
            {/* SEO Implementation for Data IT Homepage */}
            <SEO 
                title="Your Digital Growth Partner - Custom Software & Marketing"
                description="Data IT delivers custom software development, ERP systems, AI POS, and digital marketing solutions. We empower businesses in Bangladesh and globally with intelligent, scalable technology."
                keywords="Data IT, Custom Software Development, ERP System Bangladesh, Restaurant Management System, Gym Management Software, Digital Marketing Agency, Rice Mill ERP, Web Application Development, React Developers, SEO Services"
                url="/"
                image="../../assets/Hero1.png"
                siteName="Data IT"
                type="website"
            />

            <Hero/>
            <Service/>
            <Choice/>
            <MarketingCTA/>
            <ProcessSection/>
            
            <Showcase/>
            <Partner/>
            <Youridea/>
            <Testimonial/>
            
            <Industries/>
            <FAQ/>
            <IdeaCTA/>
            {/* <Join/> */}
            {/* <Client/> */}
        </div>
    );
};

export default Home;