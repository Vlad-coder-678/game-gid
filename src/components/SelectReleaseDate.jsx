import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setReleaseDate } from '../redux/apiSlice';
import { RELEASE_DATE } from '../constants';

const SelectReleaseDate = () => {
  const releaseDate = useSelector((state) => state.api.releaseDate);
  const dispatch = useDispatch();

  return (
    <select
      value={releaseDate}
      onChange={(e) => {
        dispatch(setReleaseDate(e.target.value));
      }}
    >
      {RELEASE_DATE.map((n) => (
        <option key={n} value={n}>
          {n}
        </option>
      ))}
    </select>
  );
};

export default SelectReleaseDate;
