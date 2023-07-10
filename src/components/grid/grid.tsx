// Grid is a component that should contains pavement children

import React from "react";
import { ElementType } from "react";
import "./grid.scss";

const Grid = ({
  children,
  className,
  xsRows,
  smRows,
  mdRows,
  lgRows,
  xlRows,
  xsCols,
  smCols,
  mdCols,
  lgCols,
  xlCols,
  gap = 1,
  as: Element = "div",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  xsRows: number;
  smRows?: number;
  mdRows?: number;
  lgRows?: number;
  xsCols: number;
  smCols?: number;
  mdCols?: number;
  lgCols?: number;
  gap?: number;
  as?: ElementType;
  [key: string]: any;
}) => {
  const gridClass = `grid grid--xs-row-${xsRows} grid--xs-col-${xsCols} ${
    smRows ? `grid--sm-row-${smRows}` : ""
  } ${smCols ? `grid--sm-col-${smCols}` : ""} ${
    mdRows ? `grid--md-row-${mdRows}` : ""
  } ${mdCols ? `grid--md-col-${mdCols}` : ""} ${
    lgRows ? `grid--lg-row-${lgRows}` : ""
  } ${lgCols ? `grid--lg-col-${lgCols}` : ""} ${
    xlRows ? `grid--xl-row-${xlRows}` : ""
  } ${xlCols ? `grid--xl-col-${xlCols}` : ""} grid--gap-${gap}`;

  return (
    <Element
      {...props}
      className={`${gridClass} ${className ? className : ""}`}
    >
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
