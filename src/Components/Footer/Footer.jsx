import React, { useState } from "react";
import { MdEmail, MdPhone } from 'react-icons/md';
import opptiverse from '../../assets/Logo/opptiverse.svg';
import Linked from '../../assets/Logo/Linkedin.svg';
import Insta from '../../assets/Logo/insta.svg';
import Whatsapp from '../../assets/Logo/whatsapp.svg';
import fb from '../../assets/Logo/facebook.svg';
import MABS from '../../assets/Logo/MBS.svg';
import { Link } from "react-router-dom";
import axios from 'axios';

const Footer = () => {
  const countries = [
    "Afghanistan", "Algeria", "Argentina", "Australia", "Austria", "Bangladesh", "Belgium", "Botswana",
    "Brazil", "Bulgaria", "Canada", "Chile", "China", "Colombia", "Croatia", "Czech Republic", "Denmark",
    "Egypt", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "India", "Indonesia",
    "Iran", "Iraq", "Ireland", "Israel", "Italy", "Japan", "Kenya", "Kuwait", "Latvia", "Lithuania",
    "Luxembourg", "Malaysia", "Mexico", "Morocco", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nigeria",
    "Norway", "Pakistan", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Saudi Arabia",
    "Serbia", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "Sweden",
    "Switzerland", "Thailand", "Tunisia", "Turkey", "UAE", "Ukraine", "United Kingdom", "United States",
    "Venezuela", "Vietnam", "Zambia", "Zimbabwe"
  ];
  const [selectedCountry, setSelectedCountry] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/send-mail`, formData);
        alert(response.data.message);
    } catch (error) {
        console.error('Error submitting footer form:', error);
        alert('Failed to submit the footer form. Please try again.');
    }
  };

  return (
    <footer className="bg-[#1E1E1E] text-white py-10 px-5 md:px-20">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center space-x-3">
            {/* Logo Image */}
            <img src={MABS} alt="MABS Logo" className="w-25 h-auto" />
          </div>
          <p className="mt-4 text-sm">
            Empowering Businesses Through Design, Technology,<br />
            And Strategic Solutions.
          </p>
          <div className="mt-6 text-sm space-y-2">
            <p className="flex items-center gap-2 text-sm">
              <MdEmail /> operations@manvian.com
            </p>
            <p className="flex items-center gap-2 text-sm">
              <MdPhone /> +91 87783 59643
            </p>

            <div className="flex space-x-3 mt-4">
              <a href="https://www.linkedin.com/company/manvian/" target="_blank" rel="noreferrer">
                <img className="w-[50px] h-[50px]" src={opptiverse} alt="Opptiverse" />
              </a>
              <a href="https://www.linkedin.com/company/manvian/" target="_blank" rel="noreferrer">
                <img className="w-[50px] h-[50px]" src={Linked} alt="LinkedIn" />
              </a>
              <a href="https://www.linkedin.com/company/manvian/" target="_blank" rel="noreferrer">
                <img className="w-[50px] h-[50px]" src={Insta} alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/company/manvian/" target="_blank" rel="noreferrer">
                <img className="w-[50px] h-[50px]" src={Whatsapp} alt="Whatsapp" />
              </a>
              <a href="https://www.linkedin.com/company/manvian/" target="_blank" rel="noreferrer">
                <img className="w-[50px] h-[50px]" src={fb} alt="Facebook" />
              </a>

            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Reach Us to Grow Your Business</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="p-2 rounded bg-white text-black outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email ID"
                className="p-2 rounded bg-white text-black outline-none"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="p-2 rounded bg-white text-black outline-none"
              />
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`bg-white p-2 w-full outline-none rounded 
                 ${formData.country === "" ? "text-gray-400" : "text-black"}`}
              >
                <option value="" className="text-gray-300" disabled hidden>-- Choose Country --</option>
                {countries.map((country, index) => (
                  <option key={index} value={country} className="text-black">
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="mt-4 w-full p-2 rounded bg-white text-black h-24 outline-none"
            ></textarea>
            <button type="submit" className="mt-4 px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition">
              Reach Us
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="max-w-screen-xl mx-auto mt-10 border-b border-white pt-6 pb-4 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-0 text-sm">
        <div>
          <h4 className="font-semibold mb-2">What We Do</h4>
          <ul className="space-y-1">
            <li ><Link to='/service/RAAS' >RaaS</Link></li>
            <li><Link to='/service/Sales'>Sales</Link></li>
            <li><Link to='/service/TechSolution'>Technology</Link></li>
            <li><Link to='/service/DigitalMarketing'>Digital Marketing</Link></li>
            <li><Link to='/service/multimedia'>MultiMedia</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Who We Are</h4>
          <ul className="space-y-1">
            <li> <Link to="/who#mission">Our Mission </Link></li>
            <li> <Link to="/who#vision"> Our Vision</Link></li>
            <li> <Link to="/who#goal">Goal</Link></li>
            <li> <Link to="/who#value">Value</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li> <Link to='/careers'> Career </Link></li>
            <li><Link to='/insights'> Insights</Link></li>
            <li><Link to='/product'>Product</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="space-y-1">
            <li>Blog</li>
            <li>Newsletter</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-400 mt-8">
        © 2025 Manvian.Com. All Rights Reserved.
      </div>
    </footer >
  );
};

export default Footer;
