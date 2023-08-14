import React from "react";
import "./src/styles/normalize.scss";
import "./src/styles/themes.scss";
import "@dotlottie/player-component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import RootElement from "./src/components/rootelement/rootelement";

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>;
};

export const onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }
  const pagePath = location
    ? location.pathname + location.search + location.hash
    : undefined;
  setTimeout(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", { page_path: pagePath });
    }
  }, 100);
  return true;
};
