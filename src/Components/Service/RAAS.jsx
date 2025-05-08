import React, { useState } from 'react';
import bg from '../../assets/Service/RAAS/HeroSection.png'
import Footer from '../Footer/Footer';
import one from '../../assets/Service/RAAS/1.png'
import two from '../../assets/Service/RAAS/2.png'
import three from '../../assets/Service/RAAS/3.png'
import four from '../../assets/Service/RAAS/4.png'
import Explore from './Explore';
import CustomBtn from '../Button/CustomBtn';

const RAAS = () => {
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
            title: "Slow Hiring Process",
            description:
                "Lengthy recruitment cycles delay operations and hurt productivity."
        },
        {
            title:
                "Unqualified Candidates",
            description:
                "Too much time spent screening poor-fit applicants."
        },

        {
            title: "High Recruiting Costs",
            description:
                "Recruiting in-house or externally strains your budget."
        },
        {
            title: "No Scalable Support",
            description: "Hard to scale teams fast for projects or peak demand.",
        },
    ];
    const solutions = [
        {
            title: "Manpower Augmentation",
            image: one,
            description:
                "We provide skilled professionals on demand to help you scale fast and smart."
        },
        {
            title: "Manpower Outsourcing",
            image: two,
            description:
                "We simplify hiring by delivering vetted professionals without full-time overhead."
        },
        {
            title: "Interviewing",
            image: three,
            description:
                "We conduct bias-free, structured interviews to shortlist the best-fit talent for your team."
        },
        {
            title: "Hiring Process",
            image: four,
            description:
                "From sourcing to onboarding, we manage the entire recruitment journey — fast, efficient, and aligned with your needs."
        },
    ];

    return (
        <>
            {/* Header */}
            <header className="relative w-full h-[822.86px] flex justify-center items-center">
                {/* Background image */}
                <img
                    className="absolute w-full h-full object-cover z-0"
                    src={bg}
                    alt=""
                />

                {/* Dark overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/65 z-10"></div>

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center text-center text-white px-4 sm:px-6 md:px-12 lg:px-24 xl:px-0 w-full max-w-[1200px] gap-6">
                    <h1 className="text-[#19BDE8] font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight">
                        Recruitment-as-a-Service (RaaS)
                    </h1>
                    <p className="font-normal text-base sm:text-lg md:text-xl max-w-3xl">
                        Finding the right talent shouldn't slow down your growth. At Manvian, our Recruitment-as-a-Service (RaaS) model offers agile, efficient, and scalable hiring solutions — so you can focus on building your business while we build your team.
                    </p>
                    <a href="#" className="">
                        <CustomBtn>Get the Right Talent Today</CustomBtn>
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
                                    onMouseMove={(e) => handleMouseMove(e, index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                    style={tiltStyles[index] || {}}
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

            <Explore />

            <Footer />
        </>
    )
}

export default RAAS
