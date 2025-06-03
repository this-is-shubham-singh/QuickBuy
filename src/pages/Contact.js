import React from "react";
import Newsletter from "../components/Newsletter";
import { assets } from "../assets/frontend_assets/assets";

const Contact = () => {
  return (
    <div className="contact-page-container">
      <h1 className="contact-heading">Contact Us</h1>
      <div className="contact-main-section">
        <div className="contact-left-image">
          <img src={assets.contact_img} alt="Contact" />
        </div>

        <div className="contact-right-info">
          <h2 className="contact-subheading">Our Store</h2>
          <p>
            123, Quickbuy Street,
            <br />
            Online City, E-Com State, 123456
          </p>
          <p>Phone: +1 (234) 567-890</p>
          <p>Email: support@quickbuy.com</p>

          <h2 className="contact-subheading">Careers at Quickbuy</h2>
          <p>Learn more about our teams and job openings</p>
          <button className="contact-jobs-button">Explore Jobs</button>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Contact;
