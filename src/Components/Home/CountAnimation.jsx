"use client";
import React, { useEffect, useState } from "react";

const CountingNumber = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 50);
    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        clearInterval(counter);
        setCount(value);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(counter);
  }, [value, duration]);

  return <>{count}</>;
};

export default function StatsSection() {
  const stats = [
    { label: "Country Presence", value: 10 },
    { label: "Clients Handled", value: 80 },
    { label: "Projects Handled", value: 150 },
    { label: "Client Satisfaction", value: 99 },
  ];

  return (
    <section className="rounded-xl shadow-2xl py-16 px-4 sm:px-6 lg:px-8 mb-15 mt-20 m-10">
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${index !== stats.length - 1 ? "md:border-r-2 md:border-gray-300" : ""} pr-4 py-4 md:py-0`}
            >
              <div className="font-light text-4xl lg:text-6xl text-[#19BDE8]">
                <CountingNumber value={stat.value} />
                {stat.label === "Client Satisfaction" ? "%" : "+"}
              </div>
              <div className="text-xl lg:text-2xl font-normal text-black">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
