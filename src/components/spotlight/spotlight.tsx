import React from "react";
import "./spotlight.scss";

// .cursor
// .shapes
//   .shape.shape-1
//   .shape.shape-2
//   .shape.shape-3
// .content
//   h1 Hello there!

const Spotlight = ({ children }: { children: React.ReactNode }) => {
  // Todo: Implement that cursor animation
  // document.body.addEventListener("mousemove", (evt) => {
  //   const mouseX = evt.clientX;
  //   const mouseY = evt.clientY;

  //   gsap.set(".cursor", {
  //     x: mouseX,
  //     y: mouseY,
  //   });

  //   gsap.to(".shape", {
  //     x: mouseX,
  //     y: mouseY,
  //     stagger: -0.1,
  //   });
  // });

  return (
    <div className="spotlight">
      <div className="cursor"></div>
      <div className="shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Spotlight;
