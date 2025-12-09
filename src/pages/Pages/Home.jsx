import React from 'react';
import ProcessSection from '../../components/Home/Process';
import Hero from './../../components/Home/Hero';
import Client from '../../components/Home/Client';
import Join from '../../components/Home/Join';
import Service from '../../components/Home/Service';
import Choice from '../../components/Home/Choice';

const Home = () => {
    return (
        <div>
            <Hero/>
                <Service/>
                        <Choice/>
           <ProcessSection/>
   
       
           <Join/>
           <Client/>

        </div>
    );
};

export default Home;