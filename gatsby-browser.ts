import "./src/styles/normalize.scss";
import "./src/styles/themes.scss";
import "@dotlottie/player-component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function initGTM() {
  if (window.isGTMLoaded) {
    return false;
  }

  window.isGTMLoaded = true;

  const script = document.createElement("script");

  script.type = "text/javascript";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.GATSBY_GA_TRACKING_ID}`;

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", `${process.env.GATSBY_GA_TRACKING_ID}`);
  };

  document.head.appendChild(script);
}

function loadGTM(event) {
  initGTM();
  event.currentTarget.removeEventListener(event.type, loadGTM);
}

exports.onClientEntry = () => {
  document.onreadystatechange = () => {
    if (document.readyState !== "loading") {
      setTimeout(initGTM, 3500);
    }
  };

  document.addEventListener("scroll", loadGTM);
  document.addEventListener("mousemove", loadGTM);
  document.addEventListener("touchstart", loadGTM);
};
