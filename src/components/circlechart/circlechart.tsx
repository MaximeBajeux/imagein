import React, { useRef, useLayoutEffect } from "react";
import "./circlechart.scss";

const Circlechart = ({
  percentage,
  text,
}: {
  percentage: number;
  text: string;
}) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [circleWidth, setCircleWidth] = React.useState(0);

  useLayoutEffect(() => {
    const circle = circleRef.current;
    const percent = percentRef.current;
    setCircleWidth(containerRef.current?.getBoundingClientRect().width || 0);

    let animationEnded = false;
    let animationAnimated = false;

    const animateCircle = () => {
      let currentValue = 0;
      const duration = 1000; // Animation duration in milliseconds
      const increment = percentage / (duration / 15); // Value increment per interval (15ms)

      const interval = setInterval(() => {
        if (currentValue >= percentage) {
          clearInterval(interval);
          percent.textContent = percentage.toFixed();
          circle?.style.setProperty("--p", `${percentage}%`);
          animationEnded = true;
        } else {
          currentValue += increment;
          percent.textContent = currentValue.toFixed();
          circle?.style.setProperty("--p", `${currentValue}%`);
        }
      }, 15);
    };

    // check if on loading the animation is already in the viewport
    // if it is, we animate it
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const viewportHeight = window.innerHeight;
      const topOffset = rect.top;
      const bottomOffset = rect.bottom;

      if (topOffset > 0 && bottomOffset < viewportHeight) {
        animateCircle();
      }
    }

    const handleScroll = () => {
      if (animationEnded) return;
      if (animationAnimated) return;
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const viewportHeight = window.innerHeight;
        const topOffset = rect.top;
        const bottomOffset = rect.bottom;

        if (topOffset > 0 && bottomOffset < viewportHeight) {
          animationAnimated = true;
          animateCircle();
        }
      }
    };

    // reset animation when mouse enters the circle
    circle?.addEventListener("mouseenter", () => {
      circle?.style.setProperty("--p", "0%");
      percent.textContent = "0";
      animationEnded = false;
      animationAnimated = false;
      animateCircle();
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [percentage]);

  return (
    <div className="circlechart__container" ref={containerRef}>
      <div
        className="circlechart"
        ref={circleRef}
        style={{ height: `${circleWidth}px` }}
      >
        <span ref={percentRef}>{percentage.toFixed()}</span>
      </div>
      <p className="circlechart__text">{text}</p>
    </div>
  );
};

export default Circlechart;
