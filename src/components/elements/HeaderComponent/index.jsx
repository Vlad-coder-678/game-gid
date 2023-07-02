import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Search from "./SearchComponent";
import {
  LogIn,
  LogWrap,
  Logo,
  SearchWrap,
  Wrap,
} from "./styles";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = () => pathname !== "/" && navigate("/");

  return (
    <Wrap>
      <LogWrap>
        <Logo onClick={handleClick}>RAWG</Logo>
      </LogWrap>
      <SearchWrap>
        <Search />
      </SearchWrap>
      <LogIn type="button">Log In</LogIn>
    </Wrap>
  );
};

export default HeaderComponent;
