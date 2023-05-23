import React, { useRef, useEffect } from "react";
import "./spotlight.scss";
import useColorState from "../../hooks/use-color-state";
import useMousePosition from "../../hooks/use-mouse-position";
import { isMobile } from "react-device-detect";

const Spotlight = ({ children }: { children: React.ReactNode }) => {
  const { currentColor } = useColorState();
  const { x, y } = useMousePosition();

  const rectRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) return;
    const rect = rectRef.current;
    const shape = shapeRef.current;

    if (rect && shape) {
      rect.style.setProperty("--spotlight-glow", currentColor);
      shape.style.transform = `translate(${x}px, ${y}px)`;
    }
  }, [x, y, currentColor]);

  return (
    <div className="spotlight" ref={rectRef}>
      <div className="shapes">
        <div className="shape" ref={shapeRef}></div>
      </div>
      <div className="overlay" />
      {children}
    </div>
  );
};

const StyledTitle = ({
  length,
  children,
}: {
  length: number;
  children: React.ReactNode;
}) => {
  const title = useRef<HTMLDivElement>(null);
  const size = length > 16 ? 16 : length;

  useEffect(() => {
    const titleElement = title.current;

    if (titleElement) {
      titleElement.style.setProperty("--font-size-spotlight", `${size}vw`);
    }
  }, [size]);

  return (
    <div className="styled-title" ref={title}>
      {children}
    </div>
  );
};

Spotlight.Title = StyledTitle;

const Content = ({ children }: { children: React.ReactNode }) => {
  return <div className="content">{children}</div>;
};

Spotlight.Content = Content;

export default Spotlight;
