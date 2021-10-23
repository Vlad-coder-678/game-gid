import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { orderingBy } from '../redux/apiSlice';
import { ORDERING } from '../constants';

const SelectOrderingBy = () => {
  const ordering = useSelector((state) => state.api.ordering);
  const dispatch = useDispatch();

  return (
    <select
      value={ordering}
      onChange={(e) => {
        dispatch(orderingBy(e.target.value));
      }}
    >
      {Object.values(ORDERING).map(
        (item, index) => index < 5 && (
          <option key={item.value} value={item.value}>
            {item.title}
          </option>
        ),
      )}
    </select>
  );
};

export default SelectOrderingBy;
