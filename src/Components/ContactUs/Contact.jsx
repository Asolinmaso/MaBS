import React from 'react'
import { useState } from 'react';
import bg from "../../assets/Contact/Contact_Hero.png"
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone, FiMail } from 'react-icons/fi';
import CustomBtn from '../Button/CustomBtn';
import ContactFooter from './ContactFooter';

const faqs = [
    { question: "1. How do I get a quote for a project?", answer: "To get a quote, please contact us with your project details and requirements." },
    { question: "2. What services do you offer?", answer: "We offer technology, multimedia, business strategy, and other services." },
    { question: "3. How long does a typical project take?", answer: "Project timelines vary based on scope and complexity." },
    { question: "4. Can you handle urgent or fast-track projects?", answer: "Yes, we can accommodate urgent project timelines when needed." },
    { question: "5. Do you offer post-project support or maintenance?", answer: "Yes, we provide ongoing support and maintenance plans." },
    { question: "6. What if I'm not sure which service fits my needs?", answer: "Contact us and we'll guide you based on your goals." },
];

const Contact = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/send-mail`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert('Message sent successfully!');
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <>
            <header className='flex flex-col w-full min-h-screen justify-start items-center relative pb-15'>
                <img className='absolute w-full h-full z-0 object-cover' src={bg} alt="" />
                <div className='absolute top-0 left-0 w-full h-full bg-black/70 z-10'></div>         
                {/* Main content container - adjusted positioning */}
                <div className='flex flex-col items-center gap-6 text-center w-full max-w-6xl z-20 text-white px-4 mt-32 md:mt-40'>
                    <h1 className='text-[#19BDE8] font-semibold text-3xl sm:text-4xl md:text-6xl'>Contact Us</h1>
                    <p className='font-normal text-base sm:text-lg md:text-2xl max-w-3xl'>
                        We'd love to hear from you! Whether you have a question, need assistance, or want to explore how we can work together, our team is here to help.
                    </p>
                    <a
                        href="https://outlook.office365.com/book/Catherine1@deepdarkcreations.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    
                        {/* <button className="flex items-center gap-3 font-semibold text-base sm:text-lg md:text-2xl text-white bg-[#19BDE8] py-3 px-5 rounded-xl cursor-pointer hover:bg-[#159dc3] transition">
                            Booking Appointment
                            <svg
                                width="9"
                                height="15"
                                viewBox="0 0 9 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.50005 1.5C1.50005 1.5 7.5 5.9189 7.5 7.5C7.5 9.0812 1.5 13.5 1.5 13.5"
                                    stroke="#EBEBEB"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button> */}
                        <CustomBtn> Booking Appointment</CustomBtn>
                    
                    </a>
                </div>

                {/* Contact cards container - adjusted spacing */}
                <div className='z-20 flex flex-wrap justify-center items-stretch gap-6 w-full max-w-6xl px-4 mt-16 md:mt-20'>
                    <div className='rounded-2xl p-6 flex flex-col justify-center gap-4 bg-white/10 w-full sm:w-[280px] min-h-[188px] text-white items-center text-center backdrop-blur-sm'>
                        <HiOutlineLocationMarker className='h-12 w-12 sm:h-16 sm:w-16 text-[#19BDE8]' />
                        <div>
                            <p className='font-normal text-lg sm:text-xl'>Manvian Solutions</p>
                            <p className='font-normal text-lg sm:text-xl'>Ambattur, Chennai</p>
                        </div>
                    </div>
                    <div className='rounded-2xl p-6 flex flex-col justify-center gap-4 bg-white/10 w-full sm:w-[280px] min-h-[188px] text-white items-center text-center backdrop-blur-sm'>
                        <FiPhone className='h-12 w-12 sm:h-16 sm:w-16 text-[#19BDE8]' />
                        <div>
                            <p className='font-normal text-lg sm:text-xl'>Call Us</p>
                            <p className='font-normal text-lg sm:text-xl'>+91 87783 59643</p>
                        </div>
                    </div>
                    <div className='rounded-2xl p-6 flex flex-col justify-center gap-4 bg-white/10 w-full sm:w-[280px] min-h-[188px] text-white items-center text-center backdrop-blur-sm'>
                        <FiMail className='h-12 w-12 sm:h-16 sm:w-16 text-[#19BDE8]' />
                        <div>
                            <p className='font-normal text-lg sm:text-xl'>E-Mail Us</p>
                            <p className='font-normal text-lg sm:text-xl'>admin@manvian.com</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* FAQS */}
            <section className="max-w-3xl mx-auto px-4 pt-20">
                <h2 className="text-center text-xl sm:text-2xl font-semibold text-[#19BDE8] mb-8">
                    Quick Answers to Your Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-300 rounded-xl transition-all duration-300">
                            <button
                                className="w-full text-left px-5 py-4 font-semibold hover:bg-gray-50"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                            </button>
                            <div
                                className={`px-5 pb-4 text-gray-600 text-sm sm:text-base transition-all duration-300 ${activeIndex === index ? 'block' : 'hidden'}`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Form */}
            <div className='w-full bg-white py-12 flex flex-col items-center'>
                <div className='text-center max-w-2xl p-5'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#19BDE8] mb-3'>Still Have Questions?</h2>
                    <p className='text-gray-600 text-sm sm:text-base md:text-lg'>
                        Didn't find your answer above? We're here to help. Just fill out the form below and we’ll get back to you soon.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className='bg-white shadow-2xl rounded-xl px-4 sm:px-8 md:px-10 flex flex-col gap-6 w-full max-w-4xl mx-auto mt-15 mb-20 pb-10'>
                    <h1 className='text-[#19BDE8] font-semibold text-2xl sm:text-3xl md:text-4xl'>Get in Touch</h1>
                    <p className='font-normal text-sm sm:text-base md:text-lg text-[#1E1E1E]'>
                        Fill out our quick contact form, and we’ll get back to you promptly.
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <label className='block text-gray-700 mb-2 font-medium'>Name</label>
                            <input
                                type='text'
                                placeholder='Enter Name'
                                className='w-full border border-gray-300 p-3 rounded focus:outline-none'
                                name="name"
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700 mb-2 font-medium'>Email ID</label>
                            <input
                                type='email'
                                placeholder='Enter Email-ID'
                                className='w-full border border-gray-300 p-3 rounded focus:outline-none'
                                name="email"
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700 mb-2 font-medium'>Phone Number</label>
                            <input
                                type='tel'
                                placeholder='Enter PhoneNumber'
                                className='w-full border border-gray-300 p-3 rounded focus:outline-none'
                                name="phone"
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700 mb-2 font-medium'>Location</label>
                            <input
                                type='text'
                                placeholder='Enter Location'
                                className='w-full border border-gray-300 p-3 rounded focus:outline-none'
                                name="location"
                            />
                        </div>
                    </div>
                    <div>
                        <label className='block text-gray-700 mb-2 font-medium'>Message</label>
                        <textarea
                            rows="6"
                            placeholder='Write Message'
                            className='w-full border border-gray-300 p-3 rounded focus:outline-none'
                            name="message"
                        ></textarea>
                    </div>
                    <div className='text-right'>
                        <button className='bg-[#19BDE8] text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg'>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            {/* Footer */}
            <ContactFooter />
        </>
    )
}

export default Contact;
