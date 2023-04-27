import React, { useLayoutEffect } from "react";
import "./glowbutton.scss";
import gsap from "gsap";
import { useState, useEffect, useRef } from "react";
import chroma from "chroma-js";

// document.querySelectorAll(".glow-button").forEach((button) => {
//   const gradientElem = document.createElement("div");
//   gradientElem.classList.add("gradient");

//   button.appendChild(gradientElem);

//   button.addEventListener("pointermove", (e) => {
//     const rect = button.getBoundingClientRect();

//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     gsap.to(button, {
//       "--pointer-x": `${x}px`,
//       "--pointer-y": `${y}px`,
//       duration: 0.6,
//     });

//     gsap.to(button, {
//       "--button-glow": chroma
//         .mix(
//           getComputedStyle(button)
//             .getPropertyValue("--button-glow-start")
//             .trim(),
//           getComputedStyle(button).getPropertyValue("--button-glow-end").trim(),
//           x / rect.width
//         )
//         .hex(),
//       duration: 0.2,
//     });
//   });
// });

const GlowButton = ({ children }: { children: React.ReactNode }) => {
  const gradientElem = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handlePointerMove = (evt: PointerEvent) => {
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();

    const x = evt.clientX - rect.left;
    const y = evt.clientY - rect.top;

    setMouseX(x);
    setMouseY(y);

    const glowStart = getComputedStyle(button)
      .getPropertyValue("--button-glow-start")
      .trim();
    const glowEnd = getComputedStyle(button)
      .getPropertyValue("--button-glow-end")
      .trim();

    gsap.to(button, {
      "--pointer-x": `${mouseX}px`,
      "--pointer-y": `${mouseY}px`,
      duration: 0.6,
    });

    gsap.to(button, {
      "--button-glow": chroma
        .mix(glowStart, glowEnd, mouseX / rect.width, "lab")
        .hex(),
      duration: 0.2,
    });
  };

  useLayoutEffect(() => {
    document.addEventListener("pointermove", handlePointerMove);
    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
    };
  }, [mouseX, mouseY]);

  return (
    <button className="glow-button" ref={buttonRef}>
      <span>{children}</span>
      <div className="gradient" ref={gradientElem}></div>
    </button>
  );
};

export default GlowButton;
