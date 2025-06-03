import React, { useEffect } from 'react';
import vision from '../../assets/About/Vision.png';
import mission from '../../assets/About/Mission.png';
import Goal from '../../assets/About/Goal.png';
import Aim from '../../assets/About/Aim.png';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';

// Animation variants
const variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.6, 0.05, 0.01, 0.99],
      staggerChildren: 0.3
    }
  }
};

const leftVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const rightVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Section wrapper
const Section = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: '-50px'
  });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12"
    >
      {children}
    </motion.section>
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
    <div className="overflow-x-hidden"> {/* Prevents horizontal overflow */}
      <main className="bg-white w-full min-h-screen flex justify-center px-4 md:px-6 mb-10">
        <div className="w-full max-w-6xl mx-auto space-y-16 md:space-y-24">

          {/* Vision Section */}
          <Section>
            <motion.div variants={leftVariants} className="order-1 md:order-1 flex flex-col justify-center gap-6">
              <h1 className="text-[#19BDE8] text-xl lg:text-4xl font-semibold">Our Vision</h1>
              <p className="text-base md:text-xl leading-relaxed">
                Our ultimate vision is to revolutionize the global industry by becoming a leader in providing world-class services and solutions. It's not just about driving profits but contributing to society, lifting others up, and leaving a positive mark on the world.
              </p>
            </motion.div>
            <motion.img variants={rightVariants} className="order-2 md:order-2 w-full h-[300px] md:h-[590px] object-cover rounded-xl" src={vision} alt="Vision" />
          </Section>

         
          {/* Mission Section */}
          <Section>
            <motion.video
              variants={leftVariants}
              className="order-2 md:order-1 w-full h-[300px] md:h-[590px] object-cover rounded-xl"
              src={missionVideo}
              autoPlay
              loop
              muted
              playsInline
              alt="Mission"
            />
            <motion.div variants={rightVariants} className="order-1 md:order-2 flex flex-col justify-center gap-6">
              <h1 className="text-[#19BDE8] text-xl  lg:text-4xl font-semibold">Our Mission</h1>
              <p className="text-base md:text-xl leading-relaxed">
                Our mission is to empower businesses to realize their fullest potential by providing innovative, tailored strategies that enhance revenue, build brand identity, and improve client experiences.
              </p>
            </motion.div>
          </Section>

          {/* Goal Section */}
          <Section>
            <motion.div variants={leftVariants} className="order-1 md:order-1 flex flex-col justify-center gap-6">
              <h1 className="text-[#19BDE8] text-xl lg:text-4xl font-semibold">Goal</h1>
              <p className="text-base md:text-xl leading-relaxed">
                We work with visionary entrepreneurs and forward-thinking organizations ready to redefine their industries, set new standards, and lead the way in innovation.
              </p>
            </motion.div>
            <motion.img variants={rightVariants} className="order-2 md:order-2 w-full h-[300px] md:h-[590px] object-cover rounded-xl" src={Goal} alt="Goal" />
          </Section>

          {/* Value Section */}
          <Section>
            <motion.img variants={leftVariants} className="order-2 md:order-1 w-full h-[300px] md:h-[590px] object-cover rounded-xl" src={Aim} alt="Aim" />
            <motion.div variants={rightVariants} className="order-1 md:order-2 flex flex-col justify-center gap-6">
              <h1 className="text-[#19BDE8] text-xl lg:text-4xl font-semibold">Value</h1>
              <p className="text-base md:text-xl leading-relaxed">
                We strive to create a ripple effect where business success leads to meaningful societal impact — enriching lives and promoting a more equitable world.
              </p>
            </motion.div>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MainSection;
