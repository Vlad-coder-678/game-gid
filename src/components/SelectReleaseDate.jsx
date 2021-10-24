import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { setTitle, setReleaseDate } from '../redux/apiSlice';
import { RELEASE_DATE } from '../constants';

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

const SelectReleaseDate = () => {
  const releaseDate = useSelector((state) => state.api.releaseDate);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    const { title } = Object.values(RELEASE_DATE).filter((item) => item.value === event.target.value)[0];
    dispatch(setTitle(title));
    dispatch(setReleaseDate(event.target.value));
  };

  return (
    <Wrap value={releaseDate} onChange={(e) => handleClick(e)}>
      {Object.values(RELEASE_DATE).map((item) => (
        <option key={item.title} value={item.value}>
          {item.title}
        </option>
      ))}
    </Wrap>
  );
};

export default SelectReleaseDate;
