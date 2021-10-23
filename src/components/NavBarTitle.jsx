import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchGamesResults } from '../redux/apiSlice';

const NavBarTitle = ({ text, isDisable }) => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(fetchGamesResults());

  return (
    <button disabled={isDisable} onClick={handleClick}>
      <h2>{text}</h2>
    </button>
  );
};

export default NavBarTitle;
