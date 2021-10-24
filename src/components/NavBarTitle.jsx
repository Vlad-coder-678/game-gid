import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 10px 0;
`;

const NavBarTitle = ({ text, isDisable, onclick }) => (
  <Button disabled={isDisable} onClick={onclick}>
    <h2>{text}</h2>
  </Button>
);

export default NavBarTitle;
