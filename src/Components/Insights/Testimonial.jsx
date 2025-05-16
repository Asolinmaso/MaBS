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

// Helper: slotIndex to scale and zIndex for ring effect
const getRingStyle = (slotIndex, totalSlots) => {
  const minScale = 0.7;
  const maxScale = 1.2;
  const scaleStep = (maxScale - minScale) / (totalSlots - 1);
  const scale = minScale + scaleStep * slotIndex;
  const zIndex = 10 + slotIndex;
  return { transform: `scale(${scale})`, zIndex };
};

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mainMove, setMainMove] = useState(false); // NEW: for animation
  const [hoveredRingIndex, setHoveredRingIndex] = useState(null); // Track hovered image in ring
  const timerRef = useRef();
  const numClients = testimonials.length - 1;

  // Helper to get the correct order of other clients for the ring
  const getOtherClients = (currentIndex) => {
    const others = testimonials.filter((_, i) => i !== currentIndex);
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

  useEffect(() => {
    setMainMove(true);
    const timeout = setTimeout(() => setMainMove(false), 800);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <div>
      <div style={{ position: 'relative', minHeight: 500 }}>
        <div className="new-testimonial-background"></div>
        <h2 style={{ color: '#19BDE8', textAlign: 'center', marginBottom: '1.5rem', fontWeight: 700, fontSize: '2rem', letterSpacing: '0.02em', position: 'relative', zIndex: 1, marginTop: 0 }}>
          Our Client
        </h2>
        <div className="testimonial-section">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card ${index === activeIndex ? "active" : "inactive"}`}
              style={{
                zIndex: index === activeIndex ? 2 : 1,
                opacity: index === activeIndex ? 1 : 0,
                pointerEvents: index === activeIndex ? 'auto' : 'none',
                transition: 'opacity 0.8s cubic-bezier(0.4,0,0.2,1)',
                position: 'absolute',
                width: '100%',
                top: 0,
                left: 0
              }}
            >
              <div className="testimonial-card-bg-left"></div>
              <div className="testimonial-card-bg-right"></div>
              <div className="other-clients-container">
                {(() => {
                  const RING_SLOTS = 6;
                  let queue = [];
                  let idx = (activeIndex + 1) % testimonials.length;
                  for (let i = 0; i < RING_SLOTS; i++) {
                    queue.push(testimonials[idx]);
                    idx = (idx + 1) % testimonials.length;
                  }
                  return Array.from({ length: RING_SLOTS }).map((_, slotIndex) => {
                    const client = queue[slotIndex];
                    const ringStyle = getRingStyle(slotIndex, RING_SLOTS);
                    return (
                      <img
                        key={client.name + '-' + client.image}
                        src={client.image}
                        alt={client.name}
                        className="other-client-image"
                        style={{ ...ringStyle, transition: 'top 0.8s, left 0.8s, transform 0.5s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s cubic-bezier(0.4,0,0.2,1)' }}
                      />
                    );
                  });
                })()}
              </div>
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
    </div>
  );
};

export default Testimonial;
