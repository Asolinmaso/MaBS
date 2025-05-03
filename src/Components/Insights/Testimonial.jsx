import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: "Malina John",
    role: "HR Partner",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    company: "Vertech Advisor Consultant Services (OPC) Pvt Ltd",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed vel perspiciatis dicta sit incidunt itaque sequi quod doloremque possimus voluptatem maiores veritatis dolor, aspernatur quibusdam, laudantium eligendi fuga odio assumenda sunt repellat aperiam quaerat neque vero facilis! Natus possimus, quibusdam earum assumenda saepe aliquam id, illum amet illo unde quam enim incidunt exercitationem error. Officiis omnis maxime maiores, vitae ex iste voluptas dolores deleniti, neque laudantium quis autem delectus dignissimos quo at quod distinctio architecto officia nulla iusto perspiciatis aperiam expedita consectetur excepturi. Earum cumque soluta, magnam, aperiam ex est velit nihil ab exercitationem officia tempora incidunt voluptates odio assumenda?",
    rating: 5,
  },
  {
    name: "Ravi Kumar",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    company: "Turing Inc",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas nobis est tempore ipsa modi suscipit rem a, velit officia quaerat officiis, quas maiores odit nam. Laborum, quas adipisci a praesentium sapiente, fugit labore quisquam, rem placeat debitis nisi ipsam? Quis deserunt quibusdam dolore vitae maxime, atque dolorum doloribus facilis unde earum laudantium soluta saepe aliquid ullam quaerat quae.",
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
    <div className="text-yellow-400 text-sm leading-none">
      {fullStar.repeat(rating)}
    </div>
  );
};

const Testimonial = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          centerMode: false,
          adaptiveHeight: true,
        }
      }
    ]
  };

  return (
    <div className="testimonial-slider relative px-4 md:px-8 lg:px-16">
      <h1 className="font-semibold text-2xl md:text-4xl text-[#19BDE8] text-center mb-8">Hear from Our Clients</h1>
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="px-2 sm:px-4">
            <div className="relative w-full h-[250px] bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="absolute right-4 top-4 rounded-full w-16 h-16"
                src={item.image}
                alt="Client image"
              />
              <div className="p-6">
                <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.company}</p>
                <div className="mt-2">{renderStars(item.rating)}</div>
                <p className="mt-4 text-gray-600 text-sm">{item.text.length > 150 ? item.text.slice(0, 150) + '...' : item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
