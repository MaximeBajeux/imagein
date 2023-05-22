import { useState, useEffect } from "react";
import useMousePosition from "./use-mouse-position";

const isBrowser = typeof window !== "undefined";

function generateColorPalette() {
  // #fea36d orange
  const startColor = [45, 100, 30]; // LCH values for #fea36d (orange)
  const endColor = [55, 100, 240];
  const colorCount = 50;

  const colorPalette: string[] = [];
  for (let i = 0; i < colorCount; i++) {
    const ratio = i / (colorCount - 1);
    const color = interpolateColor(startColor, endColor, ratio);

    const hexColor = lchToHex(color);

    colorPalette.push(hexColor);
  }

  return colorPalette;
}

function interpolateColor(
  startColor: number[],
  endColor: number[],
  ratio: number
) {
  const interpolatedColor = startColor.map((startValue, index) => {
    const endValue = endColor[index];
    const interpolatedValue = interpolateLCH(startValue, endValue, ratio);
    return interpolatedValue;
  });

  return interpolatedColor;
}

function interpolateLCH(startValue: number, endValue: number, ratio: number) {
  // Custom interpolation function for LCH values
  const curveRatio = Math.pow(ratio, 2); // Applying a quadratic curve
  const interpolatedValue = startValue + curveRatio * (endValue - startValue);
  return interpolatedValue;
}

function lchToHex(color: number[]) {
  const [L, C, H] = color;
  const rgbColor = lchToRgb(L, C, H);
  const hexColor = rgbToHex(rgbColor);
  return hexColor;
}

function lchToRgb(L: number, C: number, H: number) {
  // Conversion from LCH to RGB
  const h = H / 360;
  const s = C / 100;
  const l = L / 100;

  const m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
  const m1 = l * 2 - m2;

  const r = hueToRgb(m1, m2, h + 1 / 3);
  const g = hueToRgb(m1, m2, h);
  const b = hueToRgb(m1, m2, h - 1 / 3);

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function hueToRgb(m1: number, m2: number, h: number) {
  if (h < 0) h += 1;
  if (h > 1) h -= 1;
  if (h * 6 < 1) return m1 + (m2 - m1) * h * 6;
  if (h * 2 < 1) return m2;
  if (h * 3 < 2) return m1 + (m2 - m1) * (2 / 3 - h) * 6;
  return m1;
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

const useColorState = () => {
  const [currentColor, setCurrentColor] = useState<string>("#fea36d");
  const [colorScale, setColorScale] = useState<string[]>([]);
  const { x } = useMousePosition();

  useEffect(() => {
    setColorScale(generateColorPalette());
  }, []);

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
