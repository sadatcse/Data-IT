import React from 'react';
import { NavLink } from 'react-router-dom';
// Importing necessary icons from lucide-react (Note: I use common replacements where the exact icon from the image isn't clear, e.g., 'Mail' for email, 'MapPin' for location, and 'Phone' for phone numbers.)
import { Mail, Phone, MapPin, Linkedin, X, Instagram, Facebook } from 'lucide-react'; 

// NOTE: Original Logo component/path kept as per provided code structure
import Logo from '../../assets/Logo.png'; 

// --- Constants (Updated for DataIT Solutions content) ---

const LOCATION_DETAILS = [
    "Shaymoli 3 no road,House no. 27/1/B, Apon Heights, Flat 10-B Dhaka ",
    "808,W main st arlington Texas 76016, USA",
];

const CONTACT_DETAILS = [
    { type: "Email", icon: Mail, value: "sales@datait.com.bd", link: "mailto:sales@datait.com.bd" },
    { type: "Phone-BD", icon: Phone, value: "(+880) 1710000000", link: "tel:+919265637864" },
    { type: "Phone-US", icon: Phone, value: "+1-000-000-0000 - USA", link: "tel:+1400000000" },
];

// Icons used in the image's social links (LinkedIn, X (Twitter), Instagram, Facebook)
const SOCIAL_LINKS = [
    { name: "LinkedIn", icon: Linkedin, url: "#" }, 
    { name: "X (Twitter)", icon: X, url: "#" }, 
    { name: "Instagram", icon: Instagram, url: "#" }, 
    { name: "Facebook", icon: Facebook, url: "#" }, 
];

// Re-defining for visual match to the image's year
const CURRENT_YEAR = new Date().getFullYear();
const COPYRIGHT_YEAR = "2025"; // Hardcoded to match the image text
const COPYRIGHT_TEXT = `Copyright © ${COPYRIGHT_YEAR} DataIT  | Powered by DataIT `;

// --- Reusable Sub-Components (Styled for the dark theme) ---

const DetailItem = ({ Icon, text, link }) => (
    <a href={link} className="flex items-start text-sm text-gray-400 hover:text-sky-400 transition-colors mt-3">
        <Icon className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
        <span className="leading-relaxed">{text}</span>
    </a>
);

// --- Main Footer Component ---

const Footer = () => {
    return (
        // Changed background to match the dark color in the image.
        <footer className="bg-[#1C2028] text-white border-t border-gray-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Main Content Grid: 3 columns on medium/large screens */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-8 border-b border-gray-700">

                    {/* 1. Logo & Description (Left Column) */}
                    <div className="flex flex-col space-y-4">
                        {/* Note: Assuming 'Logo' component path is correctly linked to the DataIT logo image */}
                        <div className="w-40"> 
                            {/* Placeholder for the complex 'DataIT Solutions' Logo/Text structure */}
                            <img src={Logo} alt="DataIT Solutions Logo" className="h-auto w-full max-w-xs" /> 
                           
                        </div>
                        
                        <p className="text-sm text-gray-400 max-w-xs">
                            Data IT is a full-service technology agency delivering innovative digital solutions for businesses of all sizes.
                        </p>

                        {/* Social Media Icons (styled and placed as per image) */}
                        <div className="flex space-x-4 pt-2">
                            {SOCIAL_LINKS.map((social) => (
                                <a 
                                    key={social.name}
                                    href={social.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    // Styling to match the white/hover-white look in the image
                                    className="text-white border border-white p-2 rounded-full hover:bg-white hover:text-[#1C2028] transition-colors"
                                >
                                    <social.icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 2. Location (Center Column) */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Location</h3>
                        {LOCATION_DETAILS.map((address, index) => (
                            <DetailItem 
                                key={index} 
                                Icon={MapPin} // Pin icon for location
                                text={address} 
                                link={`https://maps.google.com/?q=${encodeURIComponent(address)}`} // Google Maps link
                            />
                        ))}
                    </div>

                    {/* 3. Contact Us (Right Column) */}
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

                {/* Copyright Row (Bottom Section) */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                        {COPYRIGHT_TEXT}
                    </p>
                </div>

            </div>
            {/* The WhatsApp and Scroll-to-Top buttons are typically handled outside the main footer component,
                but I'll add a structural comment here for completeness. */}
            {/* WhatsApp Icon/Button & Scroll-to-Top Icon/Button */}
        </footer>
    );
};

export default Footer;