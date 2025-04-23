import React from 'react'
import bg from '../../assets/Portfolio/MultiMedia-portfolio/HeroSection.png'
import icon from '../../assets/Portfolio/MultiMedia-portfolio/Icon-Design.png'
import logo_Alg from '../../assets/Portfolio/MultiMedia-portfolio/Logo_Algorithms.png'
import icon_creation from '../../assets/Portfolio/MultiMedia-portfolio/icon_creation.png'
import work_img from '../../assets/Portfolio/MultiMedia-portfolio/work_img.png'
import Footer from '../Footer/Footer'
import Explore from '../Service/Explore'
const MultiMedia_portfolio = () => {
  return (
    <>
      <header className='flex w-[1440px] h-[822.86px]  justify-center items-center relative'>
        <img className='absolute w-full h-full  z-0' src={bg} alt="" />
        {/* overlay */}
        <div className='absolute top-0 left-0 w-full h-full bg-black/65 z-10'></div>
        <div className='flex flex-col items-center gap-6 text-center w-6xl h-96 z-20 text-white' >
          <h1 className='text-[#19BDE8] font-semibold text-6xl' >Real Work. Real Results.</h1>
          <p className='font-normal text-xl'>
            Ready to take your business to the next level? Whether you’re building a bold brand or creating something meaningful, we transform your ideas into powerful visuals and seamless digital experiences that make a real impact.
          </p>
          <a href="#" className=''>
            <button className='flex items-center gap-3 font-semibold text-2xl text-white bg-[#19BDE8] py-3 px-3.5 rounded-xl cursor-pointer'>
              Make Your Brand Stand Out
              <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.50005 1.5C1.50005 1.5 7.5 5.9189 7.5 7.5C7.5 9.0812 1.5 13.5 1.5 13.5" stroke="#EBEBEB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </a>
        </div>
      </header>
      <main>
        {/* Brand Identity */}
        <div className="max-w-4xl mt-10 mx-auto p-6  rounded-md">
          <h2 className="text-4xl font-semibold text-[#19BDE8] text-center mb-4">
            Brand Identity That Stands Out
          </h2>
          <h2 className='font-medium text-2xl mt-15'>Logo Design</h2>
          <section className="grid md:grid-cols-2 gap-6 items-center">
            {/* Logo Section */}
            <div className="flex flex-col justify-center items-center">
              <img
                src={icon} // Replace with actual path
                alt="NM-ICPS Logo"
                className="w-[401px] h-[406px] mb-4"
              />
            </div>
            {/* Textual Content */}
            <div>
              <p className="text-xl mb-1 font-medium">Client</p>
              <p className="mb-2 text-md font-normal">
                National Mission on Interdisciplinary Cyber-Physical Systems (NM-ICPS)
              </p>
              <p className="text-xl mb-1 font-medium">What they do</p>
              <p className="mb-2 text-md font-normal">
                NM-ICPS promotes innovation in CPS by connecting academia, industry, government,
                and international bodies to develop impactful technologies and prototypes.
              </p>
              <p className="text-xl mb-1 font-medium">Logo Concept</p>
              <p className="mb-2 text-md font-normal">
                The logo combines Wi-Fi, antenna, and bulb icons to symbolize connectivity,
                intelligence, and innovation. It reflects a fusion of hardware and software, with a
                color palette inspired by the Indian national flag to represent the country.
              </p>
            </div>
          </section>
          {/* Icon Creation Section */}
          <div className="mt-6 text-center">
            <div className="flex justify-center items-center space-x-4 text-sm">
              <div>
                <img src={logo_Alg} alt="" />
              </div>
              <div>
                <img src={icon_creation} alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Visul content */}
      <section className=' max-w-4xl mt-10 mx-auto p-6  rounded-md'>
        <h2 className="text-4xl font-semibold text-[#19BDE8] text-center mb-3">
          Visual Content That Engages
        </h2>
        <p className='font-medium text-3xl pt-3'>Graphic Design & Print AD</p>
        <div className='flex justify-between  gap-6 mt-7'>
          <div className='w-[424px] '>
            <h1 className="font-medium text-xl mb-2">Client</h1>
            <p className='font-normal text-md'>IITM Pravartak</p>
            <p className='font-normal text-md'> Technology Innovation Hub at IIT Madras.</p>
          </div>
          <div className='w-[736px]'>
            <h1 className='font-medium text-xl mb-2'>What They Do</h1>
            <p className='font-normal text-md'>IITM Pravartak drives innovation in Sensors, Networking, Actuators, and Control Systems (SNACS) through technology development, entrepreneurship, skill-building, and global collaborations.</p>
          </div>
        </div>
        <img src={work_img} className='mt-4' alt="" />
      </section>
      {/* impact */}

      <section className='mt-10 mx-auto px-6  rounded-md'>
        <div className='pl-10 pr-10'>
          <h2 className="text-4xl font-semibold text-[#19BDE8] text-center mb-3">
            Impact of Our Multimedia Services
          </h2>
          <p className='font-normal text-xl pt-3 text-center'>
            Our multimedia work helped clients strengthen brand identity, enhance visual communication,
            and connect more effectively with their audiences. Through design and storytelling, we made
            their message memorable.
          </p>
        </div>

        <div className='relative w-[1041px] h-[481px] mt-15 mx-auto'>
          {/* This div now uses absolute positioning to sit above the image */}
          <div className='absolute top-10 left-0 bg-gradient-to-t from-[#19BDE8] to-[#FFFFFF] w-[588px] min-h-[307px] p-6 rounded-lg shadow-xl z-10'>
            <h1 className='mt-3 font-medium text-3xl'>Key Outcomes:</h1>
            <ul className='list-disc pl-10 mt-5 text-xl font-normal space-y-4'>
              <li>Improved audience engagement through clean, creative visuals.</li>
              <li>Boosted professional image with meaningful branding.</li>
              <li>Elevated communication of complex ideas using graphics and video.</li>
              <li>Increased recognition through consistent and tailored design assets.</li>
            </ul>
          </div>

          {/* Image placeholder below the box */}
          <div className='absolute right-0 top-0 z-0'>
            <img
              className='bg-gray-300 rounded-xl w-[588px] h-[450px]'
              src=""
              alt=""
            />
          </div>
        </div>
      </section>
      {/* value */}
      <section className='mt-10 mx-auto px-6 rounded-md'>
        <div className='pl-10 pr-10'>
          <h2 className="text-4xl font-semibold text-[#19BDE8] text-center mb-3">
            Value We Delivered to Our Clients
          </h2>
          <p className='font-normal text-xl pt-3 text-center'>
            We didn’t just design — we delivered solutions with intent. Each project brought real value by aligning with the client’s goals and enhancing their brand presence.
          </p>
        </div>

        <div className='relative w-[1041px] h-[481px] mt-15 mx-auto'>
          {/* Image on the left */}
          <div className='absolute left-0 top-0 z-0'>
            <img
              className='bg-gray-300 rounded-xl w-[588px] h-[450px]'
              src=""
              alt=""
            />
          </div>

          {/* Content box on the right */}
          <div className='absolute top-10 right-0 bg-gradient-to-t from-[#19BDE8] to-[#FFFFFF] w-[588px] min-h-[307px] p-6 rounded-lg shadow-xl z-10'>
            <h1 className='mt-3 font-medium text-3xl'>Key Outcomes:</h1>
            <ul className='list-disc pl-10 mt-5 text-xl font-normal space-y-4'>
              <li>Custom, high-quality visual assets for long-term use</li>
              <li>A distinct visual identity that resonates with their audience</li>
              <li>Greater confidence in presenting their work publicly</li>
              <li>Time and effort saved through professional, ready-to-use designs</li>
            </ul>
          </div>
        </div>
      </section>
      {/*Explore */}
      <section className="flex justify-between items-center px-10 py-16 bg-white">
        {/* Left Content */}
        <div className="w-1/2 pr-10">
          <h2 className="text-3xl font-semibold text-[#19BDE8] mb-4">Want to Explore More?</h2>
          <p className="text-lg text-gray-800 mb-6">
            If you’d like to see more of our creative work and how we bring brands to life through design,
            click the button below.
          </p>
          <button className="bg-[#19BDE8] hover:bg-[#0eaed4] text-white text-lg px-6 py-3 rounded-md font-medium">
            See More Multimedia Projects &nbsp; &gt;
          </button>
        </div>

        {/* Right Image Grid */}
        <div className="grid grid-cols-2 gap-4 w-1/2">
          <div className="bg-gray-200 h-30 rounded-md"></div>
          <div className="bg-gray-200 h-32 rounded-md"></div>
          <div className="bg-gray-200 h-34 rounded-md"></div>
          <div className="bg-gray-200 h-24 rounded-md"></div>
        </div>
      </section>
      <Explore />
      <Footer />
    </>
  )
}

export default MultiMedia_portfolio