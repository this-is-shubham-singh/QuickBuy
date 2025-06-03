// Navbar.jsx
import React, { useContext, useState } from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContextProvider";

const Navbar = () => {
  const { setShowSearchBar, count_cart_products } = useContext(DataContext);
  const [openDropDown, setDropDown] = useState(false);
  const navigate = useNavigate();

  function handleOrderClick() {
    navigate("/orders");
    setDropDown(!openDropDown);
  }

  function handleLogoutClick() {
    navigate("/login");
    setDropDown(!openDropDown);
  }

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
