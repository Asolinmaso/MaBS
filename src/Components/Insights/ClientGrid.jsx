import React from "react";

const clientData = [
  {
    category: "Conglomerates",
    logos: [
      "https://logo.clearbit.com/google.com",
      "https://logo.clearbit.com/microsoft.com",
      "https://logo.clearbit.com/amazon.com",
      "https://logo.clearbit.com/facebook.com",
    ],
  },
  {
    category: "FMCG/FMCD",
    logos: [
      "https://logo.clearbit.com/apple.com",
      "https://logo.clearbit.com/netflix.com",
      "https://logo.clearbit.com/adobe.com",
      "https://logo.clearbit.com/intel.com",
      "https://logo.clearbit.com/ibm.com",
    ],
  },
  {
    category: "E-Commerce & Startups",
    logos: [
      "https://logo.clearbit.com/salesforce.com",
      "https://logo.clearbit.com/slack.com",
      "https://logo.clearbit.com/zoom.us",
      "https://logo.clearbit.com/github.com",
    ],
  },
  {
    category: "Consulting",
    logos: [
      "https://logo.clearbit.com/atlassian.com",
      "https://logo.clearbit.com/airbnb.com",
      "https://logo.clearbit.com/uber.com",
    ],
  },
  {
    category: "BFSI",
    logos: [
      "https://logo.clearbit.com/spotify.com",
      "https://logo.clearbit.com/shopify.com",
      "https://logo.clearbit.com/paypal.com",
      "https://logo.clearbit.com/tesla.com"
    ],
  },
];

const ClientsTable = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      {clientData.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col sm:flex-row items-start sm:items-stretch  bg-gray-200 px-3 py-6 rounded mt-7"
        >
          <div className="w-full sm:w-1/4 font-semibold  text-gray-700 text-lg mb-2 sm:mb-0 sm:pr-4 sm:border-r sm:border-gray-400">
            {item.category}
          </div>
          <div className="w-full sm:w-3/4 sm:pl-6 pt-2 sm:pt-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {item.logos.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={logo.split('.')[0]}
                className="w-10 h-10 "
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientsTable;
