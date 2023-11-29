import React from "react";
import "./button.scss";
import { Link } from "gatsby-link";

const Button = ({
  as = "button",
  to,
  children,
  className,
  ...props
}: {
  as: "button" | "a" | "Link" | "submit";
  to?: string;
  children: React.ReactNode;
  [key: string]: any;
}) => {
  const renderSwitch = () => {
    switch (as) {
      case "a":
        return (
          <a
            className={`button basic-button ${className ? className : ""}`}
            href={to as string}
            {...props}
          >
            <span>{children}</span>
            <div className="gradient"></div>
          </a>
        );
      case "Link":
        return (
          <Link
            className={`button basic-button ${className ? className : ""}`}
            to={to as string}
            {...props}
          >
            <span>{children}</span>
            <div className="gradient"></div>
          </Link>
        );
      default:
        // add conditionnally type="submit" if as === "submit"
        return (
          <button
            className={`button basic-button ${className ? className : ""}`}
            {...(as === "submit" ? { type: "submit" } : {})}
            {...props}
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
