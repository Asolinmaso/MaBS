import React from 'react'
import bg from "../../assets/Contact/Contact_Hero.png"
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagramSquare, FaWhatsapp } from 'react-icons/fa';
import Map from '../../assets/Contact/Map.png'
import Footer from '../Footer/Footer';
import opptiverse from '../../assets/Logo/opptiverse.svg'
import Linked from '../../assets/Logo/Linkedin.svg'
import Insta from '../../assets/Logo/insta.svg'
import Whatsapp from '../../assets/Logo/whatsapp.svg'
import fb from '../../assets/Logo/facebook.svg'

// Define the countries array
const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];


const Contact = () => {
    return (
        <>
            <header className='flex flex-col w-[1440px] h-[822.86px]  justify-center items-center relative '>
                <img className='absolute w-full h-full  z-0 ' src={bg} alt="" />
                {/* overlay */}
                <div className='absolute top-0 left-0 w-full h-full bg-black/70 z-10'></div>
                <div className='flex flex-col items-center gap-6 text-center w-6xl h-96 z-20 text-white '  >
                    <h1 className='text-[#19BDE8] font-semibold text-6xl' >Contact Us</h1>
                    <p className='font-normal text-2xl'>  We’d love to hear from you! Whether you have a question, need assistance, or want to explore how we can work together, our team is here to help.</p>
                    <a href="https://outlook.office365.com/book/Catherine1@deepdarkcreations.com/" target='_blank'>
                        <button className='mt-4  border-2 rounded-lg p-4 border-[#19BDE8] text-[#19BDE8] font-medium text-2xl  hover:border-white focus:scale-90 hover:text-white  cursor-pointer'>
                            Booking Appointment
                        </button></a>
                </div>
                <div className='z-20 flex gap-14 w-[981px] h-[188px] '>
                    <div className='rounded-2xl p-6 flex flex-col gap-6 bg-white/10 w-[287px] h-[188px] text-white items-center text-center'>
                        < HiOutlineLocationMarker className='h-17 w-16 text-[#19BDE8] ' />
                        <div>
                            <p className='font-normal text-xl '>Manvian Solutions</p>
                            <p className='font-normal text-xl '>Ambattur, Chennai</p>

                        </div>

                    </div>
                    <div className='rounded-2xl p-6 flex flex-col gap-6 bg-white/10 w-[287px] h-[188px] text-white items-center text-center'>
                        < FiPhone className='h-16 w-16 text-[#19BDE8]' />
                        <div>
                            <p className='font-normal text-xl '>Call Us</p>
                            <p className='font-normal text-xl '>+91 87783 59643</p>
                        </div>
                    </div>
                    <div className='rounded-2xl p-6 flex flex-col gap-6 bg-white/10 w-[287px] h-[188px] text-white items-center text-center'>
                        < FiMail className='h-16 w-16 text-[#19BDE8]' />
                        <div>
                        <p className='font-normal text-2xl '>E-Mail Us</p>
                        <p className='font-normal text-2xl '>admin@manvian.com</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Form */}
            <div className='bg-white flex justify-center items-center'>
                <form action="" className='bg-white shadow-2xl rounded-xl p-10 flex flex-col gap-6 w-full max-w-4xl mx-auto  mt-20 mb-20'>
                    <h1 className='text-[#19BDE8] font-semibold text-4xl' >Get in Touch</h1>
                    <p className='font-normal text-lg text-[#1E1E1E]' >Fill out our quick contact form, and we’ll get back to you promptly.</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <label className='block text-gray-700 mb-2 font-medium'>Name</label>
                            <input
                                type='text'
                                placeholder='Enter Name'
                                className='w-full border border-gray-300 p-3 rounded focus:outline-none '
                            />
                        </div>

                        <div>
                            <label className='block text-gray-700 mb-2 font-medium'>Email ID</label>
                            <input
                                type='email'
                                placeholder='Enter Email-ID'
                                className='w-full border border-gray-300 p-3 rounded focus:outline-none '
                            />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <label className='block text-gray-700 mb-2 font-medium'>Phone Number</label>
                            <input
                                type='tel'
                                placeholder='Enter phone Number'
                                className='w-full border border-gray-300 p-3 rounded focus:outline-none '
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700 mb-2 font-medium'>Country</label>
                            <select
                                id="country"
                                name="country"
                                className="bg-white text-black p-3 w-full border border-gray-300 rounded focus:outline-none"
                            >
                                {countries.map((country, index) => (
                                    <option key={index} value={country === "-- Choose Country --" ? "" : country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className='block text-gray-700 mb-2 font-medium'>Message</label>
                        <textarea
                            rows='4'
                            placeholder='Tell us a little about yourself — we’re here for you and happy to help however we can!'
                            className='w-full border border-gray-300 p-3 rounded resize-none focus:outline-none '
                        />
                    </div>

                    <div className='flex justify-center gap-6'>
                        <button
                            type='submit'
                            className='bg-white text-[#19BDE8] border-2 border-[#19BDE8]  py-3 px-8 rounded font-semibold  transition cursor-pointer'
                        >
                            Cancel
                        </button>
                        <button
                            type='submit'
                            className='bg-[#19BDE8] text-white py-3 px-8 rounded font-semibold hover:bg-[#1599bb] transition cursor-pointer'
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            {/* Follow US */}
            <div className='w-[1440px] h-[341px]  flex  justify-center items-center bg-[#80E0F5] '>
                <div className='flex flex-col text-center gap-6 '>
                    <h1 className='text-black text-4xl font-semibold' > Follow Us</h1>
                    <p className='font-normal text-2xl' >Stay connected with us on social media for updates, insights, and more.</p>
                    <div className='ml-5 mt-4 flex justify-center items-center  gap-12 '>
                        <a href="https://www.linkedin.com/company/manvian/" target='_blank'><img className='w-[75px] h-[80px]' src={opptiverse} alt="" /></a>
                        <a href="https://www.linkedin.com/company/manvian/" target='_blank'><img className='w-[75px] h-[80px]' src={Linked} alt="" /></a>
                        <a href="https://www.linkedin.com/company/manvian/" target='_blank'><img className='w-[75px] h-[80px]' src={Insta} alt="" /></a>
                        <a href="https://www.linkedin.com/company/manvian/" target='_blank'><img className='w-[75px] h-[80px]' src={Whatsapp} alt="" /></a>
                        <a href="https://www.linkedin.com/company/manvian/" target='_blank'><img className='w-[75px] h-[80px]' src={fb} alt="" /></a>
                    </div>
                    <p className='font-normal text-2xl'>Let’s start the conversation today!</p>
                </div>
            </div>

            {/* Map */}
            {/* <img className='w-[1440px] h-[421px]' src={Map} alt="" /> */}
            <Footer />
        </>
    )
}

export default Contact
