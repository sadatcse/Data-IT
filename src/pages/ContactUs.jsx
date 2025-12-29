// src/pages/ContactUs.jsx
import React, { useState, useRef } from 'react';
import { FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { HiOutlineMapPin } from 'react-icons/hi2';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import SEO from '../components/SEO/SEO';

import HeroImage from '../assets/contact-Hero-Image-1.jpg'; 

const ContactUs = () => {
    // 1. Create a ref for the form
    const form = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        captcha: ''
    });

    const [captchaCorrect, setCaptchaCorrect] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 2. Updated Submit Handler for EmailJS
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!captchaCorrect) {
            Swal.fire('Error', 'Please complete the human verification first.', 'error');
            return;
        }

        // Send form using EmailJS
        emailjs
            .sendForm(
                import.meta.env.VITE_service, 
                import.meta.env.VITE_tamplet, 
                form.current, 
                { publicKey: import.meta.env.VITE_apiKey }
            )
            .then(
                () => {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your message has been sent successfully.',
                        icon: 'success',
                        confirmButtonColor: '#3B82F6' // Matches primary blue
                    });
                    
                    // Reset Form
                    setFormData({ name: '', email: '', phone: '', message: '', captcha: '' });
                    setCaptchaCorrect(false);
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    Swal.fire('Error', 'Failed to send message. Please try again later.', 'error');
                }
            );
    };

    const handleCaptchaClick = (selectedIcon) => {
        if (selectedIcon === 'cap') {
            setCaptchaCorrect(true);
            setFormData({...formData, captcha: 'cap'});
        } else {
            setCaptchaCorrect(false);
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'error',
                title: 'Incorrect selection',
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (
        <div className="bg-white min-h-screen">
            {/* SEO Implementation for Contact Page */}
            <SEO 
                title="Contact Us | Data IT - Get in Touch"
                description="Contact Data IT for custom software development and digital marketing services. Visit our Dhaka office, call us at +880 1710000000, or email sales@datait.com.bd."
                keywords="Contact Data IT, Data IT Address, Software Company Dhaka Phone, IT Support Bangladesh, Hire Developers Contact, Digital Marketing Agency Contact"
                url="/contact"
                image={HeroImage} // Using the imported hero image for OG
                siteName="Data IT"
                type="website"
            />

            {/* --- Hero Section --- */}
            <div 
                className="relative bg-cover bg-center h-64 flex items-center justify-start text-white p-8"
                style={{ 
                    backgroundImage: `url(${HeroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
                <div className="relative z-10 p-4">
                    <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
                    <p className="text-xl">Contact for Premium Business Services</p>
                </div>
            </div>
            
            <div className="container mx-auto p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* --- Left Column: Office Details --- */}
                <div className="lg:col-span-1 bg-white p-8 shadow-xl rounded-lg border border-gray-100 h-fit">
                    <div className="mb-8 border-b pb-4">
                        <h2 className="text-xl font-bold text-gray-800 flex items-center mb-2">
                            <HiOutlineMapPin className="text-blue-600 mr-2" /> BD OFFICE
                        </h2>
                        <p className="text-gray-600 ml-6">
                            Shaymoli 3 no road, House no. 27/1/B, <br />
                            Apon Heights, Flat 10-B Dhaka
                        </p>
                        <p className="text-gray-600 mt-2 ml-6 flex items-center">
                            <FaPhoneAlt className="text-sm mr-2 text-blue-600" /> (+880) 1710000000
                        </p>
                    </div>

                    <div className="mb-8 border-b pb-4">
                        <h2 className="text-xl font-bold text-gray-800 flex items-center mb-2">
                            <HiOutlineMapPin className="text-blue-600 mr-2" /> US OFFICE
                        </h2>
                        <p className="text-gray-600 ml-6">
                            808, W main st arlington <br />
                            Texas 76016, USA
                        </p>
                        <p className="text-gray-600 mt-2 ml-6 flex items-center">
                            <FaPhoneAlt className="text-sm mr-2 text-blue-600" /> +1-000-000-0000
                        </p>
                    </div>

                    <div className="mb-8 border-b pb-4">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">Talk to us</h2>
                        <p className="text-gray-600 mt-2 ml-0 flex items-center">
                            <FaEnvelope className="text-sm mr-2 text-blue-600" /> sales@datait.com.bd
                        </p>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">Opening hour</h2>
                        <p className="text-gray-600 mt-2 ml-0 flex items-center">
                            <FaClock className="text-sm mr-2 text-blue-600" /> Monday-Friday
                        </p>
                        <p className="text-gray-600 ml-6">10:00 a.m. - 7:00 p.m.</p>
                    </div>
                </div>

                {/* --- Right Column: Contact Form --- */}
                <div className="lg:col-span-2 p-8 shadow-xl rounded-lg bg-gray-50 border border-gray-200">
                    <p className="text-sm font-semibold text-blue-600 mb-1">MESSAGE US, CONNECT HERE</p>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Drop Us a Quick Message</h2>
                    
                    <p className="text-gray-600 mb-6">
                        We'll love to hear from you. Please complete the form below and share your requirements.
                    </p>

                    <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name*"
                            className="input input-bordered w-full border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        
                        <input
                            type="email"
                            name="email"
                            placeholder="Email*"
                            className="input input-bordered w-full border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="+ Phone*"
                            className="input input-bordered w-full border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="Describe Your Message Here*"
                            className="textarea textarea-bordered w-full h-32 border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>

                        {/* CAPTCHA */}
                        <div className="p-4 bg-white rounded-lg border border-gray-300">
                            <p className="text-sm mb-3">
                                Please prove you are human by selecting the <span className="font-bold text-red-500">cap</span>
                            </p>
                            <div className="flex space-x-4">
                                <button type="button" className={`text-2xl p-2 rounded-lg transition-all ${captchaCorrect ? '' : 'hover:bg-gray-100'}`} onClick={() => handleCaptchaClick('cup')}>☕</button>
                                <button type="button" className={`text-2xl p-2 rounded-lg transition-all ${captchaCorrect ? '' : 'hover:bg-gray-100'}`} onClick={() => handleCaptchaClick('bell')}>🔔</button>
                                <button 
                                    type="button" 
                                    className={`text-2xl p-2 rounded-lg transition-all ${captchaCorrect ? 'border-2 border-green-500 bg-green-50' : 'hover:bg-gray-100'}`}
                                    onClick={() => handleCaptchaClick('cap')}
                                >
                                    🎓
                                </button>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className={`w-full sm:w-auto px-8 py-3 rounded-md font-bold text-white transition-all ${captchaCorrect ? 'bg-primary hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
                            disabled={!captchaCorrect}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <a href="tel:9399507884" className="fixed bottom-6 right-6 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50">
                <FaPhoneAlt size={24} />
            </a>
        </div>
    );
};

export default ContactUs;