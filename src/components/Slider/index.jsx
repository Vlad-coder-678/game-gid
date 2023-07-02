// vendor imports
import React, { useState } from "react";

// local imports
// assets
import arrowPrev from "../../assets/svg/arrow-right.svg";
// components
import {
  ButtonNext,
  ButtonPrev,
  Wrap,
  WrapImg,
} from "./styles";

const Slider = ({ slides = [] }) => {
  const DEFAULT_SLIDE_INDEX = 0;
  const [currentSlide, setCurrentSlide] = useState(DEFAULT_SLIDE_INDEX);
  const len = slides.length;

  const handlePrevSlide = () => setCurrentSlide(currentSlide < 1 ? len - 1 : currentSlide - 1);
  const handleNextSlide = () => setCurrentSlide(currentSlide >= len - 1 ? DEFAULT_SLIDE_INDEX : currentSlide + 1);

  return (
    <Wrap>
      {slides.map(({ image }, index) => index === currentSlide && (
        <WrapImg key={image}>
          <img src={image} alt={image} />
        </WrapImg>
      ))}
      <ButtonPrev onClick={handlePrevSlide}>
        <img src={arrowPrev} alt="previous button" />
      </ButtonPrev>
      <ButtonNext onClick={handleNextSlide}>
        <img src={arrowPrev} alt="next button" />
      </ButtonNext>
    </Wrap>
  );
};

export default Slider;
