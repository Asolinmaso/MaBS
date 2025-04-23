import React from 'react'
import Bg from '../../assets/About/HeroSection.jpeg'
import Navbar from '../Navbar/Navbar'
const HeroSectioon = () => {
  return (
    <>
    
    <header className='flex w-[1440px] h-[822.86px]  justify-center items-center relative'>
      <img className='absolute w-full h-full  z-0' src={Bg} alt="" />
      {/* overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-black/70 z-10'></div>
      <div className='flex flex-col items-center gap-6 text-center w-6xl h-96 z-20 text-white' >
        <h1 className='text-[#19BDE8] font-semibold text-6xl' >About Us</h1>
        <p className=' font-normal text-2xl leading-relaxed' >At Manvian, we empower entrepreneurs to unlock their potential and transform lives through busines Entrepreneurship is challenging, but with the right guidance, it becomes a path to success. Manvian provides a comprehensive ecosystem of support, education, and strategies tailored to your needs, whether you're a startup or an established business. </p>
      </div>
    </header>
    </>
  )
}

export default HeroSectioon