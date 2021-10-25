import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Card from './Card';
import { setCurrentPage, setIsScrollDown } from '../redux/apiSlice';

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Content = () => {
  const cards = useSelector((state) => state.api.cards);
  const currPage = useSelector((state) => state.api.currentPage);
  const containerRef = useRef(null);
  const dispatch = useDispatch();

  const handlerScroll = () => {
    if (containerRef !== null) {
      const { clientHeight } = containerRef.current;
      const { scrollTop } = containerRef.current;
      const { scrollHeight } = containerRef.current;
      const condition = scrollHeight - scrollTop - clientHeight <= 10;
      if (condition) {
        dispatch(setCurrentPage(currPage + 1));
        dispatch(setIsScrollDown(true));
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handlerScroll);
    return () => window.removeEventListener('scroll', handlerScroll);
  }, [window.scrollY]);

  return (
    <Wrap ref={containerRef}>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </Wrap>
  );
};

export default Content;
