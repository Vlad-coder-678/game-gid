import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { setTitle, orderingBy } from "../redux/apiSlice";
import { ORDERING } from "../constants";

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
