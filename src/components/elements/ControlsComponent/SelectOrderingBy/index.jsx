// vendor imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";

// local imports
// constants
import { ORDERING } from "constants/apiFilters";
// store
import { setTitle, orderingBy } from "store/apiSlice";
// styles
import Wrap from "./styles";

const SelectOrderingBy = () => {
  const ordering = useSelector((state) => state.api.ordering);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    const { title } = Object.values(ORDERING).filter((item) => item.value === event.target.value)[0];
    dispatch(setTitle(title));
    dispatch(orderingBy(event.target.value));
  };

  return (
    <Wrap value={ordering} onChange={(e) => handleClick(e)}>
      {Object.values(ORDERING).map((item) => (
        <option key={item.value} value={item.value}>
          {item.title}
        </option>
      ))}
    </Wrap>
  );
};

export default SelectOrderingBy;
