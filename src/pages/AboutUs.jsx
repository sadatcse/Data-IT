// src/pages/AboutUs.jsx
import React from 'react';
import SEO from '../components/SEO/SEO';

import Benefits from '../components/About/Benefits';
import Businesschanger from '../components/About/Businesschanger';
import AboutDataIT from '../components/About/Change';
import Missionvision from '../components/About/Missionvision';
import OurMoral from '../components/About/OurMoral';
import OurStory from '../components/About/OurStory';
import OurTeam from '../components/About/OurTeam';
import Whatwedo from '../components/About/Whatwedo';

const AboutUs = () => {
    return (
        <div>
            {/* SEO Implementation with S3 Image */}
            <SEO 
                title="About Data IT - Our Journey & Vision"
                description="Learn about Data IT's journey since 2024. We are a team of dedicated professionals committed to transforming businesses through custom software and digital innovation."
                keywords="Data IT Story, About Data IT, Software Company History, IT Mission Vision, Data IT Team, Digital Transformation Partner"
                url="/about"
                image="https://digitaldatait.s3.ap-southeast-1.amazonaws.com/Our+Story.jpeg" 
                siteName="Data IT"
                type="profile"
            />

            <AboutDataIT />
            <Missionvision />
            <OurStory />
            <OurMoral />
            <OurTeam />
            <Benefits />
            <Whatwedo />
            <Businesschanger />
        </div>
    );
};

export default AboutUs;