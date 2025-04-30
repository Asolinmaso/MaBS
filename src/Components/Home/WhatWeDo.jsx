import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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

const FadeInSection = ({ children, direction = 'left' }) => {
    const controls = useAnimation()
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

    React.useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: 'easeOut' },
            })
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: direction === 'left' ? -50 : 50 }}
            animate={controls}
        >
            {children}
        </motion.div>
    )
}

const WhatWeDo = () => {
    return (
        <main className='bg-white w-full mt-10 px-4 sm:px-6 lg:px-20'>
            {/* head */}
            <div className='flex flex-col gap-1.5 text-center'>
                <h1 className='text-[32px] sm:text-[40px] font-semibold text-[#19BDE8]'>What We Do</h1>
                <p className='text-xl sm:text-2xl'>“We support entrepreneurs to prohibit their prohibition”</p>
            </div>

            <div className='mt-10 flex flex-col gap-14'>
                {[
                    {
                        img: first,
                        title: '01. Business Consulting',
                        desc: 'We develop comprehensive business strategies that align with your vision and objectives. Our approach includes market research, competitive analysis, and strategic planning to ensure long-term success.',
                    },
                    {
                        img: second,
                        title: '02. Mentorship & Investment',
                        desc: 'Access valuable mentorship and investment opportunities. Connect with industry experts and investors who can provide the guidance and resources you need to succeed.',
                        reverse: true
                    },
                    {
                        img: third,
                        title: '03. Technology Solutions',
                        desc: 'We specialize in website and app development, providing custom solutions that drive engagement and streamline user experiences. Our technology services ensure your digital platforms are cutting-edge and effective.',
                    },
                    {
                        img: fourth,
                        title: '04. Requirements as a Services',
                        desc: 'Our RAAS services focus on talent acquisition and management. We help you find and retain the right talent, ensuring your team has the skills and expertise to drive success.',
                        reverse: true
                    },
                    {
                        img: fifth,
                        title: '05. Marketing Solutions',
                        desc: 'Our digital marketing services include SEO, PPC, social media marketing, and more. We tailor strategies to enhance your online visibility, attract targeted traffic, and convert leads into loyal customers.',
                    },
                    {
                        img: sixth,
                        title: '06. Multimedia Solutions',
                        desc: 'We offer dynamic content creation services to engage your audience. From captivating videos to compelling graphic design, our multimedia solutions help you communicate your brand’s story effectively.',
                        reverse: true
                    }
                ].map((item, index) => (
                    <div key={index} className={`flex flex-col lg:flex-row ${item.reverse ? 'lg:flex-row-reverse' : ''} items-center gap-6 lg:gap-12`}>
                        <FadeInSection direction={item.reverse ? 'right' : 'left'}>
                            <img className='w-full lg:w-[570px] h-auto lg:h-[322.27px] rounded-[32px]' src={item.img} alt="" />
                        </FadeInSection>
                        <FadeInSection direction={item.reverse ? 'left' : 'right'}>
                            <div className='w-full lg:w-[570px] flex flex-col gap-4'>
                                <h1 className='font-semibold text-2xl sm:text-3xl text-[#1E1E1E]'>
                                    <span className='text-[#19BDE8]'>{item.title.slice(0, 4)}</span>
                                    {item.title.slice(4)}
                                </h1>
                                <p className='font-normal text-lg sm:text-2xl'>{item.desc}</p>
                            </div>
                        </FadeInSection>
                    </div>
                ))}
            </div>

            {/* Who we Work With */}
            <div className='bg-[#EEEDED] w-full mt-20 mb-10 py-10 flex items-center justify-center'>
                <div className='w-full max-w-[1200px] text-center px-4'>
                    <h1 className='text-[#19BDE8] font-semibold text-2xl sm:text-4xl mb-8'>Who We Work With</h1>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 justify-items-center items-center'>
                        <img className='w-[100px] sm:w-[153px] h-auto' src={brand1} alt="" />
                        <img className='w-[100px] sm:w-[153px] h-auto' src={brand2} alt="" />
                        <img className='w-[100px] sm:w-[155px] h-auto' src={brand3} alt="" />
                        <img className='w-[100px] sm:w-[153px] h-auto' src={brand4} alt="" />
                        <img className='w-[100px] sm:w-[153px] h-auto' src={brand5} alt="" />
                        <img className='w-[100px] sm:w-[153px] h-auto' src={brand6} alt="" />
                        <img className='h-[60px] sm:h-[80px] w-[60px] sm:w-[80px] rounded-full object-cover' src={brand7} alt="" />
                    </div>
                </div>
            </div>

            {/* Hear from our Clients */}
            <div>
                {/* Reserved space */}
            </div>
        </main>
    )
}

export default WhatWeDo
