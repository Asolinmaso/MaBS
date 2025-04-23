import React from 'react';
import bg from '../../assets/Portfolio/Technology/HeroSection.png'
import one from '../../assets/Portfolio/Technology/1.png'
import two from '../../assets/Portfolio/Technology/2.png'
import three from '../../assets/Portfolio/Technology/3.png'
import Explore from '../Service/Explore';
import Footer from '../Footer/Footer';
const Technology_Portfolio = () => {
  return (
    <>
      {/* header */}
      <header className='flex w-[1440px] h-[822.86px]  justify-center items-center relative'>
        <img className='absolute w-full h-full  z-0' src={bg} alt="" />
        {/* overlay */}
        <div className='absolute top-0 left-0 w-full h-full bg-black/65 z-10'></div>
        <div className='flex flex-col items-center gap-6 text-center w-6xl h-96 z-20 text-white' >
          <h1 className='text-[#19BDE8] font-semibold text-6xl' >Real Work. Real Results.</h1>
          <p className='font-normal text-xl'>
            Ready to power up your business with smart, scalable tech? From website design to AI-driven systems, we build digital solutions that drive real growth and success.
          </p>
          <a href="#" className=''>
            <button className='flex items-center gap-3 font-semibold text-2xl text-white bg-[#19BDE8] py-3 px-3.5 rounded-xl cursor-pointer'>
              Start Your Digital Transformation
              <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.50005 1.5C1.50005 1.5 7.5 5.9189 7.5 7.5C7.5 9.0812 1.5 13.5 1.5 13.5" stroke="#EBEBEB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </a>
        </div>
      </header>
      {/* main */}
      <main>
        {/* webdesign */}
        <section className='max-w-6xl mt-10 mx-auto p-6  rounded-md'>
          <h2 className="text-4xl font-semibold text-[#19BDE8] text-center mb-4">
            Cutting-Edge Tech Solutions
          </h2>
          <h2 className='font-medium text-2xl mt-15 mb-5'>Website Design</h2>
          <img src={one} alt="" />
          <div className="max-w-[1200px] h-[245px] mx-auto  mt-6 p-5 text-black">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 h-full">
              <div >
                <h3 className="text-3xl font-medium mb-2">Client</h3>
                <p className='font-normal text-lg'>shimmr studios</p>
              </div>

              <div>
                <h3 className="text-3xl font-medium mb-2">What they do</h3>
                <p className='font-normal text-lg'>
                  Shimmr Studios drives musical innovation through expert music production, including beat making, film
                  scoring, recording, mixing, and mastering.
                </p>
              </div>
              <div className=''>
                <h3 className="text-3xl font-medium mb-2">Project overview</h3>
                <p className='font-normal text-lg'>
                  <strong>Shimmr Studios website</strong> blends musical artistry with intuitive navigation and high user
                  engagement. Built with <strong>PHP, JavaScript, and Firebase</strong>, it offers a dynamic and responsive
                  experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Ecommerce */}
        <section className='max-w-6xl mt-10  mx-auto p-6  rounded-md'>

          <h2 className='font-medium text-2xl mt-15 mb-5'>E-commerce Platform</h2>
          <img src={two} alt="" />
          <div className="max-w-[1200px] h-[245px] mx-auto  mt-6 p-5 text-black">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 h-full">
              <div >
                <h3 className="text-3xl font-medium mb-2">Client</h3>
                <p className='font-normal text-lg'>Motiff Bespoke</p>
              </div>

              <div>
                <h3 className="text-3xl font-medium mb-2">What they do</h3>
                <p className='font-normal text-lg'>
                  Motiff Bespoke leverages 17+ years of fashion expertise to create custom garments blending art and functionality. They offer personalized, high-quality clothing tailored for professionals.
                </p>
              </div>
              <div className=''>
                <h3 className="text-3xl font-medium mb-2">Project overview</h3>
                <p className='font-normal text-lg'>
                  Motiff Bespoke is an <strong>e-commerce platform </strong> built with
                  <strong>Next.js, Astro.js, and Cloudflare ,</strong>
                  offering a seamless shopping experience with fast performance and security.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* e commerce platofrm */}
        <section className='max-w-6xl mt-10  mx-auto p-6  rounded-md'>

          <h2 className='font-medium text-2xl mt-15 mb-5'>E-commerce Platform</h2>
          <img src={three} alt="" />
          <div className="max-w-[1200px] h-[245px] mx-auto  mt-6 p-5 text-black">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
              <div >
                <h3 className="text-3xl font-medium mb-2">Client</h3>
                <p className='font-normal text-lg'>KISEM</p>
                <p className='font-normal text-lg'>Kotak - IIT Madras</p>
              </div>

              <div>
                <h3 className="text-3xl font-medium mb-2">What they do</h3>
                <p className='font-normal text-lg'>
                  KISEM (Kotak - IIT Madras Save Energy Mission) enhances energy efficiency in Indian MSMEs through assessments, sustainability studies, and energy conservation measures, promoting a sustainable future.
                </p>
              </div>
              <div className=''>
                <h3 className="text-3xl font-medium mb-2">Project overview</h3>
                <p className='font-normal text-lg'>
                  KISEM is a real-time <strong> chat application</strong> built using <strong>WordPress, MariaDB, and Google Analytics.</strong>It provides seamless communication while integrating performance tracking for enhanced user experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* impact */}

        <section className='mt-10 mx-auto px-6  rounded-md'>
          <div className='pl-10 pr-10'>
            <h2 className="text-4xl font-semibold text-[#19BDE8] text-center mb-3">
              Impact of Our Technology Services
            </h2>
            <p className='font-normal text-xl pt-3 text-center'>
              Our tech solutions enabled clients to digitally transform, streamline their user experience, and present their services more efficiently online.
            </p>
          </div>

          <div className='relative w-[1041px] h-[481px] mt-15 mx-auto'>
            {/* This div now uses absolute positioning to sit above the image */}
            <div className='absolute top-10 left-0 bg-gradient-to-t from-[#19BDE8] to-[#FFFFFF] w-[588px] min-h-[307px] p-6 rounded-lg shadow-xl z-10'>
              <h1 className='mt-3 font-medium text-3xl'>Key Outcomes:</h1>
              <ul className='list-disc pl-10 mt-5 text-xl font-normal space-y-4'>
                <li>Delivered custom solutions aligned with each client’s business goals.</li>
                <li>Built future-ready platforms using the latest technologies.</li>
                <li>Enhanced customer experience through intuitive interface design.</li>
                <li>Strengthened online presence with high-performing, reliable systems.</li>
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
              By combining technical expertise with user-focused design, we created platforms that solve real problems and support business growth.
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
                <li>Custom-built solutions tailored to their business model</li>
                <li>Future-ready platforms using modern tech stacks</li>
                <li>Improved customer interaction through intuitive interfaces</li>
                <li>Stronger online presence backed by performance and reliability</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Explore/>
      <Footer/>




    </>
  );
};

export default Technology_Portfolio;
