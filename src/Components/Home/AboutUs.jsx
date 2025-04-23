// import React, { useState, useEffect } from 'react';
// import AboutUsBg from '../../assets/Home/About_us.jpeg';

// const AboutUs = () => {
//   const [counts, setCounts] = useState({
//     country: 0,
//     clients: 0,
//     projects: 0,
//     opportunities: 0,
//   });

//   useEffect(() => {
//     const target = {
//       country: 10,
//       clients: 80,
//       projects: 150,
//       opportunities: 250,
//     };

//     const interval = setInterval(() => {
//       setCounts((prev) => {
//         const updated = { ...prev };
//         let allReached = true;

//         for (const key in target) {
//           if (prev[key] < target[key]) {
//             updated[key] = Math.min(prev[key] + Math.ceil(target[key] / 50), target[key]);
//             allReached = false;
//           }
//         }

//         if (allReached) clearInterval(interval);
//         return updated;
//       });
//     }, 30); // control speed here

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className='relative w-full h-screen overflow-hidden flex flex-col items-center justify-center'>
//       <img className='absolute w-full h-full object-cover' src={AboutUsBg} alt="About Us Background" />
//       <div className='absolute top-0 left-0 w-full h-full bg-black/40 z-10'></div>

//       {/* About Us Text */}
//       <div className='relative flex flex-col gap-3 z-20 text-center w-[1200px]'>
//         <h1 className='text-[#19BDE8] font-semibold text-[40px]'>About Us</h1>
//         <p className='font-normal text-xl leading-7 text-white'>
//           We understand that success requires more than just a great idea – it’s about relentless commitment, risk-taking, and right guidance.
//           That’s where Manvian steps in. We are dedicated to creating a business ecosystem providing comprehensive support, education, and empowerment to entrepreneurs at every stage of their journey.
//           From startup advice to advanced business strategies — whether you’re a budding entrepreneur with a groundbreaking idea or an established business looking to scale — we offer a wide range of services designed to
//           help you navigate the complex world of business and achieve your dreams. Our approach is tailored to each client’s unique needs, ensuring that our solutions are not just effective but transformative.
//         </p>
//       </div>

//       {/* Stats Section with Animated Count */}
//       <div className='mt-10 z-20 w-[1200px]'>
//         <div className='mt-2 flex justify-between text-white'>
//           <div className='flex flex-col text-center gap-1.5'>
//             <h1 className='font-semibold text-6xl'>{counts.country}+</h1>
//             <p className='font-normal text-2xl'>Country Presence</p>
//           </div>

//           <div className='flex flex-col text-center gap-1.5'>
//             <h1 className='font-semibold text-6xl'>{counts.clients}+</h1>
//             <p className='font-normal text-2xl'>Clients Handled</p>
//           </div>

//           <div className='flex flex-col text-center gap-1.5'>
//             <h1 className='font-semibold text-6xl'>{counts.projects}+</h1>
//             <p className='font-normal text-2xl'>Projects Handled</p>
//           </div>

//           <div className='flex flex-col text-center gap-1.5'>
//             <h1 className='font-semibold text-6xl'>{counts.opportunities}+</h1>
//             <p className='font-normal text-2xl'>Opportunities Created</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;
