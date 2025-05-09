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
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas nobis est tempore ipsa modi suscipit rem a, velit officia quaerat officiis, quas maiores odit nam. Laborum, quas adipisci a praesentium sapiente, fugit labore quisquam, rem placeat debitis nisi ipsam? Quis deserunt quibusdam dolore vitae maxime, atque dolorum doloribus facilis unde earum laudantium soluta saepe aliquid ullam quaerat quae. Deleniti dignissimos accusamus, iusto atque molestiae vel quisquam ipsam. Consequuntur aliquam ad molestiae ullam maiores veniam ab repudiandae enim sequi. Harum iure blanditiis vitae aut odio nisi eius hic cum ipsa, dolorem quod quibusdam, quisquam doloremque natus. Dolore doloremque a consectetur nesciunt voluptatum? Eos, animi! Iste rem minima eveniet, debitis autem similique neque id iusto maxime, itaque numquam, porro at enim? Iure, inventore at! Molestias tempore quibusdam similique qui iste possimus placeat repudiandae libero eligendi nobis! Ea iusto voluptas quos quaerat optio ab, odio neque vel? Aliquid maxime, fuga omnis possimus officia, sunt quibusdam, dicta nostrum sit totam aspernatur ratione dolorem vel. Cum consequuntur reprehenderit repellendus vero enim laborum dicta dolorum suscipit neque in, porro ipsa! Officia obcaecati aut modi, facere nulla totam doloremque, expedita vel ipsum blanditiis ex iure delectus laboriosam tempore nam veritatis maxime molestiae officiis ad vero at voluptatum esse assumenda perferendis? Fugiat velit, architecto ad inventore consequuntur sapiente incidunt ex aperiam reprehenderit sed corrupti atque ipsum nihil optio magni totam deserunt libero iste ullam recusandae nesciunt quos ab! Aspernatur, quod. Voluptas odio cum quis adipisci impedit voluptatibus magni neque, tempore id eum dolorem laboriosam repellendus, a dignissimos maxime numquam, aut iure quia quisquam. Odio ex iure laudantium recusandae corporis? Illum ratione ut dolorem maxime sed qui, voluptatibus, natus dignissimos adipisci inventore earum labore? Eligendi accusamus reiciendis unde molestiae assumenda provident quae tempore fuga laborum quo, odio ullam eum voluptate ipsa odit aliquam harum vero voluptates nesciunt veritatis velit error magni! Aspernatur ad labore temporibus provident ipsum aliquid iure, excepturi, cumque dicta eveniet magnam debitis commodi hic sit deserunt fuga quis, totam dignissimos illum minima id quas. Fugiat ratione laborum tenetur illo architecto nihil. Doloremque quas sequi tempore, suscipit aut eveniet eius. Deserunt, omnis. Unde magni, deleniti obcaecati consectetur distinctio culpa temporibus. A similique aperiam voluptatum rem quos nam harum nulla consequatur dolorem, sapiente eveniet aliquid reprehenderit id! Fugit delectus hic dolore dignissimos temporibus maxime a esse ratione error quisquam modi doloribus ducimus architecto voluptate laboriosam voluptatibus, quos veritatis? Corporis, amet suscipit nisi harum voluptatibus quidem magni quia maxime excepturi facilis, exercitationem, quis incidunt temporibus tempore aut! Blanditiis suscipit quisquam nam voluptate ratione odit laborum, quos error aspernatur illum. Qui animi earum error inventore necessitatibus nisi harum, maiores nesciunt, numquam, ut perferendis enim ipsum. Optio minus maiores sed possimus doloremque delectus nostrum facere incidunt harum saepe beatae distinctio quisquam nulla quasi, perferendis mollitia consequatur facilis veniam! Repudiandae, unde praesentium. Ullam ipsa expedita delectus, perspiciatis rem, impedit magni dolorum asperiores quas quidem aut magnam quis voluptatem labore dicta necessitatibus excepturi. Fugiat nam ab, laudantium, cupiditate consectetur quasi aperiam facilis consequatur enim, itaque tenetur excepturi illum eum adipisci nostrum. Sit!Catherine’s insights were incredibly helpful in making my transition smooth. Highly recommend their services",
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

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Desktop View */}
      <div className='hidden md:block'>
        <div className='flex w-full justify-center mt-15'>
          <h1 className='font-semibold text-4xl text-[#19BDE8]'>Hear from Our Clients</h1>
        </div>
        <div className='w-full h-screen flex justify-center gap-20 items-center z-0'>
          <div className='scroll-container flex gap-20 w-max animate-scroll px-10 items-center'>
            {[...testimonials, ...testimonials].map((items, index) => (
              <div key={index} className='relative w-[547px] h-[459px]'>
                <img
                  className='absolute right-4 top-2 translate-y-0 rounded-[50%] z-30'
                  src={items.image}
                  alt="Client image"
                />
                <div className='absolute w-[265px] top-4 left-1 min-h-24 rounded-tr-4xl bg-[#1E1E1E] z-30'>
                  <div className='relative'>
                    <div className='mt-1 text-white ml-5 font-medium text-2xl'>{items.name}</div>
                    <p className='text-white text-[12px] ml-10'>Review</p>
                    <div className='absolute right-4 top-17'>{renderStars(items.rating)}</div>
                  </div>
                </div>
                <div className='absolute top-26 left-1 z-10'>
                  <svg
                    width='74'
                    height='95'
                    viewBox='0 0 66 72'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g filter='url(#filter0_i_105_663)'>
                      <path
                        d='M33 72L0.957062 0.75L65.0429 0.75L33 72Z'
                        fill='#19BDE8'
                      />
                    </g>
                    <defs>
                      <filter
                        id='filter0_i_105_663'
                        x='0.957062'
                        y='0.75'
                        width='64.0859'
                        height='75.25'
                        filterUnits='userSpaceOnUse'
                        colorInterpolationFilters='sRGB'
                      >
                        <feFlood floodOpacity='0' result='BackgroundImageFix' />
                        <feBlend
                          mode='normal'
                          in='SourceGraphic'
                          in2='BackgroundImageFix'
                          result='shape'
                        />
                        <feColorMatrix
                          in='SourceAlpha'
                          type='matrix'
                          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                          result='hardAlpha'
                        />
                        <feOffset dy='4' />
                        <feGaussianBlur stdDeviation='2' />
                        <feComposite
                          in2='hardAlpha'
                          operator='arithmetic'
                          k2='-1'
                          k3='1'
                        />
                        <feColorMatrix
                          type='matrix'
                          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                        />
                        <feBlend
                          mode='normal'
                          in2='shape'
                          result='effect1_innerShadow_105_663'
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div className='ml-8 w-[510px] h-[372px] pt-24 px-9 pb-8 border-white shadow-2xl overflow-hidden mt-[81px] rounded relative z-20 bg-white flex flex-col gap-2 items-center text-center'>
                  <h1 className='text-[#19BDE8] text-lg font-normal w-[326px]'>{items.company}</h1>
                  {items.text.length > 300 ? items.text.slice(0, 300) + '...' : items.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden testimonial-slider relative">
        <h1 className="font-semibold text-2xl text-[#19BDE8] text-center mb-8">
          Hear from Our Clients
        </h1>
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="p-4">
              <div className="relative w-full max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  className="absolute right-4 top-4 rounded-full w-16 h-16"
                  src={item.image}
                  alt="Client image"
                />
                <div className="p-6">
                  <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                  <p className="text-sm text-gray-500">{item.company}</p>
                  <div className="mt-2">{renderStars(item.rating)}</div>
                  <p className="mt-4 text-gray-600">
                    {item.text.length > 150 ? item.text.slice(0, 150) + '...' : item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-0"
          aria-hidden="true"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Testimonial;

