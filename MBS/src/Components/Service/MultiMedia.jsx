import React from 'react'
import { useNavigate } from 'react-router-dom';
import bg from '../../assets/Service/MultiMedia/HeroSection.png'
import Footer from '../Footer/Footer';
import one from '../../assets/Service/MultiMedia/1_Visual_Desgin.png';
import two from '../../assets/Service/MultiMedia/2_UI_UX.png';
import three from '../../assets/Service/MultiMedia/3_Graphic.png';
import four from '../../assets/Service/MultiMedia/4_VideoEditing.png';
import Explore from './Explore';
const MultiMedia = () => {
    const navigate = useNavigate()
    const problems = [
        {
            title: "Brand Mismatch",
            description: "Inconsistent branding across channels weakens brand trust.",
        },
        {
            title: "Message Overload",
            description: "Complex messages often get lost in text-heavy content.",
        },
        {
            title: "Poor Visual Appeal",
            description: "Low engagement from unappealing visuals or outdated designs.",
        },
        {
            title: "Visual Gap",
            description: "Struggling to turn ideas into compelling visual experiences.",
        },
    ];
    const solutions = [
        {
            title: "Visual Designing",
            image: one,
            description:
                "We design consistent, eye-catching visual identities that speak your brand language.",
        },
        {
            title: "UX/UI Design",
            image: two,
            description:
                "Intuitive and elegant interfaces for web and mobile experiences your audience will love.",
        },
        {
            title: "Graphic Designing",
            image: three,

            description:
                "From brochures to social posts, we make every piece of content visually engaging.",
        },
        {
            title: "Video Editing & Animation",
            image: four,
            description:
                "Professional video content, animated explainer videos, intros/outros, and more.",
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
            <header className='flex w-[1440px] h-[822.86px]  justify-center items-center relative'>
                <img className='absolute w-full h-full  z-0' src={bg} alt="" />
                {/* overlay */}
                <div className='absolute top-0 left-0 w-full h-full bg-black/65 z-10'></div>
                <div className='flex flex-col items-center gap-6 text-center w-6xl h-96 z-20 text-white' >
                    <h1 className='text-[#19BDE8] font-semibold text-6xl' >MultiMedia Solutions</h1>
                    <p className='font-normal text-xl'>We bring your brand to life visually by crafting multimedia experiences that connect, communicate, and captivate. From engaging designs to compelling visual storytelling, our solutions ensure your message not only stands out but resonates with your audience across all platforms.
                    </p>
                    <a href="#" className=''>
                        <button className='flex items-center gap-3 font-semibold text-2xl text-white bg-[#19BDE8] py-3 px-3.5 rounded-xl cursor-pointer'>
                            Elevate Your Brand Visually
                            <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.50005 1.5C1.50005 1.5 7.5 5.9189 7.5 7.5C7.5 9.0812 1.5 13.5 1.5 13.5" stroke="#EBEBEB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
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
                                    <button className="w-12 h-12 bg-black text-white text-3xl  cursor-pointer font-normal rounded-full flex items-center justify-center hover:bg-sky-600 transition">
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
                <h1 className='text-[#19BDE8] font-semibold text-4xl'> See Our Creativity in Action</h1>
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
                    onClick={() => navigate('/portfolio/Multimedia')}>
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

export default MultiMedia