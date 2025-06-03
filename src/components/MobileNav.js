import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const MobileNav = () => {
  return (
    <nav className="navbar mobile-nav">
      <Link to={"/"} className="navbar-logo">
        QuickBuy
      </Link>

      <div className="navbar-icons">
        <FaBars style={{fontSize : "1.5rem"}} className="navbar-icon" />
      </div>
    </nav>
  );
};

export default MobileNav;
