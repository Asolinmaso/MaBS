import React, { useState } from 'react';

const Subscribenow = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can add your API call or integration logic
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="relative bg-gradient-to-b from-[#e0f7fa] to-white rounded-3xl shadow-2xl p-8 md:p-16 w-[95vw] max-w-3xl mx-auto animate-fade-in">
        <button
          className="absolute top-6 right-8 text-3xl text-gray-400 hover:text-gray-700 focus:outline-none"
          onClick={() => window.history.back()}
          aria-label="Close"
        >
          &times;
        </button>
        {submitted ? (
          <div className="text-center py-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Thank you for subscribing!</h2>
            <p className="text-lg md:text-2xl text-gray-700">You'll receive our next newsletter in your inbox.</p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Join Our Weekly Newsletter</h2>
            <p className="text-lg md:text-2xl text-gray-700 mb-10">Get fresh insights, design trends, and smart content delivered every week.</p>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-xl mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#19BDE8] text-lg bg-white shadow-sm"
              />
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition"
              >
                Subscribe
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Subscribenow;
