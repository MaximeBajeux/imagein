import React from "react";
import "./stack.scss";

// This component is similar to tho bootstrap's Stack component
const Stack = ({
  children,
  className = "",
  direction = "vertical",
  gap = 1,
  position = "left",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "vertical" | "horizontal";
  gap?: number;
  position?: "left" | "center" | "right";
  [key: string]: any;
}) => {
  const classes = `stack stack--${direction} stack--gap-${gap} stack--${position} ${className}`;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Stack;
