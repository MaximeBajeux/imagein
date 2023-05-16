import React, { useLayoutEffect } from "react";
import "./spotlight.scss";
import gsap from "../../components/gsap/gsap";
import { useRef } from "react";
import useColorState from "../../hooks/use-color-state";
import useMousePosition from "../../hooks/use-mouse-position";

const Spotlight = ({ children }: { children: React.ReactNode }) => {
  const { currentColor } = useColorState();
  const { x, y } = useMousePosition();

  const rectRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const shapes = gsap.utils.toArray(".shape");
    gsap.to(shapes, {
      x: x,
      y: y,
    });

    gsap.to(shapes, {
      "--spotlight-glow": currentColor,
      duration: 0.2,
    });
  }, [x, y]);

  return (
    <div className="spotlight" ref={rectRef}>
      <div className="shapes">
        <div className="shape"></div>
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

  useLayoutEffect(() => {
    // Animate
    gsap.to(title.current, {
      "--font-size-spotlight": `${size}vw`,
      duration: 0,
    });
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
