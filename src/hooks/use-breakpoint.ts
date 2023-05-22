// useBreakpoints is a custom hook that returns the current breakpoint

import { useState, useEffect } from "react";

const isBrowser = typeof window !== "undefined";

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState("xs");

  useEffect(() => {
    const updateBreakpoint = () => {
      if (isBrowser) {
        const width = window.innerWidth;
        if (width < 576) setBreakpoint("xs");
        else if (width < 768) setBreakpoint("sm");
        else if (width < 992) setBreakpoint("md");
        else if (width < 1200) setBreakpoint("lg");
        else setBreakpoint("xl");
      }
    };

    if (isBrowser) window.addEventListener("resize", updateBreakpoint);

    return () =>
      isBrowser
        ? window.removeEventListener("resize", updateBreakpoint)
        : void 0;
  }, []);

  return breakpoint;
};
