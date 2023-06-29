import React, { useState } from "react";
import styled from "styled-components";

import NavBar from "../components/NavBar";
import Main from "../components/Main";

import menu from "../assets/svg/menu.svg";

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BurgerMenu = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: none;
  width: 22px;
  height: 22px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Home = () => {
  const [isVisibleNavBar, setIsVisibleNavBar] = useState(false);

  const handleToggleMenu = () => {
    setIsVisibleNavBar(!isVisibleNavBar);
  };

  return (
    <Wrap>
      {!isVisibleNavBar && (
        <BurgerMenu onClick={handleToggleMenu}>
          <img src={menu} alt="burger menu" />
        </BurgerMenu>
      )}
      <NavBar isVisible={isVisibleNavBar} toggleVisible={handleToggleMenu} />
      <Main />
    </Wrap>
  );
};

export default Home;
