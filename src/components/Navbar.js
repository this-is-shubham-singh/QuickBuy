// Navbar.jsx
import React from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to={"/"} className="navbar-logo">
        QuickBuy
      </Link>
      <ul className="navbar-links">
        <li className="navbar-link-item">
          <NavLink className="navbar-link" to={"/"}>
            Home
          </NavLink>
        </li>
        <li className="navbar-link-item">
          <NavLink className="navbar-link" to={"/collection"}>
            Collection
          </NavLink>
        </li>
        <li className="navbar-link-item">
          <NavLink className="navbar-link" to={"/about"}>
            About
          </NavLink>
        </li>
        <li className="navbar-link-item">
          <NavLink className="navbar-link" to={"/contact"}>
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="navbar-icons">
        <Link to={"./collection"}>
          <FaSearch className="navbar-icon" />
        </Link>
        <FaUser className="navbar-icon" />
        <div className="navbar-cart-wrapper">
          <Link to={"/cart"}>
            <FaShoppingCart className="navbar-icon" />
            <span className="navbar-cart-count">2</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
