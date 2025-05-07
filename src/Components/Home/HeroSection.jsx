import React from 'react';
import CustomBtn from '../Button/CustomBtn';

const HeroSection = () => {
    return (
        <>
            <header className="relative w-full h-screen overflow-hidden flex items-center justify-center">
                {/* Background Video */}
                {/* <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute w-full h-screen object-cover"
                    src={HomeVideo}
                /> */}

                {/* Overlay */}
                <div className="absolute bg-black/30 top-0 left-0 w-full h-full z-10"></div>

                <div className="relative z-20 flex flex-col items-center justify-center gap-4 text-center text-white  px-4">
                    <p className="font-Montserrat font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight">
                        Unlock the Secrets to Business Success
                    </p>
                    <h1 className="font-Montserrat font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#19BDE8] leading-snug">
                        Creating a Path
                    </h1>
                    <p className="mt-4 font-normal text-base sm:text-lg md:text-xl lg:text-2xl text-center leading-relaxed">
                        Welcome to Manvian, your trusted partner in business development. We empower entrepreneurs and their Businesses to Reach New Heights
                        by providing valuable solutions through Innovative Strategies and Exceptional Execution.
                    </p>
                    <a
                        href="https://outlook.office365.com/book/Catherine1@deepdarkcreations.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                     <CustomBtn>Booking Appointment</CustomBtn>
                    </a>
                </div>
            </header>
        </>
    );
};

export default HeroSection;
