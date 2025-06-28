import React, { useState } from "react";
import { CalendarDays, Clock } from "lucide-react";
import { useParams } from "react-router-dom";
import Footer from '../Footer/Footer';
import SubscribeNow from '../Blogs/Subscribenow';

import Img1 from '../../assets/Blogs/Trending/1.png';
import Img2 from '../../assets/Blogs/Trending/2.png';
import Img3 from '../../assets/Blogs/Trending/3.png';
import Img4 from '../../assets/Blogs/Trending/4.png';
import Img5 from '../../assets/Blogs/Trending/5.png';
import Imag1 from '../../assets/Blogs/Author/Touheed_Fathima.jpg';

const blogData = [
  {
    id: 1,
    title: 'AI Doesn’t Replace People — It Reshapes Possibilities',
    description: 'AI doesn’t replace people — it empowers them to explore new possibilities and redefine what’s achievable.',
    image: Img1,
    author: 'Touheed Fathima',
    authorImage: Imag1,
    date: 'June 01, 2025',
    category: 'Tech & Innovation',
    content: [
      '“AI Doesn’t Replace People — It Reshapes Possibilities”: How Smart Brands Are Listening to Customers Differently',
      'June 01, 2025',
      '',
      '“The best marketing doesn’t feel like marketing, It feels like someone understands you.          — Tom Fishburne',
      '',
      'In today’s digital landscape, attention is currency. Every brand — big or small — is trying to earn just a few more seconds of their customer’s time. But how do you stand out when customers are bombarded with thousands of messages each day?',
      '',
      'The answer lies not in louder marketing, but smarter listening — and Artificial Intelligence (AI) is leading the way.',
      '',
      'The Real Problem: Data Without Direction',
      'Businesses today are sitting on mountains of data:',
      '',
      'Clicks on ads',
      'Time spent on product pages',
      'Wishlist additions',
      'Social media likes, shares, and comments',
      'Online reviews and feedback',
      '',
      'But data alone doesn’t tell you what your customer actually wants. And most growing brands don’t have the time, tools, or teams to sift through it all.',
      '',
      '“We’re not short on data — we’re short on direction.”',
      '',
      'The result? Missed opportunities, generic marketing, and customers who feel unseen.',
      '',
      'The AI Shift: From Guesswork to Precision',
      'AI steps in not to replace marketing teams, but to amplify their impact.',
      '',
      'With the power of machine learning and predictive analytics, AI can:',
      '',
      'Identify customer patterns faster than any human could',
      'Recommend the next best product or content based on real behavior',
      'Automate personalized emails that feel like they were written just for you',
      'Analyze reviews to uncover hidden customer pain points',
      '',
      'Brands like Amazon, Netflix, and Spotify have mastered this. Their secret? They listen better, using AI to understand each user’s preferences and deliver exactly what they’re looking for — often before the user even asks.',
      '',
      'But Isn’t AI Replacing People?',
      'Not at all. In fact, AI is reshaping roles, not replacing them.',
      '',
      '“AI won’t replace humans. But humans using AI will replace those who don’t.”',
      '',
      '                                                                                          — Inspired by Garry Kasparov',
      '',
      'AI handles the heavy-lifting: data crunching, pattern finding, automation. This frees up human teams to focus on the things only humans do best:',
      '',
      'Creativity',
      'Empathy',
      'Brand storytelling',
      'Strategic thinking',
      '',
      'Imagine a marketing team that spends less time guessing and more time crafting impactful messages — because AI already showed them what matters most to each customer.',
      '',
      'How Any Business Can Start Using AI — Today',
      'You don’t need to be a tech giant or have a dedicated AI lab. Even growing businesses, like creative agencies and startups, can start integrating AI in simple but meaningful ways.',
      '',
      'Here’s how:',
      '',
      'Customer Segmentation',
      'Use AI-powered tools to group your audience based on behavior, location, or interests — making targeting far more effective.',
      '',
      'Recommendation Engines',
      'Suggest products, blog posts, or services based on what each visitor interacted with.',
      '',
      'AI Content Creation',
      'Tools like ChatGPT, Jasper, or Copy.ai can help you draft personalized email campaigns, social posts, or ads — fast.',
      '',
      'Smart Chatbots',
      'AI chat assistants can answer common questions 24/7, qualify leads, and even schedule appointments.',
      '',
      'Sentiment Analysis',
      'AI can scan thousands of reviews or comments and tell you what your audience feels — positive, negative, or neutral.',
      '',
      'These tools aren’t just shiny tech. They’re engines for growth, especially when paired with a human strategy.',
      '',
      'Final Takeaway: It’s Not Too Late to Start',
      'AI is no longer a far-off innovation. It’s here. And it’s scalable.',
      '',
      '“We understand the challenges of scaling smart — because we’re doing it too.”',
      '',
      'At Manvian, we believe in making powerful ideas like AI accessible and actionable, not just for global giants but for brands on the rise — businesses who are ready to grow smarter.',
      '',
      'In the end, AI doesn’t make your brand less human. It helps you become more human — by listening better, responding faster, and connecting deeper.',
      '',
      'Ready to Explore AI for Your Brand?',
      'Whether you\'re a startup founder, a creative agency, or a growing business, now is the time to harness the tools that help you listen and lead smarter.'
    ],
    authorBio: 'Touheed Fathima is an AI developer and digital strategist passionate about the intersection of artificial intelligence and human creativity, helping brands build smarter, more connected experiences.'
  },
  {
    id: 2,
    title: 'Why Micro-Content is Dominating 2025',
    description: 'Short-form videos are the key. Find out...',
    image: Img2,
    author: 'Aditya Rao',
    readTime: '3 min read',
    category: 'Marketing',
    date: 'May 15, 2025',
    content: [
      'Short-form videos are dominating the digital space...'
    ],
    authorBio: 'Aditya is a marketing analyst and content creator who specializes in digital trends and video storytelling. He loves exploring how brands can connect in seconds.'
  },
  {
    id: 3,
    title: 'Branding that Sticks in the Digital Age',
    description: 'How to build a magnetic and memorable brand...',
    image: Img3,
    author: 'Sonali Nair',
    readTime: '5 min read',
    category: 'Business Strategy',
    date: 'May 20, 2025',
    content: [
      'Building a memorable brand in the digital age requires...'
    ],
    authorBio: 'Sonali is a brand strategist and business consultant with a decade of experience helping startups and enterprises build memorable brands.'
  },
  {
    id: 4,
    title: 'AI-Generated Visuals: Tool or Threat?',
    description: 'From voiceovers to video editing. AI is changing the game...',
    image: Img4,
    author: 'Priya Mehta',
    readTime: '5 min read',
    category: 'Multimedia',
    date: 'May 29, 2025',
    content: [
      'Artificial Intelligence is rapidly transforming how digital content is created. From generating photorealistic images to crafting entire videos, AI tools are now accessible to creators of all levels...',
      'AI-powered platforms like Midjourney, DALL·E, and RunwayML allow anyone to create high-quality visuals within seconds...',
      '“The barrier to entry has never been lower,” says visual artist Rhea Kapoor. “But it also means the value of originality is harder to protect.”',
      'While some designers fear being replaced by automation, others see AI as a productivity booster...',
      'AI-generated art pieces are now being auctioned at major art houses like Christie’s...',
      'One major concern is ownership. Who owns the rights to an image generated by AI?...',
      '“Transparency and regulation are key,” says legal expert Alok Deshmukh...',
      'Rather than resisting change, creators can learn to collaborate with AI...'
    ],
    authorBio: 'Priya is a digital content strategist and tech journalist with over 8 years of experience covering media, innovation, and future trends. She’s passionate about storytelling, minimal design, and cold brew coffee.'
  },
  {
    id: 5,
    title: 'Decoding What Your Metrics Are Really Saying',
    description: 'Which KPIs tell the real story behind the numbers?',
    image: Img5,
    author: 'Karan Shah',
    readTime: '6 min read',
    category: 'Data & Insights',
    date: 'May 25, 2025',
    content: [
      'Understanding KPIs is crucial for business growth...'
    ],
    authorBio: 'Karan is a data analyst and business intelligence expert who helps organizations unlock the real story behind their numbers.'
  }
];

