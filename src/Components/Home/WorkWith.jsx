import React from 'react';
import './WorkWith.css';

import brand1 from '../../assets/Home/2 Work With/1.png';
import brand2 from '../../assets/Home/2 Work With/2.png';
import brand3 from '../../assets/Home/2 Work With/3.png';
import brand4 from '../../assets/Home/2 Work With/4.png';
import brand5 from '../../assets/Home/2 Work With/5.png';
import brand6 from '../../assets/Home/2 Work With/6.png';
import brand7 from '../../assets/Home/2 Work With/7.png';

const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

const WorkWith = () => {
  return (
    <div className="w-screen bg-[#EEEDED] py-16 overflow-hidden mt-20 mb-20">
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
                className={`logo-img ${
                  index % brands.length === 6 ? 'rounded-full object-cover' : ''
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWith;
