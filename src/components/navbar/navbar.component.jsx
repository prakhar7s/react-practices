import React from "react";

import { Link } from "react-router-dom";

import "./navbar.styles.scss";

const Navbar = () => (
  <div className="navbar">
    <span className="app-name">App Name</span>

    <div className="navbar-links">
      <Link to="projects">Projects</Link>
      <Link to="our-team">Our Team</Link>
      <Link to="contact-us">Contact Us</Link>
    </div>
  </div>
);

export default Navbar;
