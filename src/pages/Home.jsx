import React from 'react';
import ProcessSection from '../components/Home/Process';
import Hero from '../components/Home/Hero';
import Client from '../components/Home/Client';
import Join from '../components/Home/Join';
import Service from '../components/Home/Service';
import Choice from '../components/Home/Choice';
import Testimonial from '../components/Home/Testimonial';
import Showcase from '../components/Home/Showcase';
import Partner from '../components/Home/Partner';
import MarketingCTA from '../components/Home/MarketingCTA';
import IdeaCTA from '../components/Home/IdeaCTA';
import FAQ from '../components/Home/FAQ';
import Industries from '../components/Home/Industries';

const Home = () => {
    return (
        <div>
            <Hero/>
                <Service/>
                        <Choice/>
                           <MarketingCTA/>
           <ProcessSection/>
         
   <Showcase/>
   <Partner/>
       <Testimonial/>
       
       <Industries/>
       <FAQ/>
       <IdeaCTA/>
           {/* <Join/> */}
          
           <Client/>

        </div>
    );
};

export default Home;