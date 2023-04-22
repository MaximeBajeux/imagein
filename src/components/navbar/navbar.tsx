import React from "react";
import { Link } from "gatsby";
import Hamburder from "../hamburger/hamburger";
import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className={`navbar ${isActive ? "active" : ""}`}>
      <Hamburder callback={setIsActive} isActive={isActive} />
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar__item">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="navbar__item">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar__item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
