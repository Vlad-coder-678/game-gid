import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPlatforms } from '../redux/apiSlice';
import { PLATFORMS } from '../constants';

const SelectPlatforms = () => {
  const platforms = useSelector((state) => state.api.platforms);
  const dispatch = useDispatch();

  return (
    <select
      value={platforms}
      onChange={(e) => {
        dispatch(setPlatforms(e.target.value));
      }}
    >
      {PLATFORMS.map((i) => (
        <option key={i} value={i}>
          {i}
        </option>
      ))}
    </select>
  );
};

export default SelectPlatforms;
