import React, { useLayoutEffect } from "react";
import "./spotlight.scss";
import gsap from "gsap";
import { useState, useEffect, useRef } from "react";
import chroma from "chroma-js";

// .cursor
// .shapes
//   .shape.shape-1
//   .shape.shape-2
//   .shape.shape-3
// .content
//   h1 Hello there!

const Spotlight = ({ children }: { children: React.ReactNode }) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState("transparent");
  const [currentColor, setCurrentColor] = useState("transparent");

  const handleMouseMove = (evt: MouseEvent) => {
    // get relative mouse position
    const rect = rectRef.current.getBoundingClientRect();
    let x = evt.pageX;
    let y = evt.pageY;
    setMouseX(x);
    setMouseY(y);
  };

  useLayoutEffect(() => {
    const cursor = cursorRef.current;
    if (color === "transparent") {
      setColor(window.getComputedStyle(cursor).backgroundColor);
      setCurrentColor(window.getComputedStyle(cursor).backgroundColor);
    }

    const glowStart = getComputedStyle(rectRef.current)
      .getPropertyValue("--spotlight-start")
      .trim();
    const glowEnd = getComputedStyle(rectRef.current)
      .getPropertyValue("--spotlight-end")
      .trim();

    const rect = rectRef.current.getBoundingClientRect();

    gsap.set(cursor, {
      x: mouseX,
      y: mouseY,
    });

    gsap.to(cursor, {
      "--spotlight-glow": chroma
        .mix(glowStart, glowEnd, mouseX / rect.width, "lab")
        .hex(),

      duration: 0.2,
    });

    const shapes = gsap.utils.toArray(".shape");
    gsap.to(shapes, {
      x: mouseX,
      y: mouseY,
    });

    gsap.to(shapes, {
      "--spotlight-glow": chroma
        .mix(glowStart, glowEnd, mouseX / rect.width, "lab")
        .hex(),
      duration: 0.2,
    });

    document.body.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="spotlight" ref={rectRef}>
      <div ref={cursorRef} className="cursor"></div>
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

  useLayoutEffect(() => {
    // Animate
    gsap.to(title.current, {
      "--font-size-spotlight": `${length}vw`,
      duration: 0,
    });
  }, [length]);

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
