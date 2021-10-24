import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { setTitle, setPlatforms } from '../redux/apiSlice';
import { PLATFORMS } from '../constants';

const Wrap = styled.select`
  background-color: #333;
  line-height: 2rem;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  outline: none;

  option {
    background-color: #fff;
    color: #000;
    border-radius: 5px;
    padding: 5px;
  }
`;

const SelectPlatforms = () => {
  const platforms = useSelector((state) => state.api.platforms);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    const { title } = Object.values(PLATFORMS).filter((item) => item.value === event.target.value)[0];
    dispatch(setTitle(title));
    dispatch(setPlatforms(event.target.value));
  };

  return (
    <Wrap value={platforms} onChange={(e) => handleClick(e)}>
      {Object.values(PLATFORMS).map((item) => (
        <option key={item.title} value={item.value}>
          {item.title}
        </option>
      ))}
    </Wrap>
  );
};

export default SelectPlatforms;
