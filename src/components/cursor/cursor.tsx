import React, { useRef, useEffect } from "react";
import useColorState from "../../hooks/use-color-state";
import useMousePosition from "../../hooks/use-mouse-position";

const Cursor = () => {
  const { currentColor } = useColorState();
  const { x, y } = useMousePosition();
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (cursor && cursorDot) {
      cursor.style.setProperty("--spotlight-glow", currentColor);
      cursorDot.style.setProperty("--spotlight-glow", currentColor);
      cursor.style.top = `${y}px`;
      cursor.style.left = `${x}px`;
      cursorDot.style.top = `${y}px`;
      cursorDot.style.left = `${x}px`;
    }
  }, [x, y]);

  return (
    <div className="cursor">
      <span className="pointer" ref={cursorRef} />
      <span className="pointer__dot" ref={cursorDotRef} />
    </div>
  );
};

export default Cursor;
