import React from 'react';
import bg from '../../assets/Portfolio/Technology/HeroSection.png'
import one from '../../assets/Portfolio/Technology/1.png'
import two from '../../assets/Portfolio/Technology/2.png'
import three from '../../assets/Portfolio/Technology/3.png'
import Explore from '../Service/Explore';
import Footer from '../Footer/Footer';
import key1 from '../../assets/Portfolio/MultiMedia-portfolio/keyOutCome1.webp';

const Technology_Portfolio = () => {
  return (
    <>
      {/* header */}
      <header className='flex w-full h-[822.86px] justify-center items-center relative'>
        <img className='absolute w-full h-full z-0 object-cover' src={bg} alt="Background" />
        {/* overlay */}
        <div className='absolute top-0 left-0 w-full h-full bg-black/65 z-10'></div>
        <div className='flex flex-col items-center gap-6 text-center w-full md:w-6xl h-auto z-20 text-white px-4'>
          <h1 className='text-[#19BDE8] font-semibold text-4xl sm:text-6xl'>Real Work. Real Results.</h1>
          <p className='font-normal text-lg sm:text-xl'>
            Ready to power up your business with smart, scalable tech? From website design to AI-driven systems, we build digital solutions that drive real growth and success.
          </p>
          <a href="#">
            <button className='flex items-center gap-3 font-semibold text-xl sm:text-2xl text-white bg-[#19BDE8] py-3 px-4 rounded-xl cursor-pointer'>
              Start Your Digital Transformation
              <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.50005 1.5C1.50005 1.5 7.5 5.9189 7.5 7.5C7.5 9.0812 1.5 13.5 1.5 13.5" stroke="#EBEBEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </a>
        </div>
      </header>
      
      {/* main */}
      <main className='mb-15'>
        {/* Web Design */}
        <section className='max-w-6xl mt-10 mx-auto px-4 md:px-6 lg:px-8 py-10'>
          <h2 className="text-4xl font-semibold text-[#19BDE8] text-center mb-8">
            Cutting-Edge Tech Solutions
          </h2>
          <h2 className='font-medium text-2xl md:text-3xl mb-6'>Website Design</h2>
          <img 
            src={one} 
            alt="Website Design" 
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg" 
          />
          <div className="w-full max-w-[1200px] mx-auto mt-10">
            <div className="flex flex-col md:flex-row md:justify-between md:gap-16 gap-6">
              <div className="flex flex-col ">
                <h3 className="text-2xl md:text-3xl font-medium mb-4">Client</h3>
                <p className='text-lg text-gray-700'>Shimmr Studios</p>
              </div>
              <div className="flex flex-col ">
                <h3 className="text-2xl md:text-3xl font-medium mb-4">What they do</h3>
                <p className='text-lg text-gray-700 leading-relaxed'>
                  Shimmr Studios drives musical innovation through expert music production, including beat making, film scoring, recording, mixing, and mastering.
                </p>
              </div>
              <div className="flex flex-col ">
                <h3 className="text-2xl md:text-3xl font-medium mb-4">Project overview</h3>
                <p className='text-lg text-gray-700 leading-relaxed'>
                  <strong>Shimmr Studios website</strong> blends musical artistry with intuitive navigation and high user engagement. Built with <strong>PHP, JavaScript, and Firebase</strong>, it offers a dynamic and responsive experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        

        {/* Ecommerce */}
        <section className='max-w-6xl mt-10 mx-auto p-6 rounded-md'>
          <h2 className='font-medium text-2xl mt-8 sm:mt-15 mb-5'>E-commerce Platform</h2>
          <img src={two} alt="E-commerce Platform" className="w-full rounded-lg" />
          <div className="w-full max-w-[1200px] mx-auto mt-10">
            <div className="flex flex-col md:flex-row md:justify-between md:gap-16 gap-6">
              <div className="flex flex-col ">
                <h3 className="text-2xl md:text-3xl font-medium mb-4">Client</h3>
                <p className='text-lg text-gray-700'>Motiff Bespoke</p>
              </div>
              <div className="flex flex-col ">
                <h3 className="text-2xl md:text-3xl font-medium mb-4">What they do</h3>
                <p className='text-lg text-gray-700 leading-relaxed'>
                Motiff Bespoke leverages 17+ years of fashion expertise to create custom garments blending art and functionality. They offer personalized, high-quality clothing tailored for professionals.
                </p>
              </div>
              <div className="flex flex-col ">
                <h3 className="text-2xl md:text-3xl font-medium mb-4">Project overview</h3>
                <p className='text-lg text-gray-700 leading-relaxed'>
                Motiff Bespoke is an <strong>e-commerce platform</strong> built with <strong> Next.js, Astro.js, and Cloudflare,</strong> offering a seamless shopping experience with fast performance and security.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Another E-commerce Platform */}
        <section className='max-w-6xl mt-10 mx-auto p-6 rounded-md'>
          <h2 className='font-medium text-2xl mt-8 sm:mt-15 mb-5'>E-commerce Platform</h2>
          <img src={three} alt="Another E-commerce Platform" className="w-full rounded-lg" />
          <div className="w-full max-w-[1200px] mx-auto mt-10">
            <div className="flex flex-col md:flex-row md:justify-around md:gap-16 gap-6">
              <div className="flex flex-col ">
                <h3 className="text-2xl md:text-3xl font-medium mb-4">Client</h3>
                <p className='text-lg text-gray-700'>KISEM</p>
              </div>
              <div className="flex flex-col ">
                <h3 className="text-2xl md:text-3xl font-medium mb-4">What they do</h3>
                <p className='text-lg text-gray-700 leading-relaxed'>
                KISEM (Kotak - IIT Madras Save Energy Mission) enhances energy efficiency in Indian MSMEs through assessments, sustainability studies, and energy conservation measures, promoting a sustainable future.
                </p>
              </div>
              <div className="flex flex-col ">
                <h3 className="text-2xl md:text-3xl font-medium mb-4">Project overview</h3>
                <p className='text-lg text-gray-700 leading-relaxed'>
                KISEM is a real-time <strong>chat application</strong>  built using <strong>WordPress, MariaDB, and Google Analytics.</strong> It provides seamless communication while integrating performance tracking for enhanced user experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className='mt-20 mx-auto px-4 md:px-6 rounded-md'>
          <div className='px-4 md:px-10'>
            <h2 className="text-4xl font-semibold text-[#19BDE8] text-center mb-3">
              Impact of Our Technology Services
            </h2>
            <p className='font-normal text-xl pt-3 text-center'>
              Our tech solutions enabled clients to digitally transform, streamline their user experience, and present their services more efficiently online.
            </p>
          </div>
          <div className='relative w-full lg:w-[1041px] min-h-[481px] mt-8 mx-auto'>
            <div className='w-full lg:w-[588px] bg-gradient-to-t from-[#19BDE8] to-[#FFFFFF] p-6 rounded-lg shadow-xl absolute z-10 top-10'>
              <h1 className='font-medium text-2xl md:text-3xl'>Key Outcomes:</h1>
              <ul className='list-disc pl-6 md:pl-10 mt-5 text-lg md:text-xl font-normal space-y-4'>
                <li>Delivered custom solutions aligned with each client's business goals.</li>
                <li>Built future-ready platforms using the latest technologies.</li>
                <li>Enhanced customer experience through intuitive interface design.</li>
                <li>Strengthened online presence with high-performing, reliable systems.</li>
              </ul>
            </div>
            <div className='w-full lg:w-[588px] absolute right-0'>
              <img
                className='rounded-xl w-full h-[300px] lg:h-[450px] object-cover lg:block hidden'
                src={key1}
                alt="Impact Key Outcomes"
              />
            </div>
          </div>
        </section>

        {/* Value */}
        <section className='mt-10 md:mt-20 mx-auto px-4 md:px-6 rounded-md'>
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
                className='rounded-xl w-full h-[300px] lg:h-[450px] object-cover lg:block hidden'
                src={key1}
                alt="Value Key Outcomes"
              />
            </div>
            <div className='w-full lg:w-[588px] bg-gradient-to-t from-[#19BDE8] to-[#FFFFFF] p-6 rounded-lg shadow-xl absolute right-0 z-10 top-10'>
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
      </main>

      <Explore/>
      <Footer />
    </>
  );
};

export default Technology_Portfolio;
