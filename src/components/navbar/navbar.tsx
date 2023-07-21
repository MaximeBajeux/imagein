"use client";
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
          <Link to="/" activeClassName="active">
            Accueil
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/blog" activeClassName="active">
            Blog
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/offres" activeClassName="active">
            Nos offres
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/realisations" activeClassName="active">
            Nos réalisations
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/le-lab" activeClassName="active">
            Le lab
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/contact" activeClassName="active">
            Nous contacter
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
