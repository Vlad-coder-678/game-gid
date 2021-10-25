import React from 'react';
import { useDispatch } from 'react-redux';

import NavBarTitle from './NavBarTitle';
import { setDefaultData } from '../redux/apiSlice';

const NavBarHome = () => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(setDefaultData());

  return <NavBarTitle text="Home" onclick={handleClick} />;
};

export default NavBarHome;
