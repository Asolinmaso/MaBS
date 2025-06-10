import React, { useState, useEffect, useRef } from "react";
import "./TestimonialSlider.css";
import StarImg from '../../assets/Star.png';

const testimonials = [
	{
		name: "Malina John",
		role: "HR Partner",
		image: "https://randomuser.me/api/portraits/women/1.jpg",
		company: "Vertech Advisor Consultant Services (OPC) Pvt Ltd",
		text: "Collaborating with Manvian was a turning point for our brand. Their team understood our vision and delivered a multimedia revamp that perfectly aligned with our goals. The transformation led to a 45% increase in online engagement. Manvian didn’t just deliver services they delivered impact.",
		rating: 5,
	},
	{
		name: "Ravi Kumar",
		role: "Software Engineer",
		image: "https://randomuser.me/api/portraits/men/2.jpg",
		company: "Turing Inc",
		text: "The creative vision and execution from Manvian impressed our entire team. They brought fresh ideas to the table and turned our concepts into stunning visuals that truly resonate with our audience. Their passion for creativity is evident in every detail.",
		rating: 4,
	},
	{
		name: "Priya Sharma",
		role: "Data Analyst",
		image: "https://randomuser.me/api/portraits/women/3.jpg",
		company: "Infosys",
		text: "Manvian delivered exceptional mobile solutions tailored perfectly to our needs. Their technical proficiency and agile process ensured timely delivery without compromising quality. Our app’s performance and user satisfaction have never been better",
		rating: 5,
	},
	{
		name: "Alex Mathew",
		role: "UX Designer",
		image: "https://randomuser.me/api/portraits/men/4.jpg",
		company: "Zoho Corporation",
		text: "Working with Manvian was a game-changer for our product’s user experience. Their UX expertise and attention to detail brought clarity and simplicity to our design process. The collaboration was smooth, and the outcomes significantly improved user engagement.",
		rating: 4,
	},
	{
		name: "Sneha Das",
		role: "Cloud Engineer",
		image: "https://randomuser.me/api/portraits/women/5.jpg",
		company: "Amazon AWS",
		text: "Manvian has truly transformed our marketing strategy with their insightful and innovative approach. Their team’s dedication and deep understanding of our goals helped us achieve remarkable growth. The results exceeded our expectations — highly recommend!",
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
	{
		name: "Riya Sen",
		role: "Frontend Developer",
		image: "https://randomuser.me/api/portraits/women/7.jpg",
		company: "Google",
		text: "The team was very helpful and responsive throughout the process.",
		rating: 5,
	},
	{
		name: "Vikram Singh",
		role: "DevOps Engineer",
		image: "https://randomuser.me/api/portraits/men/8.jpg",
		company: "Microsoft",
		text: "Great experience, would recommend to anyone looking for a new role.",
		rating: 4,
	},
	{
		name: "Anjali Mehra",
		role: "QA Analyst",
		image: "https://randomuser.me/api/portraits/women/9.jpg",
		company: "Capgemini",
		text: "Catherine and her team made everything so easy!",
		rating: 5,
	},
	{
		name: "Rahul Verma",
		role: "Full Stack Developer",
		image: "https://randomuser.me/api/portraits/men/10.jpg",
		company: "Accenture",
		text: "Very professional and supportive.",
		rating: 5,
	},
	{
		name: "Neha Kapoor",
		role: "Product Manager",
		image: "https://randomuser.me/api/portraits/women/11.jpg",
		company: "Flipkart",
		text: "Excellent communication and guidance.",
		rating: 5,
	},
	{
		name: "Siddharth Jain",
		role: "AI Engineer",
		image: "https://randomuser.me/api/portraits/men/12.jpg",
		company: "NVIDIA",
		text: "The best hiring experience I have had so far.",
		rating: 5,
	},
];

const renderStars = (rating) => {
	return (
		<div className="testimonial-stars">
			{Array.from({ length: rating }).map((_, i) => (
				<img
					key={i}
					src={StarImg}
					alt="star"
					style={{ width: 32, height: 32, display: 'inline-block', verticalAlign: 'middle', marginRight: 2 }}
				/>
			))}
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
		}, 9000); // Changed from 3000ms to 6000ms for slower profile change
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
				<div className="new-testimonial-background" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
					<video
						src="/background.mp4"
						autoPlay
						loop
						muted
						playsInline
						style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4) blur(1px)' }}
					/>
					{/* Overlay for further dimming if needed */}
					<div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)', zIndex: 1 }} />
				</div>
				<h2 style={{ color: '#FFFFFF', textAlign: 'center', marginBottom: '1.5rem', fontWeight: 700, fontSize: '2rem', letterSpacing: '0.02em', position: 'relative', zIndex: 1, marginTop: 0 }}>
					Hear from Our Clients
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
							{/* Remove main profile image from center */}
							<div className="other-clients-container">
								{(() => {
									// Show 6 slots (1 main + 5 others) on mobile, 12 on desktop
									const isMobile = window.innerWidth <= 600;
									const RING_SLOTS = isMobile ? 6 : 12;
									let queue = [];
									let idx = (activeIndex + 1) % testimonials.length;
									for (let i = 0; i < RING_SLOTS - 1; i++) {
										queue.push(testimonials[idx]);
										idx = (idx + 1) % testimonials.length;
									}
									// Place main profile image at slot 0 (top of the ring)
									// To avoid touching, increase the radius for other images and offset their angles
									const mainRadius = isMobile ? 20 : 80;
									const otherRadius = isMobile ? 28 : 120;
									const mainImgHalf = isMobile ? 16 : 60;
									const center = isMobile ? 35 : 100;
									return [
										<img
											key={testimonials[activeIndex].name + '-main-in-ring'}
											src={testimonials[activeIndex].image}
											alt={testimonials[activeIndex].name}
											className="main-profile-image-in-ring"
											style={{
												left: isMobile
													? `${center + mainRadius - mainImgHalf}px`
													: `${center + mainRadius + 62.1 - mainImgHalf}px`, // Move 2cm to the right in desktop
												top: isMobile
													? `${center - mainImgHalf}px`
													: `${center - mainImgHalf + 14.8}px`, // Move 1cm down in desktop
												position: 'absolute',
											}}
										/>,
										...Array.from({ length: RING_SLOTS - 1 }).map((_, slotIndex) => {
											const client = queue[slotIndex];
											const totalSlots = RING_SLOTS;
											const angle = (2 * Math.PI * (slotIndex + 1)) / (RING_SLOTS + 1) + (Math.PI / (RING_SLOTS + 1));
											const left = center + otherRadius * Math.cos(angle) - (isMobile ? 7 : 20);
											const top = center + otherRadius * Math.sin(angle) - (isMobile ? 7 : 20);
											return (
												<img
													key={client.name + '-' + client.image}
													src={client.image}
													alt={client.name}
													className="other-client-image"
													style={{ left: `${left}px`, top: `${top}px`, position: 'absolute' }}
												/>
											);
										})
									];
								})()}
							</div>
							<div className="testimonial-content">
								{renderStars(testimonial.rating)}
								<p className="testimonial-text">{testimonial.text}</p>
								<p className="testimonial-name" style={{ color: '#19BDE8' }}>{testimonial.name}</p>
								<p className="testimonial-title" style={{ color: '#19BDE8' }}>
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
