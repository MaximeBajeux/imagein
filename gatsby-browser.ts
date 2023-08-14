import "./src/styles/normalize.scss";
import "./src/styles/themes.scss";
import "@dotlottie/player-component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  const pagePath = location
    ? location.pathname + location.search + location.hash
    : undefined;
  setTimeout(() => {
    if (typeof gtag === "function") {
      gtag("event", "page_view", { page_path: pagePath });
    }
  }, 100);
};
