import React, { useState, useEffect, useRef } from "react";
import "./TestimonialSlider.css";

const testimonials = [
  {
    name: "Malina John",
    role: "HR Partner",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    company: "Vertech Advisor Consultant Services (OPC) Pvt Ltd",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
    rating: 5,
  },
  {
    name: "Ravi Kumar",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    company: "Turing Inc",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit...",
    rating: 4,
  },
  {
    name: "Priya Sharma",
    role: "Data Analyst",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    company: "Infosys",
    text: "The personalized approach and guidance helped me get placed in a dream role. Thanks to Catherine!",
    rating: 5,
  },
  {
    name: "Alex Mathew",
    role: "UX Designer",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    company: "Zoho Corporation",
    text: "One of the most professional hiring experiences I’ve had. Very supportive from start to finish.",
    rating: 4,
  },
  {
    name: "Sneha Das",
    role: "Cloud Engineer",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    company: "Amazon AWS",
    text: "Catherine made the process stress-free and seamless. Highly appreciate the effort and time!",
    rating: 5,
  },
  {
    name: "Arjun Reddy",
    role: "Backend Developer",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    company: "Wipro Ltd",
    text: "Very satisfied with the mentorship and opportunity guidance provided by Catherine and her team.",
    rating: 5,
  },
];

const renderStars = (rating) => {
  const fullStar = "★";
  return (
    <div className="testimonial-stars">
      {fullStar.repeat(rating)}
    </div>
  );
};

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef();
  const numClients = testimonials.length - 1;

  // Helper to get the correct order of other clients for the ring
  const getOtherClients = (currentIndex) => {
    // Get all other profiles except the current
    const others = testimonials.filter((_, i) => i !== currentIndex);
    // The queue order: next, next+1, ..., last, first, ..., prev
    // The first image in the ring should always be the next profile after the current
    // The rest follow in order, wrapping around
    // To match the CSS nth-child order, we need to rotate the 'others' array so that
    // the first element is the next profile after the current, then next+1, etc.
    let queue = [];
    let idx = (currentIndex + 1) % testimonials.length;
    for (let i = 0; i < others.length; i++) {
      queue.push(testimonials[idx]);
      idx = (idx + 1) % testimonials.length;
      if (queue.length === others.length) break;
    }
    return queue;
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div>
      <h2 style={{ color: '#19BDE8', textAlign: 'center', marginBottom: '1.5rem', fontWeight: 700, fontSize: '2rem', letterSpacing: '0.02em' }}>
        Our Client
      </h2>
      <div className="testimonial-section">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card ${
              index === activeIndex ? "active" : "inactive"
            }`}
          >
            <div className="other-clients-container">
              {index === activeIndex && getOtherClients(activeIndex).map((client, clientIndex) => (
                <img
                  key={clientIndex}
                  src={client.image}
                  alt={client.name}
                  className="other-client-image"
                  style={{ zIndex: 10 - clientIndex }}
                />
              ))}
              {index !== activeIndex && testimonials.filter((_, i) => i !== index).map((client, clientIndex) => (
                <img
                  key={clientIndex}
                  src={client.image}
                  alt={client.name}
                  className="other-client-image"
                  style={{ zIndex: 10 - clientIndex }}
                />
              ))}
            </div>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <div className="testimonial-content">
              {renderStars(testimonial.rating)}
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-title">
                {testimonial.role} at {testimonial.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
