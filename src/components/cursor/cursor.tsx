import React, { useLayoutEffect } from "react";
import gsap from "../../components/gsap/gsap";
import { useRef } from "react";
import "./cursor.scss";
import useColorState from "../../hooks/use-color-state";
import useMousePosition from "../../hooks/use-mouse-position";

const Cursor = () => {
  const { currentColor } = useColorState();
  const { x, y } = useMousePosition();
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const cursor = cursorRef.current;

    gsap.to(cursor, {
      top: y,
      left: x,
      duration: 0.2,
    });

    gsap.to(cursorDotRef.current, {
      top: y,
      left: x,
      duration: 0.18,
    });

    gsap.to(cursor, {
      "--spotlight-glow": currentColor,
      duration: 0.1,
    });

    gsap.to(cursorDotRef.current, {
      "--spotlight-glow": currentColor,
      duration: 0.1,
    });
  }, [x, y]);

  return (
    <div className="cursor">
      <span className="pointer" ref={cursorRef} />
      <span className="pointer__dot" ref={cursorDotRef} />
    </div>
  );
};

export default Cursor;
