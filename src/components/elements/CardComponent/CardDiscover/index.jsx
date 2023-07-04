// vendor imports
import React from "react";

// local imports
// assets
import arrow from "assets/svg/arrow-right.svg";
// styles
import { ShowButton, WrapImage } from "./styles";

const CardDiscover = () => (
  <div>
    <ShowButton>
      <span>Show more like this</span>
      <WrapImage>
        <img src={arrow} alt="arrow" />
      </WrapImage>
    </ShowButton>
  </div>
);

export default CardDiscover;
