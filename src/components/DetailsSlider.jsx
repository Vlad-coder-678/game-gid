import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import arrowPrev from '../assets/svg/arrow-right.svg';

const Wrap = styled.div`
  position: relative;
  width: 1200px;
  height: 675px;
  margin: 0 auto;

  @media screen and (max-width: 1920px) {
    width: 600px;
    height: 337px;
  }

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 168px;
  }
`;

const WrapImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Button = css`
  position: absolute;
  top: calc(50% - 20px);
  width: 30px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  filter: invert(20%);
  tranition: filter 0.3s ease; 

  &:hover {
    filter: invert(80%);
    tranition: filter 0.3s ease; 
  }
`;

const ButtonPrev = styled.button`
  ${Button}
  left: 10px;

  img {
    transform: rotate(180deg);
  }
`;

const ButtonNext = styled.button`
  ${Button}
  right: 10px;
`;

const DetailsSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const len = slides.length;

  const handlePrevSlide = () => setCurrentSlide(currentSlide < 1 ? len - 1 : currentSlide - 1);
  const handleNextSlide = () => setCurrentSlide(currentSlide >= len - 1 ? 0 : currentSlide + 1);

  return (
    <Wrap>
      {slides.map(
        (slide, index) => index === currentSlide && (
          <WrapImg key={slide.image}>
            <img src={slide.image} alt={slide.image} />
          </WrapImg>
        ),
      )}
      <ButtonPrev onClick={handlePrevSlide}>
        <img src={arrowPrev} alt="arrow" />
      </ButtonPrev>
      <ButtonNext onClick={handleNextSlide}>
        <img src={arrowPrev} alt="arrow" />
      </ButtonNext>
    </Wrap>
  );
};

export default DetailsSlider;
