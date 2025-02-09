import React, { useState } from "react";
import { Button } from "antd";
import "./../styles/styles.scss";
import logo from "./../images/site_logo.png";
import toggleBtn from "./../images/toggle_btn.png";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="navbar-container">
      <div className="navbar">
        {/* Site Logo */}
        <div className="logo">
          <img src={logo} alt="Signup Edu" />
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <ul>
            <li className="nav-item">Home</li>
            <li className="nav-item">About Us</li>
            <li className="nav-item">Portfolio</li>
            <li className="nav-item">Info</li>
            <li className="nav-item">Contact Us</li>
          </ul>
        </nav>

        {/* Sign In Button */}
        <div className="auth-button">
          <Button type="primary" size="large">
            Sign In
          </Button>
        </div>

        {/* Toggle Button */}
        <div className="toggle-btn-container" onClick={toggleDropdown}>
          <img className="toggle-btn" src={toggleBtn} alt="Toggle button" />
        </div>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <ul className="dropdown-menu-links">
            <li className="dropdown-menu-item">Home</li>
            <li className="dropdown-menu-item">About Us</li>
            <li className="dropdown-menu-item">Portfolio</li>
            <li className="dropdown-menu-item">Info</li>
            <li className="dropdown-menu-item">Contact Us</li>
            <li className="dropdown-menu-item">
              <Button className="dropdown-menu-btn" type="primary" size="large">
                Sign In
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;