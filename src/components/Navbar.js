// Navbar.jsx
import React, { useContext, useState } from "react";
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaSun,
  FaMoon,
  FaBars,
} from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContextProvider";

const Navbar = () => {
  const { setShowSearchBar, count_cart_products, theme, toggleTheme } =
    useContext(DataContext);
  const [openDropDown, setDropDown] = useState(false);
  const navigate = useNavigate();
  const [showbottom, setShowBottom] = useState(false);

  function handleOrderClick() {
    navigate("/orders");
    setDropDown(!openDropDown);
  }

  function handleLogoutClick() {
    navigate("/login");
    setDropDown(!openDropDown);
  }

  return (
    <nav className="navbar web-navbar">
      <div className="mobile-nav-top">
        <Link to={"/"} className="navbar-logo">
          QuickBuy
        </Link>

        <div
          className="navbar-icons burger-icon"
          onClick={() => setShowBottom(!showbottom)}
        >
          <FaBars style={{ fontSize: "1.5rem" }} className="navbar-icon" />
        </div>
      </div>

      <ul
        className={`navbar-links navbar-mobile-bottom ${
          showbottom ? "show-bottom-navbar" : ""
        }`}
      >
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
      <div
        className={`navbar-links navbar-mobile-bottom ${
          showbottom ? "show-bottom-navbar fl-direction-row" : ""
        }`}
      >
        <div>
          {theme === "dark" ? (
            <FaSun className="navbar-icon" onClick={() => toggleTheme()} />
          ) : (
            <FaMoon className="theme-icon" onClick={() => toggleTheme()} />
          )}
        </div>
        <Link to={"./collection"}>
          <FaSearch
            className="navbar-icon"
            onClick={() => setShowSearchBar(true)}
          />
        </Link>
        <div className="navbar-icon-wrapper">
          <FaUser
            className="navbar-icon"
            onClick={() => setDropDown(!openDropDown)}
          />

          <div className="navbar-user-dropdown">
            <p className="dropdown-item" onClick={handleOrderClick}>
              Orders
            </p>
            <p className="dropdown-item" onClick={handleLogoutClick}>
              Logout
            </p>
          </div>
        </div>
        <div className="navbar-cart-wrapper">
          <Link to={"/cart"}>
            <FaShoppingCart className="navbar-icon" />
            <span className="navbar-cart-count">{count_cart_products()}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
