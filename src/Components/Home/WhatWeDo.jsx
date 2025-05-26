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

import { Link } from 'react-router-dom'
import CountAnimation from './CountAnimation'

const FadeInSection = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
        rootMargin: '-50px'
    })

    const variants = {
        hidden: {
            opacity: 0,
            scale: 0.98
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.5,
                ease: [0.6, 0.05, 0.01, 0.99],
                staggerChildren: 0.1
            }
        }
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            className="w-full"
        >
            {children}
        </motion.div>
    )
}

const CountingNumber = ({ end, duration = 2 }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    return (
        <motion.div
            ref={ref}
            className="font-light  text-xl lg:text-6xl text-[#19BDE8]"
        >
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.span
                    animate={inView ? { count: end } : { count: 0 }}
                    initial={{ count: 0 }}
                    transition={{ duration: duration, type: "spring", damping: 10 }}
                >
                    {({ count }) => Math.round(count)}
                </motion.span>
                +
            </motion.span>
        </motion.div>
    );
};

const WhatWeDo = () => {
    return (
        <main className='bg-white w-full mt-10 px-4 sm:px-6 lg:px-20'>
            {/* head */}
            <div className='flex flex-col gap-1.5 text-center'>
                <h1 className='text-[32px] md:text-[40px] font-semibold text-[#19BDE8]'>What We Do</h1>
                <p className='text-xl md:text-2xl'>“We support entrepreneurs to prohibit their prohibition”</p>
            </div>

            <div className='mt-10 flex flex-col gap-14'>
                {[
                    {
                        img: first,
                        title: '01. Business Consulting',
                        desc: 'We develop comprehensive business strategies that align with your vision and objectives. Our approach includes market research, competitive analysis, and strategic planning to ensure long-term success.',
                        path: "/service/Business"
                    },
                    {
                        img: second,
                        title: '02. Sales',
                        desc: 'Access valuable mentorship and investment opportunities. Connect with industry experts and investors who can provide the guidance and resources you need to succeed.',
                        path: "/service/Sales",
                        reverse: true
                    },
                    {
                        img: third,
                        title: '03. Technology Solutions',
                        desc: 'We specialize in website and app development, providing custom solutions that drive engagement and streamline user experiences. Our technology services ensure your digital platforms are cutting-edge and effective.',
                        path: "/service/TechSolution",
                    },
                    {
                        img: fourth,
                        title: '04. Requirements as a Services',
                        desc: 'Our RAAS services focus on talent acquisition and management. We help you find and retain the right talent, ensuring your team has the skills and expertise to drive success.',
                        path: "/service/RAAS",
                        reverse: true,
                    },
                    {
                        img: fifth,
                        title: '05. Marketing Solutions',
                        desc: 'Our digital marketing services include SEO, PPC, social media marketing, and more. We tailor strategies to enhance your online visibility, attract targeted traffic, and convert leads into loyal customers.',
                        path: "/service/DigitalMarketing",
                    },
                    {
                        img: sixth,
                        title: '06. Multimedia Solutions',
                        desc: 'We offer dynamic content creation services to engage your audience. From captivating videos to compelling graphic design, our multimedia solutions help you communicate your brand’s story effectively.',
                        path: "/service/multimedia",
                        reverse: true,
                    }
                ].map((item, index) => (
                    <div
                        key={index}
                        className={`flex ${item.reverse ? 'flex-col-reverse lg:flex-row-reverse' : 'flex-col-reverse lg:flex-row'} items-center gap-6 lg:gap-12`}
                    >
                        <FadeInSection>
                            <img className='w-full lg:w-[570px] h-auto lg:h-[322.27px] rounded-[32px]' src={item.img} alt="" />
                        </FadeInSection>
                        <FadeInSection>
                            <Link to={item.path}>
                                <div className='w-full lg:w-[570px] flex flex-col gap-4'>
                                    <h1 className='font-semibold text-xl md:text-3xl text-[#1E1E1E]'>
                                        <span className='text-[#19BDE8]'>{item.title.slice(0, 4)}</span>
                                        {item.title.slice(4)}
                                    </h1>
                                    <p className='font-normal text-base md:text-2xl text-justify'>{item.desc}</p>
                                </div>
                            </Link>
                        </FadeInSection>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default WhatWeDo
