import { useState, useEffect, useCallback, useMemo } from "react";
import useMousePosition from "./use-mouse-position";

const useColorState = () => {
  const [currentColor, setCurrentColor] = useState("#FFA500"); // Couleur initiale (orange)
  const { x } = useMousePosition();

  const setColorScale = useCallback(() => {
    const startColor = [255, 50, 0]; // Valeurs RGB pour le rouge-orangé
    const middleColor = [255, 255, 0]; // Valeurs RGB pour le jaune tournesol
    const endColor = [255, 50, 0]; // Valeurs RGB pour le rouge-orangé
    const colorCount = 50;

    const colorPalette = [];
    for (let i = 0; i < colorCount; i++) {
      const ratio = i / (colorCount - 1);
      const color = interpolateColor(startColor, middleColor, endColor, ratio);

      const hexColor = rgbToHex(color);

      colorPalette.push(hexColor);
    }

    return colorPalette;
  }, []);

  const colorScale = useMemo(setColorScale, []);

  useEffect(() => {
    const handleMouseMove = () => {
      if (typeof window !== "undefined") {
        const distanceFromLeft = x / window.innerWidth;
        const index = Math.floor(distanceFromLeft * colorScale.length);
        setCurrentColor(colorScale[index]);
      }
    };

    const throttledHandleMouseMove = throttle(handleMouseMove, 200); // Délai de 200 ms pour la mise à jour de la couleur courante

    window.addEventListener("mousemove", throttledHandleMouseMove);
    return () => {
      window.removeEventListener("mousemove", throttledHandleMouseMove);
    };
  }, [colorScale, x]);

  return { currentColor, setCurrentColor };
};

function interpolateColor(startColor, middleColor, endColor, ratio) {
  const interpolatedColor = startColor.map((startValue, index) => {
    const middleValue = middleColor[index];
    const endValue = endColor[index];
    const interpolatedValue = interpolate(
      startValue,
      middleValue,
      endValue,
      ratio
    );
    return interpolatedValue;
  });

  return interpolatedColor;
}

function interpolate(startValue, middleValue, endValue, ratio) {
  const invertedRatio = 1 - ratio;
  const interpolatedValue = Math.round(
    startValue * Math.pow(invertedRatio, 2) +
      middleValue * 2 * invertedRatio * ratio +
      endValue * Math.pow(ratio, 2)
  );
  return interpolatedValue;
}

function rgbToHex(color) {
  const [r, g, b] = color;
  const hexColor = `#${componentToHex(r)}${componentToHex(g)}${componentToHex(
    b
  )}`;
  return hexColor;
}

function componentToHex(c) {
  const hex = Math.round(c).toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

function throttle(callback, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    callback(...args);
  };
}

export default useColorState;
