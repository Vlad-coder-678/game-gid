import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import NavBarTitle from "./NavBarTitle";
import ButtonSquare from "./ButtonSquare";

import navBarData from "../data/bodyData";
import { BUTTON_SIZES } from "../constants";
import { setDefaultData, setTitle, setReleaseDate } from "../redux/apiSlice";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const WrapItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  span {
    margin-left: 5px;
  }

  &:hover button {
    ${({ size }) => size !== "big" && "filter: invert(100%) saturate(7500%) hue-rotate(322deg) brightness(118%);"}
  }
`;

const NavBarTop = () => {
  const dispatch = useDispatch();

  const handleClick = (index) => {
    dispatch(setDefaultData());
    const currData = navBarData.top_data[index];
    dispatch(setTitle(currData.title));
    dispatch(setReleaseDate(currData.dates));
  };

  return (
    <Wrap>
      <NavBarTitle text="Top" isDisable />
      {navBarData.top_data.map((item, index) => (
        <WrapItem key={item.title} onClick={() => handleClick(index)}>
          <ButtonSquare size={BUTTON_SIZES.MEDIUM} source={item.source} />
          <span>{item.title}</span>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default NavBarTop;
