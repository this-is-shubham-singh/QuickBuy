// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-columns">
        <div className="footer-column large-column">
          <h3 className="footer-heading">QuickBuy</h3>
          <p className="footer-text">
            QuickBuy is your trusted e-commerce platform delivering the trendiest products with unmatched service. From fashion to essentials, we bring quality to your doorstep.
          </p>
          <p className="footer-text">
            We believe in customer-first approach, easy returns, fast delivery, and secure shopping experience every time.
          </p>
        </div>

        <div className="footer-column small-column">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-links">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-column small-column">
          <h3 className="footer-heading">Get In Touch</h3>
          <p className="footer-text">+91 9876543210</p>
          <p className="footer-text">support@quickbuy.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-bottom-text">
          © {new Date().getFullYear()} QuickBuy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
