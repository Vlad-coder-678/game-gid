import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import NavBarTitle from './NavBarTitle';

import { setDefaultData } from '../redux/apiSlice';

const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
`;

const NavBarHome = () => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(setDefaultData());

  return (
    <Wrap>
      <NavBarTitle text="Home" onclick={handleClick} />
    </Wrap>
  );
};

export default NavBarHome;
