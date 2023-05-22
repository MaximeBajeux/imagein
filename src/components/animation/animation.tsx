"use client";
import React from "react";

const animationData = ({
  path,
  className,
}: {
  path: string;
  className?: string;
}) => {
  return (
    <dotlottie-player
      className={className}
      autoplay
      loop
      mode="normal"
      src={path}
    ></dotlottie-player>
  );
};

export default animationData;
