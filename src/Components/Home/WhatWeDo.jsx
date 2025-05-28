import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

// Assets
import first from '../../assets/Home/1 What We Do/1_Bussiness_Consultancy.png';
import second from '../../assets/Home/1 What We Do/2_Mentorship&Inverstemnt.png';
import third from '../../assets/Home/1 What We Do/3_Tech_Solution.png';
import fourth from '../../assets/Home/1 What We Do/4_Service.png';
import fifth from '../../assets/Home/1 What We Do/5_Marketing.png';
import sixth from '../../assets/Home/1 What We Do/6_Multi_Media_Solution.png';

// FadeIn animation component
const FadeInSection = ({ children, direction = 'left' }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
        rootMargin: '-50px'
    })

    const variants = {
        hidden: {
            opacity: 0,
            scale: 0.98,
            x: direction === 'left' ? -200 : direction === 'right' ? 200 : 0
        },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
                staggerChildren: 0.2
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

// Counting number animation
const CountingNumber = ({ end, duration = 2 }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const increment = end / (duration * 60);
        const interval = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(interval);
            } else {
                setCount(Math.ceil(start));
            }
        }, 1000 / 60);

        return () => clearInterval(interval);
    }, [inView, end, duration]);

    return (
        <div ref={ref} className="font-light text-xl lg:text-6xl text-[#19BDE8]">
            {count}+
        </div>
    );
};

const WhatWeDo = () => {
    const services = [
        {
            img: first,
            title: '01. Business Consulting',
            desc: 'We develop comprehensive business strategies that align with your vision and objectives. Our approach includes market research, competitive analysis, and strategic planning to ensure long-term success.',
            path: '/service/Business',
        },
        {
            img: second,
            title: '02. Sales',
            desc: 'Access valuable mentorship and investment opportunities. Connect with industry experts and investors who can provide the guidance and resources you need to succeed.',
            path: '/service/Sales',
            reverse: true,
        },
        {
            img: third,
            title: '03. Technology Solutions',
            desc: 'We specialize in website and app development, providing custom solutions that drive engagement and streamline user experiences. Our technology services ensure your digital platforms are cutting-edge and effective.',
            path: '/service/TechSolution',
        },
        {
            img: fourth,
            title: '04. Requirements as a Services',
            desc: 'Our RAAS services focus on talent acquisition and management. We help you find and retain the right talent, ensuring your team has the skills and expertise to drive success.',
            path: '/service/RAAS',
            reverse: true,
        },
        {
            img: fifth,
            title: '05. Marketing Solutions',
            desc: 'Our digital marketing services include SEO, PPC, social media marketing, and more. We tailor strategies to enhance your online visibility, attract targeted traffic, and convert leads into loyal customers.',
            path: '/service/DigitalMarketing',
        },
        {
            img: sixth,
            title: '06. Multimedia Solutions',
            desc: 'We offer dynamic content creation services to engage your audience. From captivating videos to compelling graphic design, our multimedia solutions help you communicate your brand’s story effectively.',
            path: '/service/multimedia',
            reverse: true,
        },
    ];

    return (
        <div className="w-full overflow-x-hidden">
            <main className="bg-white w-full mt-10 px-4 sm:px-6 lg:px-20">
                {/* Header */}
                <div className="flex flex-col gap-1.5 text-center">
                    <h1 className="text-[32px] md:text-[40px] font-semibold text-[#19BDE8]">What We Do</h1>
                    <p className="text-xl md:text-2xl">“We support entrepreneurs to prohibit their prohibition”</p>
                </div>

                {/* Content Cards */}
                <div className="mt-10 flex flex-col gap-14">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-6 lg:gap-12 w-full`}
                        >
                            {/* Image */}
                            <FadeInSection direction={item.reverse ? 'right' : 'left'}>
                                <img
                                    className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:w-[570px] h-[200px] sm:h-[250px] md:h-[322.27px] rounded-3xl object-cover"
                                    src={item.img}
                                    alt={item.title}
                                />
                            </FadeInSection>

                            {/* Text */}
                            <FadeInSection direction={item.reverse ? 'left' : 'right'}>
                                <Link to={item.path} className="block w-full">
                                    <div className="w-full lg:w-[570px] flex flex-col gap-4">
                                        <h1 className="font-semibold text-lg sm:text-xl md:text-3xl text-[#1E1E1E]">
                                            <span className="text-[#19BDE8]">
                                                {item.title.slice(0, 4)}
                                            </span>
                                            {item.title.slice(4)}
                                        </h1>
                                        <p className="font-normal text-sm sm:text-base md:text-2xl text-justify">{item.desc}</p>
                                    </div>
                                </Link>
                            </FadeInSection>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default WhatWeDo;
