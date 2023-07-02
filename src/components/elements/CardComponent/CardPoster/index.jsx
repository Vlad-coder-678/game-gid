// vendor imports
import React from "react";

// local imports
import Wrap from "./styles";

const CardPoster = ({ bg, name }) => (
  <Wrap>
    <img src={bg} alt={name} />
  </Wrap>
);

export default CardPoster;
