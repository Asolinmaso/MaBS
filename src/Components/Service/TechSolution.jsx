import React, { useState } from 'react';
import bg from '../../assets/Service/TechSolution/HeroSection.png'
import Footer from '../Footer/Footer';
import one from '../../assets/Service/TechSolution/1.png'
import two from '../../assets/Service/TechSolution/2.png'
import three from '../../assets/Service/TechSolution/3.png'
import four from '../../assets/Service/TechSolution/4.png'
import Explore from './Explore';
import { useNavigate } from 'react-router-dom';
import CustomBtn from '../Button/CustomBtn';

const TechSolution = () => {
    const navigate = useNavigate();
    const [tiltStyles, setTiltStyles] = useState({});

    const handleMouseMove = (e, index) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // X position within the element
        const y = e.clientY - rect.top; // Y position within the element

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 30; // Adjust the multiplier for tilt intensity
        const rotateY = ((x - centerX) / centerX) * -30;

        setTiltStyles((prevStyles) => ({
            ...prevStyles,
            [index]: {
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            }
        }));
    };

    const handleMouseLeave = (index) => {
        setTiltStyles((prevStyles) => ({
            ...prevStyles,
            [index]: {
                transform: 'rotateX(0deg) rotateY(0deg)'
            }
        }));
    };

    const problems = [
        {
            title: "Outdated Digital Presence",
            description: "Your website doesn't reflect your brand or keep users engaged."
        },
        {
            title: "Mobile Inaccessibility",
            description: "Customers drop off due to clunky or missing mobile experience.",
        },
        {
            title: " Transparency Gaps",
            description: "Insecure systems reduce user confidence and brand reliability.",
        },
        {
            title: " Repetitive Workflows",
            description: "Too much time is lost doing what AI can automate in seconds.",
        },
    ];
    const solutions = [
        {
            title: "Website Design & Development",
            image: one,
            description:
                "We craft responsive, SEO-friendly websites that attract, engage, and convert.",
        },
        {
            title: "Mobile App Development",
            image: two,
            description:
                "We build custom apps for iOS & Android that boost engagement and user experience.",
        },
        {
            title: " Blockchain Solutions",
            image: three,

            description:
                "We develop secure, decentralized systems for trust, transparency, and smart automation.",
        },
        {
            title: "Artificial Intelligence",
            image: four,
            description:
                "We integrate AI to streamline operations, personalize experiences, and drive growth.",
        },
    ];

    const CreativityAction = [
        { id: 1, src: '/images/img1.png', alt: 'Image 1' },
        { id: 2, src: '/images/img2.png', alt: 'Image 2' },
        { id: 3, src: '/images/img3.png', alt: 'Image 3' },
        { id: 4, src: '/images/img4.png', alt: 'Image 4' },
    ];

    return (
        <>
            {/* Header */}
            <header className="relative w-full min-h-screen flex justify-center items-center">
                {/* Background Image */}
                <img
                    className="absolute w-full h-full object-cover z-0"
                    src={bg}
                    alt="background"
                />

                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/65 z-10"></div>

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center text-center text-white px-4 sm:px-6 md:px-12 lg:px-24 xl:px-0 w-full max-w-[1200px] gap-6">
                    <h1 className="text-[#19BDE8] font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight">
                        Technology Solutions
                    </h1>
                    <p className="font-normal text-base sm:text-lg md:text-xl max-w-3xl">
                        We don’t just build tech — we craft intelligent, scalable solutions that power your business growth. From stunning websites and intuitive apps to emerging technologies like blockchain and AI, we turn ideas into digital excellence.
                    </p>
                    <a href="#">
                        <CustomBtn> Power Your Business with Innovation</CustomBtn>
                    </a>
                </div>
            </header>

            {/* Content */}
            <main className=''>
                <div className="px-4 py-12 bg-white text-gray-800">
                    {/* Problems Section */}
                    <section className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#19BDE8]">
                            The Problem – What Businesses Struggle With
                        </h2>
                        <p className="mt-2 text-gray-600 text-2xl">
                            Visual Noise is Everywhere – Are You Cutting Through?
                        </p>

                        <div className="mt-10 flex flex-wrap justify-center gap-8">
                            {problems.map((problem, index) => (
                                <div
                                    key={index}
                                    className={`w-[281px] h-[355px] rounded-2xl py-[60px] px-4 shadow-lg hover:shadow-2xl mb-4
                              ${index % 2 === 0
                                            ? 'bg-gradient-to-t from-[#19BDE8] to-[#FFFFFF]'
                                            : 'bg-gradient-to-b from-[#19BDE8] to-[#FFFFFF]'
                                        }`}
                                    style={tiltStyles[index]}
                                    onMouseMove={(e) => handleMouseMove(e, index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                >
                                    <div className="w-10 h-10 border-2 border-black text-black font-normal rounded-[50px] p-6 mx-auto mb-4 flex items-center justify-center text-4xl ">
                                        {index + 1}
                                    </div>
                                    <h3 className="font-semibold text-2xl mb-4 text-black">{problem.title}</h3>
                                    <p className="text-lg font-normal text-black">{problem.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Solutions Section */}
                    <section className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#19BDE8] text-center mb-8">
                            Our Solutions – How Manvian Helps
                        </h2>
                        <div className="space-y-4">
                            {solutions.map((solution, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center border-b-1 border-black/20  p-4  transition duration-300 mb-6"
                                >
                                    <div className='flex gap-4 items-center justify-center'>
                                        <img className='h-15 w-15' src={solution.image} alt="" />
                                        <div>
                                            <h4 className="font-medium text-2xl">{solution.title}</h4>
                                            <p className="text-md text-gray-600 mt-1">
                                                {solution.description}
                                            </p>
                                        </div>
                                    </div>
                                    <button className="w-12 h-12 min-w-[3rem] min-h-[3rem] aspect-square bg-black text-white text-3xl cursor-pointer font-normal rounded-full flex items-center justify-center hover:bg-sky-600 transition">
                                        ↗
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            {/* See Our Creativity in Action */}
            <div className='w-full flex flex-col items-center justify-center mb-8'>
                <h1 className='text-[#19BDE8] font-semibold text-2xl text-center'> See Our Creativity in Action</h1>
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto p-4">

                {CreativityAction.map((img) => (
                    <img
                        key={img.id}
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-48 object-cover rounded-lg shadow"
                    />
                ))}
            </div>
            <div className='w-full flex flex-col items-center justify-center mt-3'>


                <button className='flex items-center gap-3 font-semibold text-2xl text-white bg-[#19BDE8] py-3 px-3.5 rounded-xl cursor-pointer'
                    onClick={() => navigate("/portfolio/Technology")}>
                    Explore Our Portfolio
                    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.50005 1.5C1.50005 1.5 7.5 5.9189 7.5 7.5C7.5 9.0812 1.5 13.5 1.5 13.5" stroke="#EBEBEB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>

            </div>

            <Explore />
            <Footer />
        </>
    )
}

export default TechSolution;
