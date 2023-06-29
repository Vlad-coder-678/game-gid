import React from "react";
import styled from "styled-components";

import NavBarHome from "./NavBarHome";
import NavBarRelease from "./NavBarRelease";
import NavBarTop from "./NavBarTop";

import close from "../assets/svg/close.svg";

const Wrap = styled.div`
  position: relative;
  width: 220px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: transparent;

  @media screen and (max-width: 768px) {
    display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
    position: absolute;
    top: 0;
    right: 0;
    background-color: #222;
    border-radius: 10px;
    z-index: 1;
  }
`;

const ButtonClose = styled.button`
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 15px;
  height: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

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
