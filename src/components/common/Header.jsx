import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'; 
import { motion, AnimatePresence } from 'framer-motion'; 


import Logo from '../../assets/Logo.png'; 


const NAV_ITEMS = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { 
        title: "Service", 
        path: "#", 
        subItems: [
            { 
                title: "Organic Growth", 
                path: "#",
                subItems: [
                    { title: "SEO for Travel Agents", path: "/seo-travel" },
                    { title: "SEO for Garments", path: "/seo-garments" },
                    { title: "SEO for E-Commerce", path: "/seo-ecommerce" },
                    { title: "Professional SEO", path: "/seo-professional" },
                    { title: "Local SEO", path: "/seo-local" },
                ]
            },
            { 
                title: "SMM", 
                path: "/smm", // SMM itself can be a page
                subItems: [
                    { title: "Social Media Marketing", path: "/social-media-marketing" },
                ]
            },
            {
                title: "Website and Content",
                path: "#",
                subItems: [
                    { title: "Web Design & Development", path: "/web-dev" },
                    { title: "Ecommerce Website", path: "/ecommerce-website" },
                    { title: "Website Maintenance", path: "/website-maintenance" },
                    { title: "Custom Web Application Development", path: "/custom-web-app" },
                ]
            },
            {
                title: "Branding",
                path: "#",
                subItems: [
                    { title: "Corporate Branding", path: "/corporate-branding" },
                    { title: "Personal Branding", path: "/personal-branding" },
                    { title: "Re Branding", path: "/re-branding" },
                ]
            },
            {
                title: "Software",
                path: "#",
                subItems: [
                    { title: "Restaurant Management System", path: "/rms" },
                    { title: "Gym Management System", path: "/gms" },
                    { title: "Rice Mill Management System", path: "/ricemms" },
                ]
            },
            {
                title: "Design",
                path: "#",
                subItems: [
                    { title: "UI UX Design", path: "/ui-ux" },
                    { title: "Graphic Design", path: "/graphic-design" },
                ]
            },
            {
                title: "Others",
                path: "#",
                subItems: [
                    { title: "Video Production", path: "/video-production" },
                    { title: "PR Agency", path: "/pr-agency" },
                ]
            },
        ],
    },
    { title: "Portfolios", path: "/portfolios" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
];

const DropdownItem = ({ item, closeMenu }) => {
    // Only applies styling if the path is a real route (not a hash '#')
    const linkClasses = ({ isActive }) =>
        `block px-4 py-2 text-sm transition-colors ${
            isActive 
                ? 'text-sky-500 bg-sky-50 dark:bg-sky-900/20 font-semibold' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
        }`;
        
    return (
        <li key={item.path}>
            <NavLink 
                to={item.path} 
                className={linkClasses}
                onClick={closeMenu} // Close the menu when a link is clicked
            >
                {item.title}
            </NavLink>
        </li>
    );
};

/**
 * Desktop Dropdown Component (Handles main menu items with subItems)
 */
