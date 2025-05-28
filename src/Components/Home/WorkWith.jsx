import React from 'react';
import './WorkWith.css';

import brand1 from '../../assets/Home/2 Work With/1.png';
import brand2 from '../../assets/Home/2 Work With/2.png';
import brand3 from '../../assets/Home/2 Work With/3.png';
import brand4 from '../../assets/Home/2 Work With/4.png';
import brand5 from '../../assets/Home/2 Work With/5.png';
import brand6 from '../../assets/Home/2 Work With/6.png';
import brand7 from '../../assets/Home/2 Work With/7.png';
import { ImOpt } from 'react-icons/im';
import { Link } from 'react-router-dom';
const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

const WorkWith = () => {
  return (
    <main>

      <section className="w-screen bg-gradient-to-t from-[#19BDE880] to-white py-16 overflow-hidden mt-20 ">
        <div className=" mx-auto px-4 text-center">
          <h1 className="text-[#19BDE8] font-semibold text-2xl md:text-4xl mb-12">
            Who We Work With
          </h1>

          <div className="logo-marquee-wrapper">
            <div className="logo-marquee-track">
              {brands.concat(brands).map((brand, index) => (
                <img
                  key={index}
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  className={`logo-img ${index % brands.length === 6 ? 'rounded-full object-cover' : ''
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className='w-full flex justify-center'>
        <Link to='/insights'>
        <button className='mb-10 mt-7 bg-cyan-400 text-white px-4 py-2 rounded hover:bg-cyan-500 cursor-pointer '>Explore more</button>
        </Link>
      </section>

    </main>
  );
};

export default WorkWith;
