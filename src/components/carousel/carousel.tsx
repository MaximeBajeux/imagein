import React from "react";
import Slider from "react-slick";
import Chevron from "../chevron/chevron";
import "./carousel.scss";

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`carousel__arrow carousel__arrow--next ${className}`}
      onClick={onClick}
    >
      <Chevron direction="right" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`carousel__arrow carousel__arrow--prev ${className}`}
      onClick={onClick}
    >
      <Chevron direction="left" />
    </div>
  );
};

const Carousel = ({
  children,
  className = "",
  settings = {},
  setRef,
}: {
  children: React.ReactNode;
  className?: string;
  settings?: any;
  setRef?: (slider: any) => void;
}) => {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const mergedSettings = { ...defaultSettings, ...settings };

  return (
    <Slider
      {...mergedSettings}
      className={`carousel ${className}`}
      ref={(slider) => setRef && setRef(slider)}
    >
      {children}
    </Slider>
  );
};

export default Carousel;
