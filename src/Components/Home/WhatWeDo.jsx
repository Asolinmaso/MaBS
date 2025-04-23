import React from 'react'
// what we do
import first from '../../assets/Home/1 What We Do/1_Bussiness_Consultancy.png'
import second from '../../assets/Home/1 What We Do/2_Mentorship&Inverstemnt.png'
import third from '../../assets/Home/1 What We Do/3_Tech_Solution.png'
import fourth from '../../assets/Home/1 What We Do/4_Service.png'
import fifth from '../../assets/Home/1 What We Do/5_Marketing.png'
import sixth from '../../assets/Home/1 What We Do/6_Multi_Media_Solution.png'
// who we work with
import brand1 from '../../assets/Home/2 Work With/1.png'
import brand2 from '../../assets/Home/2 Work With/2.png'
import brand3 from '../../assets/Home/2 Work With/3.png'
import brand4 from '../../assets/Home/2 Work With/4.png'
import brand5 from '../../assets/Home/2 Work With/5.png'
import brand6 from '../../assets/Home/2 Work With/6.png'
import brand7 from '../../assets/Home/2 Work With/7.png'
const WhatWeDo = () => {
    return (
        <main className='bg-white w-full mt-10'>
            {/* head */}
            <div className='flex flex-col gap-1.5 text-center '>
                <h1 className='text-[40px] font-semibold text-[#19BDE8]' >What We Do</h1>
                <p className='text-2xl'  >“We support entrepreneurs to prohibit their prohibition”</p>
            </div>

            <div className='grid grid-cols-2 mt-10 items-center m-10 '>
                {/* 1 */}

                <div className='flex flex-col gap-4 w-[570px] h-[152px]' >
                    <h1 className='font-semibold text-3xl text-[#1E1E1E]'><span className='font-semibold text-3xl text-[#19BDE8]'>01. </span>Business Consulting</h1>
                    <p className='font-normal text-2xl' >We develop comprehensive business strategies that align with your vision and objectives.
                        Our approach includes market research, competitive analysis, and strategic planning to ensure long-term success.</p>
                </div>
                <img className='h-[322.27px] w-[570px] rounded-[32px]' src={first} alt="" />
                {/* 2 */}
                <img className='h-[322.27px] w-[570px] rounded-[32px]' src={second} alt="" />
                <div className='flex flex-col gap-4 w-[570px] h-[152px]' >
                    <h1 className='font-semibold text-3xl text-[#1E1E1E]'><span className='font-semibold text-3xl text-[#19BDE8]'>02. </span>Mentorship & Investment</h1>
                    <p className='font-normal text-2xl' >Access valuable mentorship and investment opportunities. Connect with industry experts and investors who can provide the guidance and resources you need to succeed.</p>
                </div>
                {/* 3 */}

                <div className='flex flex-col gap-4 w-[570px] h-[152px]' >
                    <h1 className='font-semibold text-3xl text-[#1E1E1E]'><span className='font-semibold text-3xl text-[#19BDE8]'>03. </span>Technology Solutions</h1>
                    <p className='font-normal text-2xl' >We specialize in website and app development, providing custom solutions that drive engagement and streamline user experiences. Our technology services ensure your digital platforms are cutting-edge and effective.</p>
                </div>
                <img className='h-[322.27px] w-[570px] rounded-[32px]' src={third} alt="" />
                {/* 4 */}
                <img className='h-[322.27px] w-[570px] rounded-[32px]' src={fourth} alt="" />
                <div className='flex flex-col gap-4 w-[570px] h-[152px]' >
                    <h1 className='font-semibold text-3xl text-[#1E1E1E]'><span className='font-semibold text-3xl text-[#19BDE8]'>04. </span>Requirements as a Services</h1>
                    <p className='font-normal text-2xl' >Our RAAS services focus on talent acquisition and management. We help you find and retain the right talent, ensuring your team has the skills and expertise to drive success.</p>
                </div>
                {/* 5 */}

                <div className='flex flex-col gap-4 w-[570px] h-[152px]' >
                    <h1 className='font-semibold text-3xl text-[#1E1E1E]'><span className='font-semibold text-3xl text-[#19BDE8]'>05. </span>Marketing Solutions</h1>
                    <p className='font-normal text-2xl'>
                        Our digital marketing services include SEO, PPC, social media marketing, and more. We tailor strategies to enhance your online visibility, attract targeted traffic, and convert leads into loyal customers.
                    </p>
                </div>
                <img className='h-[322.27px] w-[570px] rounded-[32px]' src={fifth} alt="" />
                {/* 6 */}
                <img className='h-[322.27px] w-[570px] rounded-[32px]' src={sixth} alt="" />
                <div className='flex flex-col gap-4 w-[570px] h-[152px]' >
                    <h1 className='font-semibold text-3xl text-[#1E1E1E]'><span className='font-semibold text-3xl text-[#19BDE8]'>06. </span>Multimedia Solutions</h1>
                    <p className='font-normal text-2xl' >
                        We offer dynamic content creation services to engage your audience. From captivating videos to compelling graphic design, our multimedia solutions help you communicate your brand’s story effectively. </p>
                </div>
            </div>
            {/* Who we Work */}
            <div className='bg-[#EEEDED] w-full h-[307px] mt-15 mb-10  flex items-center justify-center'>
                <div className='w-[1200px] h-[127px] gap-6 text-center'>
                    <h1 className='text-[#19BDE8] font-semibold text-4xl' >Who We Work With</h1>
                    <div className='flex justify-between items-center gap-6 mt-10'>
                        <img className='w-[153px] h-[44px]' src={brand1} alt="" />
                        <img className='w-[153px] h-[44px]' src={brand2} alt="" />
                        <img className='w-[155px] h-[60px]' src={brand3} alt="" />
                        <img className='w-[153px] h-[44px]' src={brand4} alt="" />
                        <img className='w-[153px] h-[44px]' src={brand5} alt="" />
                        <img className='w-[153px] h-[44px]' src={brand6} alt="" />
                        <img className=' h-[80px] rounded-[50%]' src={brand7} alt="" />
                    </div>
                </div>
            </div>
            {/* Hear from our Clients */}
            <div>

            </div>

        </main>
    )
}

export default WhatWeDo