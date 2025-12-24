
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, X, Instagram, Facebook } from 'lucide-react'; 
import Logo from '../../assets/Logo.png'; 

// --- Constants ---

const LOCATION_DETAILS = [
    "Shaymoli 3 no road,House no. 27/1/B, Apon Heights, Flat 10-B Dhaka ",
    "808,W main st arlington Texas 76016, USA",
];

const CONTACT_DETAILS = [
    { type: "Email", icon: Mail, value: "sales@datait.com.bd", link: "mailto:sales@datait.com.bd" },
    { type: "Phone-BD", icon: Phone, value: "(+880) 1710000000", link: "tel:+919265637864" },
    { type: "Phone-US", icon: Phone, value: "+1-000-000-0000 - USA", link: "tel:+1400000000" },
];

const SOCIAL_LINKS = [
    { name: "LinkedIn", icon: Linkedin, url: "#" }, 
    { name: "X (Twitter)", icon: X, url: "#" }, 
    { name: "Instagram", icon: Instagram, url: "#" }, 
    { name: "Facebook", icon: Facebook, url: "#" }, 
];

const POLICY_LINKS = [
    { name: "Terms of use", path: "/terms-of-use" },
    { name: "Privacy policy", path: "/privacy-policy" },
    { name: "Cookie policy", path: "/cookie-policy" },
    { name: "Refund policy", path: "/refund-policy" },
];

const COPYRIGHT_YEAR = "2025"; 
const COPYRIGHT_TEXT = `Copyright © ${COPYRIGHT_YEAR} DataIT`;

// --- Reusable Sub-Components ---

const DetailItem = ({ Icon, text, link }) => (
    <a href={link} className="flex items-start text-sm text-gray-400 hover:text-sky-400 transition-colors mt-3">
        <Icon className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
        <span className="leading-relaxed">{text}</span>
    </a>
);

// --- Main Footer Component ---

const Footer = () => {
    return (
        <footer className="bg-[#1C2028] text-white border-t border-gray-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
                
                {/* Top Section: Main Info (3 Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">

                    {/* 1. Logo & Socials */}
                    <div className="flex flex-col space-y-4">
                        <div className="w-40"> 
                            <img src={Logo} alt="DataIT Solutions Logo" className="h-auto w-full max-w-xs" /> 
                        </div>
                        <p className="text-sm text-gray-400 max-w-xs">
                            Data IT is a full-service technology agency delivering innovative digital solutions for businesses of all sizes.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            {SOCIAL_LINKS.map((social) => (
                                <a 
                                    key={social.name}
                                    href={social.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-white border border-white p-2 rounded-full hover:bg-white hover:text-[#1C2028] transition-colors"
                                >
                                    <social.icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 2. Location */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Location</h3>
                        {LOCATION_DETAILS.map((address, index) => (
                            <DetailItem 
                                key={index} 
                                Icon={MapPin} 
                                text={address} 
                                link={`https://maps.google.com/?q=${encodeURIComponent(address)}`} 
                            />
                        ))}
                    </div>

                    {/* 3. Contact Us */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                        {CONTACT_DETAILS.map((contact) => (
                            <DetailItem 
                                key={contact.type} 
                                Icon={contact.icon}
                                text={contact.value} 
                                link={contact.link}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom Bar: Copyright Left, Links Right */}
                <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
                    
                    {/* Left Side: Copyright */}
                    <p className="text-sm text-gray-500 order-2 md:order-1 mt-4 md:mt-0">
                        {COPYRIGHT_TEXT} | Powered by DataIT
                    </p>

                    {/* Right Side: Policy Links */}
                    <ul className="flex flex-wrap justify-center md:justify-end space-x-6 order-1 md:order-2">
                        {POLICY_LINKS.map((link) => (
                            <li key={link.name}>
                                <NavLink 
                                    to={link.path} 
                                    className="text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Footer;