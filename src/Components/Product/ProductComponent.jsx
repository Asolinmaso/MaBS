import React from 'react'
import bg from '../../assets/Product/Product_Hero.png'
import Footer from '../Footer/Footer'
import oppti_black from '../../assets/Logo/opptiverse.svg'
import Opptiverse_bg from '../../assets/Product/Opptiverse_Bg.png'
import CustomBtn from '../Button/CustomBtn'
// Logos

const ProductComponent = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/send-mail`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert('Message sent successfully!');
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <>
            <section className='relative w-full'>
                {/* Hero Section with Background Image */}
                <div className='relative w-full min-h-[900px] flex flex-col items-center justify-start'>
                    {/* Background Image */}
                    <img className='absolute w-full h-full object-cover z-0' src={bg} alt="Background" />

                    {/* Dark Overlay */}
                    <div className='absolute inset-0 bg-black/70 z-10'></div>

                    {/* Content & Form */}
                    <div className='relative z-20 w-full max-w-5xl px-6 pt-15 pb-16'>
                        {/* Heading & Description */}
                        <div className='text-white text-center flex flex-col items-center mb-12 pt-26'>
                            <h1 className='text-[#19BDE8] font-semibold text-5xl md:text-6xl mb-6'>Explore our Product</h1>
                            <div className='w-full max-w-[800px] mx-auto'>
                                <img 
                                    src={Opptiverse_bg} 
                                    className='w-full h-30 object-contain px-4 sm:px-6 md:px-8' 
                                    alt="Opptiverse Background" 
                                />
                            </div>
                            <p className='text-xl md:text-2xl  mt-6'>
                                Welcome to Manvian, your trusted partner in business development. We empower entrepreneurs and their Businesses to Reach New Heights by providing valuable solutions through Innovative Strategies and Exceptional Execution
                            </p>
                            <a href="" className="mt-10">
                                {/* <img className='w-[100px] h-[100px] cursor-pointer' src={oppti_black} alt="Logo" /> */}
                                <CustomBtn>explore now</CustomBtn>
                            </a>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className='bg-white shadow-2xl rounded-xl p-6 sm:p-10 flex flex-col gap-6 w-full max-w-4xl mx-auto z-20 relative'>
                            {/* Two Column Inputs */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div>
                                    <label className='block text-gray-700 mb-2 font-medium'>Name</label>
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder='Enter Name'
                                        className='w-full border border-gray-300 p-3 rounded focus:outline-none'
                                    />
                                </div>

                                <div>
                                    <label className='block text-gray-700 mb-2 font-medium'>Email ID</label>
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='Enter Email-ID'
                                        className='w-full border border-gray-300 p-3 rounded focus:outline-none'
                                    />
                                </div>

                                <div>
                                    <label className='block text-gray-700 mb-2 font-medium'>Phone Number</label>
                                    <input
                                        type='tel'
                                        name='phone'
                                        placeholder='Enter your phone number'
                                        className='w-full border border-gray-300 p-3 rounded focus:outline-none'
                                    />
                                </div>

                                <div>
                                    <label className='block text-gray-700 mb-2 font-medium'>Location</label>
                                    <input
                                        type='text'
                                        name='location'
                                        placeholder='Enter your Location'
                                        className='w-full border border-gray-300 p-3 rounded focus:outline-none'
                                    />
                                </div>
                            </div>

                            {/* Message - full width */}
                            <div>
                                <label className='block text-gray-700 mb-2 font-medium'>Message</label>
                                <textarea
                                    rows='4'
                                    name='message'
                                    placeholder='Tell us a little about yourself — we’re here for you and happy to help however we can!'
                                    className='w-full border border-gray-300 p-3 rounded resize-none focus:outline-none'
                                />
                            </div>

                            {/* Submit Button */}
                            <div className='flex justify-center gap-6'>
                                <button
                                    type='button'
                                    className='bg-white text-[#19BDE8] border-2 border-[#19BDE8] py-3 px-8 rounded font-semibold transition cursor-pointer'
                                >
                                    Cancel
                                </button>
                                <button
                                    type='submit'
                                    className='bg-[#19BDE8] text-white py-3 px-8 rounded font-semibold hover:bg-[#1599bb] transition cursor-pointer'
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* White Spacer to prevent footer collision */}

                <Footer />
            </section>
        </>
    )
}

export default ProductComponent
