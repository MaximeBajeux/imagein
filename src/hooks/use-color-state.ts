"use client";
import chroma from "chroma-js";
import { useState, useEffect } from "react";
import useMousePosition from "./use-mouse-position";

const isBrowser = typeof window !== "undefined";

const useColorState = () => {
  const [currentColor, setCurrentColor] = useState<string>("#fea36d");
  const [colorScale, setColorScale] = useState<string[]>([]);
  const { x } = useMousePosition();

  useEffect(() => {
    setColorScale(
      chroma
        .scale(["#fea36d", "#fea36d", "#ffFF99", "#0080ff", "#0080ff"])
        .mode("lch")
        .colors(50)
    );
  }, []);

  // update the color based on the mouse position
  useEffect(() => {
    if (isBrowser) {
      const distanceFromLeft = x / window.innerWidth;
      const index = Math.floor(distanceFromLeft * colorScale.length);
      setCurrentColor(colorScale[index]);
    }
  }, [x, colorScale]);

  return { colorScale, currentColor, setCurrentColor };
};

export default useColorState;
