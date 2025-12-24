import Benefits from '../components/About/Benefits';
import Businesschanger from '../components/About/Businesschanger';
import AboutDataIT from '../components/About/Change'; // Assuming this is the Hero/Intro
import Missionvision from '../components/About/Missionvision';
import OurMoral from '../components/About/OurMoral';
import OurStory from '../components/About/OurStory';
import OurTeam from '../components/About/OurTeam';
import Whatwedo from '../components/About/Whatwedo';

const AboutUs = () => {
    return (
        <div>
            {/* 1. THE HOOK: Hero Section */}
            <AboutDataIT />

            {/* 2. THE PURPOSE: Move Mission/Vision up. Defines who you are immediately. */}
            <Missionvision />

            {/* 3. THE HISTORY: How you got here. */}
            <OurStory />

            {/* 4. THE CULTURE: Your values/morals flow naturally from your story. */}
            <OurMoral />

            {/* 5. THE PEOPLE: Humanize the brand before selling services. */}
            <OurTeam />

            {/* 6. THE CAPABILITY: What you actually deliver. */}
      

            {/* 7. THE VALUE PROP: Why the client wins (Logical closing argument). */}
            <Benefits />
      <Whatwedo />
            {/* 8. THE ACTION: Final Call to Action. */}
            <Businesschanger />
        </div>
    );
};

export default AboutUs;