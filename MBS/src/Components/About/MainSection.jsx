import React from 'react'
import vision from '../../assets/About/Vision.png'
import mission from '../../assets/About/Mission.png'
import Goal from '../../assets/About/Goal.png'
import Aim from '../../assets/About/Aim.png'
import Footer from '../Footer/Footer'

const MainSection = () => {
    return (
        <>  

            <main className='bg-white w-screen  flex justify-center  p-4 mb-10' >
                <div className=''>
                    <div className='grid grid-cols-2 gap-20 ml-2 mt-12'>
                        <div className='flex flex-col justify-center gap-2 w-md'>
                            <h1 className='text-[#19BDE8] text-4xl' >Our Vision</h1>
                            <p>Our ultimate vision is to revolutionize the global industry by becoming a leader in providing world-class services and solutions for not just about driving profits but also about contributing to the society, lifting others up, and leaving a positive mark on the world.</p>
                        </div>
                        <img className='w-lg h-lg rounded-4xl' src={vision} alt="" />
                    </div>
                    <div className='grid grid-cols-2 gap-20  ml-2 mt-12'>
                        <img className='w-lg h-lg rounded-4xl' src={mission} alt="" />
                        <div className='flex flex-col justify-center gap-2 w-md'>
                            <h1 className='text-[#19BDE8] text-4xl'>Our Mission</h1>
                            <p>  Our mission is to empower businesses to realize their fullest potential by providing innovative, tailored strategies that enhance revenue, build brand identity, and improve client experiences.</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-20  ml-2 mt-12'>
                        <div className='flex flex-col justify-center gap-2 w-md'>
                            <h1 className='text-[#19BDE8] text-4xl' >Goal</h1>
                            <p>We work with visionary entrepreneurs and forward thinking organizations ready to redefine their industries, set new standards, and lead the way in innovation.</p>
                        </div>
                        <img className='w-lg h-lg rounded-4xl' src={Goal} alt="" />
                    </div>
                    <div className='grid grid-cols-2 gap-20  ml-2 mt-12'>
                        <img className='w-lg h-lg rounded-4xl' src={Aim} alt="" />
                        <div className='flex flex-col justify-center gap-2 w-md'>
                            <h1 className='text-[#19BDE8] text-4xl' >Value</h1>
                            <p>We strive to create a ripple effect where business success leads to meaningful societal impact — enriching lives and promoting a more equitable world.</p>
                        </div>
                    </div>
                </div>



            </main>
            {/* Percnetgae */}
            <div className='w-screen flex justify-center mb-10 p-4 rounded-md'>
                <div className='w-6xl h-40 shadow-2xl flex justify-around items-center gap-6' >
                    <div className='flex flex-col items-center gap-1.5'>
                        <h1 className='font-light text-6xl text-[#19BDE8]'>10+</h1>
                        <p className='text-2xl font-normal'>Country Presence</p>
                    </div>
                    <div className=' border-l-2  border-gray-300 pl-10 flex flex-col items-center gap-1.5 '>
                        <h1 className='font-light text-6xl text-[#19BDE8]'>80+</h1>
                        <p className='text-2xl font-normal'>Clients Handled</p>
                    </div>
                    <div className=' border-l-2  border-gray-300 pl-10 flex flex-col items-center gap-1.5 '>
                        <h1 className='font-light text-6xl text-[#19BDE8]'>150+</h1>
                        <p className='text-2xl font-normal'>Projects Handled</p>
                    </div>
                    <div className=' border-l-2  border-gray-300 pl-10 flex flex-col items-center gap-1.5 '>
                        <h1 className='font-light text-6xl text-[#19BDE8]'>99%</h1>
                        <p className='text-2xl font-normal'>Client Satisfaction</p>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default MainSection