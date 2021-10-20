import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../redux/apiSlice';

const SelectCurrentPage = () => {
  const currentPage = useSelector((state) => state.api.currentPage);
  const pages = useSelector((state) => state.api.pages);
  const dispatch = useDispatch();

  const check = Array.isArray(pages) && pages.length > 0;

  return (
    check && (
      <select
        value={currentPage}
        onChange={(e) => {
          dispatch(setCurrentPage(e.target.value));
        }}
      >
        {pages.map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
    )
  );
};

export default SelectCurrentPage;
