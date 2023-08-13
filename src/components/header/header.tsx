import React from "react";
import "./header.scss";
import { Link } from "gatsby";
import Navbar from "../navbar/navbar";
import Logo from "../logo/logo";

const Header = () => {
  return (
    <header className="header shadow-2">
      <Link
        to="/"
        className="header__logo-link"
        aria-label="Image In"
        title="Image In"
      >
        <Logo />
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
