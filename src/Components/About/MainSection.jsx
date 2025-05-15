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
    threshold: 0.3,
    rootMargin: '-50px'
  });

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 1.5,
        ease: [0.6, 0.05, 0.01, 0.99],
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className="flex flex-col md:grid md:grid-cols-2 gap-12 mt-12"
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
        <div className="w-full max-w-7xl mx-auto space-y-24">

          {/* Vision Section */}
          <Section>
            <div className="order-1 md:order-1 flex flex-col justify-center gap-6">
              <h1 className="text-[#19BDE8] text-xl lg:text-4xl font-semibold">Our Vision</h1>
              <p className="text-base md:text-xl leading-relaxed">
                Our ultimate vision is to revolutionize the global industry by becoming a leader in providing world-class services and solutions. It's not just about driving profits but contributing to society, lifting others up, and leaving a positive mark on the world.
              </p>
            </div>
            <img className="order-2 md:order-2 w-full h-[590px] object-cover rounded-xl" src={vision} alt="Vision" />
          </Section>

          {/* Mission Section */}
          <Section>
            <img className="order-2 md:order-1 w-full h-[590px] object-cover rounded-xl" src={mission} alt="Mission" />
            <div className="order-1 md:order-2 flex flex-col justify-center gap-6">
              <h1 className="text-[#19BDE8] text-xl  lg:text-4xl font-semibold">Our Mission</h1>
              <p className="text-base md:text-xl leading-relaxed">
                Our mission is to empower businesses to realize their fullest potential by providing innovative, tailored strategies that enhance revenue, build brand identity, and improve client experiences.
              </p>
            </div>
          </Section>

          {/* Goal Section */}
          <Section>
            <div className="order-1 md:order-1 flex flex-col justify-center gap-6">
              <h1 className="text-[#19BDE8] text-xl lg:text-4xl font-semibold">Goal</h1>
              <p className="text-base md:text-xl leading-relaxed">
                We work with visionary entrepreneurs and forward-thinking organizations ready to redefine their industries, set new standards, and lead the way in innovation.
              </p>
            </div>
            <img className="order-2 md:order-2 w-full h-[590px] object-cover rounded-xl" src={Goal} alt="Goal" />
          </Section>

          {/* Value Section */}
          <Section>
            <img className="order-2 md:order-1 w-full h-[590px] object-cover rounded-xl" src={Aim} alt="Aim" />
            <div className="order-1 md:order-2 flex flex-col justify-center gap-6">
              <h1 className="text-[#19BDE8] text-xl lg:text-4xl font-semibold">Value</h1>
              <p className="text-base md:text-xl leading-relaxed">
                We strive to create a ripple effect where business success leads to meaningful societal impact — enriching lives and promoting a more equitable world.
              </p>
            </div>  
          </Section>
        </div>
      </main>

     

      <Footer />
    </>
  );
};

export default MainSection;
