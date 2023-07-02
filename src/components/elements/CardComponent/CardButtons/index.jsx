// vendor imports
import React from "react";

// local imports
// assets
import ellipsis from "../../../../assets/svg/ellipsis.svg";
import plus from "../../../../assets/svg/plus.svg";
import present from "../../../../assets/svg/present.svg";
// constants
import BUTTON_SIZES from "../../../../constants/buttonSizes";
// components
import ButtonSquare from "../../../common/SquareButton";

import Wrap from "./styles";

const CardButtons = ({ added }) => (
  <Wrap>
    <ButtonSquare size={BUTTON_SIZES.small} source={plus} added={added} />
    <ButtonSquare size={BUTTON_SIZES.small} source={present} />
    <ButtonSquare size={BUTTON_SIZES.small} source={ellipsis} />
  </Wrap>
);

export default CardButtons;
