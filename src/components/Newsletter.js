// Newsletter.jsx
import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <h2 className="newsletter-title">Subscribe now &amp; get 20% off</h2>
      <p className="newsletter-description">
        Stay updated with our latest offers, new arrivals, and exclusive deals delivered straight to your inbox.
      </p>
      <div className="newsletter-form">
        <input
          type="email"
          className="newsletter-input"
          placeholder="Enter your email"
        />
        <button className="newsletter-button">Subscribe</button>
      </div>
    </section>
  );
};

export default Newsletter;
