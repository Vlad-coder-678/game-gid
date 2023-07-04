// vendor imports
import React from "react";

// local imports
// assets
import close from "assets/svg/close.svg";
// components
import NavBarHome from "./NavBarHome";
import NavBarRelease from "./NavBarRelease";
import NavBarTop from "./NavBarTop";
// styles
import { ButtonClose, Wrap } from "./styles";

const NavBar = ({ isVisible, toggleVisible }) => {
  const handleCloseMenu = () => {
    toggleVisible();
  };

  return (
    <Wrap isVisible={isVisible} onClick={handleCloseMenu}>
      <ButtonClose onClick={handleCloseMenu}>
        <img src={close} alt="close button" />
      </ButtonClose>
      <NavBarHome />
      <NavBarRelease />
      <NavBarTop />
    </Wrap>
  );
};

export default NavBar;
