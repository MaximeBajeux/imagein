// Grid is a component that should contains Rows and Columns like in bootstrap.

import React from "react";
import { ElementType } from "react";
import "./grid.scss";

const Grid = ({
  children,
  style,
  className,
  as: Element = "div",
  ...props
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  as?: ElementType;
  [key: string]: any;
}) => {
  return (
    <Element {...props} className={`grid ${className}`} style={style}>
      {children}
    </Element>
  );
};

export default Grid;
