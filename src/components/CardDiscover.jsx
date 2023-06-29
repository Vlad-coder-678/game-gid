import React from "react";
import styled from "styled-components";

import arrow from "../assets/svg/arrow-right.svg";

const ShowButton = styled.button`
  width: 100%;
  height: 30px;
  padding: 0 10px;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;

  &:hover span {
    color: #fad860;
  }
`;

const WrapImg = styled.span`
  width: 10px;
  height: 15px;
  overflow: hidden;
  font-size: 14px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardDiscover = () => (
  <div>
    <ShowButton>
      <span>Show more like this</span>
      <WrapImg>
        <img src={arrow} alt="arrow" />
      </WrapImg>
    </ShowButton>
  </div>
);

export default CardDiscover;
