import React from "react";
import "./col.scss";

const Col = ({
  children,
  xs,
  sm,
  md,
  lg,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  className?: string;
  [key: string]: any;
}) => {
  const colClass = `col ${xs ? `col--xs-${xs}` : ""} ${
    sm ? `col--sm-${sm}` : ""
  } ${md ? `col--md-${md}` : ""} ${lg ? `col--lg-${lg}` : ""}`;

  return (
    <div className={`${colClass} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Col;
