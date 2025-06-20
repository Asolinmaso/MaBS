import React, { useState } from 'react';
import './Subscribenow.css';

const Subscribenow = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // API call or integration logic here
  };

  return (
    <div className="newsletter-modal-bg">
      <div
        className="newsletter-modal bg-white rounded-2xl p-6 relative overflow-hidden flex flex-col justify-center items-center"
        style={{
          boxShadow: 'inset 0 0 40px 7px #19BDE855',
          backdropFilter: 'blur(2px)',
          WebkitBackdropFilter: 'blur(2px)',
          width: '700px',
          maxWidth: '90vw',
          minHeight: '380px',
          margin: '40px auto'
        }}
      >
        <button
          className="newsletter-close"
          onClick={() => window.history.back()}
          aria-label="Close"
        >
          &times;
        </button>
        {submitted ? (
          <div className="text-center py-16">
            <h2 className="newsletter-title">Thank you for subscribing!</h2>
            <p className="newsletter-desc">You'll receive our next newsletter in your inbox.</p>
          </div>
        ) : (
          <>
            <h2 className="newsletter-title" style={{ fontSize: '30px' }}>Join Our Weekly Newsletter</h2>
            <p className="newsletter-desc" style={{ fontSize: '20px', margin: '8px 4px' }}>
              Get fresh insights, design trends, and smart<br />content delivered every week.
            </p>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button
                type="submit"
                className="newsletter-btn"
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
