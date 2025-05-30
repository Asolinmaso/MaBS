import React, { useState } from 'react';
import { FiFile, FiClock } from 'react-icons/fi';
import Footer from '../Footer/Footer';

const blogData = [
    {
        id: 1,
        title: 'The Future of AI in Content: Beyond the Buzz',
        description: 'AI tools like ChatGPT and MidJourney... Let’s decode the new content equation.',
        image: 'src/assets/Blogs/Trending/1.png',
        author: 'Priya Mehta',
        readTime: '4 min read',
        category: 'Tech & Innovation'
    },
    {
        id: 2,
        title: 'Why Micro-Content is Dominating 2025',
        description: 'Short-form videos are the key. Find out...',
        image: 'src/assets/Blogs/Trending/2.png',
        author: 'Aditya Rao',
        readTime: '3 min read',
        category: 'Marketing'
    },
    {
        id: 3,
        title: 'Branding that Sticks in the Digital Age',
        description: 'How to build a magnetic and memorable brand...',

        image: 'src/assets/Blogs/Trending/3.png',

        author: 'Sonali Nair',
        readTime: '5 min read',
        category: 'Business Strategy'
    },
    {
        id: 4,
        title: 'AI-Generated Visuals: Tool or Threat?',
        description: 'From voiceovers to video editing. AI is changing the game...',

        image: 'src/assets/Blogs/Trending/4.png',

        author: 'Priya Mehta',
        readTime: '5 min read',
        category: 'Multimedia'
    },
    {
        id: 5,
        title: 'Decoding What Your Metrics Are Really Saying',
        description: 'Which KPIs tell the real story behind the numbers?',
        image: 'src/assets/Blogs/Trending/5.png',

        author: 'Karan Shah',
        readTime: '6 min read',
        category: 'Data & Insights'
    }
];

const tabs = ['Trending', 'Tech & Innovation', 'Business Strategy', 'Sales', 'Multimedia', 'Marketing', 'Data & Insights', 'Entrepreneurship'];

const Articles = () => {
    const [selectedTab, setSelectedTab] = useState('Trending');

    const filteredBlogs =
        selectedTab === 'Trending'
            ? blogData
            : blogData.filter((blog) => blog.category === selectedTab);

    return (
        <>
       
        <div className="max-w-7xl mx-auto px-4 py-12 mt-20">
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-center mb-2">
                Explore All Blogs at <span className="text-sky-400">Manvian</span>
            </h2>
            <p className="text-center text-gray-600 mb-6">
                Discover insights, strategies, and expert takes across today’s fast-changing digital landscape.
            </p>

            {/* Search Bar */}
            {/* <div className="flex justify-center mb-8">
                <input
                    type="text"
                    placeholder="Search Articles"
                    className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
            </div> */}

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedTab(tab)}
                        className={`px-4 py-2 rounded-full border text-sm font-medium ${selectedTab === tab
                                ? 'bg-white text-sky-400'
                                : 'bg-gray-100 text-gray-700 border-gray-300'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((blog) => (
                    <div key={blog.id} className="bg-white rounded-lg shadow hover:shadow-md transition duration-300 p-3 relative h-[500px] " >
                        <img src={blog.image} alt={blog.title} className=" h-[304px] w-full object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-1">{blog.title}</h3>
                            <p className="text-sm text-gray-600 mb-3">{blog.description}</p>
                            <div className="text-xs text-gray-500 flex items-center absolute bottom-2 pb-2">
                                <FiFile className='mr-1' /> By {blog.author} <FiClock className='ml-4 mr-1' />  {blog.readTime}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
         </>
    );
};

export default Articles;
