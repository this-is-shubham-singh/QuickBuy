// HeroSection.jsx
import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h3 className="hero-subtitle">----  OUR BESTSELLERS</h3>
          <h1 className="hero-title">Latest Arrivals</h1>
          <h3 className="hero-subtitle">SHOP NOW  -----</h3>
        </div>
        <div className="hero-image-wrapper">
          <img className="hero-image" src={assets.hero_img} alt="Bestseller" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
