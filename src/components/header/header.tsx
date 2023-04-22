import React from "react";
import "./header.scss";
import { Link } from "gatsby";
import Navbar from "../navbar/navbar";

const Header = () => {
  return (
    <header className="header shadow-2">
      <Link to="/" className="header__logo-link">
        <h1 className="header__logo">Image IN</h1>
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
