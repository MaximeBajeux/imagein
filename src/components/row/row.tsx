import React from "react";
import "./row.scss";

const Row = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <div className={`row ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Row;
