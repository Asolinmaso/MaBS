import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebookF, FaTwitter, FaYoutube, } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import opptiverse from '../../assets/Logo/opptiverse.svg'
import Linked from '../../assets/Logo/Linkedin.svg'
import Insta from '../../assets/Logo/insta.svg'
import Whatsapp from '../../assets/Logo/whatsapp.svg'
import fb from '../../assets/Logo/facebook.svg'
const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white px-10 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Column 1 - Brand and Contact */}
        <div className="space-y-4 col-span-1">
          <h2 className="text-2xl font-bold">Manvian</h2>

          <div className="space-y-2">
            <p className="flex items-center gap-2 text-sm">
              <MdEmail /> operations@manvian.com
            </p>
            <p className="flex items-center gap-2 text-sm">
              <MdPhone /> +91 87783 59643
            </p>
          </div>
          


          <div className='flex mt-4 gap-3 text-xs whitespace-nowrap'>
            <div>
              <h1 className='font-semibold'>What we do</h1>
              <ul className='font-extralight text-xs mt-2 flex flex-col gap-2'>
                <li>RAAS</li>
                <li>Sales</li>
                <li>Multimedia Solution</li>
                <li>Technology Solution</li>
                <li>Digital Marketing Solution</li>
              </ul>
            </div>
            <div>
              <h1 className='font-semibold'>Who we are</h1>
              <ul className='font-extralight text-xs mt-2 flex flex-col gap-2'>
                <li>Our Mission</li>
                <li>Our Vision</li>
                <li>Goal</li>
                <li>Value</li>
              </ul>
            </div>
            <div>
              <h1 className='font-semibold'>Career</h1>
            </div>
            <div>
              <h1 className='font-semibold'>Insights</h1>
            </div>
            <div>
              <h1 className='font-semibold'>Product</h1>
            </div>
            <div>
              <h1 className='font-semibold'>Contact</h1>
            </div>
          </div>
        </div>

        {/* Column 2 - Resources */}
        <div className="w-max">
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="space-y-1 text-sm">
            <li>Blog</li>
            <li>Newsletter</li>
          </ul>
        </div>

        {/* Column 3 - Form spans 2 columns */}
        <div className="md:col-span-2">
          <h2
            className="text-xl font-bold mb-4"
            style={{ fontFamily: 'Montserrat' }}
          >
            Reach Us to Grow Your Business
          </h2>
          <form action="#" className="space-y-4">
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="Name"
                className="bg-white text-black p-2 w-full outline-none"
              />
              <input
                type="email"
                placeholder="Email ID"
                className="bg-white text-black p-2 w-full outline-none"
              />
            </div>
            {/* 2nd row */}
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-white text-black p-2 w-full outline-none"
              />

              <select
                id="country"
                name="country"
                className="bg-white text-black p-2 w-full outline-none"
              >
                <option value="" className=''>-- Choose Country --</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="India">India</option>
                <option value="Australia">Australia</option>
                <option value="Japan">Japan</option>
                <option value="China">China</option>
                <option value="Brazil">Brazil</option>
                <option value="Mexico">Mexico</option>
                <option value="South Korea">South Korea</option>
                <option value="Russia">Russia</option>
                <option value="Italy">Italy</option>
                <option value="Spain">Spain</option>
              </select>
            </div>


            <textarea
              placeholder="Tell us a little about yourself — we’re here for you and happy to help however we can!"
              className="bg-white text-black p-2 w-full h-28 outline-none resize-none"
            />
            <button
              type="submit"
              className="group inline-flex items-center bg-transparent border border-white px-4 py-2 font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              <span className="group-hover:pr-2 transition-all duration-300">
                Reach Us
              </span>
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                →
              </span>
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-xs text-gray-300 flex flex-wrap justify-between items-center">
        <div className="space-x-4">
        <div className="flex mt-4 text-lg">
            <a href="https://www.linkedin.com/company/manvian/" target='_blank'><img className='w-[50px] h-[50px]' src={opptiverse} alt="" /></a>
            <a href="https://www.linkedin.com/company/manvian/" target='_blank'><img className='w-[50px] h-[50px]' src={Linked} alt="" /></a>
            <a href="https://www.linkedin.com/company/manvian/" target='_blank'><img className='w-[50px] h-[50px]' src={Insta} alt="" /></a>
            <a href="https://www.linkedin.com/company/manvian/" target='_blank'><img className='w-[50px] h-[50px]' src={Whatsapp} alt="" /></a>
            <a href="https://www.linkedin.com/company/manvian/" target='_blank'><img className='w-[50px] h-[50px]' src={fb} alt="" /></a>
          </div>
        </div>
        <p className="mt-2 md:mt-0">
          &copy; {new Date().getFullYear()} Manvian.com .All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
