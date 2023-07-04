// vendor imports
import React, { useState } from "react";

// local imports
// assets
import menu from "assets/svg/menu.svg";
// components
import NavBarComponent from "components/elements/NavBarComponent";
import Main from "components/features/MainComponent";
// styles
import { BurgerMenu, Wrap } from "components/pages/home/styles";

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
      <NavBarComponent isVisible={isVisibleNavBar} toggleVisible={handleToggleMenu} />
      <Main />
    </Wrap>
  );
};

export default Home;
