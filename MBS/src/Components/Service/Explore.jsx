import React from 'react'

const Explore = () => {
    return (
        <div className='w-full min-h-[300px]  bg-gradient-to-t from-[#19BDE880]/50 to-white flex justify-center items-center mb-10'>
            <div className='w-[500px] ml-20 '>
                <h1 className='font-semibold text-4xl mb-5'>Explore More Ways We Can Help You Grow</h1>
                <p>Your business needs more than just Multimedia. Discover how our full suite of services works together to drive real results.</p>
            </div>
            <div className='ml-10'>
                <button className='underline text-white bg-black rounded-lg py-3 px-4 m-3'>Technology Solutions</button>
                <button className='underline text-white bg-black rounded-lg  py-3 px-4 m-3'>Digital Marketing</button>
                <button className='underline text-white bg-black rounded-lg py-3 px-4 m-3'>Sales</button>
                <button className='underline text-white bg-black rounded-lg py-3 px-4 m-3'>RaaS Solutions</button>
                <button className='underline text-white bg-black rounded-lg py-3 px-4 m-3'>business strategy consulting</button>
            </div>

        </div>
    )
}

export default Explore