const ArticlePage = () => {
  const { id } = useParams();
  const [showSubscribe, setShowSubscribe] = useState(false);
  const blog = blogData.find((b) => b.id === Number(id));

  // Related articles: pick 2 others, excluding current
  const related = blogData.filter((b) => b.id !== Number(id)).slice(0, 2);

  if (!blog) {
    return <div className="px-6 md:px-24 py-10 text-gray-800 font-sans">Blog not found.</div>;
  }

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      <div className="px-6 md:px-24 pt-25 pb-10 text-gray-800 font-sans max-w-5xl mx-auto w-full">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2 leading-tight">{blog.title}</h1>
        <div className="flex flex-wrap gap-2 text-xs text-gray-400 mb-4">
          <span>#{blog.category.replace(/\s/g, '')}</span>
          <span>#Trending</span>
          {blog.category === 'Multimedia' && <span>#Multimedia</span>}
        </div>
        <div className="flex justify-center mb-6">
          <img
            src={blog.image}
            alt={blog.title}
            className="rounded-md w-full max-w-lg object-cover aspect-video shadow"
          />
        </div>
        <div className="flex items-center space-x-3 text-sm mb-6 text-gray-600">
          <div className="flex items-center space-x-2">
            <img
              src={blog.authorImage || "https://www.gravatar.com/avatar"}
              alt={blog.author}
              className="w-6 h-6 rounded-full border object-cover"
            />
            <span>{blog.author}</span>
          </div>
          <span>•</span>
          <span className="flex items-center space-x-1">
            <CalendarDays className="w-4 h-4" />
            <span>{blog.date}</span>
          </span>
          <span>•</span>
          <span className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{blog.readTime}</span>
          </span>
        </div>
        <div className="space-y-6 leading-relaxed text-base">
          {blog.content.map((para, idx) => {
            // Simple heading/quote detection for demo
            if (para.startsWith('"')) {
              return <blockquote key={idx} className="border-l-4 pl-4 italic text-gray-500">{para}</blockquote>;
            }
            if (para.startsWith('Did you know?')) {
              return <div key={idx} className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded text-sm font-medium text-blue-900 my-4">{para}</div>;
            }
            if (para.startsWith('The Ethical Dilemma')) {
              return <h2 key={idx} className="text-lg font-semibold mt-6 mb-2">{para}</h2>;
            }
            if (para.startsWith('Where Do We Go From Here?')) {
              return <h2 key={idx} className="text-lg font-semibold mt-6 mb-2">{para}</h2>;
            }
            return <p key={idx}>{para}</p>;
          })}
        </div>

        {/* Author Bio */}
        <div className="mt-10 border-t pt-8">
          <h3 className="text-lg font-semibold mb-2">Author Bio</h3>
          <div className="flex items-center space-x-2 text-sm mt-2">
            <img
              src={blog.authorImage || "https://www.gravatar.com/avatar"}
              alt={blog.author}
              className="w-6 h-6 rounded-full border object-cover"
            />
            <span>{blog.author}</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            {blog.authorBio}
          </p>
          <a href="#" className="text-blue-600 text-xs mt-2 inline-block hover:underline">Loved the article? Share it with your network!</a>
        </div>

        {/* Related Articles */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-3">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {related.map((rel) => (
              <div key={rel.id} className="border p-3 rounded-md bg-gray-50 flex flex-col">
                <img src={rel.image} alt={rel.title} className="mb-2 rounded aspect-video object-cover" />
                <h4 className="font-semibold text-sm">{rel.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{rel.description}</p>
                <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
                  <span>By {rel.author}</span>
                  <span>•</span>
                  <span>{rel.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

       
      </div>
            <div className="bg-gradient-to-t from-[#19BDE880]/50 to-white py-16 text-center mb-20 mt-5 md:mt-25 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-[#000000]">Want More Insights Like This?</h2>
        <p className="text-gray-700 mb-6">
          Subscribe to our newsletter for weekly smart reads.
          
        </p>
        <button
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition cursor-pointer"
          onClick={() => setShowSubscribe(true)}
        >
          Subscribe Now
        </button>
      </div>
      {showSubscribe && <SubscribeNow />}

        <Footer/>
      
    </div>
  );
};


export default ArticlePage;
