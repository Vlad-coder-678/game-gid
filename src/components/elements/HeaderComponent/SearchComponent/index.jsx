// vendor imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

// local imports
// constants
import ROUTE from "constants/routes";
// store
import { setSearchValue } from "store/apiSlice";
// styles
import { VisualHidden, Wrap } from "./styles";

const SearchComponent = () => {
  const { isLoading, searchValue } = useSelector((state) => state.api);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (pathname !== ROUTE.main) navigate(ROUTE.main);
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <Wrap>
      <form action={ROUTE.main} method="get" onSubmit={handleChange}>
        <label htmlFor="api-search">
          <VisualHidden>Search games</VisualHidden>
          <input
            id="api-search"
            type="text"
            value={searchValue}
            onChange={handleChange}
            placeholder="Search games"
            required
          />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "loading..." : "Search"}
        </button>
      </form>
    </Wrap>
  );
};

export default SearchComponent;
