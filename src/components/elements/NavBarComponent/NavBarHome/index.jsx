// vendor imports
import React from "react";
import { useDispatch } from "react-redux";

// local imports
// store
import { setDefaultData } from "store/apiSlice";
// components
import NavBarTitle from "components/elements/NavBarComponent/NavBarTitle";

const NavBarHome = () => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(setDefaultData());

  return <NavBarTitle text="Home" onclick={handleClick} />;
};

export default NavBarHome;
