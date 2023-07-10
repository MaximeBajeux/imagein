import React from "react";
import "./button.scss";
import { Link } from "gatsby-link";

const Button = ({
  as = "button",
  to,
  children,
  className,
}: {
  as: "button" | "a" | "Link";
  to: string;
  children: React.ReactNode;
  [key: string]: any;
}) => {
  const renderSwitch = () => {
    switch (as) {
      case "a":
        return (
          <a className={`button basic-button ${className ? className : ""}`}>
            <span>{children}</span>
            <div className="gradient"></div>
          </a>
        );
      case "Link":
        return (
          <Link
            className={`button basic-button ${className ? className : ""}`}
            to={to}
          >
            <span>{children}</span>
            <div className="gradient"></div>
          </Link>
        );
      default:
        return (
          <button
            className={`button basic-button ${className ? className : ""}`}
          >
            <span>{children}</span>
            <div className="gradient"></div>
          </button>
        );
    }
  };

  return <>{renderSwitch()}</>;
};

export default Button;
