// vendor imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";

// local imports
// constants
import { RELEASE_DATE } from "../../../../constants/apiFilters";
// store
import { setTitle, setReleaseDate } from "../../../../store/apiSlice";
// components
import Wrap from "./styles";

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
