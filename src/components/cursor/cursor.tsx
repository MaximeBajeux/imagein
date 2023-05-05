import React, { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { useState, useRef } from "react";
import chroma from "chroma-js";
import "./cursor.scss";

const Cursor = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [glowStart, setGlowStart] = useState("orange");
  const [glowEnd, setGlowEnd] = useState("lightblue");
  const [colorScale, setColorScale] = useState<string[]>([]);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (evt: MouseEvent) => {
    // get relative mouse position
    let x = evt.pageX;
    let y = evt.pageY;
    setMouseX(x);
    setMouseY(y);
  };

  useEffect(() => {
    setGlowStart(
      getComputedStyle(cursorRef.current)
        .getPropertyValue("--spotlight-start")
        .trim()
    );
    setGlowEnd(
      getComputedStyle(cursorRef.current)
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
    const cursor = cursorRef.current;
    const rect = rectRef.current.getBoundingClientRect();

    gsap.to(cursor, {
      top: mouseY,
      left: mouseX,
      duration: 0.2,
    });

    gsap.to(cursorDotRef.current, {
      top: mouseY,
      left: mouseX,
      duration: 0.18,
    });

    gsap.to(cursor, {
      "--spotlight-glow": colorScale[Math.round((mouseX / rect.width) * 49)],
      duration: 0.1,
    });

    gsap.to(cursorDotRef.current, {
      "--spotlight-glow": colorScale[Math.round((mouseX / rect.width) * 49)],
      duration: 0.1,
    });

    document.body.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="cursor" ref={rectRef}>
      <span className="pointer" ref={cursorRef} />
      <span className="pointer__dot" ref={cursorDotRef} />
    </div>
  );
};

export default Cursor;
