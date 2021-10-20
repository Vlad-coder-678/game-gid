import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

// eslint-disable-next-line object-curly-newline
import { setPages, setTotalCards, setCards, setIsLoading, setSearchQuery } from '../redux/apiSlice';

import axios from '../utils/axios';
import Content from './Content';
import SelectSortBy from './SelectSortBy';
import SelectPageSize from './SetPageSize';
import SelectCurrentPage from './SelectCurrentPage';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrap = styled.div`
  display: flex;
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

const SectionApi = () => {
  const apiKey = useSelector((state) => state.api.apiKey);
  // const sortBy = useSelector((state) => state.api.sortType);
  // const pageSize = useSelector((state) => state.api.pageSize);
  // const currentPage = useSelector((state) => state.api.currentPage);
  const cards = useSelector((state) => state.api.cards);
  const isLoading = useSelector((state) => state.api.isLoading);
  const searchQuery = useSelector((state) => state.api.searchQuery);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true));
    try {
      const { data } = await axios.get(`/games?key=${apiKey}`);
      // eslint-disable-next-line no-console
      console.log(data);
      dispatch(setTotalCards(data.totalResults));
      dispatch(setPages());
      dispatch(setCards(data.articles));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return (
    <Container>
      <form action="/" method="get" onSubmit={handleSubmit}>
        <label htmlFor="api-search">
          <VisualHidden>Search posts</VisualHidden>
          <input
            id="api-search"
            type="text"
            value={searchQuery}
            onChange={handleChange}
            placeholder="Search posts"
            required
          />
        </label>
        <SelectSortBy />
        <SelectPageSize />
        <SelectCurrentPage />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'loading...' : 'Search'}
        </button>
      </form>
      {cards.length > 0 && (
        <Wrap>
          <Content arts={cards} />
        </Wrap>
      )}
    </Container>
  );
};

export default SectionApi;
