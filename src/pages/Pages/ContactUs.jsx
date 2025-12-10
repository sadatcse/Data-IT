import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { HiOutlineMapPin } from 'react-icons/hi2';
// Assuming the path to your Hero1.jpg is correct:
import HeroImage from '../../assets/contact-Hero-Image-1.jpg'; 

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        captcha: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the formData to an API
        console.log('Form Submitted:', formData);
        alert('Message Sent!');
    };

    // --- CAPTCHA Logic (Mimicking the Image's Human Check) ---
    const [captchaCorrect, setCaptchaCorrect] = useState(false);
    const handleCaptchaClick = (selectedIcon) => {
        // The correct icon is the 'cap' (🎓)
        if (selectedIcon === 'cap') {
            setCaptchaCorrect(true);
        } else {
            setCaptchaCorrect(false);
            alert("Incorrect selection. Please try again.");
        }
    };
    // ------------------------------------------------------------


    return (
        <div className="bg-white min-h-screen">
            {/* --- Hero/Header Section --- */}
            <div 
                className="relative bg-cover bg-center h-64 flex items-center justify-start text-white p-8"
                style={{ 
                    backgroundImage: `url(${HeroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
                
                <div className="relative z-10 p-4">
                    <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
                    <p className="text-xl">Contact for Premium Business Services</p>
                </div>
            </div>
            
            {/* --- Main Content Section (Grid Layout) --- */}
            <div className="container mx-auto p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* --- Left Column: Office Details & Hours (Updated Section) --- */}
                <div className="lg:col-span-1 bg-white p-8 shadow-xl rounded-lg border border-gray-100 h-fit">
                    
                    {/* BD Office (Updated) */}
                    <div className="mb-8 border-b pb-4">
                        <h2 className="text-xl font-bold text-gray-800 flex items-center mb-2">
                            <HiOutlineMapPin className="text-primary mr-2" /> BD OFFICE
                        </h2>
                        <p className="text-gray-600 ml-6">
                            Shaymoli 3 no road, House no. 27/1/B, <br />
                            Apon Heights, Flat 10-B Dhaka
                        </p>
                        <p className="text-gray-600 mt-2 ml-6 flex items-center">
                            <FaPhoneAlt className="text-sm mr-2 text-primary" /> (+880) 1710000000
                        </p>
                    </div>

                    {/* US Office (Updated) */}
                    <div className="mb-8 border-b pb-4">
                        <h2 className="text-xl font-bold text-gray-800 flex items-center mb-2">
                            <HiOutlineMapPin className="text-primary mr-2" /> US OFFICE
                        </h2>
                        <p className="text-gray-600 ml-6">
                            808, W main st arlington <br />
                            Texas 76016, USA
                        </p>
                        <p className="text-gray-600 mt-2 ml-6 flex items-center">
                            <FaPhoneAlt className="text-sm mr-2 text-primary" /> +1-000-000-0000 - USA
                        </p>
                    </div>

                    {/* Talk to us (Email) (Updated) */}
                    <div className="mb-8 border-b pb-4">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">Talk to us</h2>
                        <p className="text-gray-600 mt-2 ml-0 flex items-center">
                            <FaEnvelope className="text-sm mr-2 text-primary" /> sales@datait.com.bd
                        </p>
                    </div>

                    {/* Opening Hours (Kept previous schedule, as no new schedule was provided) */}
                    <div className="mb-4">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">Opening hour</h2>
                        <p className="text-gray-600 mt-2 ml-0 flex items-center">
                            <FaClock className="text-sm mr-2 text-primary" /> Monday-Friday
                        </p>
                        <p className="text-gray-600 ml-6">
                            10:00 a.m. - 7:00 p.m.
                        </p>
                    </div>
                </div>

                {/* --- Right Column: Contact Form --- (Unchanged) */}
                <div className="lg:col-span-2 p-8 shadow-xl rounded-lg bg-gray-50 border border-gray-200">
                    <p className="text-sm font-semibold text-primary mb-1">MESSAGE US, CONNECT HERE</p>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Drop Us a Quick Message</h2>
                    
                    <p className="text-gray-600 mb-6">
                        We'll love to hear from you. Please complete the form below and share your requirements with us.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name Input */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Name*"
                            className="input input-bordered w-full"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        
                        {/* Email Input */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email*"
                            className="input input-bordered w-full"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        {/* Phone Input */}
                        <input
                            type="tel"
                            name="phone"
                            placeholder="+ Phone*"
                            className="input input-bordered w-full"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />

                        {/* Message Textarea */}
                        <textarea
                            name="message"
                            placeholder="Describe Your Message Here*"
                            className="textarea textarea-bordered w-full h-32"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>

                        {/* CAPTCHA / Human Verification */}
                        <div className="p-4 bg-white rounded-lg border border-gray-300">
                            <p className="text-sm mb-3">
                                Please prove you are human by selecting the <span className="font-bold text-red-500">cap</span>
                            </p>
                            <div className="flex space-x-4">
                                {/* Cup Icon */}
                                <button 
                                    type="button" 
                                    className={`text-2xl p-2 rounded-lg transition-all duration-200 ${captchaCorrect ? '' : 'hover:bg-gray-100'}`}
                                    onClick={() => handleCaptchaClick('cup')}
                                >
                                    ☕
                                </button>
                                {/* Bell Icon */}
                                <button 
                                    type="button" 
                                    className={`text-2xl p-2 rounded-lg transition-all duration-200 ${captchaCorrect ? '' : 'hover:bg-gray-100'}`}
                                    onClick={() => handleCaptchaClick('bell')}
                                >
                                    🔔
                                </button>
                                {/* Correct: Cap Icon */}
                                <button 
                                    type="button" 
                                    className={`text-2xl p-2 rounded-lg transition-all duration-200 ${captchaCorrect ? 'border-2 border-green-500 bg-green-50' : 'hover:bg-gray-100'}`}
                                    onClick={() => {
                                        handleCaptchaClick('cap');
                                        setFormData({...formData, captcha: 'cap'});
                                    }}
                                >
                                    🎓
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className={`btn btn-primary w-full sm:w-auto ${!captchaCorrect ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={!captchaCorrect}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
            {/* Floating Phone Icon */}
            <a href="tel:9399507884" className="fixed bottom-6 right-6 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50">
                <FaPhoneAlt size={24} />
            </a>
        </div>
    );
};

export default ContactUs;