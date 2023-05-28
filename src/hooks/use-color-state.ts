import { useState, useEffect } from "react";
import useMousePosition from "./use-mouse-position";

const useColorState = () => {
  const [currentColor, setCurrentColor] = useState<string>("#FFA500"); // Couleur initiale (orange)
  const [colorScale, setColorScale] = useState<string[]>([]);
  const { x } = useMousePosition();

  useEffect(() => {
    const startColor = [255, 50, 0]; // Valeurs RGB pour le rouge-orangé
    const middleColor = [255, 255, 0]; // Valeurs RGB pour le jaune tournesol
    const endColor = [255, 50, 0]; // Valeurs RGB pour le rouge-orangé
    const colorCount = 50;

    const colorPalette: string[] = [];
    for (let i = 0; i < colorCount; i++) {
      const ratio = i / (colorCount - 1);
      const color = interpolateColor(startColor, middleColor, endColor, ratio);

      const hexColor = rgbToHex(color);

      colorPalette.push(hexColor);
    }

    setColorScale(colorPalette);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const distanceFromLeft = x / window.innerWidth;
      const index = Math.floor(distanceFromLeft * colorScale.length);
      setCurrentColor(colorScale[index]);
    }
  }, [x, colorScale]);

  return { colorScale, currentColor, setCurrentColor };
};

function interpolateColor(
  startColor: number[],
  middleColor: number[],
  endColor: number[],
  ratio: number
) {
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

function interpolate(
  startValue: number,
  middleValue: number,
  endValue: number,
  ratio: number
) {
  const invertedRatio = 1 - ratio;
  const interpolatedValue = Math.round(
    startValue * Math.pow(invertedRatio, 2) +
      middleValue * 2 * invertedRatio * ratio +
      endValue * Math.pow(ratio, 2)
  );
  return interpolatedValue;
}

function rgbToHex(color: number[]) {
  const [r, g, b] = color;
  const hexColor = `#${componentToHex(r)}${componentToHex(g)}${componentToHex(
    b
  )}`;
  return hexColor;
}

function componentToHex(c: number) {
  const hex = Math.round(c).toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

export default useColorState;
