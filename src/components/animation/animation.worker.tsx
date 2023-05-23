import React, { useRef, useEffect } from "react";
import "./animation.scss";

const animationData = ({
  path,
  className,
}: {
  path: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const refContainer = useRef<HTMLDivElement>(null);
  const [inViewport, setInViewport] = React.useState(false);

  const handleScroll = () => {
    if (refContainer.current) {
      const rect = refContainer.current.getBoundingClientRect();
      if (rect.top >= -200 && rect.bottom <= window.innerHeight + 200) {
        setInViewport(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (inViewport) {
      ref.current?.load(path);
      window.removeEventListener("scroll", handleScroll);
    }
  }, [inViewport]);

  return (
    <div
      className={`${className} ${inViewport ? "fade-in" : ""}`}
      ref={refContainer}
    >
      <dotlottie-player
        ref={ref}
        mode="normal"
        autoplay
        loop
      ></dotlottie-player>
    </div>
  );
};

export default animationData;
