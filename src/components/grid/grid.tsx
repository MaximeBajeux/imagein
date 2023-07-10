// Grid is a component that should contains pavement children

import React from "react";
import { ElementType } from "react";
import "./grid.scss";

const Grid = ({
  children,
  className,
  rows,
  cols,
  gap = 1,
  as: Element = "div",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  rows: number;
  cols: number;
  gap?: number;
  as?: ElementType;
  [key: string]: any;
}) => {
  const style = {
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gap: `${gap}rem`,
  };

  return (
    <Element {...props} className={`grid ${className}`} style={style}>
      {children}
    </Element>
  );
};

export const Square = ({
  children,
  className,
}: {
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <div className={`square ${className ? className : ""}`}>{children}</div>
  );
};

Grid.Square = Square;

export const VerticalRect = ({
  children,
  className,
}: {
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <div className={`vertical-rect ${className ? className : ""}`}>
      {children}
    </div>
  );
};

Grid.VerticalRect = VerticalRect;

export const Rect = ({
  children,
  className,
}: {
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return <div className={`rect ${className ? className : ""}`}>{children}</div>;
};

Grid.Rect = Rect;

export const Line = ({
  children,
  className,
}: {
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return <div className={`line ${className ? className : ""}`}>{children}</div>;
};

Grid.Line = Line;

export default Grid;
