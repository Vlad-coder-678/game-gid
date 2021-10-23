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
      {Object.values(PLATFORMS).map((item) => (
        <option key={item.title} value={item.value}>
          {item.title}
        </option>
      ))}
    </select>
  );
};

export default SelectPlatforms;
