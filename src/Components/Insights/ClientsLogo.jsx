import React from "react";

const logos = [
  "https://logo.clearbit.com/google.com",
  "https://logo.clearbit.com/microsoft.com",
  "https://logo.clearbit.com/amazon.com",
  "https://logo.clearbit.com/facebook.com",
  "https://logo.clearbit.com/adobe.com",
  "https://logo.clearbit.com/apple.com",
  "https://logo.clearbit.com/intel.com",
  "https://logo.clearbit.com/netflix.com",
  "https://logo.clearbit.com/adobe.com",
  "https://logo.clearbit.com/ibm.com",
  "https://logo.clearbit.com/salesforce.com",
  "https://logo.clearbit.com/slack.com",
  "https://logo.clearbit.com/zoom.us",
  "https://logo.clearbit.com/github.com",
  "https://logo.clearbit.com/atlassian.com",
  "https://logo.clearbit.com/airbnb.com",
  "https://logo.clearbit.com/uber.com",
  "https://logo.clearbit.com/spotify.com",
  "https://logo.clearbit.com/shopify.com",
  "https://logo.clearbit.com/paypal.com",
  "https://logo.clearbit.com/tesla.com",
  "https://logo.clearbit.com/salesforce.com",
  "https://logo.clearbit.com/slack.com",
  "https://logo.clearbit.com/adobe.com",

];

// Added responsive styles for mobile view
const ClientsLogo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 pl-6 pt-6 bg-white rounded-xl border-2 border-gray-200">
      {/* Left Content */}
      <div className="w-full md:w-1/3 text-center md:text-left space-y-4 mt-15 md:mt-0">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 break-words">Our Clients</h2>
        <p className="text-sm md:text-base text-gray-600">
          We’ve had the pleasure of working with some amazing brands. If you'd like to be one of them, let’s talk!
        </p>
        <button className="px-4 py-2 md:px-6 md:py-3 bg-[#19BDE8] text-white rounded-md hover:bg-[#17A9D1] transition">
          Contact Us
        </button>
      </div>

      {/* Right: Logos Scroll */}
      <div className="w-full md:w-2/3 h-[300px] md:h-[500px] overflow-hidden relative bg-[rgba(25,189,232,0.25)] rounded-lg">

        {/* Top and Bottom Gradient Shadows */}
        <div className="absolute top-0 left-0 w-full h-16 md:h-32 z-10 pointer-events-none bg-gradient-to-b from-[#FFFFFF] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-16 md:h-32 z-10 pointer-events-none bg-gradient-to-t from-[#FFFFFF] to-transparent" />

        {/* Scrolling container */}
        <div className="relative h-full">
          <div className="absolute w-full flex flex-col animate-scroll-up">
            {/* 1st copy */}
            <div className="grid grid-cols-8 gap-2 md:gap-4 p-2 md:p-4">
              {logos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex items-center justify-center w-16 h-16 md:w-22 md:h-22 bg-white rounded-md shadow-md"
                >
                  <img
                    src={logo}
                    alt={`Logo ${index}`}
                    className="max-h-12 md:max-h-16 object-contain"
                  />
                </div>
              ))}
            </div>
            {/* 2nd copy */}
            <div className="grid grid-cols-8 gap-2 md:gap-4 p-2 md:p-4">
              {logos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex items-center justify-center w-16 h-16 md:w-22 md:h-22 bg-white rounded-md shadow-md"
                >
                  <img
                    src={logo}
                    alt={`Logo ${index}`}
                    className="max-h-12 md:max-h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// Inject keyframes for infinite bottom-to-top scroll
const style = document.createElement("style");
style.innerHTML = `
  @keyframes scroll-up {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-50%);
    }
  }

  .animate-scroll-up {
    animation: scroll-up 30s linear infinite;
  }
`;
document.head.appendChild(style);

export default ClientsLogo;
