
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ManvianLogo from '../../assets/Logo/ManvianLogo.png';
import MBS from '../../assets/Logo/MBS.svg';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeWhat, setActiveWhat] = useState('Overview');
  const [activeWho, setActiveWho] = useState('Vision');

  const [showWhat, setShowWhat] = useState(false);
  const [showWho, setShowWho] = useState(false);

  const serviceList = [
    { name: 'RAAS', path: '/service/raas' },
    { name: 'Sales', path: '/service/sales' },
    { name: 'Multimedia Solution', path: '/service/multimedia' },
    { name: 'Technology Solution', path: '/service/techSolution' },
    { name: 'Digital Marketing Solution', path: '/service/DigitalMarketing' },
    { name: 'Business Strategy Consulting', path: '/service/Business' },
  ];

  const whatWeDoItems = [
    { key: 'Overview', label: 'Overview', description: 'We provide a full spectrum of business technology services to help enterprises achieve their goals.' },
    { key: 'Industries', label: 'Industries', description: 'Our experts provide insights and strategies tailored to solve your unique business challenges.' },
    { key: 'Services', label: 'Services' }, // Description removed, will be replaced with serviceList
    { key: 'Product & Platforms', label: 'Product & Platforms', description: 'We provide tailored technology solutions to help startups and entrepreneurs build, optimize, and scale their digital products.' },
  ];

  const whoWeAreItems = [
    { key: 'Vision', label: 'Our Vision', description: 'A visionary force committed to delivering world-class solutions while uplifting society and creating a lasting global impact.' },
    { key: 'Mission', label: 'Our Mission', description: 'Empowering businesses with tailored strategies to boost growth, elevate branding, and enrich client experiences.' },
    { key: 'Goal', label: 'Goal', description: 'Partnering with innovators and leaders to redefine industries and drive transformative change.' },
    { key: 'Value', label: 'Value', description: 'Driving business success that uplifts society and fosters a more equitable world.' }
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className='w-screen h-[80px] bg-[#1E1E1E] flex justify-between items-center px-[80px] py-[16px] fixed z-40 lg:px-[40px] md:px-[20px] sm:px-[16px]'>
      <div className="logo-section flex items-center gap-2 lg:gap-1.5 md:gap-1">
        <img className='cursor-pointer w-auto h-8 md:h-7 sm:h-6' src={MBS} alt="" />
        <div className="flex flex-col items-start ml-1 gap-1">
          <img src={ManvianLogo} alt="Manvian Logo" className='h-5 md:h-4 sm:h-3.5' />
          <p className='text-white text-[10px] leading-tight mt-0.5 md:text-[8px]'>Business Solutions</p>
        </div>
      </div>

      {/* Desktop Menu - Only visible on large screens */}
      <div className='relative xl:flex hidden'>
        <ul className='flex text-[#FFFFFF] gap-[20px] px-[70px] py-[16px] text-lg lg:px-[40px] lg:gap-[16px] lg:text-base'>

          {/* What We Do */}
          <div
            className="relative"
            onMouseEnter={() => {
              setShowWhat(true);
              setShowWho(false);
            }}
            onMouseLeave={() => setShowWhat(false)}
          >
            <li
              className={`flex items-center gap-1 font-medium cursor-pointer ${showWhat
                  ? "text-[#19BDE8] underline"
                  : "hover:text-[#19BDE8]"
                }`}
              onClick={() => navigate("/")}
            >
              What we do
              <svg
                className="w-3 h-3 mt-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </li>

            {showWhat && (
              <div className="absolute left-58  transform -translate-x-1/2 top-full w-screen bg-[#2C2C2C] text-white z-50 px-[40px] py-6 shadow-lg flex lg:px-[20px]">
                <ul className="text-sm space-y-3 w-1/3 pr-4 border-r border-[#444]">
                  {whatWeDoItems.map((item) => (
                    <li
                      key={item.key}
                      onClick={() => setActiveWhat(item.key)}
                      onMouseEnter={() => setActiveWhat(item.key)}
                      className={`cursor-pointer ${activeWhat === item.key
                          ? "text-[#19BDE8] font-semibold "
                          : "hover:text-[#19BDE8]"
                        }`}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-[#B0B0B0] w-2/3 pl-6">
                  {whatWeDoItems.map(
                    (item) =>
                      activeWhat === item.key && (
                        <div key={item.key}>
                          <h4 className="text-[#19BDE8] font-semibold mb-1">
                            {item.label}
                          </h4>
                          {item.key === 'Services' ? (
                            <div className="space-y-2">
                              {serviceList.map(service => (
                                <div key={service.name} className="flex justify-between items-center border-b border-[#444] pb-2">
                                  <span className="text-sm">{service.name}</span>
                                  <button
                                    onClick={() => navigate(service.path)}
                                    className="bg-[#19BDE8] text-black px-3 py-1 rounded text-xs font-semibold hover:bg-[#17a1c7]"
                                  >
                                    View
                                  </button>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p>{item.description}</p>
                          )}
                        </div>
                      )
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Who We Are */}
          <div
            className="relative"
            onMouseEnter={() => {
              setShowWho(true);
              setShowWhat(false);
            }}
            onMouseLeave={() => setShowWho(false)}
          >
            <li
              className={`flex items-center gap-1 font-medium cursor-pointer ${showWho
                  ? "text-[#19BDE8] underline "
                  : "hover:text-[#19BDE8]"
                }`}
              onClick={() => navigate("/who")}
            >
              Who we are
              <svg
                className="w-3 h-3 mt-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </li>

            {showWho && (
              <div className="absolute left-26  transform -translate-x-1/2 top-full w-screen  bg-[#2C2C2C] text-white z-50 px-[40px] py-6 shadow-lg flex lg:px-[20px]">
                <ul className="text-sm space-y-3 w-1/3 pr-4 border-r border-[#444]">
                  {whoWeAreItems.map((item) => (
                    <li
                      key={item.key}
                      onClick={() => setActiveWho(item.key)}
                      onMouseEnter={() => setActiveWho(item.key)}
                      className={`cursor-pointer ${activeWho === item.key
                          ? "text-[#19BDE8] font-semibold "
                          : "hover:text-[#19BDE8]"
                        }`}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-[#B0B0B0] w-2/3 pl-6">
                  {whoWeAreItems.map(
                    (item) =>
                      activeWho === item.key && (
                        <div key={item.key}>
                          <h4 className="text-[#19BDE8] font-semibold mb-1">
                            {item.label}
                          </h4>
                          <p>{item.description}</p>
                        </div>
                      )
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Other Pages */}
          <li>
            <Link to="/careers" className={`${location.pathname === '/careers' ? 'text-[#19BDE8] font-semibold  underline' : 'hover:text-[#19BDE8]'}`}>
              Careers
            </Link>
          </li>
          <li>
            <Link to="/insights" className={`${location.pathname === '/insights' ? 'text-[#19BDE8] font-semibold  underline' : 'hover:text-[#19BDE8]'}`}>
              Insights
            </Link>
          </li>
          <li>
            <Link to="/product" className={`${location.pathname === '/product' ? 'text-[#19BDE8] font-semibold  underline ' : 'hover:text-[#19BDE8]'}`}>
              Product
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`${location.pathname === '/contact' ? 'text-[#19BDE8] font-semibold  underline' : 'hover:text-[#19BDE8]'}`}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile/Tablet Menu Button - Visible on xl and smaller screens */}
      <button 
        className="xl:hidden text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {/* Mobile/Tablet Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1E1E1E] text-white py-4 px-6 flex flex-col z-50 space-y-4 text-sm transition-transform duration-300 ease-in-out max-h-[80vh] overflow-y-auto">
          <div className="relative">
            <div
              className={`flex items-center gap-1 font-medium cursor-pointer ${
                showWhat ? "text-[#19BDE8] underline" : "hover:text-[#19BDE8]"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setShowWhat(!showWhat);
              }}
            >
              What we do
              <svg
                className={`w-3 h-3 mt-0.5 transform transition-transform ${
                  showWhat ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {showWhat && (
              <div className="mt-4 bg-[#2C2C2C] rounded-md p-4 space-y-3">
                <div 
                  className="cursor-pointer hover:text-[#19BDE8] pb-2 border-b border-[#444]"
                  onClick={() => {
                    navigate("/");
                    setIsMobileMenuOpen(false);
                    setShowWhat(false);
                  }}
                >
                  Overview
                </div>
                {serviceList.map(service => (
                  <div 
                    key={service.name}
                    className="cursor-pointer hover:text-[#19BDE8] pb-2 border-b border-[#444]"
                    onClick={() => {
                      navigate(service.path);
                      setIsMobileMenuOpen(false);
                      setShowWhat(false);
                    }}
                  >
                    {service.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          <li
            className={`flex items-center gap-1 font-medium cursor-pointer ${location.pathname === '/who'
                ? "text-[#19BDE8] underline "
                : "hover:text-[#19BDE8]"
              }`}
            onClick={() => navigate("/who")}
          >
            Who we are
          </li>

          <Link to="/careers" onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-[#19BDE8] ${location.pathname === '/careers' && 'text-[#19BDE8] underline'}`}>
            Careers
          </Link>
          <Link to="/insights" onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-[#19BDE8] ${location.pathname === '/insights' && 'text-[#19BDE8] underline'}`}>
            Insights
          </Link>
          <Link to="/product" onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-[#19BDE8] ${location.pathname === '/product' && 'text-[#19BDE8] underline'}`}>
            Product
          </Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-[#19BDE8] ${location.pathname === '/contact' && 'text-[#19BDE8] underline'}`}>
            Contact
          </Link>
        </div>
      )}

      {/* Right Logo */}
      <div className='Logo xl:block hidden'>
        <a href="https://manvian.com/" target='_blank' rel="noopener noreferrer">
          <img src={ManvianLogo} alt="Manvian Logo" className='w-[130px] h-[33px] lg:w-[110px] lg:h-[28px]' />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
