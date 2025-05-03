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
                <div className='absolute bg-black/40 top-0 left-0 w-full h-full z-10'></div>


                <div className='relative z-20 flex flex-col items-center justify-center gap-2 text-center text-white max-w-[936px] px-4'>
                    <p className='font-Montserrat font-medium text-2xl leading-[100%]'>
                        Unlock the Secrets to Business Success
                    </p>
                    <h1 className='font-Montserrat font-semibold text-6xl text-[#19BDE8]'>
                        Creating a Path
                    </h1>
                    <p className='mt-4 font-normal text-2xl text-center' >
                        Welcome to Manvian, your trusted partner in business development. We empower entrepreneurs and their Businesses to Reach New Heights
                        by providing valuable solutions through Innovative Strategies and Exceptional Execution.
                    </p>
                    <a href="https://outlook.office365.com/book/Catherine1@deepdarkcreations.com/" target='_blank'>
                        <CustomBtn className='mt-4  border-2 rounded-lg p-4 border-[#19BDE8] text-[#19BDE8] font-medium text-2xl  hover:border-white focus:scale-90 hover:text-white  cursor-pointer'>
                            Booking Appointment
                        </CustomBtn></a>
                </div>
            </header>
        </>
    );
};

export default HeroSection;
