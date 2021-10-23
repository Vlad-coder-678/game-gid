import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import ButtonSquare from './ButtonSquare';

import { ORDERING, PLATFORMS } from '../constants';
import { setTitle, setPlatforms, orderingBy, setSearchValue, setReleaseDate } from '../redux/apiSlice';

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
  const handleClick = () => {
    dispatch(setTitle(text));
    dispatch(setPlatforms(PLATFORMS.ALL.value));
    dispatch(orderingBy(ORDERING.RATING.value));
    dispatch(setSearchValue(''));
    dispatch(setTitle(text));
    dispatch(setReleaseDate(dates));
  };

  return (
    <Wrap onClick={handleClick}>
      <ButtonSquare size={buttonSize} source={source} />
      <span>{text}</span>
    </Wrap>
  );
};

export default NavBarReleases;
