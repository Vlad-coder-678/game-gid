import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import CardTop from './CardTop';
import CardMetacritic from './CardMetacritic';
import CardPlatforms from './CardPlatforms';
import CardTitle from './CardTitle';
import CardButtons from './CardButtons';
import CardDescription from './CardDescription';
import CardDiscover from './CardDiscover';

const Wrap = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  border-radius: 12px;
  overflow: hidden;
  transition: ease 0.3s;
  background-color: #202020;
  box-shadow: 0 10px 20px 0 rgb(0 0 0 / 7%);

  a {
    cursor: default;
  }

  &:hover {
    transform: scale(1.05);
    transition: ease 0.3s;
  }
`;

const CardBottom = styled.div`
  position: relative;
  padding: 10px;
`;

const Card = ({ card }) => {
  const handleClick = () => {
    window.localStorage.setItem('card', JSON.stringify(card));
  };

  return (
    <Wrap>
      <Link to={`/game/${card.slug}`} onClick={handleClick}>
        <CardTop bg={card.background_image} name={card.name} />
        <CardBottom>
          {card.metacritic && <CardMetacritic metacritic={card.metacritic} />}
          <CardPlatforms platforms={card.parent_platforms} />
          <CardTitle title={card.name} />
          <CardButtons added={card.added} />
          <CardDescription released={card.released} genres={card.genres} />
          <CardDiscover />
        </CardBottom>
      </Link>
    </Wrap>
  );
};

export default Card;
