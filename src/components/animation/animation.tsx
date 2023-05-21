import React from "react";
import { useLayoutEffect, useRef } from "react";
import lottie from "lottie-web";

const animationData = ({
  data,
  className,
}: {
  date: any;
  className: string;
}) => {
  const container = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!container.current) {
      return;
    }
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: data,
    });
  }, []);

  return <div className={className} ref={container}></div>;
};

export default animationData;
