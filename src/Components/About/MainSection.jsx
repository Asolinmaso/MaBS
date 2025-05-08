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
const Section = ({ children }) => {
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.3,  // Increased threshold for earlier trigger
    rootMargin: '-50px' // Trigger animation slightly before element comes into view
  });

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.98  // Slightly scaled down when hidden
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 1.5,  // Longer duration for smoother effect
        ease: [0.6, 0.05, 0.01, 0.99],  // Custom easing function
        staggerChildren: 0.1  // Stagger children animations
      }
    }
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
        <div className="w-full max-w-7xl mx-auto space-y-24"> {/* Added space-y-24 for consistent vertical gaps */}

          {/* Vision Section */}
          <Section direction="left">
            <div className="flex flex-col justify-center gap-6">
              <h1 className="text-[#19BDE8] text-4xl font-semibold">Our Vision</h1>
              <p className="text-lg md:text-xl leading-relaxed">
                Our ultimate vision is to revolutionize the global industry by becoming a leader in providing world-class services and solutions. It's not just about driving profits but contributing to society, lifting others up, and leaving a positive mark on the world.
              </p>
            </div>
            <img className="w-[570px] h-[590px] object-cover rounded-xl" src={vision} alt="Vision" />
          </Section>

          {/* Mission Section */}
          <Section direction="right">
            <img className="w-[570px] h-[590px] object-cover rounded-xl" src={mission} alt="Mission" />
            <div className="flex flex-col justify-center gap-6">
              <h1 className="text-[#19BDE8] text-4xl font-semibold">Our Mission</h1>
              <p className="text-lg md:text-xl leading-relaxed">
                Our mission is to empower businesses to realize their fullest potential by providing innovative, tailored strategies that enhance revenue, build brand identity, and improve client experiences.
              </p>
            </div>
          </Section>

          {/* Goal Section */}
          <Section direction="left">
            <div className="flex flex-col justify-center gap-6">
              <h1 className="text-[#19BDE8] text-4xl font-semibold">Goal</h1>
              <p className="text-lg md:text-xl leading-relaxed">
                We work with visionary entrepreneurs and forward-thinking organizations ready to redefine their industries, set new standards, and lead the way in innovation.
              </p>
            </div>
            <img className="w-[570px] h-[590px] object-cover rounded-xl" src={Goal} alt="Goal" />
          </Section>

          {/* Value Section */}
          <Section direction="right">
            <img className="w-[570px] h-[590px] object-cover rounded-xl" src={Aim} alt="Aim" />
            <div className="flex flex-col justify-center gap-6">
              <h1 className="text-[#19BDE8] text-4xl font-semibold">Value</h1>
              <p className="text-lg md:text-xl leading-relaxed">
                We strive to create a ripple effect where business success leads to meaningful societal impact — enriching lives and promoting a more equitable world.
              </p>
            </div>  
          </Section>
        </div>
      </main>

      {/* Stats Section */}
      <div className="w-full flex justify-center mb-10 p-8"> {/* Increased padding */}
        <div className="w-full max-w-7xl h-auto shadow-2xl flex flex-wrap justify-around items-center gap-8 py-12 px-6 rounded-xl"> {/* Added more padding and rounded corners */}
          <div className="flex flex-col items-center gap-3 w-full sm:w-auto"> {/* Increased gap */}
            <h1 className="font-light text-6xl text-[#19BDE8]">10+</h1>
            <p className="text-2xl font-normal">Country Presence</p>
          </div>
          <div className="border-l-2 border-gray-300 pl-12 flex flex-col items-center gap-3 w-full sm:w-auto mt-8 sm:mt-0"> {/* Increased padding and gap */}
            <h1 className="font-light text-6xl text-[#19BDE8]">80+</h1>
            <p className="text-2xl font-normal">Clients Handled</p>
          </div>
          <div className="border-l-2 border-gray-300 pl-12 flex flex-col items-center gap-3 w-full sm:w-auto mt-8 sm:mt-0">
            <h1 className="font-light text-6xl text-[#19BDE8]">150+</h1>
            <p className="text-2xl font-normal">Projects Handled</p>
          </div>
          <div className="border-l-2 border-gray-300 pl-12 flex flex-col items-center gap-3 w-full sm:w-auto mt-8 sm:mt-0">
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
