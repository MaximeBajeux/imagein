"use client";
import React, { useLayoutEffect } from "react";
import "./glowbutton.scss";
import gsap from "../../components/gsap/gsap";
import { useRef } from "react";
import { Link } from "gatsby-link";
import useColorState from "../../hooks/use-color-state";
import useMousePosition from "../../hooks/use-mouse-position";

const GlowButton = ({
  as = "button",
  to,
  children,
}: {
  as: "button" | "a" | "Link";
  to: string;
  children: React.ReactNode;
}) => {
  const { currentColor } = useColorState();
  const { x, y, clientX, clientY } = useMousePosition();
  const gradientElem = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const aRef = useRef<HTMLAnchorElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    const button = buttonRef.current || aRef.current || linkRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();

    // check if the mouse is inside the button
    if (
      clientX < rect.left ||
      clientX > rect.right ||
      clientY < rect.top ||
      clientY > rect.bottom
    ) {
      return;
    }

    // calc the x and y position inside the button
    // x and y are the pageX and pageY values from the mouse position
    // so we need to substract the button's top and left position

    const buttonX = x - rect.left;
    const buttonY = clientY - rect.top;

    gsap.to(button, {
      "--pointer-x": `${buttonX}px`,
      "--pointer-y": `${buttonY}px`,
      duration: 0.6,
    });

    gsap.to(button, {
      "--button-glow": currentColor,
      duration: 0.2,
    });
  }, [x, y]);

  const renderSwitch = () => {
    switch (as) {
      case "a":
        return (
          <a className="glow-button button" ref={aRef}>
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
