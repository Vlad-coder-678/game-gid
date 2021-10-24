import React from 'react';
import styled from 'styled-components';

import NavBarHome from './NavBarHome';
import NavBarRelease from './NavBarRelease';
import NavBarTop from './NavBarTop';

const Wrap = styled.div`
  width: 220px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const NavBar = () => (
  <Wrap>
    <NavBarHome />
    <NavBarRelease />
    <NavBarTop />
  </Wrap>
);

export default NavBar;
