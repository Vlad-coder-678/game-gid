// vendor imports
import React from "react";

// local imports
import Button from "./styles";

const NavBarTitle = ({ text, isDisable, onclick }) => (
  <Button disabled={isDisable} onClick={onclick}>
    <h2>{text}</h2>
  </Button>
);

export default NavBarTitle;
