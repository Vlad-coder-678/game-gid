import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchGamesResults } from '../redux/apiSlice';

import ButtonSquare from './ButtonSquare';

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    margin: 5px;
  }
`;

const NavBarSpecific = ({ buttonSize, source, text, params }) => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(fetchGamesResults(params));

  return (
    <Wrap onClick={handleClick}>
      <ButtonSquare size={buttonSize} source={source} />
      <span>{text}</span>
    </Wrap>
  );
};

export default NavBarSpecific;
