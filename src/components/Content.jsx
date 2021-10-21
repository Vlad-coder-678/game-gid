import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Card from './Card';

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Content = () => {
  const cards = useSelector((state) => state.api.cards);

  return (
    <Wrap>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </Wrap>
  );
};

export default Content;
