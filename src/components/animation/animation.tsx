"use client";
import React from "react";
import { useLayoutEffect, useRef, useEffect } from "react";
import gsap from "../../components/gsap/gsap";

const animationData = ({
  path,
  className,
}: {
  path: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inViewport, setInViewport] = React.useState(false);

  // We use useLayoutEffect here because we want to animate the animation as soon as it is in the viewport

  // we add event listener to the window object to check if the animation is in the viewport

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();

      // check if the animation as at least at 50px below the viewport
      if (rect.top >= -200 && rect.bottom <= window.innerHeight + 200) {
        setInViewport(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // we use useLayoutEffect to animate the animation as soon as it is in the viewport

  useLayoutEffect(() => {
    if (inViewport) {
      ref.current?.load(path);
      // we remove the event listener because we don't need it anymore
      window.removeEventListener("scroll", handleScroll);

      // we fade in the animation with gsap to avoid flickering
      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
        }
      );
    }
  }, [inViewport]);

  return (
    <dotlottie-player
      className={className}
      ref={ref}
      mode="normal"
      autoplay
      loop
    ></dotlottie-player>
  );
};

export default animationData;
