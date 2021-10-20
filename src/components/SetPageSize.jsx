import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changePageSize } from '../redux/apiSlice';
import { PAGE_SIZES } from '../constants';

const SelectPageSize = () => {
  const pageSize = useSelector((state) => state.api.pageSize);
  const dispatch = useDispatch();

  return (
    <select
      value={pageSize}
      onChange={(e) => {
        dispatch(changePageSize(e.target.value));
      }}
    >
      {PAGE_SIZES.map((i) => (
        <option key={i} value={i}>
          {i}
        </option>
      ))}
    </select>
  );
};

export default SelectPageSize;
