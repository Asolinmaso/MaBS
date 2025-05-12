import React, { useEffect } from 'react';
import CustomBtn from '../Button/CustomBtn';
import Custom_Navbar from '../Custom_Navbar/Custom_Navbar';

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
                <div className="hidden lg:block absolute top-0 left-0 w-full h-full z-0">
                    <div style={{ padding: '56.25% 0 0 0', position: 'relative', width: '100%', height: '100%' }}>
                        <iframe
                            src="https://player.vimeo.com/video/1082390860?h=1e0bb78ff4&autoplay=1&muted=1&loop=1&background=1"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            loading="lazy"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            title="HomeVideo"
                        />

                    </div>
                </div>

                {/* Mobile Vimeo Video */}
                <div className="block lg:hidden absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
                    <div style={{ padding: '56.25% 0 0 0', position: 'relative', width: '100%', height: '100%' }}>
                        <iframe
                            src="https://player.vimeo.com/video/1082774892?h=1e0bb78ff4&autoplay=1&muted=1&loop=1&background=1"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            loading="lazy"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            title="MobileVideo"
                        />
                    </div>
                </div>

                {/* Optional fallback image for mobile */}
                <div className="absolute top-0 left-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat lg:hidden" style={{ backgroundImage: "url('/fallback-image.jpg')" }}></div>

                {/* Dark overlay */}
                <div className="absolute bg-black/30 top-0 left-0 w-full h-full z-10"></div>

                {/* Foreground content */}
                <div className="relative z-20 flex flex-col items-center justify-center gap-4 text-center text-white pt-20 pb-4 px-4">
                    <p className="font-Montserrat font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight">
                        Unlock the Secrets to Business Success
                    </p>
                    <h1 className="font-Montserrat font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#19BDE8] leading-snug">
                        Creating a Path
                    </h1>
                    <p className="mt-4 font-normal text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-center mx-auto max-w-4xl">
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
