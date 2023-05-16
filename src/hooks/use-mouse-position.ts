import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [client, setClient] = useState({ clientX: 0, clientY: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.pageX, y: e.pageY });
      setClient({ clientX: e.clientX, clientY: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return { ...position, ...client };
};

export default useMousePosition;
