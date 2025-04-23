import React from "react";

const logos = [
  "https://logo.clearbit.com/google.com",
  "https://logo.clearbit.com/microsoft.com",
  "https://logo.clearbit.com/amazon.com",
  "https://logo.clearbit.com/facebook.com",
  "https://logo.clearbit.com/apple.com",
  "https://logo.clearbit.com/netflix.com",
  "https://logo.clearbit.com/adobe.com",
  "https://logo.clearbit.com/intel.com",
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
  "https://logo.clearbit.com/tesla.com"
];

const COLUMNS = 6;

const fillPlaceholders = (arr, columns) => {
  const remainder = arr.length % columns;
  const placeholders = remainder === 0 ? 0 : columns - remainder;
  return [...arr, ...Array(placeholders).fill(null)];
};

const ClientsLogo = () => {
  const allLogos = fillPlaceholders([...logos, ...logos], COLUMNS); // doubled for loop

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 pl-6 pt-6 bg-white rounded-xl border-2 border-gray-200">
      
      {/* Left Content */}
      <div className="md:w-1/3 text-center md:text-left space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">Our Clients</h2>
        <p className="text-gray-600">
          We’ve had the pleasure of working with some amazing brands. If you'd like to be one of them, let’s talk!
        </p>
        <button className="px-6 py-3 bg-[#19BDE8] text-white rounded-md hover:bg-[#17A9D1] transition">
          Contact Us
        </button>
      </div>

      {/* Right: Logos Scroll */}
      <div className="md:w-2/3 h-[500px] overflow-hidden relative bg-gradient-to-b from-[#19BDE8] to-[#FFFFFF] rounded-lg">
        {/* Shadows */}
        <div className="absolute top-0 left-0 w-full h-16 z-10 pointer-events-none bg-gradient-to-b from-[#19BDE8] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-16 z-10 pointer-events-none bg-gradient-to-t from-[#19BDE8] to-transparent" />

        {/* Animated Grid */}
        <div className="animate-scroll-up grid grid-cols-6 gap-4 p-4">
          {allLogos.map((logo, index) => (
            <div
              key={index}
              className={`flex items-center justify-center w-22 h-22 bg-white rounded-md border border-gray-300 shadow-md ${!logo ? "opacity-0 pointer-events-none" : ""
                }`}
            >
              {logo && (
                <img
                  src={logo}
                  alt={`Logo ${index}`}
                  className="max-h-16 object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsLogo;
