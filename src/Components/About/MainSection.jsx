import React from 'react';
import vision from '../../assets/About/Vision.png';
import mission from '../../assets/About/Mission.png';
import Goal from '../../assets/About/Goal.png';
import Aim from '../../assets/About/Aim.png';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const Section = ({ children, direction = 'left' }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className="grid md:grid-cols-2 gap-12 mt-12"
    >
      {children}
    </motion.div>
  );
};

const MainSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <main className="bg-white w-full flex justify-center p-4 mb-10">
        <div className="w-full max-w-7xl mx-auto">

          {/* Vision Section */}
          <Section direction="left">
            <div className="flex flex-col justify-center gap-2" id='vision'>
              <h1 className="text-[#19BDE8] text-4xl">Our Vision</h1>
              <p className="text-lg md:text-xl">
                Our ultimate vision is to revolutionize the global industry by becoming a leader in providing world-class services and solutions. It’s not just about driving profits but contributing to society, lifting others up, and leaving a positive mark on the world.
              </p>
            </div>
            <img className="w-full h-full rounded-4xl object-cover" src={vision} alt="Vision" />
          </Section>

          {/* Mission Section */}
          <Section direction="right" >
            <img className="w-full h-full rounded-4xl object-cover" src={mission} alt="Mission" />
            <div className="flex flex-col justify-center gap-2 " id='mission'>
              <h1 className="text-[#19BDE8] text-4xl">Our Mission</h1>
              <p className="text-lg md:text-xl">
                Our mission is to empower businesses to realize their fullest potential by providing innovative, tailored strategies that enhance revenue, build brand identity, and improve client experiences.
              </p>
            </div>
          </Section>

          {/* Goal Section */}
          <Section direction="left">
            <div className="flex flex-col justify-center gap-2" id='goal'>
              <h1 className="text-[#19BDE8] text-4xl">Goal</h1>
              <p className="text-lg md:text-xl">
                We work with visionary entrepreneurs and forward-thinking organizations ready to redefine their industries, set new standards, and lead the way in innovation.
              </p>
            </div>
            <img className="w-full h-full rounded-4xl object-cover" src={Goal} alt="Goal" />
          </Section>

          {/* Value Section */}
          <Section direction="right">
            <img className="w-full h-full rounded-4xl object-cover" src={Aim} alt="Aim" />
            <div className="flex flex-col justify-center gap-2" id='value'>
              <h1 className="text-[#19BDE8] text-4xl">Value</h1>
              <p className="text-lg md:text-xl">
                We strive to create a ripple effect where business success leads to meaningful societal impact — enriching lives and promoting a more equitable world.
              </p>
            </div>
          </Section>
        </div>
      </main>

      {/* Stats Section (no animation needed) */}
      <div className="w-full flex justify-center mb-10 p-4 rounded-md">
        <div className="w-full max-w-7xl h-auto shadow-2xl flex flex-wrap justify-around items-center gap-6">
          <div className="flex flex-col items-center gap-1.5 w-full sm:w-auto">
            <h1 className="font-light text-6xl text-[#19BDE8]">10+</h1>
            <p className="text-2xl font-normal">Country Presence</p>
          </div>
          <div className="border-l-2 border-gray-300 pl-10 flex flex-col items-center gap-1.5 w-full sm:w-auto mt-6 sm:mt-0">
            <h1 className="font-light text-6xl text-[#19BDE8]">80+</h1>
            <p className="text-2xl font-normal">Clients Handled</p>
          </div>
          <div className="border-l-2 border-gray-300 pl-10 flex flex-col items-center gap-1.5 w-full sm:w-auto mt-6 sm:mt-0">
            <h1 className="font-light text-6xl text-[#19BDE8]">150+</h1>
            <p className="text-2xl font-normal">Projects Handled</p>
          </div>
          <div className="border-l-2 border-gray-300 pl-10 flex flex-col items-center gap-1.5 w-full sm:w-auto mt-6 sm:mt-0">
            <h1 className="font-light text-6xl text-[#19BDE8]">99%</h1>
            <p className="text-2xl font-normal">Client Satisfaction</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MainSection;
