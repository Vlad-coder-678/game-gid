import React from 'react';

const NavBarTitle = ({ text, isDisable, onclick }) => (
  <button disabled={isDisable} onClick={onclick}>
    <h2>{text}</h2>
  </button>
);

export default NavBarTitle;
