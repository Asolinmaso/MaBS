import React from 'react';
import Bg from '../../assets/About/HeroSection.jpeg';
import CustomBtn from '../Button/CustomBtn';

const HeroSection = () => {
  return (
    <>
      <header className="relative w-full min-h-screen flex justify-center items-center">
        {/* Background Image */}
        <img className="absolute w-full h-full object-cover z-0" src={Bg} alt="Hero Background" />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center text-center text-white px-4 sm:px-6 md:px-10 lg:px-16 w-full max-w-[1200px] gap-6">
          <h1 className="text-[#19BDE8] font-semibold text-3xl lg:text-6xl leading-tight mt-10">
            About Us
          </h1>
          <p className= "mt-6 font-normal text-base lg:text-2xl leading-relaxed max-w-4xl">
            At Manvian, we empower entrepreneurs to unlock their potential and transform lives through business.
            Entrepreneurship is challenging, but with the right guidance, it becomes a path to success. Manvian
            provides a comprehensive ecosystem of support, education, and strategies tailored to your needs, whether
            you're a startup or an established business.
          </p>
          <CustomBtn>About US</CustomBtn>
        </div>
      </header>
    </>
  );
};

export default HeroSection;
