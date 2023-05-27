import React, { useRef, useLayoutEffect } from "react";
import "./glowbutton.scss";
import useColorState from "../../hooks/use-color-state";
import useMousePosition from "../../hooks/use-mouse-position";
import { Link } from "gatsby-link";
import { isMobile } from "react-device-detect";

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
    if (isMobile) return;
    const button = buttonRef.current || aRef.current || linkRef.current;
    const gradient = gradientElem.current;

    if (!button || !gradient) return;

    const rect = button.getBoundingClientRect();

    // Check if the mouse is inside the button
    if (
      clientX < rect.left ||
      clientX > rect.right ||
      clientY < rect.top ||
      clientY > rect.bottom
    ) {
      return;
    }

    // Calculate the x and y position inside the button
    // x and y are the pageX and pageY values from the mouse position
    // so we need to subtract the button's top and left position
    const buttonX = x - rect.left;
    const buttonY = clientY - rect.top;

    button.style.setProperty("--pointer-x", `${buttonX}px`);
    button.style.setProperty("--pointer-y", `${buttonY}px`);
    button.style.setProperty("--button-glow", currentColor);
  }, [x, y, currentColor]);

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
