import React, { useState, useEffect } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 90%;
`;

const Details = () => {
  const [cardData, setCardData] = useState({});
  const [isRedirectToHome, setIsRedirectToHome] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    let data = window.localStorage.getItem('cardData');
    if (data) {
      data = JSON.parse(data);
      const pathnameFromCard = `/details/${data.data.index}`;
      if (pathnameFromCard !== pathname) {
        setIsRedirectToHome(true);
      } else {
        setCardData(data.data);
      }
    } else {
      setIsRedirectToHome(true);
    }
  }, []);

  return (
    <Wrap>
      <CardDetails>
        <Image src={cardData.imagePath} alt={cardData.imageAlt} />
        <p>
          <span>Author: </span>
          {cardData.author}
        </p>
        <p>
          <span>Text: </span>
          {cardData.text}
        </p>
        <p>{cardData.date}</p>
        <h2>{cardData.title}</h2>
        <p>{cardData.content}</p>
      </CardDetails>
      {isRedirectToHome && <Redirect to="/" />}
    </Wrap>
  );
};

export default Details;
