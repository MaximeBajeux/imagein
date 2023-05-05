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

  const [glowStart, setGlowStart] = useState("orange");
  const [glowEnd, setGlowEnd] = useState("lightblue");
  const [colorScale, setColorScale] = useState<string[]>([]);

  const rectRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (evt: MouseEvent) => {
    // get relative mouse position
    let x = evt.clientX;
    let y = evt.clientY;
    setMouseX(x);
    setMouseY(y);
  };

  useEffect(() => {
    setGlowStart(
      getComputedStyle(rectRef.current)
        .getPropertyValue("--spotlight-start")
        .trim()
    );
    setGlowEnd(
      getComputedStyle(rectRef.current)
        .getPropertyValue("--spotlight-end")
        .trim()
    );
    setColorScale(
      chroma
        .scale([glowStart, glowStart, "#ffFFcc", glowEnd, glowEnd])
        .mode("lab")
        .colors(50)
    );
  }, []);

  useLayoutEffect(() => {
    const rect = rectRef.current.getBoundingClientRect();

    const shapes = gsap.utils.toArray(".shape");
    gsap.to(shapes, {
      x: mouseX,
      y: mouseY,
    });

    gsap.to(shapes, {
      "--spotlight-glow": colorScale[Math.round((mouseX / rect.width) * 49)],
      duration: 0.2,
    });

    document.body.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

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
