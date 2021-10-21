import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { setSearchValue } from '../redux/apiSlice';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VisualHidden = styled.span`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Search = () => {
  const isLoading = useSelector((state) => state.api.isLoading);
  const searchValue = useSelector((state) => state.api.searchValue);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  const handleSubmit = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <Wrap>
      <form action="/" method="get" onSubmit={handleSubmit}>
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
          {isLoading ? 'loading...' : 'Search'}
        </button>
      </form>
    </Wrap>
  );
};

export default Search;
