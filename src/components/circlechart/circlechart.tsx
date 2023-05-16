import React, { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./circlechart.scss";
import gsap from "../../components/gsap/gsap";

gsap.registerPlugin(ScrollTrigger);

const Circlechart = ({
  percentage,
  text,
  delay,
}: {
  percentage: number;
  text: string;
  color: string;
  delay: number;
}) => {
  const circleRef = React.useRef<HTMLDivElement>(null);
  const percentRef = React.useRef<HTMLSpanElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [circleWidth, setCircleWidth] = React.useState(0);

  useLayoutEffect(() => {
    const circle = circleRef.current;
    setCircleWidth(containerRef.current?.getBoundingClientRect().width || 0);
    const percent = percentRef.current;
    const tm = gsap.timeline({
      defaults: { duration: 2.5, ease: "bounce.out" },
      scrollTrigger: {
        trigger: circle,
        start: "top 70%",
        end: "+=500px",
        toggleActions: "play pause",
      },
    });

    tm.from(percent, {
      textContent: 0,
      modifiers: {
        textContent: (textcontent) => textcontent.toFixed(),
      },
      delay: delay,
    });

    tm.fromTo(
      circle,
      {
        "--p": `0%`,
      },
      {
        "--p": `${percentage}%`,
      },
      delay
    );
  }, [percentage]);

  const handleMouseEnter = () => {
    animateCircle();
  };

  const animateCircle = () => {
    const circle = circleRef.current;
    const percent = percentRef.current;
    const tm = gsap.timeline({
      defaults: { duration: 2.5, ease: "bounce.out" },
    });

    tm.from(percent, {
      textContent: 0,
      modifiers: {
        textContent: (textcontent) => textcontent.toFixed(),
      },
      onComplete: () => {
        percentRef.current!.textContent = `${percentage.toFixed()}`;
      },
      delay: 0,
    });

    tm.fromTo(
      circle,
      {
        "--p": `0%`,
      },
      {
        "--p": `${percentage}%`,
      },
      0
    );
  };

  return (
    <div className="circlechart__container" ref={containerRef}>
      <div
        className="circlechart"
        ref={circleRef}
        style={{ height: `${circleWidth}px` }}
        onMouseEnter={handleMouseEnter}
      >
        <span ref={percentRef}>{percentage}</span>
      </div>
      <p className="circlechart__text">{text}</p>
    </div>
  );
};

export default Circlechart;
