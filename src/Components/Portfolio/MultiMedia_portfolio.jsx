import React from 'react';
import bg from '../../assets/Portfolio/MultiMedia-portfolio/HeroSection.png';
import icon from '../../assets/Portfolio/MultiMedia-portfolio/Icon-Design.png';
import logo_Alg from '../../assets/Portfolio/MultiMedia-portfolio/Logo_Algorithms.png';
import icon_creation from '../../assets/Portfolio/MultiMedia-portfolio/icon_creation.png';
import work_img from '../../assets/Portfolio/MultiMedia-portfolio/work_img.png';
import Footer from '../Footer/Footer';
import Explore from '../Service/Explore';
import key1 from '../../assets/Portfolio/MultiMedia-portfolio/keyOutCome1.webp';
const MultiMedia_portfolio = () => {
  return (
    <>
      <header className='relative w-full h-[822.86px] flex justify-center items-center'>
        <img className='absolute w-full h-full z-0 object-cover' src={bg} alt="" />
        {/* Overlay */}
        <div className='absolute top-0 left-0 w-full h-full bg-black/65 z-10'></div>
        <div className='flex flex-col items-center gap-6 text-center w-11/12 max-w-6xl z-20 text-white'>
          <h1 className='text-[#19BDE8] font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
            Real Work. Real Results.
          </h1>
          <p className='font-normal text-base sm:text-lg md:text-xl'>
            Ready to take your business to the next level? Whether you’re building a bold brand or creating something meaningful, we transform your ideas into powerful visuals and seamless digital experiences that make a real impact.
          </p>
          <a href="#">
            <button className='flex items-center gap-3 font-semibold text-lg sm:text-xl text-white bg-[#19BDE8] py-3 px-6 rounded-xl cursor-pointer'>
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
        <div className="max-w-6xl mt-10 mx-auto p-6 rounded-md">
          <h2 className="text-4xl font-semibold text-[#19BDE8] text-center mb-4">
            Brand Identity That Stands Out
          </h2>
          <h2 className='font-medium text-2xl mt-10'>Logo Design</h2>
          <section className="grid md:grid-cols-2 gap-6 items-center">
            {/* Logo Section */}
            <div className="flex justify-center items-center">
              <img
                src={icon} // Replace with actual path
                alt="NM-ICPS Logo"
                className="w-[80%] md:w-[401px] h-auto mb-4"
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
                <img src={logo_Alg} alt="Logo Algorithms" className="w-[60%] md:w-[150px]" />
              </div>
              <div>
                <img src={icon_creation} alt="Icon Creation" className="w-[60%] md:w-[150px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Visual Content */}
        <section className="max-w-6xl mt-10 mx-auto p-6 rounded-md">
          <h2 className="text-4xl font-semibold text-[#19BDE8] text-center mb-3">
            Visual Content That Engages
          </h2>
          <p className='font-medium text-3xl pt-3'>Graphic Design & Print AD</p>
          <div className='flex flex-col md:flex-row justify-between gap-6 mt-7'>
            <div className='w-full md:w-[424px]'>
              <h1 className="font-medium text-xl mb-2">Client</h1>
              <p className='font-normal text-md'>IITM Pravartak</p>
              <p className='font-normal text-md'> Technology Innovation Hub at IIT Madras.</p>
            </div>
            <div className='w-full md:w-[736px]'>
              <h1 className='font-medium text-xl mb-2'>What They Do</h1>
              <p className='font-normal text-md'>
                IITM Pravartak drives innovation in Sensors, Networking, Actuators, and Control Systems (SNACS) through technology development, entrepreneurship, skill-building, and global collaborations.
              </p>
            </div>
          </div>
          <img src={work_img} className='mt-4 w-full h-auto' alt="Work Image" />
        </section>

        {/* Impact */}
      
        <section className='mt-10 mx-auto px-4 md:px-6 rounded-md'>
          <div className='px-4 md:px-10'>
            <h2 className="text-4xl font-semibold text-[#19BDE8] text-center mb-3">
              Impact of Our Multimedia Services
            </h2>
            <p className='font-normal text-xl pt-3 text-center'>
            Our multimedia work helped clients strengthen brand identity, enhance visual communication,
              and connect more effectively with their audiences. Through design and storytelling, we made
              their message memorable.            </p>
          </div>
          <div className='relative w-full lg:w-[1041px] min-h-[481px] mt-8 mx-auto'>
            <div className='w-full lg:w-[588px] bg-gradient-to-t from-[#19BDE8] to-[#FFFFFF] p-6 rounded-lg shadow-xl absolute z-10'>
              <h1 className='font-medium text-2xl md:text-3xl'>Key Outcomes:</h1>
              <ul className='list-disc pl-6 md:pl-10 mt-5 text-lg md:text-xl font-normal space-y-4'>
              <li>Improved audience engagement through clean, creative visuals.</li>
                <li>Boosted professional image with meaningful branding.</li>
                <li>Elevated communication of complex ideas using graphics and video.</li>
                <li>Increased recognition through consistent and tailored design assets.</li>
              </ul>
            </div>
            <div className='w-full lg:w-[588px] absolute right-0'>
              <img
                className='rounded-xl w-full h-[300px] lg:h-[450px] object-cover'
                src={key1}
                alt="Impact Key Outcomes"
              />
            </div>
          </div>
        </section>
        {/* Value */}
        <section className='mt-10 md:mt-[15px] mx-auto px-4 md:px-6 rounded-md'>
          <div className='px-4 md:px-10'>
            <h2 className="text-4xl font-semibold text-[#19BDE8] text-center mb-3">
              Value We Delivered to Our Clients
            </h2>
            <p className='font-normal text-xl pt-3 text-center'>
              By combining technical expertise with user-focused design, we created platforms that solve real problems and support business growth.
            </p>
          </div>
          <div className='relative w-full lg:w-[1041px] min-h-[481px] mt-8 mx-auto'>
            <div className='w-full lg:w-[588px] absolute left-0'>
              <img
                className='rounded-xl w-full h-[300px] lg:h-[450px] object-cover'
                src={key1}
                alt="Value Key Outcomes"
              />
            </div>
            <div className='w-full lg:w-[588px] bg-gradient-to-t from-[#19BDE8] to-[#FFFFFF] p-6 rounded-lg shadow-xl absolute right-0 z-10'>
              <h1 className='font-medium text-2xl md:text-3xl'>Key Outcomes:</h1>
              <ul className='list-disc pl-6 md:pl-10 mt-5 text-lg md:text-xl font-normal space-y-4'>
                <li>Custom-built solutions tailored to their business model</li>
                <li>Future-ready platforms using modern tech stacks</li>
                <li>Improved customer interaction through intuitive interfaces</li>
                <li>Stronger online presence backed by performance and reliability</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Explore */}
        <section className="flex flex-col md:flex-row justify-between items-center px-10 py-16 mt-4  bg-white">
          <div className="w-full md:w-1/2 pr-10">
            <h2 className="text-3xl font-semibold text-[#19BDE8] mb-4">Want to Explore More?</h2>
            <p className="text-lg text-gray-800 mb-6">
              If you’d like to see more of our creative work and how we bring brands to life through design,
              click the button below.
            </p>
            <button className="bg-[#19BDE8] hover:bg-[#0eaed4] text-white text-lg px-6 py-3 rounded-md font-medium mb-5">
              See More Multimedia Projects &nbsp; &gt;
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
            <div className="bg-gray-200 h-30 rounded-md"></div>
            <div className="bg-gray-200 h-32 rounded-md"></div>
            <div className="bg-gray-200 h-34 rounded-md"></div>
            <div className="bg-gray-200 h-24 rounded-md"></div>
          </div>
        </section>

        <Explore />
        <Footer />
      </main>
    </>
  );
};

export default MultiMedia_portfolio;
