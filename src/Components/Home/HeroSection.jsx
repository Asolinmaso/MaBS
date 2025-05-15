import React, { useEffect } from 'react';
import CustomBtn from '../Button/CustomBtn';
import bg from '../../assets/Home/Herosection.mp4'
const HeroSection = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://player.vimeo.com/api/player.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            {/* <Custom_Navbar></Custom_Navbar> */}
            <header className="relative w-full h-screen overflow-hidden flex items-center justify-center">

                {/* Desktop Vimeo Video */}

                <video
                    className="absolute w-full h-full object-cover z-0"
                    src={bg}
                    autoPlay
                    loop
                    muted
                    playsInline
                />



                {/* Optional fallback image for mobile */}

                {/* Dark overlay */}
                <div className="absolute bg-black/30 top-0 left-0 w-full h-full z-10"></div>

                {/* Foreground content */}
                <div className="relative z-20 flex flex-col items-center justify-center gap-4 text-center text-white pt-20 pb-4 px-4">
                    <p className="font-Montserrat font-medium text-xl lg:text-3xl leading-tight">
                        Unlock the Secrets to Business Success
                    </p>
                    <h1 className="font-Montserrat font-semibold text-3xl  lg:text-6xl text-[#19BDE8] leading-snug">
                        Creating a Path
                    </h1>
                    <p className="mt-4 font-normal text-base  md:text-xl  leading-relaxed text-center mx-auto max-w-4xl">
                        Welcome to Manvian, your trusted partner in business development. We empower entrepreneurs and their businesses to reach new heights
                        through innovative strategies and exceptional execution.
                    </p>
                    <a
                        href="https://outlook.office365.com/book/Catherine1@deepdarkcreations.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Book an appointment"
                        className="pt-6"
                    >
                        <CustomBtn>Booking Appointment</CustomBtn>
                    </a>
                </div>
            </header>
        </>

    );
};

export default HeroSection;
