import React from "react";
import styled from "styled-components";

import ButtonSquare from "./ButtonSquare";
import { BUTTON_SIZES } from "../constants";

import plus from "../assets/svg/plus.svg";
import present from "../assets/svg/present.svg";
import ellipsis from "../assets/svg/ellipsis.svg";

const Wrap = styled.div`
  display: flex;
`;

const CardButtons = ({ added }) => (
  <Wrap>
    <ButtonSquare size={BUTTON_SIZES.SMALL} source={plus} added={added} />
    <ButtonSquare size={BUTTON_SIZES.SMALL} source={present} />
    <ButtonSquare size={BUTTON_SIZES.SMALL} source={ellipsis} />
  </Wrap>
);

export default CardButtons;
