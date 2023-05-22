import React, { useRef, useEffect } from "react";
import { useLayoutEffect } from "react";
import useColorState from "../../hooks/use-color-state";
import useMousePosition from "../../hooks/use-mouse-position";
import "./cursor.scss";

const Cursor = () => {
  const { currentColor } = useColorState();
  const { x, y } = useMousePosition();
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (cursor && cursorDot) {
      cursor.style.setProperty("--spotlight-glow", currentColor);
      cursorDot.style.setProperty("--spotlight-glow", currentColor);
    }
  }, [currentColor]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const cursor = cursorRef.current;
      const cursorDot = cursorDotRef.current;

      if (cursor && cursorDot) {
        const posX = event.pageX;
        const posY = event.pageY;

        cursor.style.top = `${posY}px`;
        cursor.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        cursorDot.style.left = `${posX}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor">
      <span className="pointer" ref={cursorRef} />
      <span className="pointer__dot" ref={cursorDotRef} />
    </div>
  );
};

export default Cursor;
