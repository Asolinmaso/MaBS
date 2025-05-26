import React, { useState } from 'react';
import bg from '../../assets/Portfolio/Technology/HeroSection.png'
import one from '../../assets/Portfolio/Technology/1.png'
import two from '../../assets/Portfolio/Technology/2.png'
import three from '../../assets/Portfolio/Technology/3.png'
import Explore from '../Service/Explore';
import Footer from '../Footer/Footer';
import key1 from '../../assets/Portfolio/MultiMedia-portfolio/keyOutCome1.webp';
import CustomBtn from '../Button/CustomBtn';
import Value from '../../assets/Portfolio/Value.mp4'
import Impact from '../../assets/Portfolio/Impact.mp4'
const Technology_Portfolio = () => {
  const [tiltStyles, setTiltStyles] = useState({});

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // X position within the element
    const y = e.clientY - rect.top; // Y position within the element

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 30; // Adjust the multiplier for tilt intensity
    const rotateY = ((x - centerX) / centerX) * -30;

    setTiltStyles((prevStyles) => ({
      ...prevStyles,
      [index]: {
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }
    }));
  };

  const handleMouseLeave = (index) => {
    setTiltStyles((prevStyles) => ({
      ...prevStyles,
      [index]: {
        transform: 'rotateX(0deg) rotateY(0deg)'
      }
    }));
  };

  return (
    <>
      {/* header */}
      <header className='flex w-full h-[822.86px] justify-center items-center relative'>
        <img className='absolute w-full h-full z-0 object-cover' src={bg} alt="Background" />
        {/* overlay */}
        <div className='absolute top-0 left-0 w-full h-full bg-black/65 z-10'></div>
        <div className='flex flex-col items-center gap-6 text-center w-full md:w-6xl h-auto z-20 text-white px-4'>
          <h1 className='text-[#19BDE8] font-semibold text-3xl md:text-6xl '>Real Work. Real Results.</h1>
          <p className='font-normal text-base md:text-xl mt-6 '>
            Ready to power up your business with smart, scalable tech? From website design to AI-driven systems, we build digital solutions that drive real growth and success.
          </p>
          <a href="#">
           <CustomBtn>Start Your Digital Transformation</CustomBtn>   
          </a>
        </div>
      </header>

      {/* main */}
      <main className='mb-15'>
        {/* Web Design */}
        <section className='max-w-6xl mt-10 mx-auto px-4 md:px-6 lg:px-8 py-10'>
          <h2 className="text-2xl md:text-4xl font-semibold text-[#19BDE8] text-center mb-8 text-justify">
            Cutting-Edge Tech Solutions
          </h2>
          <h2 className='font-medium text-xl md:text-3xl mb-6 text-justify'>Website Design</h2>
          <img
            src={one}
            alt="Website Design"
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
          />
          <div className="w-full max-w-[1200px] mx-auto mt-10">
            <div className="flex flex-col md:flex-row md:justify-between md:gap-16 gap-6">
              <div className="flex flex-col ">
                <h3 className="text-xl md:text-3xl font-medium mb-4 text-justify">Client</h3>
                <p className='text-base md:text-lg text-gray-700 text-justify'>Shimmr Studios</p>
              </div>
              <div className="flex flex-col ">
                <h3 className="text-xl md:text-3xl font-medium mb-4 text-justify">What they do</h3>
                <p className='text-base md:text-lg text-gray-700 leading-relaxed text-justify'>
                  Shimmr Studios drives musical innovation through expert music production, including beat making, film scoring, recording, mixing, and mastering.
                </p>
              </div>
              <div className="flex flex-col ">
                <h3 className="text-xl md:text-3xl font-medium mb-4 text-justify">Project overview</h3>
                <p className='md:text-lg text-base text-gray-700 leading-relaxed text-justify'>
                  <strong>Shimmr Studios website</strong> blends musical artistry with intuitive navigation and high user engagement. Built with <strong>PHP, JavaScript, and Firebase</strong>, it offers a dynamic and responsive experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ecommerce */}
        <section className='max-w-6xl mt-10 mx-auto p-6 rounded-md'>
          <h2 className='font-medium  text-xl md:text-2xl mt-8 sm:mt-15 mb-5 text-justify'>E-commerce Platform</h2>
          <img src={two} alt="E-commerce Platform" className="w-full rounded-lg" />
          <div className="w-full max-w-[1200px] mx-auto mt-10">
            <div className="flex flex-col md:flex-row md:justify-between md:gap-16 gap-6">
              <div className="flex flex-col ">
                <h3 className="text-xl md:text-3xl font-medium mb-4 text-justify">Client</h3>
                <p className= 'text-base md:text-lg text-gray-700 text-justify'>Motiff Bespoke</p>
              </div>
              <div className="flex flex-col ">
                <h3 className="text-xl md:text-3xl font-medium mb-4 text-justify">What they do</h3>
                <p className='md:text-lg text-base text-gray-700 leading-relaxed text-justify'>
                  Motiff Bespoke leverages 17+ years of fashion expertise to create custom garments blending art and functionality. They offer personalized, high-quality clothing tailored for professionals.
                </p>
              </div>
              <div className="flex flex-col ">
                <h3 className="text-xl md:text-3xl font-medium mb-4 text-justify">Project overview</h3>
                <p className='md:text-lg text-base text-gray-700 leading-relaxed text-justify'>
                  Motiff Bespoke is an <strong>e-commerce platform</strong> built with <strong> Next.js, Astro.js, and Cloudflare,</strong> offering a seamless shopping experience with fast performance and security.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Another E-commerce Platform */}
        <section className='max-w-6xl mt-10 mx-auto p-6 rounded-md'>
          <h2 className='font-medium text-xl md:text-2xl mt-8 sm:mt-15 mb-5 text-justify'>E-commerce Platform</h2>
          <img src={three} alt="Another E-commerce Platform" className="w-full rounded-lg" />
          <div className="w-full max-w-[1200px] mx-auto mt-10">
            <div className="flex flex-col md:flex-row md:justify-around md:gap-16 gap-6">
              <div className="flex flex-col ">
                <h3 className="text-xl md:text-3xl font-medium mb-4 text-justify">Client</h3>
                <p className=' md:text-lg text-base text-gray-700 text-justify'>KISEM</p>
              </div>
              <div className="flex flex-col ">
                <h3 className="text-xl md:text-3xl font-medium mb-4 text-justify">What they do</h3>
                <p className='md:text-lg text-base text-gray-700 leading-relaxed text-justify'>
                  KISEM (Kotak - IIT Madras Save Energy Mission) enhances energy efficiency in Indian MSMEs through assessments, sustainability studies, and energy conservation measures, promoting a sustainable future.
                </p>
              </div>
              <div className="flex flex-col ">
                <h3 className="text-xl md:text-3xl font-medium mb-4 text-justify">Project overview</h3>
                <p className='md:text-lg text-base text-gray-700 leading-relaxed text-justify'>
                  KISEM is a real-time <strong>chat application</strong>  built using <strong>WordPress, MariaDB, and Google Analytics.</strong> It provides seamless communication while integrating performance tracking for enhanced user experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className='mt-20 mx-auto px-4 md:px-6 rounded-md'>
          <div className='px-4 md:px-10'>
            <h2 className="text-xl md:text-4xl font-semibold text-[#19BDE8] text-center mb-3 text-justify">
              Impact of Our Technology Services
            </h2>
            <p className='font-normal text-base md:text-xl pt-3 text-center text-justify'>
              Our tech solutions enabled clients to digitally transform, streamline their user experience, and present their services more efficiently online.
            </p>
          </div>
          <div className='relative w-full lg:w-[1041px] min-h-[481px] mt-8 mx-auto'>
            <div
              className='w-full lg:w-[588px] bg-gradient-to-t from-[#19BDE8] to-[#FFFFFF] p-6 rounded-lg shadow-xl absolute z-10 top-10'
              style={tiltStyles[0]}
              onMouseMove={(e) => handleMouseMove(e, 0)}
              onMouseLeave={() => handleMouseLeave(0)}
            >
              <h1 className='font-medium text-xl md:text-3xl text-justify'>Key Outcomes:</h1>
              <ul className='list-disc pl-6 md:pl-10 mt-5 text-base md:text-xl font-normal space-y-4 text-justify'>
                <li>Delivered custom solutions aligned with each client's business goals.</li>
                <li>Built future-ready platforms using the latest technologies.</li>
                <li>Enhanced customer experience through intuitive interface design.</li>
                <li>Strengthened online presence with high-performing, reliable systems.</li>
              </ul>
            </div>
            <div className='w-full lg:w-[588px] absolute right-0'>
            <video
                className="rounded-xl w-full h-[300px] lg:h-[450px] object-cover"
                src={Impact}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </section>

        {/* Value */}
        <section className='mt-10 md:mt-20 mx-auto px-4 md:px-6 rounded-md'>
          <div className='px-4 md:px-10'>
            <h2 className="text-xl md:text-4xl font-semibold text-[#19BDE8] text-center mb-3 text-justify">
              Value We Delivered to Our Clients
            </h2>
            <p className='font-normal text-base md:text-xl pt-3 text-center text-justify'>
              By combining technical expertise with user-focused design, we created platforms that solve real problems and support business growth.
            </p>
          </div>
          <div className='relative w-full lg:w-[1041px] min-h-[481px] mt-8 mx-auto'>
            <div className='w-full lg:w-[588px] absolute left-0'>
            <video
                className="rounded-xl w-full h-[300px] lg:h-[450px] object-cover"
                src={Value}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <div
              className='w-full lg:w-[588px] bg-gradient-to-t from-[#19BDE8] to-[#FFFFFF] p-6 rounded-lg shadow-xl absolute right-0 z-10 top-10'
              style={tiltStyles[1]}
              onMouseMove={(e) => handleMouseMove(e, 1)}
              onMouseLeave={() => handleMouseLeave(1)}
            >
              <h1 className='font-medium text-xl md:text-3xl text-justify'>Key Outcomes:</h1>
              <ul className='list-disc pl-6 md:pl-10 mt-5 text-base md:text-xl font-normal space-y-4 text-justify'>
                <li>Custom-built solutions tailored to their business model</li>
                <li>Future-ready platforms using modern tech stacks</li>
                <li>Improved customer interaction through intuitive interfaces</li>
                <li>Stronger online presence backed by performance and reliability</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Want to expplore links and images */}
        <section className="flex flex-col md:flex-row justify-between items-center px-10 py-16 mt-10 bg-white">
          <div className="w-full md:w-1/2 pr-0 md:pr-10 text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-semibold text-[#19BDE8] mb-4 text-justify">Want to Explore More?</h2>
            <p className="text-base md:text-lg text-gray-800 mb-6 text-justify">
              If you'd like to see more of our creative work and how we bring brands to life through design,
              click the button below.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-[#19BDE8] hover:bg-[#0eaed4] text-white text-sm md:text-lg px-6 py-3 rounded-md font-medium mb-5 cursor-pointer hover:scale-[0.98] text-justify">
                See More Multimedia Projects
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full md:w-1/2 ">
            <img src={key1} alt="" className='w-full h-[140px] object-cover rounded-lg cursor-pointer' />
            <img src={key1} alt="" className='w-full h-[140px] object-cover rounded-lg cursor-pointer' />
            <img src={key1} alt="" className='w-full h-[140px] object-cover rounded-lg cursor-pointer' />
            <img src={key1} alt="" className='w-full h-[140px] object-cover rounded-lg cursor-pointer' />
          </div>
        </section>
      </main>

      <Explore />
      <Footer />
    </>
  );
};

export default Technology_Portfolio;