const DesktopDropdown = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    
    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [dropdownRef]);

    // Recursive rendering for nested menus
    const renderSubItems = (subItems, level = 0) => (
        <ul className={`py-1 ${level > 0 ? 'mt-1 border-t border-gray-100 dark:border-gray-700' : ''}`}>
            {subItems.map((subItem) => (
                // If the subItem has its own subItems, render another dropdown (nested)
                subItem.subItems ? (
                    <li key={subItem.title} className="relative group">
                        <span className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                            {subItem.title}
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-sky-500 transition-transform duration-200" />
                        </span>
                        {/* Nested Dropdown Panel */}
                        <div className="hidden group-hover:block absolute left-full top-0 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-20">
                            {renderSubItems(subItem.subItems, level + 1)}
                        </div>
                    </li>
                ) : (
                    // Regular link inside the dropdown
                    <DropdownItem key={subItem.path} item={subItem} closeMenu={() => setIsOpen(false)} />
                )
            ))}
        </ul>
    );
    
    // Base classes for the link/button
    const baseClasses = "flex items-center font-medium transition-colors hover:text-sky-600 dark:hover:text-sky-400 text-gray-700 dark:text-gray-300";
    
    return (
        <li className="relative p-1" ref={dropdownRef} 
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className={baseClasses}>
                {item.title}
                <ChevronDown 
                    className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180 text-sky-500' : ''}`} 
                />
            </button>
            
            {/* Dropdown Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-30"
                    >
                        {renderSubItems(item.subItems)}
                    </motion.div>
                )}
            </AnimatePresence>
        </li>
    );
};


const NavItem = ({ item, className, mobile = false, closeMenu }) => {
    // If it's a simple link (no subItems)
    if (!item.subItems || !mobile) {
        const linkClasses = ({ isActive }) =>
            `font-medium transition-colors hover:text-sky-600 dark:hover:text-sky-400 ${
                isActive 
                    ? 'text-sky-500 dark:text-sky-400 font-semibold' 
                    : 'text-gray-700 dark:text-gray-300'
            }`;
            
        // For mobile, apply 'block' to take full width
        const mobileLinkClasses = `block ${linkClasses}`;
        
        // If on desktop OR it's a mobile link without subItems, use NavLink
        if (!item.subItems || !mobile) {
             return (
                <li className={`p-1 ${className}`}>
                    {item.path !== '#' ? (
                        <NavLink to={item.path} className={mobile ? mobileLinkClasses : linkClasses} onClick={closeMenu}>
                            {item.title}
                        </NavLink>
                    ) : (
                        // Render as a placeholder text if path is '#' on desktop (should be handled by DesktopDropdown, but safety first)
                        <span className={mobile ? mobileLinkClasses : linkClasses}>{item.title}</span>
                    )}
                </li>
            );
        }
    }

    // --- Mobile Dropdown Logic (Recursive) ---
    
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    
    // Toggle the submenu state
    const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);

    // Classes for the main item link/button
    const mainItemClasses = `flex justify-between items-center w-full text-gray-700 dark:text-gray-300 font-medium hover:text-sky-600 dark:hover:text-sky-400 transition-colors`;
    const subItemClasses = `pl-4`; // Indentation for sub-links

    return (
        <li className={`flex flex-col ${className}`}>
            <button onClick={toggleSubMenu} className={mainItemClasses}>
                {item.title}
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isSubMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Submenu Panel with Framer Motion */}
            <AnimatePresence>
                {isSubMenuOpen && item.subItems && (
                    <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="mt-2 space-y-2 border-l-2 border-sky-400 ml-2"
                    >
                        {item.subItems.map((subItem) => (
                            <NavItem 
                                key={subItem.path || subItem.title} 
                                item={subItem} 
                                mobile={true} 
                                closeMenu={closeMenu} 
                                className={subItemClasses} // Apply indentation
                            />
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </li>
    );
};

// --- Main Header Component ---

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to close the mobile menu
    const closeMobileMenu = () => setIsMenuOpen(false);

    // Framer Motion variants for the mobile menu (slide-in effect)
    const menuVariants = {
        closed: { opacity: 0, x: "100%", transition: { duration: 0.3 } },
        open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    };

    return (
        <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 shadow-lg backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    
                    {/* Logo and Home Link */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <img src={Logo} alt="Company Logo" className="h-14 w-auto object-contain" />
                      
                        </Link>
                    </div>

                    {/* Desktop Navigation (Hidden on small screens) */}
                    <nav className="hidden lg:flex">
                        <ul className="flex items-center space-x-6">
                            {NAV_ITEMS.map((item) => (
                                // If the item has subItems, use the DesktopDropdown
                                item.subItems ? (
                                    <DesktopDropdown key={item.title} item={item} />
                                ) : (
                                    // Otherwise, use the regular NavItem
                                    <NavItem key={item.path} item={item} />
                                )
                            ))}
                        </ul>
                    </nav>

                    {/* End Section / Mobile Menu Button */}
                    <div className="flex items-center">
                        {/* Desktop CTA (Show on desktop) */}
                        <div className="hidden lg:flex items-center ml-4">
                            <Link to="/contact" className="px-5 py-2 text-sm font-semibold rounded-full text-white bg-sky-500 hover:bg-sky-600 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
                                Get Quote
                            </Link>
                        </div>
                        
                        {/* Mobile Menu Button (Show on mobile) */}
                        <div className="lg:hidden ml-4">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
                                aria-label="Toggle Menu"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile Menu Overlay (Off-canvas navigation using Framer Motion) */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        {/* Backdrop for click outside functionality */}
                        <div 
                            className="absolute inset-0 bg-black/50" 
                            onClick={closeMobileMenu} 
                        />

                        {/* Actual Menu Panel (slides in from right) */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.3 }}
                            className="absolute right-0 top-0 w-64 max-w-xs h-full bg-white dark:bg-gray-900 shadow-2xl p-6 overflow-y-auto"
                        >
                            <div className="flex justify-between items-center mb-8 border-b pb-4 border-gray-100 dark:border-gray-800">
                                <Link to="/" onClick={closeMobileMenu}>
                                    <img src={Logo} alt="Company Logo" className="h-10 w-auto object-contain" />
                                </Link>
                                <button
                                    onClick={closeMobileMenu}
                                    className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                    aria-label="Close Menu"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>
                            
                            <nav>
                                <ul className="flex flex-col space-y-4">
                                    {NAV_ITEMS.map((item) => (
                                        <NavItem 
                                            key={item.path || item.title} 
                                            item={item} 
                                            mobile={true} // Crucial for enabling mobile dropdown logic
                                            closeMenu={closeMobileMenu}
                                            className="border-b border-gray-100 dark:border-gray-800 pb-2"
                                        />
                                    ))}
                                </ul>
                            </nav>

                            {/* Mobile CTA */}
                            <div className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-800">
                                <Link 
                                    to="/contact" 
                                    className="block w-full text-center px-4 py-3 text-base font-semibold rounded-lg text-white bg-sky-500 hover:bg-sky-600 transition-colors shadow-md"
                                    onClick={closeMobileMenu}
                                >
                                    Get Quote
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header> 
    );
};

export default Header;