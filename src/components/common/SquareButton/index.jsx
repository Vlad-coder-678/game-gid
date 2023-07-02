// vendor imports
import React from "react";

// local imports
import Button from "./styles";

const SquareButton = ({ added, handleClick, size, source }) => (
  <Button size={size} onClick={handleClick}>
    <img src={source} alt="imagedesc" />
    {added && <span>{added}</span>}
  </Button>
);

export default SquareButton;
