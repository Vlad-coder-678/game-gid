import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortBy } from '../redux/apiSlice';
import { ORDERING } from '../constants';

const SelectOrderingBy = () => {
  const ordering = useSelector((state) => state.api.ordering);
  const dispatch = useDispatch();

  return (
    <select
      value={ordering}
      onChange={(e) => {
        dispatch(sortBy(e.target.value));
      }}
    >
      {ORDERING.map((i) => (
        <option key={i} value={i}>
          {i}
        </option>
      ))}
    </select>
  );
};

export default SelectOrderingBy;
