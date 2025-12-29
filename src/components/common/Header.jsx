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
                path: "/smm", 
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

// --- 1. Desktop Dropdown Components ---

const DesktopSubItem = ({ item }) => {
    // Used for Level 2+ items in Desktop (e.g. Organic Growth)
    if (item.subItems) {
        return (
            <li className="relative group">
                <span className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                    {item.title}
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-sky-500 transition-transform duration-200" />
                </span>
                {/* Nested Flyout */}
                <div className="hidden group-hover:block absolute left-full top-0 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-20">
                    <ul className="py-1">
                        {item.subItems.map((sub) => <DesktopSubItem key={sub.path || sub.title} item={sub} />)}
                    </ul>
                </div>
            </li>
        );
    }
    return (
        <li>
            <NavLink 
                to={item.path} 
                className={({ isActive }) => `block px-4 py-2 text-sm transition-colors ${
                    isActive ? 'text-sky-500 bg-sky-50 dark:bg-sky-900/20 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
            >
                {item.title}
            </NavLink>
        </li>
    );
};

const DesktopDropdown = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    
    // Simple hover logic for main desktop dropdown
    return (
        <li className="relative p-1" 
            ref={dropdownRef} 
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="flex items-center font-medium transition-colors hover:text-sky-600 dark:hover:text-sky-400 text-gray-700 dark:text-gray-300 py-2">
                {item.title}
                <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180 text-sky-500' : ''}`} />
            </button>
            
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-0 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-30 py-2"
                    >
                        <ul>
                            {item.subItems.map((subItem) => (
                                <DesktopSubItem key={subItem.path || subItem.title} item={subItem} />
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </li>
    );
};

const DesktopNavItem = ({ item }) => (
    <li>
        <NavLink 
            to={item.path} 
            className={({ isActive }) => `font-medium transition-colors hover:text-sky-600 dark:hover:text-sky-400 ${
                isActive ? 'text-sky-500 dark:text-sky-400 font-semibold' : 'text-gray-700 dark:text-gray-300'
            }`}
        >
            {item.title}
        </NavLink>
    </li>
);


// --- 2. Mobile Specific Components (The Fix) ---

const MobileNavItem = ({ item, closeMenu, level = 0 }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = item.subItems && item.subItems.length > 0;

    // Base styling for links
    const linkBase = "block py-2 text-base font-medium transition-colors hover:text-sky-600 dark:hover:text-sky-400 text-gray-700 dark:text-gray-300 w-full text-left flex justify-between items-center";
    const activeClass = "text-sky-500 dark:text-sky-400 font-semibold";
    
    // Dynamic padding based on nesting level (Service > Organic > SEO)
    const paddingLeft = level === 0 ? "" : "pl-4";

    // Scenario 1: It's a Parent Item (Accordion)
    if (hasChildren) {
        return (
            <div className={`border-b border-gray-100 dark:border-gray-800 last:border-0 ${paddingLeft}`}>
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className={linkBase}
                >
                    {item.title}
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-sky-500' : 'text-gray-400'}`} />
                </button>
                
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="border-l-2 border-sky-100 dark:border-gray-700 ml-2 mb-2">
                                {item.subItems.map((sub, idx) => (
                                    <MobileNavItem 
                                        key={idx} 
                                        item={sub} 
                                        closeMenu={closeMenu} 
                                        level={level + 1} 
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    // Scenario 2: It's a Direct Link
    return (
        <div className={`border-b border-gray-100 dark:border-gray-800 last:border-0 ${paddingLeft}`}>
            <NavLink 
                to={item.path} 
                onClick={closeMenu}
                className={({ isActive }) => `${linkBase} ${isActive ? activeClass : ''}`}
            >
                {item.title}
            </NavLink>
        </div>
    );
};


// --- 3. Main Header ---

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const closeMobileMenu = () => setIsMenuOpen(false);

    return (
        <>
            <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 shadow-lg backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center space-x-2">
                                <img src={Logo} alt="Company Logo" className="h-14 w-auto object-contain" />
                            </Link>
                        </div>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex">
                            <ul className="flex items-center space-x-6">
                                {NAV_ITEMS.map((item) => (
                                    item.subItems ? 
                                    <DesktopDropdown key={item.title} item={item} /> : 
                                    <DesktopNavItem key={item.path} item={item} />
                                ))}
                            </ul>
                        </nav>

                        {/* CTA & Mobile Toggle */}
                        <div className="flex items-center">
                            <div className="hidden lg:flex items-center ml-4">
                                <Link to="/contact" className="px-5 py-2 text-sm font-semibold rounded-full text-white bg-sky-500 hover:bg-sky-600 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
                                    Get Quote
                                </Link>
                            </div>
                            
                            {/* Mobile Hamburger */}
                            <div className="lg:hidden ml-4">
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
                                >
                                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay - FIXED Z-INDEX and Structure */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        // INCREASED z-index to 60 to sit ON TOP of the sticky header (z-50)
                        className="fixed inset-0 z-[60] lg:hidden"
                    >
                        {/* Backdrop */}
                        <div 
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
                            onClick={closeMobileMenu} 
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.3 }}
                            className="absolute right-0 top-0 w-[80%] max-w-sm h-full bg-white dark:bg-gray-900 shadow-2xl flex flex-col"
                        >
                            {/* Mobile Header (Logo + Close) */}
                            <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-800">
                                <Link to="/" onClick={closeMobileMenu}>
                                    <img src={Logo} alt="Logo" className="h-10 w-auto" />
                                </Link>
                                <button
                                    onClick={closeMobileMenu}
                                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                >
                                    <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                                </button>
                            </div>
                            
                            {/* Scrollable Content Area */}
                            <div className="flex-1 overflow-y-auto p-6">
                                <nav className="space-y-1">
                                    {NAV_ITEMS.map((item, idx) => (
                                        <MobileNavItem 
                                            key={idx} 
                                            item={item} 
                                            closeMenu={closeMobileMenu} 
                                        />
                                    ))}
                                </nav>
                            </div>

                            {/* Mobile Footer CTA */}
                            <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
                                <Link 
                                    to="/contact" 
                                    className="flex justify-center items-center w-full px-4 py-3 text-base font-semibold rounded-lg text-white bg-primary hover:bg-sky-600 shadow-md transition-all active:scale-95"
                                    onClick={closeMobileMenu}
                                >
                                    Get Quote
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;