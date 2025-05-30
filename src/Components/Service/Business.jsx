import React, { useState } from 'react';
import bg from '../../assets/Service/Business/HeroSection.png';
import Footer from '../Footer/Footer';
import one from '../../assets/Service/Business/1.png';
import two from '../../assets/Service/Business/2.png';
import three from '../../assets/Service/Business/3.png';
import four from '../../assets/Service/Business/4.png';
import CustomBtn from '../Button/CustomBtn';
import { Link } from 'react-router-dom';
const Business = () => {
    const [tiltStyles, setTiltStyles] = useState({});

    const clamp = (value, min, max) => Math.max(min, Math.min(value, max));

// Create a map to store animation frames (per card)
const animationFrames = {};

const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // Cancel any previously queued animation
    if (animationFrames[index]) {
        cancelAnimationFrame(animationFrames[index]);
    }

    animationFrames[index] = requestAnimationFrame(() => {
        const offsetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const offsetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

        const rotateX = clamp(offsetY * 20, -20, 20);
        const rotateY = clamp(offsetX * 20, -20, 20);

        setTiltStyles((prevStyles) => ({
            ...prevStyles,
            [index]: {
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
                // Note: no transition here to avoid jitter
            },
        }));
    });
};

const handleMouseLeave = (index) => {
    if (animationFrames[index]) {
        cancelAnimationFrame(animationFrames[index]);
    }

    setTiltStyles((prevStyles) => ({
        ...prevStyles,
        [index]: {
            transform: 'rotateX(0deg) rotateY(0deg)',
            transition: 'transform 0.4s ease-out'
        },
    }));
};

    const problems = [
        {
            title: "Inefficient Operations",
            description:
                "Resources are underutilized, causing low output & high costs."
        },
        {
            title:
                "Market Misalignment",
            description:
                "Strategies that don't adapt lose relevance and impact."
        },

        {
            title: " Lack of Clear Direction",
            description:
                "Unclear goals and planning slow growth and decision-making."
        },
        {
            title: "Scaling Challenges",
            description:
                "Businesses struggle to grow without structured models."
        },
    ];
    const solutions = [
        {
            title: "Strategic Roadmapping",
            image: one,
            description:
                "We define short and long-term goals, backed by actionable plans."
        },
        {
            title: "Market & Competitor Analysis",
            image: two,
            description:
                "We analyze your industry to keep your strategy focused and future-ready."
        },

        {
            title: "Operational Optimization",
            image: three,
            description:
                "We refine workflows and systems for higher efficiency and profitability."
        },
        {
            title: "Scalable Growth Planning",
            image: four,
            description:
                "We help you build frameworks for sustainable expansion and team scaling."
        },
    ];
    return (
        <>
            {/* Header */}
            <header className="relative w-full min-h-screen flex justify-center items-center">
                {/* Background Image */}
                <img
                    className="absolute w-full h-full object-cover z-0"
                    src={bg}
                    alt="Business Strategy Background"
                />

                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/65 z-10"></div>

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-12 lg:px-24 w-full  gap-6 max-w-[1200px]" >
                    <h1 className="text-[#19BDE8] font-semibold text-3xl md:text-6xl leading-tight text-justify sm:text-center">
                        Business Strategy Consulting
                    </h1>
                    <p className="font-normal text-base md:text-xl  mt-6 text-center text-justify sm:text-center">
                        At Manvian, we help businesses move with clarity and confidence. From refining your value proposition to scaling operations, we design strategies rooted in market insight, innovation, and measurable impact.
                    </p>
                    <a href="#">
                        <CustomBtn> Start Building a Smarter Strategy</CustomBtn>
                    </a>
                </div>
            </header>

            {/* Content */}
            <main className=''>
                <div className="px-4 py-12 bg-white text-gray-800">
                    {/* Problems Section */}
                    <section className="text-center mb-16">
                        <h2 className="text-xl md:text-3xl font-bold text-[#19BDE8] text-justify sm:text-center">
                            The Problem – What Businesses Struggle With
                        </h2>
                        <p className="mt-2 text-gray-600 text-base md:text-2xl text-justify sm:text-center">
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
                                    style={tiltStyles[index] || {}}
                                    onMouseMove={(e) => handleMouseMove(e, index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                >
                                    <div className="w-10 h-10 border-2 border-black text-black font-normal rounded-[50px] p-6 mx-auto mb-4 flex items-center justify-center text-4xl ">
                                        {index + 1}
                                    </div>
                                    <h3 className="font-semibold text-lg md:text-2xl mb-4 text-black text-justify sm:text-center">{problem.title}</h3>
                                    <p className="text-base md:text-lg font-normal text-black text-justify sm:text-center">{problem.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Solutions Section */}
                    <section className="max-w-4xl mx-auto">
                        <h2 className="text-xl md:text-3xl font-bold text-[#19BDE8] text-center mb-8 text-justify sm:text-center">
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
                                            <h4 className="font-medium text-xl md:text-2xl text-justify sm:text-left">{solution.title}</h4>
                                            <p className="text-base md:text-lg text-gray-600 mt-1 text-justify sm:text-left">
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
            {/* Exxplore */}
            <div className='w-full min-h-[300px] bg-gradient-to-t from-[#19BDE880]/50 to-white flex flex-col md:flex-row justify-around items-center px-8 py-12 lg:px-16 mb-20'>
                <div className='w-full md:w-[35%] mb-8 md:mb-0'>
                    <h1 className='font-semibold text-xl lg:text-3xl md:text-2xl  mb-5 text-justify sm:text-left'>
                        Explore More Ways We Can Help You Grow
                    </h1>
                    <p className='text-base lg:text-sm md:text-xs text-justify sm:text-left'>
                        Your business needs more than just Multimedia. Discover how our full suite of services works together to drive real results.
                    </p>
                </div>

                <div className='w-full md:w-[55%] flex flex-wrap gap-3 justify-center '>
                    <button className='text-white bg-black rounded-lg py-2 px-4 hover:bg-gray-800 transition-colors text-sm cursor-pointer underline'>
                        <Link to="/service/TechSolution">Technology Solutions</Link>
                    </button>
                    <button className='text-white bg-black rounded-lg py-2 px-4 hover:bg-gray-800 transition-colors text-sm cursor-pointer underline'>
                        <Link to="/service/DigitalMarketing"> Digital Marketing</Link>
                    </button>
                    <button className='text-white bg-black rounded-lg py-2 px-4 hover:bg-gray-800 transition-colors text-sm cursor-pointer underline'>
                        <Link to="/service/Sales"> Sales</Link>
                    </button>
                    <button className='text-white bg-black rounded-lg py-2 px-4 hover:bg-gray-800 transition-colors text-sm cursor-pointer underline'>
                        <Link to="/service/RAAS"> RaaS Solutions</Link>
                    </button>
                    <button className='text-white bg-black rounded-lg py-2 px-4 hover:bg-gray-800 transition-colors text-sm cursor-pointer underline'>
                        <Link to="/portfolio/Multimedia"> Multimedia</Link>
                    </button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Business;
