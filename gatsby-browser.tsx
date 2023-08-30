import "./src/styles/normalize.scss";
import "./src/styles/themes.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Prism from "prismjs";
import "./src/styles/prism-shades-of-purple.css";

Prism.manual = true;

function highlightCodeBlocks() {
  const codeBlocks = document.querySelectorAll<HTMLElement>("pre code");

  codeBlocks.forEach((codeBlock: HTMLElement) => {
    const lineData = codeBlock.getAttribute("data-line");

    if (lineData) {
      codeBlock.parentElement.setAttribute("data-line", lineData);
    }

    if (!codeBlock.classList.contains("language-text")) {
      codeBlock.classList.add("line-numbers");
    }

    codeBlock.parentElement.classList.add("match-braces");

    Prism.highlightElement(codeBlock);
  });
}

export const onRouteUpdate = (): void => {
  highlightCodeBlocks();
};
