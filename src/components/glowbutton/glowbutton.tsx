import React, { useLayoutEffect } from "react";
import "./glowbutton.scss";
import gsap from "gsap";
import { useState, useRef } from "react";
import chroma from "chroma-js";
import { Link } from "gatsby-link";

const GlowButton = ({
  as = "button",
  to,
  children,
}: {
  as: "button" | "a" | "Link";
  to: string;
  children: React.ReactNode;
}) => {
  const gradientElem = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const aRef = useRef<HTMLAnchorElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handlePointerMove = (evt: PointerEvent) => {
    const button = buttonRef.current || aRef.current || linkRef.current;
    if (!button) return;

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

  const renderSwitch = () => {
    switch (as) {
      case "a":
        return (
          <a className="glow-button" ref={aRef}>
            <span>{children}</span>
            <div className="gradient" ref={gradientElem}></div>
          </a>
        );
      case "Link":
        return (
          <Link className="glow-button button" ref={linkRef} to={to}>
            <span>{children}</span>
            <div className="gradient" ref={gradientElem}></div>
          </Link>
        );
      default:
        return (
          <button className="glow-button button" ref={buttonRef}>
            <span>{children}</span>
            <div className="gradient" ref={gradientElem}></div>
          </button>
        );
    }
  };

  return <>{renderSwitch()}</>;
};

export default GlowButton;
