// vendor imports
import React from "react";
import { useDispatch } from "react-redux";

// local imports
// constants
import BUTTON_SIZES from "constants/buttonSizes";
// data
import navBarData from "data/navbar";
// store
import { setDefaultData, setTitle, setReleaseDate } from "store/apiSlice";
// components
import NavBarTitle from "components/elements/NavBarComponent/NavBarTitle";
import SquareButton from "components/common/SquareButton";
// styles
import { Wrap, WrapItem } from "./styles";

const NavBarRelease = () => {
  const dispatch = useDispatch();

  const handleClick = (index) => {
    dispatch(setDefaultData());
    const currData = navBarData.releases_data[index];
    dispatch(setTitle(currData.title));
    dispatch(setReleaseDate(currData.dates));
  };

  return (
    <Wrap>
      <NavBarTitle text="New Releases" isDisable />
      {navBarData.releases_data.map((item, index) => (
        <WrapItem key={item.title} onClick={() => handleClick(index)}>
          <SquareButton size={BUTTON_SIZES.medium} source={item.source} />
          <span>{item.title}</span>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default NavBarRelease;
