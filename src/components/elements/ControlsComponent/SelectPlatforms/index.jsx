// vendor imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";

// local imports
// constants
import { PLATFORM } from "../../../../constants/apiFilters";
// store
import { setTitle, setPlatforms } from "../../../../store/apiSlice";
// components
import { Option, Wrap } from "./styles";

const SelectPlatforms = () => {
  const platforms = useSelector((state) => state.api.platforms);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    const { title } = Object.entries(PLATFORM).filter(([key]) => key === event.target.value)[0];
    dispatch(setTitle(title));
    dispatch(setPlatforms(event.target.value));
  };

  return (
    <Wrap value={platforms} onChange={(e) => handleClick(e)}>
      {Object.entries(PLATFORM).map(([key, value]) => (
        <Option key={key} value={value}>
          {key}
        </Option>
      ))}
    </Wrap>
  );
};

export default SelectPlatforms;
