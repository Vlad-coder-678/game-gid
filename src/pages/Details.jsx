import React, { useState, useEffect } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import DetailsSlider from '../components/DetailsSlider';
import CardPlatforms from '../components/CardPlatforms';
import ButtonSquare from '../components/ButtonSquare';
import home from '../assets/svg/home.svg';
import pacman from '../assets/svg/pacman.svg';

const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-cntent: center;
  align-items: center;
`;

const DetailsTitle = styled.h1`
  margin: 10px;
`;

const Desc = styled.div`
  display: flex;
  justify-content: space-between;
  align-iems: center;
  margin: 10px;
  padding: 10px;
  width: 70%;
  border-bottom: 2px solid #333;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Buttons = styled.div`
  display: flex;
  margin: 10px auto 30px;
`;

const Details = () => {
  const [cardData, setCardData] = useState({});
  const [linkGame, setLinkGame] = useState('');
  const [isRedirectToHome, setIsRedirectToHome] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (cardData.slug) {
      const request = cardData.slug.split('-').join('+');
      const link = `https://www.google.com/search?q=${request}`;
      setLinkGame(link);
    }
  }, [cardData]);

  useEffect(() => {
    let data = window.localStorage.getItem('card');
    if (data) {
      data = JSON.parse(data);
      const pathnameFromCard = `/game/${data.slug}`;
      if (pathnameFromCard !== pathname) setIsRedirectToHome(true);
      else setCardData(data);
    } else setIsRedirectToHome(true);
  }, []);

  return (
    <Wrap>
      <DetailsTitle>{cardData.name}</DetailsTitle>
      {cardData.short_screenshots && cardData.short_screenshots.length > 0 && (
        <DetailsSlider slides={cardData.short_screenshots} />
      )}
      {cardData.platforms && (
        <Desc>
          <h3>Platforms</h3>
          <CardPlatforms platforms={cardData.platforms} />
        </Desc>
      )}
      {cardData.genres && (
        <Desc>
          <h3>Genres</h3>
          <div>
            {cardData.genres.map((genre, index) => (
              <span key={genre.name}>
                {genre.name}
                {index !== cardData.genres.length - 1 && ', '}
              </span>
            ))}
          </div>
        </Desc>
      )}
      {cardData.rating && (
        <Desc>
          <h3>Rating</h3>
          <p>{cardData.rating}</p>
        </Desc>
      )}
      {cardData.metacritic && (
        <Desc>
          <h3>Metacritic</h3>
          <p>{cardData.metacritic}</p>
        </Desc>
      )}
      {cardData.released && (
        <Desc>
          <h3>Release date</h3>
          <span>{cardData.released}</span>
        </Desc>
      )}
      <Buttons>
        <ButtonSquare size="small" source={pacman} added="GameSite" handleClick={() => window.open(linkGame)} />
        <ButtonSquare size="small" source={home} added="Link to home" handleClick={() => setIsRedirectToHome(true)} />
        {isRedirectToHome && <Redirect to="/" />}
      </Buttons>
    </Wrap>
  );
};

export default Details;
