import React from "react";
import "./button.scss";
import { Link } from "gatsby-link";

const Button = ({
  as = "button",
  to,
  children,
}: {
  as: "button" | "a" | "Link";
  to: string;
  children: React.ReactNode;
}) => {
  const renderSwitch = () => {
    switch (as) {
      case "a":
        return (
          <a className="basic-button button">
            <span>{children}</span>
            <div className="gradient"></div>
          </a>
        );
      case "Link":
        return (
          <Link className="basic-button button" to={to}>
            <span>{children}</span>
            <div className="gradient"></div>
          </Link>
        );
      default:
        return (
          <button className="basic-button button">
            <span>{children}</span>
            <div className="gradient"></div>
          </button>
        );
    }
  };

  return <>{renderSwitch()}</>;
};

export default Button;
