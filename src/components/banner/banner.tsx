import React from "react";
import "./banner.scss";

const Banner = ({
  children,
  className,
}: {
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <div className={`banner ${className ? className : ""}`}>{children}</div>
  );
};

export default Banner;
