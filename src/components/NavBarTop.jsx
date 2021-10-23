import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchTopResults } from '../redux/apiSlice';

import ButtonSquare from './ButtonSquare';

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    margin-left: 5px;
  }
`;

const NavBarReleases = ({ buttonSize, source, text, dates }) => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(fetchTopResults(dates));

  return (
    <Wrap onClick={handleClick}>
      <ButtonSquare size={buttonSize} source={source} />
      <span>{text}</span>
    </Wrap>
  );
};

export default NavBarReleases;
